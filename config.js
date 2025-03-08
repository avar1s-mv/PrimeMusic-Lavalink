

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["731691419848147067"], 
  mongodbUri : "http://srv://shivashiva@musicbotyt.ouljyww.mongodb.net/?retryWhites=true&w=majority",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "AvNode",
      password: "354354A",
      host: "0.0.0.0",
      port:  7019,
      secure: false
    }
  ]
}
