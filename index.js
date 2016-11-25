
const replies = require('./replies');
const Slackbot = require('slackbots');

const bot = new Slackbot({
  token: process.env.SLACK_KEY,
  name: 'Rafael Weblien'
});

bot.on('start', () => console.log('up'));
bot.on('message', (data) => {

  if (data.type === 'message' && data.username !== 'Rafael Weblien') {
    replies.answer(data.text, reply => bot.postMessage(data.channel, reply));
  }

});
