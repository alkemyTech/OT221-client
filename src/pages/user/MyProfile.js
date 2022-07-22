import { useState, useEffect } from 'react';
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/users";

const MyProfile = () => {

    // TODO: Once we have the endpoint ready to bring the user we can execute this request to list it here
    // const [user, setUser] = useState(null);

    /*useEffect(() => {
        const getUser = () => {
            fetch("/api/user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then(res => res.json())
                .then(res => setUser(res));
        }
        getUser();
    }, []);*/

    const handleDelete = (id) => {
        fetch('/api/user/delete/' + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => res.text());
    }

    //Testing variable
    const user = {
        id: 1,
        firstName: "Juan",
        lastName: "Perez",
        image: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
        email: "juanpere@gmail.com",
        phone: "+54123456789",
        address: "Calle falsa 123",
        password: "123456"
    }

    const userLogged = useSelector(selectUser);
    console.log(userLogged)

    return (
        <div className="container mt-5" style={{ fontSize: 2 + 'rem', height: 600 }}>
            <h1 className="title text-center">Panel de administración</h1>
            <div className="row mt-5">
                <div className="col-12 col-md-4 mt-5">
                    {userLogged.user.image &&
                        <img src={`http://localhost:3001/activity/image/${userLogged.user.image}`} alt="avatar" className="img-fluid image" style={{ width: 400, borderRadius: 20 }} />
                    }
                </div>
                <div className="col-12 col-md-8 mt-5">
                    <h2 className="subtitle mb-5">Bienvenido Usuario:</h2>
                    <p className="card-text mb-4">Nombre:  {userLogged.user.firstName}  {userLogged.user.lastName}</p>
                    <p className="card-text mb-4">Email:  {userLogged.user.email}</p>
                    <div className="mb-2">
                        <Link to={`edit/${user.id}`} className="btn btn-primary mb-2 fs-3" style={{ width: 110, borderRadius: 30 }}>Editar</Link>
                    </div>
                    <div className="mb-4">
                        <button onClick={() => handleDelete(user.id)} className="btn btn-dark fs-3" style={{ width: 110, borderRadius: 30 }}>Eliminar</button>
                    </div>
                    <div>
                        <small className="text-muted">Última actualización del perfil: {new Date(userLogged.user.updatedAt).toLocaleDateString("en-AU")}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;