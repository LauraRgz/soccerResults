# :soccer: soccerResults

## :memo: Table of contents

- [Introduction](#Introduction)
- [Setup](#Setup)
- [Features](#features)
- [Built with](#Built-with)
- [License](#License)

## :trophy: Introduction

soccerResults is a Node-JS app developed to manage soccer teams and matches as well as subscribe to them. When you subscribe to a match, you get notified if the result or status changes. If you subscribe to a team, you receive a notification when a match that involves the team is created or updated.

## :gear: Setup

1. Install NPM packages

```
npm install
```

2. Start the app

```
npm start
```

You can access the app at  ```127.0.0.1:4000```

## :sparkles: Features

### Mutations

- [addTeam](./queriesTemplates.md#Add-Team)
- [addMatch](./queriesTemplates.md#Add-Match)
- [updateResult](./queriesTemplates.md#Update-Result)
- [updateStatus](./queriesTemplates.md#Update-Status)

### Subscriptions

- [matchUpdate](./queriesTemplates.md#Match-Subscription)
- [teamUpdate](./queriesTemplates.md#Match-Subscription)

The usage tempates can be found [here](./queriesTemplates.md) or clicking on each function.

## :wrench: Built with

- [graphql-yoga](https://www.npmjs.com/package/graphql-yoga)
- [Mongo DB](https://www.mongodb.com/cloud/atlas)

## :page_facing_up: License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/LauraRgz/Recetario/blob/master/LICENSE.md) file for details

**[Back to top](#Table-of-contents)**