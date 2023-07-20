import React from "react";
import { AuthRouter } from "../Auth";


const InitialForm = {
    id: null,
    nombre: "",
    direccion: "",
    telefono: "",
}
const Cadete = () => {

    return (
        <>
            <AuthRouter>
                <div className="col-sm-12 d-flex justify-content-center bg-dark">
                    <h1 className="text-center text-white">Seccion de cadetes</h1>.
                </div>
            </AuthRouter>
        </>
    );
}

export default Cadete;