import React, { useEffect, useState } from "react";
import { AuthRouter, useAuth } from "../Auth";
import { useLocation } from "react-router-dom";
import { helpHttp } from "../../Helper";
import { GlobalContext } from "../../ApiContext";

const InitialForm = {
    name: "",
    rolName: "",
    password: "",
    id_user: null,
    id_rol: null
}

const UpdateUser = () => {
    let { state } = useLocation()
    const auth = useAuth();
    auth.setUrl('/user/' + state.id_user)
    const [form, setForm] = useState(null);
    const [rol, setRol] = useState([]);

    useEffect(() => {
        let options = {
            headers: {
                "Authorization": "Bearer " + auth.cookies.get("Token")
            }
        };
        helpHttp().get("/user/rol", options).then((res) => {
            if (!res.err) {
                setRol(res)
            } else {
                console.log("Ocurrio un error Vuelva atra e intente de nuevo")
            }
        });
    }, [auth.url]);

    useEffect(() => {
        if (auth.dbUser[0]) {
            setForm(auth.dbUser[0]);
        } else {
            setForm(InitialForm);
        }
    }, [auth.dbUser[0]]);


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        delete form.rolName;
        console.log(form);
    }
    console.log(auth.dbUser[0]);

    return (
        <>
            <AuthRouter>
                <div className="col-sm-12 d-flex justify-content-center bg-dark">
                    <h1 className="text-center text-white">Seccion solo de administradores</h1>.
                </div>
                <h2>Esta solo se vera para cadetes o administradores</h2>

                <div className="login-dark">
                    <form method="post" onSubmit={handleSubmit}>
                        <h2 className="sr-only">Update Form</h2>
                        <div className="illustration">
                            <i className="icon ion-ios-locked-outline"></i></div>
                        <div className="form-group">
                            <input className="form-control" type="text" name="name" placeholder="UserName" value={form?.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="password" placeholder="New Password" value={form?.password} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <select className="form-control" name="id_rol" >
                                <option select className="text-dark" value={form?.id_rol}>{form?.rolName}</option>
                                {rol.length > 0 ?
                                    rol.map((x, index) => {
                                        return (<option key={index} value={x.id_rol} className="text-dark">{x.rolName}</option>)
                                    }) : null
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block" type="submit">Update</button>
                        </div>

                    </form>
                </div >

            </AuthRouter>
        </>
    );
}

export default UpdateUser;