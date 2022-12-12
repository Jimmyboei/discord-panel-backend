const axios = require("axios");

const errorResponse = {
  data: {
    error: true,
    message: "Fail to get discord data",
  },
};

const connectDiscord = (token) => {
  const instance = axios.create({
    baseURL: "https://discord.com/api",
    timeout: 10000,
    headers: {
      Authorization: token,
      "Accept-Encoding": "gzip,deflate,compress",
    },
  });

  return instance;
};

const getMe = async (req) => {
  const botToken = req.headers.authorization;

  const resp = await connectDiscord(botToken)
    .get("/users/@me")
    .catch((e) => {
      return errorResponse;
    });
  return resp.data;
};

const getUserGuilds = async (req) => {
  const botToken = req.headers.authorization;

  const resp = await connectDiscord(botToken)
    .get("/users/@me/guilds")
    .catch((e) => {
      console.warn(e);
      return errorResponse;
    });
  return resp.data;
};

const getGuildChannels = async (req) => {
  const botToken = req.headers.authorization;

  const guildId = req.params.guildId;
  const resp = await connectDiscord(botToken)
    .get(`/guilds/${guildId}/channels`)
    .catch((e) => {
      console.warn(e);
      return errorResponse;
    });
  return resp.data;
};

const getChannelMessages = async (req) => {
  const botToken = req.headers.authorization;
  const channelId = req.params.channelId;
  const resp = await connectDiscord(botToken)
    .get(`/channels/${channelId}/messages`)
    .catch((e) => {
      console.warn(e);
      return errorResponse;
    });
  return resp.data;
};

const postChannelMessage = async (req) => {
  const botToken = req.headers.authorization;
  const channelId = req.params.channelId;
  const body = req.body;

  const resp = await connectDiscord(botToken)
    .post(`channels/${channelId}/messages`, body)
    .catch((e) => {
      return errorResponse;
    });
  return resp.data;
};

module.exports = {
  getMe,
  getUserGuilds,
  getGuildChannels,
  postChannelMessage,
  getChannelMessages,
};
