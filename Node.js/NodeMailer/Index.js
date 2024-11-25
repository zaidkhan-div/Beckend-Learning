var http = require('http');
var nodemailer = require('nodemailer');


http.createServer(function (req, res) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:"myemail@gmail.com",
            pass: "it's private",
        }
    })

    let mailOption = {
        from: 'zaidwork76@gmail.com',
        to: "zaidscestudent@gmail.com",
        subject: "Hi This is checking Nodemailer",
        text: "Hi This is checking Nodemailer tester"
    }
    transporter.sendMail(mailOption, function (error, info) {
        if (error)
            throw error

        alert(infoj)

    })
}).listen(8080)

// var http = require('http');

// http.createServer(function (req, res){
//     res.write('Hello world')
//     res.end()
// }).listen(8080)