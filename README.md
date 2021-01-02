# Default next.config.js
```javascript
module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en-US", "zh", "de"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en-US",
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    domains: [
      {
        domain: "example.com",
        defaultLocale: "en-US",
      },
      {
        domain: "example.nl",
        defaultLocale: "de",
      },
      {
        domain: "example.zh",
        defaultLocale: "zh",
      },
    ],
  },
};
```

# Work with static generation
> yarn add next-translate

