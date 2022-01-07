import { ExpoConfig, ConfigContext } from '@expo/config';
import * as packageJSON from './package.json';

export default ({ config }: ConfigContext): ExpoConfig => ({
  name: packageJSON.name.includes('/') ? packageJSON.name.split('/')[1] : packageJSON.name,
  slug: packageJSON.name.includes('/') ? packageJSON.name.split('/')[1] : packageJSON.name,
  description: packageJSON.description,
  version: packageJSON.version,
  owner: packageJSON.author,
  orientation: 'portrait',
  privacy: 'public',
  githubUrl: packageJSON.repository.url,
  icon: './assets/icon.png',
  splash: {
    image: './assets/icon.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    '**/*'
  ],
  ios: {
    'supportsTablet': true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/icon.png',
      backgroundColor: '#FFFFFF'
    }
  },
  web: {
    favicon: './assets/icon.png'
  }
});
