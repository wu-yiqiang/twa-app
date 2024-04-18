import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { build, defineConfig, loadEnv } from 'vite'
import svgLoader from 'vite-svg-loader'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import viteImagemin from 'vite-plugin-imagemin'
// https://vitejs.dev/config/
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}
const alias: Record<string, string> = {
  '@': pathResolve('src/'),
  // '@build': pathResolve('build')
}
export default defineConfig({
  base: './',
  resolve: { alias },
  plugins: [
    react(),
    nodePolyfills(),
    visualizer(),
    svgLoader(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [pathResolve('src/assets/svg/')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
    // eslintPlugin()
    // viteImagemin({
    //   gifsicle: {
    //     optimizationLevel: 7,
    //     interlaced: false
    //   },
    //   optipng: {
    //     optimizationLevel: 7
    //   },
    //   mozjpeg: {
    //     quality: 20
    //   },
    //   pngquant: {
    //     quality: [0.8, 0.9],
    //     speed: 4
    //   },
    //   svgo: {
    //     plugins: [
    //       {
    //         name: 'removeViewBox'
    //       },
    //       {
    //         name: 'removeEmptyAttrs',
    //         active: false
    //       }
    //     ]
    //   }
    // })
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/index.scss";`
      },
      postcss: {
        plugins: {
          'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*']
          },
          'postcss-import': require('postcss-import'),
          autoprefixer: require('autoprefixer')
        }
      }
    }
  },
  server: {
    hmr: true,
    // 端口号
    port: 3393,
    host: '0.0.0.0'
    // https: {
    //   key: fs.readFileSync('AC/localhost+1-key.pem'),
    //   cert: fs.readFileSync('AC/localhost+1.pem')
    // }
    // 本地跨域代理
    // proxy: {
    //   '/api/v1': {
    //     target: VITE_APP_BASE_API,
    //     changeOrigin: true
    //   }
    // }
  },
  build: {
    // 最终构建的浏览器兼容目标
    target: 'esnext',
    // target: ['ios11', 'Chrome 64'],
    // 是否自动注入module preload的polyfill
    polyfillModulePreload: true,
    // 指定混淆器
    minify: 'esbuild',
    // 启用css代码拆分
    cssCodeSplit: true,
    // 允许用户为css的压缩设置一个不同的浏览器target, 与build esbuild一致
    cssTarget: '',
    // 清空输入文件夹
    emptyOutDir: true,
    // 取消计算文件大小，加快打包速度
    reportCompressedSize: false,
    // 启用压缩大小报告,
    // brotliSize: false,
    // chunk大小警告的限制
    chunkSizeWarningLimit: 500,
    // 取消sourceMap， 加快打包速度,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // 对qrcode进行单独打包
          // if (id.includes('node_modules/html5-qrcode')) return 'html5-qrcode'
          // // 对vue-router进行单独打包
          // if (id.includes('node_modules/vue-router')) return 'vue-router'
          // // 对vue进行单独打包
          // if (id.includes('node_modules/vue')) return 'vue'
          // // 对vant进行单独打包
          // if (id.includes('node_modules/vant')) return 'vant'
          // 对views目录中的文件进行单独打包
          if (id.includes('src/pages')) return 'views'
          // 让每个插件都打包成独立的文件
          if (id.includes('node_modules')) return id.toString().split('node_modules')[1].split('/')[0].toString()
        },
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js'
        // assetFileNames: (assetInfo) => {
        //   const fileName = assetInfo.name
        //   if (fileName?.endsWith('.svg')) return 'img/svg/[name]-[hash][extname]'
        //   return 'css/[name]-[hash][extname]'
        // }
      }
    }
  }
})
