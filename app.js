const mailer = require("nodemailer");

const MailOptions = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "sakthiveltest1234@gmail.com",
    pwd: "Sakthi1234#",
  },
});
var mailoptions = {
  from: "sakthiveltest1234@gmail.com",
  to: "sakthiveltsmr@gmail.com",
  subject: "learning in nodejs",
  text: "email send successfully",
};
