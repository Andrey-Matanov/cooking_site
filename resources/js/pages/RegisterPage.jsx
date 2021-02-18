import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "../utils";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Register from "./Register";

const RegisterPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onNameChange = (e) => {
        setName(e.target.value);
    };

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onRegisterSubmit = async (e) => {
        e.preventDefault();

        const registerURL = `${baseURL}/api/register`;
        const userData = {
            name,
            email,
            password,
        };

        await axios.post(registerURL, userData);
        history.push("/login");
    };

    return (
        <Register
            onRegisterSubmit={onRegisterSubmit}
            onNameChange={onNameChange}
            onEmailChange={onEmailChange}
            onPasswordChange={onPasswordChange}
            name={name}
            email={email}
            password={password}
        />
    );
};

export default RegisterPage;
