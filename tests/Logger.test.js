global.alert = jest.fn();
import { Logger } from '/Users/tharbisasi/psychojsPracticalProjectManagementAssessment/src/core/Logger.js';

describe('Logger', () => {
  test('should log messages through internal console logger', () => {
    const logger = new Logger();
    logger.setLevel(Symbol.for('debug'));

    expect(() => {
      logger.consoleLogger.debug('Debug message');
      logger.consoleLogger.info('Info message');
      logger.consoleLogger.warn('Warn message');
      logger.consoleLogger.error('Error message');
    }).not.toThrow();
  });

  test('should throw error on invalid log level', () => {
    const logger = new Logger();
    expect(() => {
      logger.setLevel('banana'); // Invalid type
    }).toThrow();
  });
});
