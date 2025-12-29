import { FaUser, FaLock, FaCube } from 'react-icons/fa';
import "./css/LoginForm.css"
import { useState } from 'react';
import {useAuth} from "../auth/AuthProvider"
import { API_URL } from '../auth/constants';
import { useNavigate } from 'react-router-dom';

export default function LoginForm(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorResponse, setErrorResponse] = useState("")
    const auth = useAuth()
    const goTo = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            if(response.ok){
                console.log("User login successful")
                setErrorResponse("");
                goTo("/dashboard")
            }else{
                console.log("Something went wrong")
                const json = await response.json();
                setErrorResponse(json.body.error)
                return;
            }
        } catch (error) {
            console.log(error)
        }
    }

    if (auth.isAuthenticated)    {
        return <Navigate to="/dashboard" />
    }

    return (
        <>
            <a href="" class="a-no-deco logo-login"><FaCube size={50} /><h1>ARTSOLE</h1></a>
            <div class="login-wrapper">
                <form action="" noValidate onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    {!errorResponse && <div class="error-message">{errorResponse}</div>}
                    <div class="text-box">
                        <FaUser size={15}/>
                        <input type="text" placeholder="Usuario" required value={username} onChange={(e) => setUsername(e.target.value)}></input>
                        
                    </div>
                    <div class="text-box">
                        <FaLock size={15}/>
                        <input type="password" placeholder="Contraseña" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        
                    </div>
                    <div>
                        <button>Iniciar Sesion</button>
                    </div>
                </form>
            </div>
            <a></a>
        </>
    )
}