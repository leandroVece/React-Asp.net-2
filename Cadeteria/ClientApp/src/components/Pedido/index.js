import React from "react"
import { GlobalContext } from "../../ApiContext";


const InitialTable = {
    id: null,
    nombre: "",
    obs: "",
    estado: "Pendiente",
}

const Pedido = () => {

    const {
        db,
        setUrl,
    } = React.useContext(GlobalContext)


    return (
        <>
            <div className="col-sm-12 d-flex justify-content-center bg-dark">
                <h1 className="text-center text-white ">Seccion de pedidos</h1>
            </div>

        </>
    )
}
export default Pedido;