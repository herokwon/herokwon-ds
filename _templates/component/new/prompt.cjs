module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'category',
        message: '카테고리를 입력해 주세요 : ',
      },
      {
        type: 'input',
        name: 'componentName',
        message: '컴포넌트 이름을 입력해 주세요 (by PascalCase) : ',
      },
    ];

    return inquirer.prompt(questions).then(answers => {
      const { category, componentName } = answers;

      return {
        category,
        componentName,
      };
    });
  },
};
