import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import {
    fetchUserRecipes,
    changeUserName,
    deleteUser,
    fetchUserData,
} from "../actions/profileActions";
import ChangePasswordForm from "../components/Forms/ChangePasswordForm.jsx";
import DeleteDialog from "../components/PagesComponents/ProfilePage/DeleteDialog.jsx";

import {
    Container,
    Grid,
    Box,
    Paper,
    Typography,
    IconButton,
    Button,
    Dialog,
    TextField,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { userLogout } from "../actions/authorizationActions";
import {deleteRecipe} from "../actions/recipesListActions";
import {fetchRecipe} from "../actions/recipeActions";

const Profile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userName, userEmail, userRecipes } = useSelector(
        (state) => state.profile
    );

    const { userId } = useSelector(
        (state) => state.authorization
    )

    const params = useParams();
    const id = parseInt(params.id);

    const [openPassword, setOpenPassword] = useState(false);
    const [openDeleteUser, setOpenDeleteUser] = useState(false);
    const [nameChange, setNameChange] = useState(false);
    const [newNameValue, setNewNameValue] = useState(userName);

    useEffect(() => {
        dispatch(fetchUserData(id));
        dispatch(fetchUserRecipes(id));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchUserData(id));
        dispatch(fetchUserRecipes(id));
    }, [id]);

    const applyEditName = () => {
        setNameChange(false);
        dispatch(changeUserName(userId, newNameValue));
    };

    const handleDeleteUser = () => {
        setOpenDeleteUser(false);
        dispatch(deleteUser(userId));
        dispatch(userLogout());
        window.localStorage.removeItem("currentUserToken");
        history.push("/");
    };

    const renderedRecipes = userRecipes.length ? (
        userRecipes.map((recipe) => (
            <Grid item key={recipe.id} xs={12}>
                <Box py={1}>
                    <Paper elevation={1}>
                        <Grid container alignItems="center">
                            <Grid item xs={9}>
                                <Box p={1}>
                                    <Link
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                        to={`/recipes/${recipe.id}`}
                                    >
                                        {recipe.name}
                                    </Link>
                                </Box>
                            </Grid>
                            {id === userId ? (
                                <Grid item xs={3}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                    >
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                color: "inherit",
                                            }}
                                            to={`/edit_recipe/${recipe.id}`}
                                        >
                                            Изменить рецепт
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={() => {
                                            dispatch(deleteRecipe(recipe.id))
                                                .then(() => dispatch(fetchUserRecipes(recipeId)))
                                                .catch((err) => console.error(err))
                                        }}
                                    >Удалить рецепт
                                    </Button>
                                </Grid>
                            ) : (
                                <div />
                            )}
                        </Grid>
                    </Paper>
                </Box>
            </Grid>
        ))
    ) : (
        <Grid item xs={12}>
            {id === userId
                ? "Добавьте свой первый рецепт"
                : "Пользователь еще не добавлял рецепты"}
        </Grid>
    );

    return (
        <>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={2}>
                        <Box py={1}>
                            <Typography variant="h4">Профиль</Typography>
                        </Box>
                    </Grid>
                    <Grid item container alignItems="center" xs={12}>
                        <Grid item>
                            <Box pr={1} minHeight="32px">
                                <Typography variant="body1">
                                    <b>Имя: </b>
                                </Typography>
                            </Box>
                        </Grid>
                        {nameChange ? (
                            <Box minHeight="32px">
                                <TextField
                                    placeholder="Новое имя"
                                    onInput={(e) =>
                                        setNewNameValue(e.target.value)
                                    }
                                />
                                <IconButton
                                    variant="contained"
                                    size="small"
                                    onClick={applyEditName}
                                >
                                    <CheckIcon />
                                </IconButton>
                                <IconButton
                                    variant="contained"
                                    size="small"
                                    onClick={() => setNameChange(false)}
                                >
                                    <ClearIcon />
                                </IconButton>
                            </Box>
                        ) : id === userId ? (
                            <Grid item container xs={8}>
                                <Grid item>
                                    <Box
                                        pr={1}
                                        minHeight="32px"
                                        lineHeight="32px"
                                    >
                                        <Typography variant="body1">
                                            {userName}{" "}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box pr={1} minHeight="32px">
                                        <IconButton
                                            variant="contained"
                                            size="small"
                                            onClick={() => setNameChange(true)}
                                        >
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid item>
                                <Box pr={1}>
                                    <Typography variant="body1">
                                        {userName}{" "}
                                    </Typography>
                                </Box>
                            </Grid>
                        )}
                    </Grid>
                    {id === userId ? (
                        <div>
                            <Grid item container alignItems="center" xs={12}>
                                <Grid item>
                                    <Box pr={1}>
                                        <Typography variant="body1">
                                            <b>E-mail: </b>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box pr={1}>
                                        <Typography variant="body1">
                                            {userEmail}{" "}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box pr={1}>
                                        <IconButton
                                            variant="contained"
                                            size="small"
                                        >
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item container alignItems="center" xs={12}>
                                <Grid item>
                                    <Box pr={1}>
                                        <Typography variant="body1">
                                            <b>Пароль: </b>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box pr={1}>
                                        <Typography variant="body1">
                                            ******
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box pr={1}>
                                        <IconButton
                                            variant="contained"
                                            size="small"
                                            onClick={() => setOpenPassword(true)}
                                        >
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Grid>
                            </Grid>
                        </div>
                    ) : (
                        <div />
                    )}
                    <Grid item xs={12}>
                        <Box py={1}>
                            <Typography variant="h5">Рецепты</Typography>
                        </Box>
                    </Grid>
                    {renderedRecipes}
                    {id === userId ? (
                        <Grid item xs={12}>
                            <Link
                                style={{ textDecoration: "none" }}
                                to="/add_recipe"
                            >
                                <Box py={1}>
                                    <Button variant="contained" size="small">
                                        Добавить рецепт
                                    </Button>
                                </Box>
                            </Link>
                        </Grid>
                    ) : (
                        <div />
                    )}
                    {id === userId ? (
                        <Grid item xs={12}>
                            <Button size="small" onClick={() => setOpenDeleteUser(true)}>
                                Удалить профиль
                            </Button>
                        </Grid>
                    ) : (
                        <div />
                    )}
                </Grid>
            </Container>
            <Dialog
                open={openPassword}
                onClose={() => setOpenPassword(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <ChangePasswordForm
                    userId={userId}
                    handleClose={() => setOpenPassword(false)}
                />
            </Dialog>
            <Dialog
                open={openDeleteUser}
                onClose={() => setOpenDeleteUser(true)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <DeleteDialog
                    handleClose={() => setOpenDeleteUser(false)}
                    handleDelete={handleDeleteUser}
                />
            </Dialog>
        </>
    );
};

export default Profile;
