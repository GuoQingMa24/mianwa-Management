const { build } = require('esbuild');
const vuePlugin = require('esbuild-vue');

build({
    entryPoints: ['src/main.js'],
    outfile: 'dist/bundle.js',
    bundle: true,
    minify: true,
    sourcemap: true,
    plugins: [vuePlugin()],
    loader: {
        '.vue': 'jsx', // 让 esbuild 知道如何处理 .vue 文件
        '.js': 'jsx'
    }
}).catch(() => process.exit(1));
