import metaUrlPlugin from '@chialab/esbuild-plugin-meta-url';
import esbuild from 'esbuild';

await esbuild.build({
    entryPoints: ["src/lambda.ts"],
    outfile: "dist/index.js",

    plugins: [metaUrlPlugin()],
    bundle: true,
    assetNames: 'assets/[name]-[hash]',

    sourcemap: true,
    platform: "node",
    target: "node20.9",
    external: [],
});
