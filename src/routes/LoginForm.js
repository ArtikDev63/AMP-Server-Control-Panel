import { FaUser, FaLock, FaCube } from 'react-icons/fa';
import "./css/LoginForm.css"
import { useState } from 'react';
import {useAuth} from "../auth/AuthProvider"

export default function LoginForm(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const auth = useAuth()

    if (auth.isAuthenticated)    {
        return <Navigate to="/dashboard" />
    }

    return (
        <>
            <a href="" class="a-no-deco logo-login" style={{position: "absolute", padding: 32+"px"}}><FaCube size={50} /><h1>ARTSOLE</h1></a>
            <div class="login-wrapper">
                <form action="" noValidate>
                    <h1>Login</h1>
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