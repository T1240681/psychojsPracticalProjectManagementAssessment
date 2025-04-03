import { Window } from '.src/core/Window.js';
import { PsychoJS } from 'src/core/PsychoJS.js';
import { Color } from 'src/util/Color.js';

describe('Window', () => {
  let windowObj;
  let psychoJSMock;

  beforeEach(() => {
    // Mock basic PsychoJS instance
    psychoJSMock = {
      experimentLogger: { exp: jest.fn(), log: jest.fn() },
      logger: { debug: jest.fn(), warn: jest.fn() },
      scheduler: { _lastDelta: 16 }, // simulating 60fps
      eventManager: { addMouseListeners: jest.fn() }
    };

    windowObj = new Window({
      psychoJS: psychoJSMock,
      fullscr: false,
      color: new Color('white'),
      units: 'pix'
    });
  });

  test('should initialize with given options', () => {
    expect(windowObj.units).toBe('pix');
    expect(windowObj.color.hex).toBe('#ffffff');
    expect(windowObj.fullscr).toBe(false);
  });

  test('should return estimated frame rate', () => {
    expect(windowObj.getActualFrameRate()).toBeCloseTo(62.5);
  });

  test('should log messages on flip', () => {
    windowObj.logOnFlip({ msg: 'test log' });
    windowObj._writeLogOnFlip();
    expect(psychoJSMock.experimentLogger.log).toHaveBeenCalledWith(
      'test log',
      expect.anything(),
      expect.any(Number),
      undefined
    );
  });
});
