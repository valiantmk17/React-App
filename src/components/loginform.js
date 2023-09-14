import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./loginform.css"

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const loginToApi = (body) => {
        return fetch('http://localhost:3000/auth', {
            method: "POST",
            headers: {
                // "Accept": "*/*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(
                (result) => {
                    return Promise.resolve(
                        result,
                    );
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                }
            )
    };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    const handleSubmit = async (event) => {
        const body = {
            "email": email,
            "password": password
        }
        event.preventDefault();
        try {
            let result = await loginToApi(body)
            if (result.status === 200) {
                // navigate(`/homepage?email=${email}&password=${password}`);
                console.log(result, "ini result")
                
            }
        } catch (e) {
            console.log(e, "error post ratting");

        }

    };

    return (
        <div>
            <form className="cover" onSubmit={handleSubmit}>
                <div class='row'>
                    <div class='col'>
                        <img class="gmbr" src='gambar.png' alt='INI lAYY' />
                    </div>
                    <div class='d-grid gap-2 col-6 mx-auto'>
                        <h1>Login</h1>
                        <input type="text" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="user" />
                        <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="password" />
                        <div><button type="submit" onClick={handleSubmit} class="btn btn-primary">Login</button></div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default LoginForm