import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports:['vue', 'vue-router'],
      dts: 'src/auto-import.d.ts',
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({prefix: 'Icon'},),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({enabledCollections: ['ep'],}),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), "src/assets/icons/svg")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",

      /**
       * 自定义插入位置
       * @default: body-last
       */
      // inject?: 'body-last' | 'body-first'

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      // customDomId: '__svg__icons__dom__',
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "components": resolve(__dirname, "src/components"),
      "api": resolve(__dirname, "src/api"),
      "styles": resolve(__dirname, "src/styles"),
      "views": resolve(__dirname, "src/views"),
      "layouts": resolve(__dirname, "src/layouts"),
      "utils": resolve(__dirname, "src/utils"),
      "plugins": resolve(__dirname, "src/plugins"),
      "dirs": resolve(__dirname, "src/directives"),
    },
  },
  server: {
    https: false,
    port: 3000,
    // 监听所有地址
    host: '0.0.0.0',
    open: true,
    cors: true,
    proxy: {},
  },
  build: {
    // 设置最终构建的浏览器兼容目标
    target: 'es2015',
    // 构建后是否生成 source map 文件
    sourcemap: false,
    //  chunk 大小警告的限制（以 kbs 为单位）
    chunkSizeWarningLimit: 2000,
    // 启用/禁用 gzip 压缩大小报告
    reportCompressedSize: true,
  },
})

