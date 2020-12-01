epicntr logger
======

Логгер на основе winston

### Для публикации пакета:

```bash
npm pub
```


Пример:

```bash
import { createLogger } from './logger'

const logger = createLogger({
  level: 'debug',
  meta: {
    'service-name': 'test-service'
  }
})

logger.info('test', { anyKey: 'anyValue' })
```

Чтобы вывод был в читаемом виде - установить environment как `development`. По умолчанию стоит `production`

```bash
import { createLogger } from './logger'

const logger = createLogger({
  level: 'debug',
  meta: {
    'service-name': 'test-service'
  },
  environment: 'development'
})
```
