const env = process.env.NODE_ENV || 'development';

export const configs = {
  development: {
    apiUrl: 'https://newsapi.org/v1',
    newsApiKey: '2c19465b0ba44c10a0e873a0234bddc8',
  },
  production: {
    apiUrl: 'https://newsapi.org/v1',
    newsApiKey: '2c19465b0ba44c10a0e873a0234bddc8',
  },
}[env];
