var fs = require('fs'),
    rollup = require('rollup'),
    dependencies = require('./package.json').dependencies;

rollup.rollup({
    input: './main.js',
    external: Object.keys(dependencies),
}).then(function (bundle) {
    return bundle.generate({
        format: 'umd',
        name: 'libName',
    });
}).then(function (result) {
    return new Promise(function (resolve, reject) {
        fs.writeFile('build/libname.js', result.code, 'utf8',
            function (error) {
                if (error) return reject(error);
                else resolve();
            });
    });
}).catch(abort);

//
function abort (error) {
    console.error(error.stack);
}
