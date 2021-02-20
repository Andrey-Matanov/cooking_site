import React from "react";
import { Route, Switch } from "react-router-dom";
import Error404 from "./Error404";
import Main from "./Main";
import Profile from "./Profile";
import Recipe from "./Recipe";
import Recipes from "./Recipes";
import Authors from "./Authors";
import Articles from "./Articles";
import LoginPage from "./LoginPage";
import AddRecipe from "./AddRecipe";
import AddArticle from "./AddArticle";
import RegisterPage from "./RegisterPage";
<<<<<<< HEAD
import ImageUpload from "./ImageUpload";
=======
>>>>>>> f8920fb50345ad7ed0dcbc170b4833ec30ac98d3

const RootRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" render={() => <Main />} />
                <Route exact path="/recipes" render={() => <Recipes />} />
                <Route path="/recipes/:id" render={() => <Recipe />} />
                <Route path="/authors" render={() => <Authors />} />
                <Route path="/profile/:id" render={() => <Profile />} />
                <Route path="/add_recipe" render={() => <AddRecipe />} />
                <Route path="/add_article" render={() => <AddArticle />} />
                <Route path="/articles" render={() => <Articles />} />
                <Route path="/login" render={() => <LoginPage />} />
                <Route path="/register" render={() => <RegisterPage />} />
<<<<<<< HEAD
                <Route path="/image" render={() => <ImageUpload />} />
=======
>>>>>>> f8920fb50345ad7ed0dcbc170b4833ec30ac98d3
                <Route render={() => <Error404 />} />
            </Switch>
        </>
    );
};

export default RootRouter;
