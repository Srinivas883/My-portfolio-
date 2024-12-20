import "./contactMe.css"
import { useState } from "react"
import axios from "axios";



function ContactMe() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [sub, setsub] = useState('')
    const [msg, setmsg] = useState('')
    const [status, setstatus] = useState(false)

    function handlename(e) { setname(e.target.value) }
    function handlemail(e) { setemail(e.target.value) }
    function handlephone(e) { setphone(e.target.value) }
    function handlesub(e) { setsub(e.target.value) }
    function handlemsg(e) { setmsg(e.target.value) }

    function handlesubmit() {
        if (!name || !email || !phone || !sub || !msg) {
            alert("All fields are required");
            return;
        } else {
            setstatus(true)
            axios.post("https://my-portfolio-pkts.onrender.com/sendemail", { name: name, email: email, phone: phone, sub: sub, msg: msg }).then((data) => {
                if (data.data === true) {
                    alert("Form submitted successfully")
                    setstatus(false)
                } else {
                    alert("Failed to submit the form. Please input valid values")
                    setTimeout(setstatus(false), 5000)
                }
            }).catch((error) => { console.log(error) })

            setname("")
            setemail('')
            setphone('')
            setsub('')
            setmsg('')
        }
    }

    return (
        <div className="contactme" id="pos3">

            <h6>CONTACT ME</h6>
            <p className="contactmedes1">I Want To Hear From You</p>
            <p className="contactmedes2">Please fill out the form in this section to contact me.</p>

            <div className="contactmesec1">

                <div className="inputbox">

                    <input value={name} onChange={handlename} type="text" placeholder="Your Name" />
                    <input value={email} onChange={handlemail} type="text" placeholder="Your Email" />

                </div>

                <div className="inputbox">

                    <input value={phone} onChange={handlephone} type="text" placeholder="Your Phone" />
                    <input value={sub} onChange={handlesub} type="text" placeholder="Subject" />

                </div>

                <div className="messagebox">

                    <textarea value={msg} onChange={handlemsg} placeholder="Write your message here" name="" id=""></textarea>
                    <button onClick={handlesubmit} className="subbtn">{status ? "Submitting..." : "submit"}</button>

                </div>

            </div>



        </div>
    )
}

export default ContactMe