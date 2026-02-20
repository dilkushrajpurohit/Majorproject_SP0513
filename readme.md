# NeuronNinjas

A lightweight Express-like HTTP framework built on Node.js core `http` module.

NeuronNinjas is designed to help understand how web frameworks work internally while remaining usable for small projects.

---

## Features

- `app.get()` route handling  
- `app.post()` route handling  
- `app.use()` middleware support  
- `app.listen()` server start  
- Dynamic route parameters (`/user/:id`)  
- Static file serving  
- Simple rate limiting  
- `res.send()` and `res.json()` helpers  
- `res.render()` for HTML views  

---

## Installation

If published to npm:

```bash
npm install neuroninjas
```

If using locally:

```bash
npm install
```

---

## Architecture

The internal flow of NeuronNinjas follows this structure:

1. HTTP server is created using Node’s `http` module  
2. Incoming HTTP request is received  
3. Middleware executes between request and response  
4. Route is matched  
5. Route handler executes  
6. Response is sent  

Flow:

Request → Middleware → Route → Handler → Response

---

## Usage Example

```js
const NeuronNinjas = require('neuroninjas');
const app = new NeuronNinjas();

// Middleware
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// GET route
app.get('/', (req, res) => {
    res.send("Hello World");
});

// Dynamic route
app.get('/user/:id', (req, res) => {
    res.json({ userId: req.params.id });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

---

## Static Files

Serve static files from a folder:

```js
app.static('public');
```

This serves files from:

```
project_root/public
```

---

## Rate Limiting

```js
app.rateLimit({
    window: 60000,   // 1 minute
    max: 5           // 5 requests per window per IP
});
```

If the limit is exceeded, the server returns:

```
429 Too Many Requests
```

---

## API Reference

### `app.get(path, handler)`
Registers a GET route.

### `app.post(path, handler)`
Registers a POST route.

### `app.use(middleware)`
Adds middleware function.  
Middleware receives `(req, res, next)`.

### `app.static(folderName)`
Enables static file serving.

### `app.rateLimit(options)`
Adds IP-based rate limiting.

### `app.listen(port, callback)`
Starts the HTTP server.

---

## Limitations

- No body parsing  
- No advanced routing  
- No async error handling  
- Not production-ready  

This framework is intended for learning purposes.

---
