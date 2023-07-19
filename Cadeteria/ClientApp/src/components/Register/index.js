import React, { useState } from "react";
import { GlobalContext } from "../../ApiContext";
import { useNavigate } from "react-router-dom";

const InitialForm = {
    name: "",
    password: "",
}

const Register = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState(InitialForm);

    const {
        setUrl,
        createData
    } = React.useContext(GlobalContext)

    setUrl("/user/register");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createData(form)
    }

    return (
        <>
            <div className="login-dark">
                <form method="post" onSubmit={handleSubmit}>
                    <h2 className="sr-only">Register Form</h2>
                    <div className="illustration">
                        <i className="icon ion-ios-locked-outline"></i></div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="name" placeholder="UserName" value={form.name} onChange={handleChange} /></div>
                    <div className="form-group">
                        <input className="form-control" type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} /></div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">Register</button>
                    </div>
                </form>
            </div >
        </>
    )
}
export default Register;