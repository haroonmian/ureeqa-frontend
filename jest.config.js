const config = {
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.css$': 'some-css-transformer',
  },
  transformIgnorePatterns: ['/node_modules/axios/', './lib/axios.js', 'axios']
};

export default config;