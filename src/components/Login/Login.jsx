// components/User/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebase"; // 경로 확인 필요
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import './Login.css'
// import SignInwithGoogle from "./SignInwithGoogle"; // 파일명 대소문자 확인

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            window.alert("로그인 성공!", { position: "top-center" });
            navigate('/')
        } catch (error) {
            // toast.error(error.message, { position: "bottom-center" });
            window.alert("no!")
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flexColCenter l-wrapper">
            <h3 className="loginBox">Login</h3>

            <div className="email-login">
                <label>Email address </label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="password-login">
                <label>Password </label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className="submit-login">
                <button type="submit" className="button">
                    Submit
                </button>
            </div>

            <p className="GoToRegister text-right">
                New user? <a href="/Register" className="regi">Register Here</a>
            </p>

            {/* <SignInwithGoogle /> */}
        </form>
    );
}

export default Login;
