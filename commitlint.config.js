module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [2, "always", "sentence-case"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never"],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "chore", "docs", "refactor", "style", "test"],
    ],
    "type-required": [2, "always"],
  },
};
