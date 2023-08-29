import { IS_SERVER } from '@/config/constants';

import { seedDb } from './seed-db';

const initializeMocks = async () => {
  if (IS_SERVER) {
    const { server } = await import('./server');
    server.listen({ onUnhandledRequest: 'bypass' });
  } else {
    const { worker } = await import('./browser');
    await worker.start({ onUnhandledRequest: 'bypass' });
  }
  seedDb();
};

void (async () => await initializeMocks())();
