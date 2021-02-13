import React, { useState } from "react";
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
    const onSigninSubmit = (e) => {
        e.preventDefault();
        console.log("email: " + email + ", password: " + password);
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
