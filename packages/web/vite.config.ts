import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import ssr from 'vike/plugin'
import svgr from "vite-plugin-svgr";

const config = {
  plugins: [preact(), ssr(), svgr()],
  optimizeDeps: {
    include: ['preact/devtools', 'preact/debug', 'preact/jsx-dev-runtime', 'preact', 'preact/hooks']
  }
}

export default config
