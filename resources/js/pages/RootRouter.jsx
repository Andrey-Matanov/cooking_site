import React from "react";
import { Route, Switch } from "react-router-dom";
import Error404 from "./Error404";
import Main from "./Main";
import Profile from "./Profile";
import Recipe from "./Recipe";
import Recipes from "./Recipes";
import Authors from "./Authors";
import Login from "./Login";
import Articles from "./Articles";
import WelcomePage from "./WelcomePage";
import AddRecipe from "./AddRecipe";
import AddArticle from "./AddArticle";

const RootRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" render={() => <Main />} />
                <Route exact path="/recipes" render={() => <Recipes />} />
                <Route path="/recipes/:id" render={() => <Recipe />} />
                <Route path="/authors" render={() => <Authors />} />
                <Route
                    path="/profile/:id"
                    render={(props) => (
                        <Profile id={props.match.params.id - 1} />
                    )}
                />
                <Route path="/add_recipe" render={() => <AddRecipe />} />
                <Route path="/add_article" render={() => <AddArticle />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="/articles" render={() => <Articles />} />
                <Route path="/welcomePage" render={() => <WelcomePage />} />
                <Route render={() => <Error404 />} />
            </Switch>
        </>
    );
};

export default RootRouter;
