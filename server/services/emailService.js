const nodemailer = require("nodemailer");

exports.sendEmail = function() {
    let transporter = nodemailer.createTransport({
        host: "smtp.elasticemail.com",
        port: 2525,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER || "testUser", // generated ethereal user
          pass: process.env.EMAIL_PASS || "test", // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      return transporter.sendMail({
        from: '"test" <alexis.joel.sessarego@gmail.com>', // sender address
        to: "alexis.joel.sessarego@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    
}