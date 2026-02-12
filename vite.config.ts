import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//引入svg需要用到的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ command }) => {
  return {
    // ✅ 明确指定部署在根路径（虽然默认就是，但写出来更规范）
    base: command === 'build' ? '/web-a/' : '/',
    //scss全局变量的配置
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/variables.scss" as *;`
        }
      }
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        resolvers: [ElementPlusResolver()],
        dts: 'src/types/auto-imports.d.ts',
        eslintrc: {
          enabled: true, // 生成 eslint 配置
          filepath: './.eslintrc-auto-import.json'
        }
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: 'src/types/components.d.ts'
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      }),
      // createSvgIconsPlugin({
      //   iconDirs: [path.resolve(__dirname, 'src/assets/icons')],
      //   symbolId: 'icon-[dir]-[name]',
      // })，
      viteMockServe({
        // default
        mockPath: 'mock',
        enable: command === 'serve' // 仅在本地开发时启用
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@views': path.resolve(__dirname, './src/views'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@api': path.resolve(__dirname, './src/api'),
        '@store': path.resolve(__dirname, './src/store')
      }
    },
    server: {
      port: 5173, // 自定义端口
      open: true, // 自动打开浏览器
      cors: true, // 允许跨域
      proxy: {
        // 配置代理
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
