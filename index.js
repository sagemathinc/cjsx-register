// Adds the transpile option to coffeescript. Important for JSX support.
require('module').prototype.options = {transpile: {presets: ['env']}};
require('coffeescript/register');
require('babel-register')
