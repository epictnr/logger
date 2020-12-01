import { createLogger } from './logger'

test('test', async () => {
  const logger = createLogger({
    level: 'debug',
    meta: {
      'test': 'test meta',
    },
  })

  logger.info('test', { anyKey: 'anyValue' })
})
