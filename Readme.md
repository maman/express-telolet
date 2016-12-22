# Telolet!

![TELOLET](http://www.liayunik.com/wp-content/uploads/2016/05/Uniknya-Fenomena-Bus-Telolet.jpg)

This express middleware adds `X-Om-Telolet-Om` on _every_ response header.

to use, just do this:

```
const express = require('express');
const teloletMiddleware = require('express-telolet');
...
const app = express();
app.use(teloletMiddleware());
```

## Usage

```
teloletMiddleware(customString)
```

### `customString`

can be anything. the default is `Telolet!`
