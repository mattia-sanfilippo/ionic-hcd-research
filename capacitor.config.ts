import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-hcd-research',
  webDir: 'www',
  server: {
    url: 'http://localhost:8100',
    cleartext: true
  }
};

export default config;
