import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./loginform.css"

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/homepage?email=${email}&password=${password}`);
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
                        <div><button type="submit" class="btn btn-primary">Login</button></div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default LoginForm