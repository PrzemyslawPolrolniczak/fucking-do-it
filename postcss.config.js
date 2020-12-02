
module.exports = {
  plugins: {
    "postcss-css-reset": {},
    "postcss-preset-env": {
      stage: 1,
      importFrom: "./src/styles/variables.css"
    },
    "rucksack-css": {},
  }
};