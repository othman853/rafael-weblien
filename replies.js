const replies = [
  { message: 'Rafa Lindo', response: 'Sou apenas um BA.' },
  { message: 'Oi Rafa', response: 'Oi, tudo bem?' },
  { message: 'Rafa', response: 'Oi, tudo bem?' },
  { message: 'Cria uma história', response: 'Claro!' },
  { message: 'Como vai?', response: 'Tudo certo. E com você?' },
  { message: 'Porque almoça sozinho?', response: ':neutral_face:' },
  { message: 'Tá feliz?', response: ':neutral_face:' },
  { message: 'Tá triste?', response: ':neutral_face:' },
  { message: 'Você é o melhor BA de todos', response: ':neutral_face:' },
  { message: 'Você é o pior BA de todos', response: ':neutral_face:' },
  { message: 'Sorria', response: 'https://rafa-expressionless-barometer.herokuapp.com/images/rafa.jpeg' },
  { message: 'Chore', response: 'https://rafa-expressionless-barometer.herokuapp.com/images/rafa.jpeg' },
  { message: 'Desenha um arcoiro', response: 'https://rainbowgram.files.wordpress.com/2015/04/f4db2-11189693_1652901948273613_921037734_n.jpg?w=350&h=200&crop=1' }
];

const options = replies.map( r => '- ' + r.message).join('\n');

module.exports = {


  answer: (message) => {
    const reply = replies.find( r => r.message.toLowerCase() === message.toLowerCase());
    return reply ? reply.response : `Não entendi :( \n\n Só sei responder o seguinte: \n\n ${options}`;
  }
}
