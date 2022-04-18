const mailer = require("nodemailer");

const Transport = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "sakthiveltest1234@gmail.com",
    pass: "Sakthi1234#",
  },
});
var mailoptions = {
  from: "sakthiveltest1234@gmail.com",
  to: "sakthiveltsmr@gmail.com",
  subject: "learning in nodejs",
  text: "email send successfully",
};

Transport.sendMail(mailoptions, function (err, info) {
  if (err) {
    console.log("error", err);
  } else {
    console.log("info", info.response);
  }
});
