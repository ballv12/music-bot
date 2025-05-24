const { ActivityType } = require('discord.js');

module.exports = {
  ownerId: '607846264293556237',
  status: {
    rotateDefault: [
      { name: 'Netflix', type: ActivityType.Watching },
      { name: 'GTA VI', type: ActivityType.Playing },
      { name: 'on YouTube', type: ActivityType.Streaming, url: 'https://www.youtube.com/watch?v=TzMo-EpWcPA' },
      { name: 'Spotify', type: ActivityType.Listening },
    ],
    songStatus: true
  },
  spotifyClientId: "c5d16f8f85b24fbcb0329c3dd32c1a58",
  spotifyClientSecret: "189e59e7043941b69c3c7ae87de81131",
}
