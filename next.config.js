const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: isDev
              ? "script-src 'self' 'unsafe-eval'; object-src 'none';"
              : "script-src 'self'; object-src 'none';"
          },
        ],
      },
    ];
  },
};
