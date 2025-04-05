// jest.config.js
module.exports = {
  testMatch: [
    "**/test/specs/**/*.[jt]s?(x)", // include your actual test path
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
    // Remove this if it's blocking real tests
    // "/test/specs/"
  ]
};
