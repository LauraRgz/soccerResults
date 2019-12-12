import {ObjectID } from "mongodb";

const Match = {
    teams: async (parent, args, ctx, info) => {
        const { client } = ctx;
        const db = client.db("soccerResults");
        let collection = db.collection("Teams");
        const teamsArray = parent.teams.map(obj => ObjectID(obj));

        const result = await collection
          .find({ _id: { $in: teamsArray } })
          .toArray();
        return result;
      }
}
export {Match as default}