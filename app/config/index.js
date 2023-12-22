const config = {
  serviceUri: process.env.SERVICE_URI || 'http://localhost:3000',
  baseUrl: 'https://gov.uk',
  version: '1.0.10',
  googleTagManagerKey: process.env.GOOGLE_TAG_MANAGER_KEY,
  cookie: {
    cookieNameCookiePolicy: 'sfi_cookie_policy',
    cookieNameAuth: 'sfi_auth',
    cookieNameSession: 'sfi_session',
    isSameSite: 'Lax',
    isSecure: process.env.NODE_ENV === 'production',
    password: process.env.COOKIE_PASSWORD
  },
  cookiePolicy: {
    clearInvalid: false,
    encoding: 'base64json',
    isSameSite: 'Lax',
    isSecure: process.env.NODE_ENV === 'production',
    password: process.env.COOKIE_PASSWORD
  }
}

module.exports = config
