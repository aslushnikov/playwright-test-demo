import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'chromium',
      use: {browserName: 'chromium' },
    },
    {
      name: 'iphone',
      use: {...devices['iPhone 12 Pro'],},
    }
  ],
};
export default config;