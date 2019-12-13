# :memo: Templates

## Table of contents

- [Mutation Add team](#Add-Team)
- [Mutation Add match](#Add-Match)
- [Mutation Update result](#Update-Result)
- [Mutation Update status](#Update-Status)
- [Subscription match](#Match-Subscription)
- [Subscription team](#Team-Subscription)

## Mutations

### Add Team

#### Example

```js
mutation{
  addTeam(name: "Equipo 1"){
    name
    _id
  }
}
```

**[Back to top](#Table-of-contents)**

### Add Match

You can add a match by entering the teams, result, date and status.

Status can get the following values:

- 0: Not started
- 1: Playing
- 2: Finished

#### Example

```js
mutation{
  addMatch(teams: ["5df3c48af6557118b872b7ca", "5df3c48ff6557118b872b7cb"], result: "0-0", date: "hoy", status: 0){
    date,
    result,
    status,
    teams{
	  _id    
      name
    }
  }
}
```

**[Back to top](#Table-of-contents)**

### Update Result

#### Example

```js
mutation{
  updateResult(_id:"5df3ca501620841b8715180c", result: "1-1"){
    result
  }
}
```

**[Back to top](#Table-of-contents)**

### Update Status

#### Example

```js
mutation{
  updateStatus(_id:"5df3ca501620841b8715180c", status: 1){
    result
    status
  }
}
```

**[Back to top](#Table-of-contents)**

### Match Subscription

#### Example

```js
subscription{
  matchUpdate(id: "5df3ca501620841b8715180c"){
    result,
    status,
    teams{
      name,
      _id
    }
  }
}
```

**[Back to top](#Table-of-contents)**

### Team Subscription

#### Example

```js
subscription{
  teamUpdate(id: "5df3c48af6557118b872b7ca"){
    result,
    status,
    teams{
      name,
      _id
    }
  }
}
```

**[Back to top](#Table-of-contents)**