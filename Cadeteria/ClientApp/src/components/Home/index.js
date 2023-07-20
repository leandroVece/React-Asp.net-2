import React from "react";
import { useAuth } from "../Auth";

const Home = () => {
    const auth = useAuth();

    return (
        <>
            <div className="d-flex justify-content-center bg-dark">
                <h1 className="text-center text-white">Proyecto cadeteria con ASP.Net y React.js </h1>.
            </div>
            <h2 className="text-center">Bienvenido {auth.cookies.get('name') ? auth.cookies.get("name") : "inicie sesion para continuar"}</h2>
        </>
    )
}


export default Home;