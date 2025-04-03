import { Mouse } from '/Users/tharbisasi/psychojsPracticalProjectManagementAssessment/src/core/Mouse.js';

describe('Mouse Class', () => {
  let mouse;

  beforeEach(() => {
    // Mock dependencies (PsychoJS and eventManager)
    const mockPsychoJS = {
      eventManager: {
        getMouseInfo: () => ({
          pos: [100, 150],
          wheelRel: [0, 0],
          buttons: {
            pressed: [0, 0, 0],
            times: [0, 0, 0],
            clocks: [{ reset: jest.fn() }, { reset: jest.fn() }, { reset: jest.fn() }]
          },
          moveClock: { reset: jest.fn(), getTime: () => 1.5 }
        })
      }
    };

    const mockWindow = {
      size: [800, 600],
      units: 'pix',
      _psychoJS: mockPsychoJS
    };

    mouse = new Mouse({ name: 'testMouse', win: mockWindow });
  });

  test('should return correct mouse position', () => {
    const pos = mouse.getPos();
    expect(Array.isArray(pos)).toBe(true);
    expect(pos.length).toBe(2);
  });

  test('should detect mouse movement', () => {
    const moved = mouse.mouseMoved(undefined, false);
    expect(typeof moved).toBe('boolean');
  });
});
