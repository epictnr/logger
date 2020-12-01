import winston from 'winston'
import {JsonOptions} from 'logform'

export type Environment = 'development' | 'production'

export interface Config {
  environment?: Environment
  level: string
  meta?: object
}

const levelMap = {
  'debug': 7,
  'info': 6,
  'warn': 4,
  'error': 3,
}

const createFormat = (environment: Environment) => {
  const replacer = (key: string, value: any) => {
    if (key === 'level') {
      return levelMap[value] || levelMap['debug']
    }

    return value
  }

  const jsonFormatOptions: JsonOptions = {
    replacer,
  }

  if (environment === 'development') {
    jsonFormatOptions.space = 2
  }

  return winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(jsonFormatOptions)
  )
}

export const createLogger = (config: Config) => {
  const logger = winston.createLogger({
    level: config.level,
    format: createFormat(config.environment ? config.environment : 'production'),
    defaultMeta: config.meta || {},
    transports: [
      new winston.transports.Console(),
    ],
  })

  return logger
}
