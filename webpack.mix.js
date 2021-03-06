const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .disableNotifications()
    .react()
    .options({
        processCssUrls: false,
    })
    .webpackConfig({
        watchOptions: {
            ignored: /node_modules/,
        },
    });
