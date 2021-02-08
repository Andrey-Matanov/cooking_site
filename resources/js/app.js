import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import rootReducer from "./reducers";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, lightGreen } from "@material-ui/core/colors";
import BasicLayout from "./components/Layouts/BasicLayout";
import "./index.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: lightGreen[500],
        },
    },
});

if (document.getElementById("root")) {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <BasicLayout />
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>,
        document.getElementById("root")
    );
}
