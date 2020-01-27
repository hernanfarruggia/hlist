# hList - Todo App API

## Endpoints

### GET - /todos

**Return**
```javascript
{
    data: [
        {
            id: 1,
            text: 'Dummy text',
            status: 'active'
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
    error: 'Error message',
    status: 404
}
```

### GET - /todos/:id

**Return**
```javascript
{
    data: {
        id: 1,
        text: 'Dummy text',
        status: 'active'
    },
    error: null,
    status: 200
}
```

**Error**
```javascript
{
    data: null,
    error: 'Error message',
    status: 404
}
```

### POST - /todos

**Return**
```javascript
{
    data: {
        text: 'Dummy text',
        status: 'active'
    },
    error: null,
    status: 200
}
```

### PUT - /todos/:id

**Return**
```javascript
{
    data: {
        id: 1,
        text: 'Dummy text',
        status: 'active'
    },
    error: null,
    status: 204
}
```

**Error**
```javascript
{
    data: null,
    error: 'Error message',
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
    error: 'Error message',
    status: 400 || 404
}
```