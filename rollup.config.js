import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import visualizer from 'rollup-plugin-visualizer';

import babel from 'rollup-plugin-babel';

export default {
    input: 'main.js',
    output: {
        file: 'build/libname.js',
        format: 'umd',
        name: 'libname',
        sourcemap: true
    },
    plugins: [
        resolve({
            // pass custom options to the resolve plugin
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        json({
            indent: '  ',
            include: 'node_modules/**',
            preferConst: true
        }),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        visualizer({
            filename: './statistics.html',
            sourcemap: true
        })
    ]
}
