import React, { useState } from 'react'
import axios from './api/axios';

const LoginForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        axios.post(
            '/user',
            {
                userName: name,
                email: email

            }

        ).then((res) => {

            console.log(res)

        }).catch((err) => {

            console.log(err)
        })

    }
    return (
        <form>
            <h1>LoginForm</h1>
            <input
                type="text"
                placeholder='Name'
                value={name}
                onChange={(event) => {
                    console.log(event.target.value)
                    setName(event.target.value)
                }}

            />
            <input
                type="email"
                placeholder='Email'
                value={email}
                onChange={(event) => {
                    console.log(event.target.value)
                    setEmail(event.target.value)
                }}

            />
            <button
                onClick={handleSubmit}
            >
                Submit

            </button>


        </form>
    )
}

export default LoginForm