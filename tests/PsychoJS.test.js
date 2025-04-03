// tests/PsychoJS.test.js

describe('PsychoJS Static Properties', () => {
    test('Status enum should be defined', async () => {
      const module = await import('/Users/tharbisasi/psychojsPracticalProjectManagementAssessment/src/core/PsychoJS.js');
      const Status = module.Status;
  
      expect(Status).toBeDefined();
      expect(Status.NOT_STARTED).toBe(Symbol.for("NOT_STARTED"));
    });
  });
 // tests/PsychoJS.test.js

