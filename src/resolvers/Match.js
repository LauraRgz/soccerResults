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
    },
    status: (parent, args, ctx, info) => {
        const status = parent.status;
        if(status === 0){
            return "Not started";
        }
        if(status === 1){
            return "Playing";
        }
        if(status === 2){
            return "Finished";
        }
    }
}
export {Match as default}