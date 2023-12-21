const config = {
  serviceUri: process.env.SERVICE_URI || 'http://localhost:3000',
  baseUrl: 'https://gov.uk',
  version: '1.0.10',
  googleTagManagerKey: process.env.GOOGLE_TAG_MANAGER_KEY
}

module.exports = config
