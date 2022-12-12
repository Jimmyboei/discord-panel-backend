const express = require("express");

const router = express.Router();

const {
  getMe,
  getUserGuilds,
  getGuildChannels,
  getChannelMessages,
  postChannelMessage,
} = require("./discordApi");

router.get("/me", (req, res) => {
  getMe(req).then((resp) => {
    res.send(resp);
  });
});

router.get("/userGuilds", (req, res) => {
  getUserGuilds(req).then((resp) => {
    res.send(resp);
  });
});

router.get("/guildChannels/:guildId", function (req, res) {
  getGuildChannels(req).then((resp) => {
    res.send(resp);
  });
});

router.get("/channelMessages/:channelId", function (req, res) {
  getChannelMessages(req).then((resp) => {
    res.send(resp);
  });
});

router.post("/channelMessages/:channelId", function (req, res) {
  postChannelMessage(req).then((resp) => {
    res.send(resp);
  });
});

module.exports = router;
