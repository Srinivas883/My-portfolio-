const express = require("express")//install express to use it 
const cors = require("cors")//install cors to use it
const app = express()
const nodemailer = require("nodemailer");//install nodemailer to use it
const mongoose = require("mongoose")//install mongoose to use it

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sri:123@cluster0.hk41k.mongodb.net/passkey?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("connected to DB")
}).catch((error) => {
    console.log("failed to connect" + error)
})

const credential = mongoose.model("credential", {}, "bulkmail")

app.post("/sendemail", (req, res) => {


    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const sub = req.body.sub
    const msg = req.body.msg

    // fetching the user and pass from db
    credential.find().then(async (data) => {
        // console.log(data[0].toJSON())
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: data[0].toJSON().user,
                pass: data[0].toJSON().pass,
            },
        });

        try {

            await transporter.sendMail({
                from: "srinivassampath883@gmail.com",
                to: "srinivassampath883@gmail.com",
                subject: sub,
                html: `Name:${name}<br/>Email:${email}<br/>Phone number:${phone}<br/>${msg}`
            })

            await transporter.sendMail({
                from: "srinivassampath883@gmail.com",
                to: email,
                subject: sub,
                text: `Thank you for submitting the form. I will get back to you within 24 hours.`
            })

            res.send(true)
        } catch (error) {
            console.log(error)
            res.send(false)
        }


    }).catch((error) => {
        console.log(error)
    })

})

app.listen(5000, () => {
    console.log("server started")

})