import React from "react";
import { AuthRouter, useAuth } from "../Auth";


const InitialForm = {
    id: null,
    nombre: "",
    direccion: "",
    telefono: "",
}
const Cadete = () => {

    const auth = useAuth();
    console.log(auth.cookies)


    return (
        <>
            <AuthRouter>
                <div className="col-sm-12 d-flex justify-content-center bg-dark">
                    <h1 className="text-center text-white">Seccion de cadetes</h1>.
                </div>

                <h2>Esta solo se vera para cadetes o administradores</h2>
            </AuthRouter>
        </>
    );
}

export default Cadete;