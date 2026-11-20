import { defineConfig, devices } from '@playwright/test';
import { testConfig } from './config/test.config';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1,
  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: ['--start-maximized']
        }
      },
    },
  ],
  use: {
    baseURL: testConfig.app.baseURL,
    trace: 'on',
    headless: false,
    video: 'retry-with-video',
    viewport: null
  },
  reporter: 'html',
});