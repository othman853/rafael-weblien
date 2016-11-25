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
  { message: 'Você é o pior BA de todos', response: ':neutral_face:' }
];

module.exports = {
  answer: (message) => {
    const reply = replies.find( r => r.message.toLowerCase() === message.toLowerCase());
    return reply ? reply.response : 'Não entendi :(';
  }
}
