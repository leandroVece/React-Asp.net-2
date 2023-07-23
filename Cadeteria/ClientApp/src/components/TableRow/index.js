import React from "react";
import { useNavigate } from "react-router-dom";
import roles from "../../Rol";
import { useAuth } from "../Auth";



const InitialFrom = {
    name: "",
    rolName: "",
    id_user: "",
    id_rol: ""
}

const TableRow = ({ user, deleteWithToken }) => {

    const navigate = useNavigate();
    const { name, rolName, id_user, id_rol } = user
    const auth = useAuth();

    const Updatadata = (id_user) => {
        navigate("/UpdateUser", { state: { id_user } })
    }
    const deletedata = (id) => {
        deleteWithToken(id)
    }

    var permisos = roles.find(rol => (rol.type === auth.cookies.get("rol")) ? rol : null);

    return (
        <tr>
            <td>{name}</td>
            <td>{rolName}</td>
            <td>
                <div className="col-auto mb-2">
                    {permisos.write &&
                        <button className="btn btn-primary" onClick={() => Updatadata(id_user)}>Actualizar</button>
                    }
                </div>
            </td>
            <td>
                <div className="col-auto mb-2">
                    {permisos.write &&
                        <button className="btn btn-primary m-0" onClick={() => deletedata(id_user)}>Eliminar</button>
                    }
                </div>
            </td>
        </tr >
    );
};

export default TableRow;