import React from "react";
import { useState, useEffect } from "react";
import { helpHttp } from "./Helper";


const GlobalContext = React.createContext();

const ContextProvider = (props) => {

    const [user, setUser] = useState({});
    const [db, setDb] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [url, setUrl] = useState(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const api = helpHttp();

    useEffect(() => {
        setLoading(true);
        helpHttp().get(url).then((res) => {
            if (!res.err) {
                setDb(res);
                setError(null);
            } else {
                setDb(null);
                setError(res);
            }
            setLoading(false);
        });
    }, [url]);

    const createData = (data) => {
        delete data.id
        let options = {
            body: data,
            headers: { "content-type": "application/json" },
        };
        helpHttp().post(url, options).then((res) => {
            if (res.err) {
                let newData = db.map((el) => (el.id !== data.id ? data : el));
                setDb(newData);
            } else {
                setError(res);
            }
        })
    }

    const updateData = (data) => {
        let id = data.id_cadete || data.id_cliente
        let endpoint = `${url}/${id}`;
        let options = {
            body: data,
            headers: { "content-type": "application/json" },
        };
        api.put(endpoint, options).then((res) => {
            if (!res.err) {
                if (data.id_cadete) {
                    var newData = db.map((el) => (el.id_cadete === data.id_cadete ? data : el));
                } else {
                    var newData = db.map((el) => (el.id_cliente === data.id_cliente ? data : el));
                }
                setDb(newData);
            } else {
                setError(res);
            }
        });
    }

    const deleteData = (id) => {
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
                    let newData = db.filter((el) => el.id !== id);
                    setDb(newData);
                } else {
                    setError(res);
                }
            });
        } else {
            return;
        }
    }

    return (
        <GlobalContext.Provider value={{
            db,
            setDb,
            user,
            setUser,
            url,
            setUrl,
            dataToEdit,
            setDataToEdit,
            error,
            setError,
            loading,
            setLoading,
            createData,
            deleteData,
            updateData,
        }} >
            {props.children}
        </GlobalContext.Provider>
    )
}

export { ContextProvider, GlobalContext }