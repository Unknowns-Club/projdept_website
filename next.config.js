const {withKumaUI} = require("@kuma-ui/next-plugin");

const withNextra = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.tsx",
});

module.exports = withKumaUI(
    withNextra({
        reactStrictMode: true,
        i18n: {
            locales: ['zh-CN'],
            defaultLocale: 'zh-CN'
        }
    })
);