import React, { useEffect, useState } from "react"
import Cookies from 'universal-cookie';
import { helpHttp } from "../../Helper";
import { Navigate } from "react-router-dom";

const authContext = React.createContext();

function AuthProvider({ children }) {

    const cookies = new Cookies();
    const url = "/user"
    const api = helpHttp();
    const [loginTouch, setLoginTouch] = useState(false);


    useEffect(() => {
        console.log("hecho")
    }, [loginTouch])


    useEffect(() => {
        //setLoading(true);
        let options = {
            headers:
            {
                "Authorization": "Bearer " + cookies.get("Token")
            }
        };
        helpHttp().get(url, options).then((res) => {
            if (!res.err) {
                //setDb(res);
                //setError(null);
            } else {
                //setDb(null);
                //setError(res);
            }
            // setLoading(false);
        });
    }, [url]);

    const UpdateWithToken = (data) => {
        let endpoint = `${url}/${data.id}`;
        let options = {
            body: data,
            headers: { "content-type": "application/json" },
        };
        api.put(endpoint, options).then((res) => {
            if (!res.err) {

            } else {
                //setError(res);
            }
        });
    }

    const deleteWithToken = (id) => {
        let isDelete = window.confirm(
            `¿Estás seguro de eliminar el registro con el id '${id}'?`
        );
        if (isDelete) {
            let endpoint = `${url}/${id}`;
            let options = {
                headers: { "content-type": "application/json" },
            };
            api.del(endpoint, options).then((res) => {
                if (!res.err) {
                } else {
                    //setError(res);
                }
            });
        } else {
            return;
        }

    }

    const login = (data) => {
        cookies.set('id', data.id_user, { path: '/' })
        cookies.set('name', data.name, { path: '/' })
        cookies.set('rol', data.rol, { path: '/' })
        cookies.set('Token', data.token, { path: '/' })
    }

    const logout = () => {
        cookies.remove('id', { path: '/' })
        cookies.remove('name', { path: '/' })
        cookies.remove('rol', { path: '/' })
        cookies.remove('Token', { path: '/' })
    }

    const auth = {
        cookies, login, logout, UpdateWithToken, deleteWithToken, loginTouch, setLoginTouch
    }

    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

//llamaremos al useContext
function useAuth() {
    const auth = React.useContext(authContext)
    return auth
}

function AuthRouter(props) {
    const auth = useAuth()
    if (!auth.cookies.get("name")) {
        return <Navigate to='/login' />
    }
    return props.children
}

//de manera provisional exportaremos el provider para acceder a la informacion
export {
    AuthProvider,
    useAuth,
    AuthRouter
}