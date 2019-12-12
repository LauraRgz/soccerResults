import { ObjectID } from "mongodb";

const Mutation = {
  addTeam: async (parent, args, ctx, info) => {
    const { client } = ctx;
    const { name } = args;

    const db = client.db("soccerResults");
    const teamsCollection = db.collection("Teams");

    const inserted = await teamsCollection.insertOne({
      name
    });
    return inserted.ops[0];
  },

  addMatch: async (parent, args, ctx, info) => {
    const { client, pubsub } = ctx;
    const { teams, date, result, status } = args;

    const db = client.db("soccerResults");
    const matchesCollection = db.collection("Matches");

    if (status >= 0 && status <= 2) {
      const inserted = await matchesCollection.insertOne({
        teams,
        date,
        result,
        status
      });

      teams.forEach(element => {
        pubsub.publish(element, {
          teamUpdate: inserted.ops[0]
        });
      });
      return inserted.ops[0];
    } else {
      return new Error(
        "Insert correct status (0: not started, 1: playing, 2: finished)"
      );
    }
  },

  updateResult: async (parent, args, ctx, info) => {
    const { _id, result } = args;
    const { client, pubsub } = ctx;
    const db = client.db("soccerResults");
    const collection = db.collection("Matches");

    const updated = await collection.findOneAndUpdate(
      { _id: ObjectID(_id) },
      { $set: { result: result } },
      { returnOriginal: false }
    );

    pubsub.publish(updated.value.teams[0], {
      teamUpdate: updated.value
    });

    pubsub.publish(updated.value.teams[1], {
      teamUpdate: updated.value
    });

    pubsub.publish(_id, {
      matchUpdate: updated.value
    });

    return updated.value;
  },

  updateStatus: async (parent, args, ctx, info) => {
    const { _id, status } = args;
    const { client, pubsub } = ctx;
    const db = client.db("soccerResults");
    const collection = db.collection("Matches");
    if (status >= 0 && status <= 2) {
      const updated = await collection.findOneAndUpdate(
        { _id: ObjectID(_id) },
        { $set: { status } },
        { returnOriginal: false }
      );

      pubsub.publish(updated.value.teams[0], {
        teamUpdate: updated.value
      });

      pubsub.publish(updated.value.teams[1], {
        teamUpdate: updated.value
      });

      pubsub.publish(_id, {
        matchUpdate: updated.value
      });

      return updated.value;
    } else {
      return new Error(
        "Insert correct status (0: not started, 1: playing, 2: finished)"
      );
    }
  }
};
export { Mutation as default };