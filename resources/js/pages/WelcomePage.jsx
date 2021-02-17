import React, { useState } from "react";
import { baseURL } from "../utils";
import Login from "./Login";

const WelcomePage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onPasswordChahge = (e) => {
        setPassword(e.target.value);
    };

    const onSigninSubmit = async (e) => {
        e.preventDefault();

        const loginURL = `${baseURL}/api/login`;
        const getInfoURL = `${baseURL}/api/get-user`;

        const userData = {
            email,
            password,
        };

        const jsonData = JSON.stringify(userData);
        console.log(jsonData);

        const token = await fetch(loginURL, {
            method: "POST",
            body: JSON.stringify(userData),
        });
        const json = await token.json();

        console.log(json);
    };

    return (
        <Login
            onSigninSubmit={onSigninSubmit}
            onEmailChange={onEmailChange}
            onPasswordChahge={onPasswordChahge}
            email={email}
            password={password}
        />
    );
};

export default WelcomePage;
