import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchUserRecipes } from "../actions/profileActions";

const Profile = () => {
    const dispatch = useDispatch();
    const { userId, userName, userEmail, userRecipes } = useSelector(
        (state) => state.profile
    );
    const params = useParams();
    const id = parseInt(params.id);

    useEffect(() => {
        if (!userRecipes.length) {
            dispatch(fetchUserRecipes(userId));
        }
    }, [dispatch]);

    const renderedRecipes = userRecipes.length ? (
        userRecipes.map((recipe) => (
            <div key={recipe.id}>
                <Link
                    style={{ textDecoration: "underline", color: "gray" }}
                    to={`/recipes/${recipe.id}`}
                >
                    {recipe.name}
                </Link>
            </div>
        ))
    ) : (
        <p>
            {id === userId
                ? "Добавьте свой первый рецепт"
                : "Пользователь еще не добавлял рецепты"}
        </p>
    );

    return (
        <>
            <h1>Профиль</h1>
            <div>
                <h2>Имя</h2>
                <p>{userName}</p>
            </div>
            <div>
                <h2>Email</h2>
                <p>{userEmail}</p>
            </div>
            <div>
                <h2>
                    {id === userId ? "Мои рецепты" : "Рецепты пользователя"}
                </h2>
                <div>{renderedRecipes}</div>
            </div>
            {id === userId && (
                <div>
                    <h2>Ссылки</h2>
                    <div>
                        <Link style={{ color: "blue" }} to="/add_recipe">
                            Добавить рецепт
                        </Link>
                    </div>
                    <div>
                        <Link style={{ color: "blue" }} to="/add_article">
                            Добавить статью
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;
