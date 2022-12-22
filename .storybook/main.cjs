// const {
//   resolve
// } = require("path");
const {
  mergeConfig,
} = require("vite");
const viteTsconfig = require('vite-tsconfig-paths');
const tsconfigPaths = viteTsconfig.default;
module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-cssresources", "@storybook/addon-essentials", "@storybook/preset-typescript", "@storybook/addon-a11y"],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "features": {
    "storyStoreV7": true
  },
  "core": {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });
  },
  docs: {
    docsPage: "automatic"
  }
};