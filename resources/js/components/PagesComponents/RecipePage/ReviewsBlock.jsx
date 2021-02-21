import React from "react";
import {
    List,
    ListItem,
    Box,
    Grid,
    Paper,
    Typography,
    makeStyles,
} from "@material-ui/core";

import AddCommentaryForm from "../../Forms/AddCommentaryForm.jsx";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    reviewsFormPaper: {
        width: "100%",
    },
}));

const ReviewsBlock = ({ reviews }) => {
    const userLoggedIn = useSelector((state) => state.profile.userLoggedIn);
const ReviewsBlock = () => {
    const classes = useStyles();
    const renderReviews = (reviews) => {
        if (reviews) {
            return reviews.map((review, i) => (
                <ListItem key={`review${i}`}>
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
                </ListItem>
            ));
        }
    };

    return (
        <Box>
            <Typography variant="h5">Комментарии</Typography>
            <List>
                {renderReviews(reviews)}
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
