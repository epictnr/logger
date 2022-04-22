Epicntr Logger 📃
======

Logger based on [Winston](https://github.com/winstonjs/winston)

*(the part of [micro-starter](https://github.com/epictnr/micro-starter-kit) framework)*

### How to use

```js
import { createLogger } from './logger'

const logger = createLogger({
  level: 'debug',
  meta: {
    'service-name': 'test-service'
  }
})

logger.info('test', { anyKey: 'anyValue' })
```

You can set environment key as 'development'. In order to use for dev environment (more comfortable read).

```js
import { createLogger } from './logger'

const logger = createLogger({
  level: 'debug',
  meta: {
    'service-name': 'test-service'
  },
  environment: 'development'
})
```

### How to publish:

```console
$ npm pub
```
