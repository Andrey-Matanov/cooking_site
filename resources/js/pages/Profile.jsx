import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Profile = ({
    recipes,
    myRecipesIds,
    articles,
    myArticleIds,
    user,
    id,
}) => {
    const myRecipes = recipes.filter((recipe) =>
        myRecipesIds.includes(recipe.id)
    );

    const myArticles = articles.filter((article) =>
        myArticleIds.includes(article.id)
    );

    const renderedRecipes = myRecipes.length ? (
        myRecipes.map((recipe) => (
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
            {id === 0
                ? "Добавьте свой первый рецепт"
                : "Пользователь еще не добавлял рецепты"}
        </p>
    );

    const renderedArticles = myArticles.length ? (
        myArticles.map((article) => (
            <div key={article.id}>
                <Link
                    style={{ textDecoration: "underline", color: "gray" }}
                    to="/articles/"
                >
                    {article.name}
                </Link>
            </div>
        ))
    ) : (
        <p>
            {id === 0
                ? "Добавьте свою первую статью"
                : "Пользователь еще не добавлял статьи"}
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
                <h2>{id === 0 ? "Мои рецепты" : "Рецепты пользователя"}</h2>
                <div>{renderedRecipes}</div>
            </div>
            <div>
                <h2>{id === 0 ? "Мои статьи" : "Статьи пользователя"}</h2>
                <div>{renderedArticles}</div>
            </div>
            {id === 0 && (
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

    return {
        recipes: state.recipesObject.recipes,
        myRecipesIds: state.users[id].recipesIds,
        articles: state.articles,
        myArticleIds: state.users[id].articlesIds,
        user: state.users[id],
        id,
    };
};

export default connect(mapStateToProps)(Profile);
