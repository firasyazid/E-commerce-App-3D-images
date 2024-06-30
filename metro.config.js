const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push('glb', 'gltf', 'png', 'jpg');
defaultConfig.resolver.sourceExts.push('cjs', 'mjs');

module.exports = defaultConfig;
