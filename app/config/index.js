const config = {
  env: process.env.NODE_ENV,
  serviceName: 'SFI actions you can get paid for',
  serviceTitle: 'Check what SFI actions you can get paid to do on your land',
  serviceUri: process.env.SERVICE_URI,
  baseUrl: 'https://check-what-SFI-actions-you-can-get-paid-to-do.defra.gov.uk',
  version: '1.0.24',
  indexOption: process.env.INDEX_OPTION || 'noindex, nofollow', // 'all' will allow search engines to crawl. 'noindex, nofollow' will prevent crawl
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
  },
  urlPrefix: ''
}

module.exports = config
