import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "杂念屋",
      description: "人生真是寂寞如雪啊~",
    },
  },

  theme,

  shouldPrefetch: false,
});
