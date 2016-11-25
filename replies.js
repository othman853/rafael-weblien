const request = require('request');
const JiraApi = require('./jira');

const replier = msg => callback => callback(msg);

const jiraClient = new JiraApi({
  protocol: 'https',
  host: process.env.WEBLIE_HOST,
  username: process.env.WEBLIE_USER,
  password: process.env.WEBLIE_PASSWORD,
  apiVersion: 'latest',
  strictSSL: true
});

const replies = [
  { message: 'Rafa Lindo', response: replier('Sou apenas um BA.') },
  { message: 'E o Rafa de verdade?', response: replier('Ele é o melhor BA da TW! Tenho orgulho em imitar ele!') },
  { message: 'Oi Rafa', response: replier('Oi, tudo bem?') },
  { message: 'Rafa', response: replier('Oi, tudo bem?') },
  { message: 'Cria uma história', response: replier('Claro!') },
  { message: 'Como vai?', response: replier('Tudo certo. E com você?') },
  { message: 'Por que almoça sozinho?', response: replier(':neutral_face:') },
  { message: 'Tá feliz?', response: replier(':neutral_face:') },
  { message: 'Tá triste?', response: replier(':neutral_face:') },
  { message: 'Você é o melhor BA de todos', response: replier(':neutral_face:') },
  { message: 'Você é o pior BA de todos', response: replier(':neutral_face:') },
  { message: 'Sorria', response: replier('https://rafa-expressionless-barometer.herokuapp.com/images/rafa.jpeg') },
  { message: 'Chore', response: replier('https://rafa-expressionless-barometer.herokuapp.com/images/rafa.jpeg') },
  { message: 'Desenha um arcoiro', response: replier('https://rainbowgram.files.wordpress.com/2015/04/f4db2-11189693_1652901948273613_921037734_n.jpg?w=350&h=200&crop=1') },
  { message: 'Desenha', response: replier('http://lorempixel.com/400/200/') },
  { message: 'cria', response: (callback) => {

      jiraClient.createIssue('askjdakdkasjd')
      .then(function(result){
        console.log(result);
        return callback(`criei: ${result.key}`);
      })
      .catch(function(error) {
        console.log(error);
        return callback('Tive uns probleminhas aqui... Fala com o Rafa de verdade.');
      })

    }
  },
  { message: 'ls', response: (callback) =>
    {
      jiraClient.findAllIssues()
       .then(function(result) {
         console.log(result);
         console.log(result.issues[0].fields);
         const issuesKeys = result.issues.map(i => '- ' + i.key + ': ' + i.fields.summary).join('\n');
         return callback(issuesKeys);
       })
       .catch(function(error) {
         console.log(error);
         return callback('Tive uns probleminhas aqui... Fala com o Rafa de verdade.');
       });
    }
  }
];

const options = callback => callback(`Não entendi :( \n\n Só sei responder o seguinte: \n\n ${replies.map( r => '- ' + r.message).join('\n')}`);

module.exports = {

  answer: (message, cb) => {
    const reply = replies.find( r => r.message.toLowerCase() === message.toLowerCase());
    reply ? reply.response(cb) : options(cb);
  }
}
