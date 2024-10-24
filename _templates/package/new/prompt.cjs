module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'pkgName',
        message: '패키지 이름을 입력해 주세요 : ',
      },
    ];

    return inquirer.prompt(questions).then(answers => {
      const { pkgName } = answers;

      return {
        pkgName,
      };
    });
  },
};
