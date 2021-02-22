import React from "react";
import AddCommentaryForm from "../../Forms/AddCommentaryForm.jsx";
import { useSelector } from "react-redux";
import {
    List,
    ListItem,
    Box,
    Grid,
    Paper,
    Typography,
    makeStyles,
} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteCommentary} from "../../../actions/recipesListActions";


const useStyles = makeStyles((theme) => ({
    reviewsFormPaper: {
        width: "100%",
    },
    button: {
        margin: theme.spacing(1),
    },
}));


const ReviewsBlock = () => {
    const classes = useStyles();
    const userLoggedIn = useSelector((state) => state.profile.userLoggedIn);
    const userId = useSelector(state => state.profile.userId);
    const reviewsList = useSelector(state => state.recipe.reviews)
    const renderReviews = (reviewsList) => {
        if (reviewsList) {
            return reviewsList.map((review, i) =>
                (<ListItem key={`review${i}`}>
                    <Paper elevation={1}>
                        <Box p={2}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Box py={1}>
                                        <Typography variant="body1">
                                            {review.user_name}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box py={1}>
                                        <Typography variant="body2">
                                            {review.description}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                        {userId === review.user_id ? <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<DeleteIcon/>}
                            onClick={deleteCommentary}
                        >
                            Удалить
                        </Button> : null}

                </ListItem>
            ));
        }
    };

    return (
        <Box>
            <Typography variant="h5">Комментарии</Typography>
            <List>
                {renderReviews(reviewsList)}
                <ListItem>
                    <Paper elevation={1} className={classes.reviewsFormPaper}>
                        {userLoggedIn ? (
                            <Box p={2}>
                                <AddCommentaryForm />
                            </Box>
                        ) : null}
                    </Paper>
                </ListItem>
            </List>
        </Box>
    );
};

export default ReviewsBlock;
