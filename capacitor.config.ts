import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bharatiyagyan.bhandar',
  appName: 'Bhāratīya Jñāna Bhaṇḍāra',
  webDir: 'out',
  server: {
    // The app is a window onto the live site, not a frozen copy of it: a website update reaches
    // installed apps without reinstalling. (The pages bundled from `out` are only a build requirement.)
    url: 'https://vivek-sovani.github.io/bharatiy-gyan-bhandar/',
    androidScheme: 'https',
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystoreAlias: undefined,
    },
  },
};

export default config;
