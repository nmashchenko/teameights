module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    commit => {
      return /^\[release] Version:/.test(commit);
    },
  ],
};
