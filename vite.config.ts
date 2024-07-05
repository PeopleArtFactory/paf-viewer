import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	publicDir: false,
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'paf-viewer',
			formats: ['es'],
			fileName: 'paf-viewer'
		}
	},
	plugins: [
		dts({
			insertTypesEntry: true
		})
	]
});
