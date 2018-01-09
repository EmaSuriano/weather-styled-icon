module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'WeatherIcons',
      externals: {
        react: 'React'
      }
    }
  }
}
