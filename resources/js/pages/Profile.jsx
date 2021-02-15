import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserRecipes } from "../actions/profileActions";

const Profile = ({ recipes, user, id }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserRecipes(id));
    }, [dispatch]);

    const renderedRecipes = recipes.length ? (
        recipes.map((recipe) => (
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
            {id === "1"
                ? "Добавьте свой первый рецепт"
                : "Пользователь еще не добавлял рецепты"}
        </p>
    );

    return (
        <>
            <h1>Профиль</h1>
            <div>
                <h2>Имя</h2>
                <p>{user.name}</p>
            </div>
            <div>
                <h2>{id === "1" ? "Мои рецепты" : "Рецепты пользователя"}</h2>
                <div>{renderedRecipes}</div>
            </div>
            {id === "1" && (
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

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps;
    const index = id - 1;

    return {
        recipes: state.profile.recipes,
        user: state.users[index],
        id,
    };
};

export default connect(mapStateToProps)(Profile);
