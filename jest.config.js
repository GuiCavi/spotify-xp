module.exports = {
  moduleFileExtensions: ["js", "jsx"],
  coverageDirectory: "coverage",
  setupFiles: ["dotenv/config"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  testEnvironment: "jsdom",
  transform: { "\\.js$": "babel-jest" },
  moduleNameMapper: { "\\.(css|less)$": "identity-obj-proxy" },
};
