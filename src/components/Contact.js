import React, { useState } from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import axios from 'axios';

function Contact() {
    const initialState = {
        name: '',
        email: '',
        phone: '',
        msg: ''
    }
    const [user, setUser] = useState(initialState);
    const { name, email, phone, msg } = user;



    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(user);
        try {
            const res = await axios.post('http://localhost:8000/message', user)

            // console.log(res.data);
            window.alert(`Thank you, ${res.data.name}`);
            // window.location.reload();
        } catch (err) {

            console.log(err);
            window.alert('Sorry, message is not beeing send.');
        }
        setUser({ ...initialState })

    }

    return (
        <div id="contact" className="container mx-auto  px-12 py-24 min-h-screen">
            <h1 className="text-4xl font-semibold border-b-4 border-purple-400  inline-block  mb-4 text-purple-700 ">Contact Me</h1>
            <div className=" text-center w-1/2 m-auto">
                <h2 className="font-bold text-3xl">Get in touch!</h2>
                <p className="font-thin mb-8">I am despirately searching for job. If you like my work, please fell free to contact me.</p>

                <div className="flex justify-between items-center text-xs">
                    <div className="flex flex-col justify-center items-center bg-orange-200 rounded p-2 mx-2 w-40 h-20">
                        <LocationOnOutlinedIcon />
                        <p>64 Great Western Highway</p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-orange-200 rounded p-2 mx-2 w-40 h-20">
                        <PhoneIcon />
                        <p>+61 424428959</p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-orange-200 rounded p-2 mx-2 w-40 h-20">
                        <MailOutlineIcon />
                        <p>bijayadhikari107@gmail.com</p>
                    </div>
                </div>


                <form onSubmit={handleSubmit} className="bg-orange-200 rounded-lg my-8">
                    <div className="flex justify-between p-4 text-left text-gray-700">
                        <div className="w-1/2">
                            <div className="mb-2 text-xs">
                                <h2>Full Name</h2>
                                <input onChange={handleInput} name="name" value={name} type="text" placeholder="Your name..." className="rounded shadow-xs p-2" />
                            </div>
                            <div className="mb-2 text-xs">
                                <h2>Email</h2>
                                <input onChange={handleInput} name="email" value={email} type="email" placeholder="Your email..." className="rounded shadow-xs p-2" />
                            </div>
                            <div className="mb-2 text-xs">
                                <h2>Phone</h2>
                                <input onChange={handleInput} name="phone" value={phone} type="phone" placeholder="Your phone..." className="rounded shadow-xs p-2" />
                            </div>

                        </div>
                        <div className="text-xs">
                            <h3>Message</h3>
                            <textarea onChange={handleInput} name="msg" value={msg} className="w-40 h-32" />

                        </div>

                    </div>
                    <button className="my-4 py-2 px-4 font-bold text-white bg-pink-400 rounded shadow-md focus:outline-none hover:shadow-lg transform transition duration-75 hover:scale-105">Send Message</button>
                </form>
            </div>



        </div>

    )
}

export default Contact
