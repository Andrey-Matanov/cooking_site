import React, { useState } from "react";
import { baseURL } from "../utils";
import Login from "./Login";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../actions/profileActions";
import { useHistory } from "react-router-dom";

const WelcomePage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
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
        const userData = {
            email,
            password,
        };

        const response = await axios.post(loginURL, userData);
        window.localStorage.setItem("currentUserToken", response.data.token);
        dispatch(
            fetchUserData({
                userId: response.data.userid,
                userName: response.data.username,
                userEmail: response.data.useremail,
            })
        );
        history.push("/");
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
