import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./loginform.css"

const LoginForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value, });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/homepage?name=${formData.name}&password=${formData.password}`);
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
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="username" />
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" />
                        <div><button type="submit" class="btn btn-primary">Login</button></div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default LoginForm