
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.4a9e5bcb9a494930936f82300172cb58',
  appName: 'vizag-repair-wise-cafe',
  webDir: 'dist',
  server: {
    url: 'https://4a9e5bcb-9a49-4930-936f-82300172cb58.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystoreAlias: undefined,
      keystorePassword: undefined,
      keystoreAliasPassword: undefined,
      releaseType: undefined,
    }
  }
};

export default config;
