import {ObjectID } from "mongodb";

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
    const { client } = ctx;
    const { teams, date, result, status } = args;

    const db = client.db("soccerResults");
    const matchesCollection = db.collection("Matches");

    const inserted = await matchesCollection.insertOne({
      teams,
      date,
      result,
      status
    });
    return inserted.ops[0];
  },

  updateResult: async (parent, args, ctx, info) => {
    const { _id, result } = args;
    const {client} = ctx;
    const db = client.db("soccerResults");
    const collection = db.collection("Matches");

    const updated = await collection.findOneAndUpdate(
      {_id: ObjectID(_id)},
      { $set: { result: result }},
      {returnOriginal: false} 
    );
    return updated.value;
  },

  updateStatus: async (parent, args, ctx, info) => {
    const { _id, status } = args;
    const {client} = ctx;
    const db = client.db("soccerResults");
    const collection = db.collection("Matches");

    const updated = await collection.findOneAndUpdate(
      {_id: ObjectID(_id)},
      { $set: { status}},
      {returnOriginal: false} 
    );
    return updated.value;
  },

};
export { Mutation as default };
