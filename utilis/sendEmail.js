const nodemailer = require("nodemailer")


    
module.exports = async (email, subject, text)=>{
    try {
        
        const transport = nodemailer.createTransport({
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASS
            }
        })
        const mailOptions={
            from:process.env.EMAIL,
            to:email,
            subject:subject,
            text:text
        }
        await transport.sendMail(mailOptions)
        console.log("Email sent successfully")
    } catch (error) {
        console.log(error)
    }
}