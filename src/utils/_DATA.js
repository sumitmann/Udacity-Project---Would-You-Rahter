let users = {
  brittini: {
    id: 'brittini',
    name: 'Brittini',
    avatarURL: 'https://randomuser.me/api/portraits/women/44.jpg',
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      am8ehyc8byjqgar0jgpub9: 'optionTwo',
      loxhs1bqm25b708cmbf3g: 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  ifenna: {
    id: 'ifenna',
    name: 'Ifenna',
    avatarURL: 'https://randomuser.me/api/portraits/women/47.jpg',
    answers: {
      vthrdm985a262al8qx3do: 'optionOne',
      xj352vofupe1dqz9emx13r: 'optionTwo'
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
  },
  joeylene: {
    id: 'joeylene',
    name: 'Joeylene',
    avatarURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    answers: {
      xj352vofupe1dqz9emx13r: 'optionOne',
      vthrdm985a262al8qx3do: 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']
  },
  peter: {
    id: 'peter',
    name: 'Peter',
    avatarURL: 'https://randomuser.me/api/portraits/men/46.jpg',
    answers: {},
    questions: []
  },
  anusha: {
    id: 'anusha',
    name: 'Anusha',
    avatarURL: 'https://randomuser.me/api/portraits/women/95.jpg',
    answers: {},
    questions: []
  },
};

let questions = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'brittini',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['brittini'],
      text: 'have horrible short term memory'
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'joeylene',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero'
    },
    optionTwo: {
      votes: ['joeylene', 'brittini'],
      text: 'become a supervillain'
    }
  },
  am8ehyc8byjqgar0jgpub9: {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'brittini',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic'
    },
    optionTwo: {
      votes: ['brittini'],
      text: 'be telepathic'
    }
  },
  loxhs1bqm25b708cmbf3g: {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'ifenna',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer'
    },
    optionTwo: {
      votes: ['brittini'],
      text: 'be a back-end developer'
    }
  },
  vthrdm985a262al8qx3do: {
    id: 'vthrdm985a262al8qx3do',
    author: 'ifenna',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['ifenna'],
      text: 'find $50 yourself'
    },
    optionTwo: {
      votes: ['joeylene'],
      text: 'have your best friend find $500'
    }
  },
  xj352vofupe1dqz9emx13r: {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'joeylene',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['joeylene'],
      text: 'write JavaScript'
    },
    optionTwo: {
      votes: ['ifenna'],
      text: 'write Swift'
    }
  }
};

function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText
    },
    optionTwo: {
      votes: [],
      text: optionTwoText
    }
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const loggedInUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      };

      users = {
        ...users,
        [loggedInUser]: {
          ...users[loggedInUser],
          questions: users[loggedInUser].questions.concat([formattedQuestion.id])
        }
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ loggedInUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [loggedInUser]: {
          ...users[loggedInUser],
          answers: {
            ...users[loggedInUser].answers,
            [qid]: answer
          }
        }
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([loggedInUser])
          }
        }
      };

      res();
    }, 500);
  });
}
