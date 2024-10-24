module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'category',
        message: '카테고리를 입력해 주세요 : ',
      },
    ];

    return inquirer.prompt(questions).then(answers => {
      const { category } = answers;

      return {
        category,
      };
    });
  },
};
