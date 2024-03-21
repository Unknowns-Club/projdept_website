import nextra from 'nextra'
import {withKumaUI} from "@kuma-ui/next-plugin";

const withNextra = nextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.tsx",
});

export default withKumaUI(
    withNextra({
        reactStrictMode: true,
        output: "export",
        images: {
            unoptimized: true
        }
    })
);