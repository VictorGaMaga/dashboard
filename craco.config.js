const path = require('path');

module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },

    webpack: {
        resolve: {
            fallback: {
                "path": false,
                "os": require.resolve('os-browserify/browser'),
                "crypto": false,
                "stream": require.resolve('stream-browserify'),
                "timers": require.resolve('timers-browserify'),
                "net": require.resolve('net-browserify'),
                "tls": require.resolve('tls-browserify'),
                "fs": false,
            },
        },
    },
};