# hList - Todo App API

Backend for Todo App

## Starting the server

```bash
$ service mongod start
$ nodemon index.js
```

## Endpoints

### GET - /todos

**Return**
```javascript
{
    data: [
        {
            _id: ObjectId,
            text: String,
            status: String
        },
        {...}
    ],
    error: null,
    status: 200
}
```

**Error**
```javascript
{
    data: null,
    error: {
        message: String
    },
    status: 404
}
```

### GET - /todos/:id

**Return**
```javascript
{
    data: {
        _id: ObjectId,
        text: String,
        status: String
    },
    error: null,
    status: 200
}
```

**Error**
```javascript
{
    data: null,
    error: {
        message: String
    },
    status: 404
}
```

### POST - /todos

**Return**
Returns the created object.
```javascript
{
    data: {
            _id: ObjectId,
            text: String,
            status: String
    },
    error: null,
    status: 200
}
```

### PUT - /todos/:id

**Return**
Returns the updated object
```javascript
{
    data: {
        _id: ObjectId,
        text: String,
        status: String
    },
    error: null,
    status: 204
}
```

**Error**
```javascript
{
    data: null,
    error: {
        message: String
    },
    status: 400 || 404
}
```

### DELETE - /todos/:id

**Return**
```javascript
{
    data: null,
    error: null,
    status: 204
}
```

**Error**
```javascript
{
    data: null,
    error: {
        message: String
    },
    status: 400 || 404
}
```