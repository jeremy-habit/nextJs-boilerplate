const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

const nextJsConfigOptions = {
    useFileSystemPublicRoutes: false,
};

module.exports = withPlugins([
    [withSass],
], nextJsConfigOptions);
