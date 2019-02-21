module.exports = {
  presets: [
    ["@babel/preset-env", { "targets": { "chrome": "60" } }],
    "@babel/preset-react"
  ],
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties'
  ]
}