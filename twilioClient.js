var config = require('./config');
var client = require('twilio')(config.accountSid, config.authToken);

module.exports.sendSms = function(to, message) {
  client.messages.create({
    body: "houston",
    to: +14433105487,
    from: config.sendingNumber,
    mediaUrl: http://b-townblog.com/wp-content/images/Foundblackcat022013_thumb.jpg
  }, function(err, data) {
    if (err) {
      console.error('Could not notify administrator');
      console.error(err);
    } else {
      console.log('Administrator notified');
    }
  });
};
