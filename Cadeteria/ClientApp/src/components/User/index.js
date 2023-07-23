import React from "react";
import { AuthRouter, useAuth } from "../Auth";
import TableRow from "../TableRow";
import { GlobalContext } from "../../ApiContext"
import Loader from "../Loader"

const InitialForm = {
    id: null,
    nombre: "",
    direccion: "",
    telefono: "",
}
const Usuarios = () => {
    const auth = useAuth();

    const {
        loading,
    } = React.useContext(GlobalContext)

    auth.setUrl('/user')

    return (
        <>
            <AuthRouter>
                <div className="col-sm-12 d-flex justify-content-center bg-dark">
                    <h1 className="text-center text-white">Seccion solo de administradores</h1>.
                </div>
                <h2>Esta solo se vera para cadetes o administradores</h2>

                {loading && <Loader />}
                <div>
                    <table className="table w-75 mx-auto">
                        <thead>
                            <tr>
                                <th className="w-25">Nombre</th>
                                <th className="w-25">Rol</th>
                                <th className="w-25">Editar</th>
                                <th className="w-25">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {auth.dbUser.length > 0 ? (
                                auth.dbUser.map((user, index) =>
                                    < TableRow
                                        key={index}
                                        user={user}
                                        deleteWithToken={auth.deleteWithToken}
                                    />
                                )) : (
                                <tr>
                                    <td colSpan="2">Sin datos</td>
                                </tr>)}
                        </tbody>
                    </table>

                </div>
            </AuthRouter>
        </>
    );
}

export default Usuarios;