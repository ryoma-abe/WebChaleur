// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // 画像最適化の設定
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        // 画像の品質設定（0-100）
        quality: 80,
        // 画像のフォーマット
        format: ["webp", "avif", "png", "jpeg"],
      },
    },
  },
});
