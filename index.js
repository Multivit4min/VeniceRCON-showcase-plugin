/**
 * @param {import("./types").PluginProps} props
 */
module.exports = ({ logger, config, battlefield, store }) => {

  //set default value in store
  const amount = store.get("join_count")
  if (isNaN(amount)) store.set("join_count", 0)

  //listens to the playerJoin event
  battlefield.on("playerJoin", ev => {
    //increment join count inside store
    let amount = store.get("join_count")
    store.set("joins", ++amount)
    //logs the message to console / webinterface
    logger.info(
      `Player with name ${ev.name} and guid ${ev.guid} is joining... total joins: ${amount}`
    )
    //sends a chat message to the server
    battlefield.say(config.message.replace(/%name%/g, ev.name), ["all"])
  })

}