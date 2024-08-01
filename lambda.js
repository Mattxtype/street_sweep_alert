const { publish } = require("./actions/publish-topic");

exports.handler = async function(event) {
    console.log("request:", JSON.stringify(event, undefined, 2));
    const dayOfMonth = new Date().getDate();
    console.log(dayOfMonth);

    // if((dayOfMonth + 1) === 2 || (dayOfMonth + 1) === 4) {
      publish();
    // }
  };