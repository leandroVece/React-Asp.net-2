import React, { useState } from "react";
import { GlobalContext } from "../../ApiContext";
import { useNavigate } from "react-router-dom";

import "./login.css";
import { helpHttp } from "../../Helper";
import { useAuth } from "../Auth";


const InitialForm = {
    name: "",
    password: "",
}

const Login = () => {

    const [form, setForm] = useState(InitialForm);
    const {
        setUrl,
        url,
    } = React.useContext(GlobalContext)


    const auth = useAuth();

    setUrl("/user/authenticate");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        //console.log(auth.cookies)
        e.preventDefault();
        let options = {
            body: form,
            headers: { "content-type": "application/json" },
        };
        helpHttp().post(url, options).then((res) => {
            if (!res.err) {
                auth.setLoginTouch(!auth.loginTouch)
                auth.login(res)
                navigate("/")
            } else {
                //navigate("/error")
                alert("Error intente nuevamente")
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
                    <input className="form-control" type="text" name="name" placeholder="UserName" value={form.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">Log In</button>
                </div>
                <a href="#" className="forgot">Forgot your email or password?</a>
            </form>
        </div >
    )
}
export default Login;