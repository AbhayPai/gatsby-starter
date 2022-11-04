exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  landoCompatibility(getConfig, stage, actions);
}

landoCompatibility = (getConfig, stage, actions) => {
  if (stage !== "develop") {
    return;
  }

  if (typeof process.env.LANDO === 'undefined') {
    return;
  }

  process.env.PUBLIC_HOST = 'gatsby-starter.lndo.site';
  let config = getConfig();

  if (typeof process.env.PUBLIC_HOST !== 'undefined' && typeof config.output !== 'undefined') {
    config.output.publicPath = '';

    config.entry.commons = config.entry.commons.map(point => {
      if (/webpack-hot-middleware/.test(point)) {
        point += '&dynamicPublicPath=true'
      }
      return point;
    });
  }

  actions.setWebpackConfig({
    output: config.output, entry: config.entry, devServer: config.devServer
  });
}
