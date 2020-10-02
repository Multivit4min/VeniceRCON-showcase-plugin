/**
 * @param {import("./types").PluginProps} props
 */
module.exports = ({ logger, config, battlefield }) => {

  //listens to the playerJoin event
  battlefield.on("playerJoin", ev => {
    //logs the message to console / webinterface
    logger.info(`Player with name ${ev.name} and guid ${ev.guid} is joining...`)
    //sends a chat message to the server
    battlefield.say(config.message.replace(/%name%/g, ev.name))
  })

}