fs = require('fs')
coffee = require('coffeescript');

require.extensions['.cjsx'] = function(module, filename) {
    var src = fs.readFileSync(filename, {encoding: 'utf8'});
    try {
          src = coffee.compile(src, {transpile: {presets: ['react']}});
    } catch (e) {
          throw new Error('Error transforming ' + filename + ' from CJSX: ' + e.toString());
    }
    module._compile(src, filename);
};
