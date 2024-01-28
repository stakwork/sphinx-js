import { resolve } from 'path';
import { defineConfig } from 'vite';
console.log(__dirname);
// https://vitejs.dev/config/
export default defineConfig({
	build: {
		emptyOutDir: false,
		outDir: 'build',

		watch: {},
		sourcemap: 'inline',

		rollupOptions: {
			input: {
				content: resolve(__dirname, 'content-script', 'index.ts'),
				background: resolve(__dirname, 'background-script', 'index.ts'),
				inpage: resolve(__dirname, 'inpage-script', 'index.ts')
			},
			output: {
				entryFileNames: (chunk) => `${chunk.name}.js`
			}
		}
	}
});
