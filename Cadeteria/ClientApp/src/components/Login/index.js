import React, { useState } from "react";
import { GlobalContext } from "../../ApiContext";
import { useNavigate } from "react-router-dom";

import "./login.css";
import { helpHttp } from "../../Helper";

const InitialForm = {
    name: "",
    password: "",
}

const Login = () => {

    const [form, setForm] = useState(InitialForm);
    const {
        setUrl,
        url,
        setUser,
    } = React.useContext(GlobalContext)

    setUrl("/user/authenticate");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let options = {
            body: form,
            headers: { "content-type": "application/json" },
        };
        helpHttp().post(url, options).then((res) => {
            if (!res.err) {
                setUser(res)
                navigate("/")
            } else {
                console.log(res)
            }
        })
    };

    return (
        <div className="login-dark">
            <form method="post" onSubmit={handleSubmit}>
                <h2 className="sr-only">Login Form</h2>
                <div className="illustration">
                    <i className="icon ion-ios-locked-outline"></i></div>
                <div className="form-group">
                    <input className="form-control" type="text" name="name" placeholder="UserName" value={form.name} onChange={handleChange} /></div>
                <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} /></div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">Log In</button></div><a href="#" className="forgot">Forgot your email or password?</a></form>
        </div >
    )
}
export default Login;