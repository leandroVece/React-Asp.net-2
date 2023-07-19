import React from "react";
import { GlobalContext } from "../../ApiContext";


const Home = () => {

    const {
        user
    } = React.useContext(GlobalContext)

    console.log(user)

    return (
        <>
            <div className="d-flex justify-content-center bg-dark">
                <h1 className="text-center text-white">Proyecto cadeteria con ASP.Net y React.js </h1>.
            </div>
            <h2 className="text-center">bienvenido {user.name} </h2>
        </>
    )
}


export default Home;