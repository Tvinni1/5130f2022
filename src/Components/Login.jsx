//Created by Nagaditya Sri Abhiram
import React, { UseEffect, useState } from "react";
import "../css/Signup.css";
import { useAuth } from "../Config/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const { UserLogin } = useAuth()
    const {err, setError} = useState("")
    const [backError, setBackError] = useState("")
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate()

    const Userhandler = (e) => {
        const { name, value} = e.target;
        console.log(name + "::::::::" + value)
        setUser((pre) => {
            return{
                ...pre,
                [name]: value
            }
        })
    }

    const SubmitHandler = async (e) => {
        e.preventDefault()
        const { email, password } = user
        if(email == "" || password == ""){
            setInterval(() => {
                setError("")
            }, 5000)
            return setError("Fill all Entries")
        }
        try{
            await UserLogin(email, password)
            navigate("/Home")
        } catch (error) {
            
            if(error.code == "auth/user-not-found") {
                setInterval(() => {
                    setError("")
                }, 5000)
                return setError("User Not Found")
            }
            else if (error.code == "auth/wrong-password") {
                setInterval(() => {
                    setError("")
                }, 5000)
            }
            else {
                setInterval(() => {
                    setError("")
                }, 5000)
                return setError(`${error.message}`)
            }
            
        }
    }
    return (
        <div>
            <h1>UML THRIFTY</h1>
        <div className="box">
            {
                err ? (
                    err && <p className="error">{err}</p>
                ) : (
                    backError && <p className="error">{backError}</p>
                )
            }

            <form onSubmit={SubmitHandler} className="form">
                
                <div className="center">
                    <h2>Login Form</h2>
                </div>

                <div className="inputfield">
                    <input type="text" placeholder="Email" value={user.email} name='email' onChange={Userhandler} />
                </div>
                <div className="inputfield">
                    <input type="password" placeholder="Password" value={user.password} name='password' onChange={Userhandler} />
                </div>
                <div className="inputfield">
                    <div className="center">
                        <input type="Submit" value="login" />
                    </div>
                </div>
                <p className="forget"> Don't have an Account? <Link to={"signup"} className="link">{"signup"}</Link> </p>
            </form>
        </div>
        </div>
    )
}

export default Login;