import { ServerManager } from '../src/core/ServerManager.js';
import { PsychoJS } from '../src/core/PsychoJS.js';

describe('ServerManager (safe tests without mocks)', () => {
  let serverManager;

  beforeEach(() => {
    const psychoJS = { logger: { debug: () => {} }, config: { experiment: {} } };
    serverManager = new ServerManager({ psychoJS });
  });

  test('should initialize with correct default status', () => {
    expect(serverManager.status).toBe(ServerManager.Status.READY);
  });

  test('should set and reset status correctly', () => {
    serverManager.setStatus(ServerManager.Status.BUSY);
    expect(serverManager.status).toBe(ServerManager.Status.BUSY);

    serverManager.resetStatus();
    expect(serverManager.status).toBe(ServerManager.Status.READY);
  });

  test('should add and release a resource', () => {
    serverManager._resources.set('myfile.csv', {
      status: ServerManager.ResourceStatus.REGISTERED,
      path: '/some/path',
      data: 'example data',
    });

    const data = serverManager.getResource('myfile.csv');
    expect(data).toBe('example data');

    const released = serverManager.releaseResource('myfile.csv');
    expect(released).toBe(true);
  });

  test('should throw if getting an unknown resource', () => {
    expect(() => {
      serverManager.getResource('missing.csv');
    }).toThrow(/unknown resource/);
  });
});
describe.skip('ServerManager', () => {
  test('should initialize with correct default status', () => {
    expect(serverManager.status).toEqual(ServerManager.Status.READY);
  });
});
