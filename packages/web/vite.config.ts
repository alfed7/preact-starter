import "dotenv/config";
import preact from '@preact/preset-vite'
import ssr from 'vike/plugin'
import svgr from "vite-plugin-svgr";
import path from "path";

const config = {
  plugins: [preact(), ssr(), svgr()],
  optimizeDeps: {
    include: ['preact/devtools', 'preact/debug', 'preact/jsx-dev-runtime', 'preact', 'preact/hooks']
  },
  resolve: {
		alias: {
			"#": path.resolve(__dirname, "src"),
		},
	},
}

export default config
