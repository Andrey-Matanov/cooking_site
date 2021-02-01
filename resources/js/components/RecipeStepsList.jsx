import React from 'react';
import Ingredients from './Ingerdients.jsx';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';
import { Paper, Grid, Box, Typography } from '@material-ui/core';

// import AddCommentaryForm from '../components/Forms/AddCommentaryForm';
import DifficultyBar from '../components/DifficultyBar.jsx'

const useStyles = makeStyles((theme) => ({
    scrolling: {
        height: '80vh',
        paddingRight: '20px',
        paddingLeft: '20px',
        overflowY: 'scroll',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            display: 'block',
            width: '5px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: '#bfbfbf99',
            borderRadius: '2.5px'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#afb3b5',
            borderRadius: '2.5px'
        },
    },
}))

let formatTime = (sourceTime) => {
    let retVal;
    if (sourceTime <= 60) {
        retVal = sourceTime + ' мин.';
    } else {
        retVal =
            Math.floor(sourceTime / 60) +
            ' ч. ' +
            (sourceTime % 60) +
            ' мин.';
    }
    return retVal;
};

const renderReviews = (reviews) => {
    if (reviews) {
        reviews.map((review) => (
            <div
                style={{
                    backgroundColor: 'lightgray',
                    padding: '5px',
                    borderRadius: '5px',
                    marginBottom: '5px',
                }}
                key={review.id}
            >
                <p>
                    Автор:{' '}
                    {
                        users.find(
                            (user) => user.id === review.authorId
                        ).name
                    }
                </p>
                <p>{review.text}</p>
            </div>
        ))
    } else {
        return <div></div>
    }
}

const RecipeStepsList = (props) => {

    const classes = useStyles();

    const { ingredients, recipe, reviews } = props;

    const {
        name,
        author,
        difficulty,
        image,
        description,
        time,
        rating,
    } = recipe;

    return <Box mt={10}>
                <div style={{marginTop: '20px'}}></div>
                <Grid container className={classes.scrolling} spacing={5}>
                    <Grid item xs={12}>
                        <Paper elevation={3} square={true}>
                            <Box p={2}>
                                <Box mt={3}><Typography variant='h4'>{name}</Typography></Box>
                                <Box my={3}><img src={image} alt={name} /></Box>
                                <Box my={3}>
                                    <p>Автор:{' '}
                                        <Link className='author-link' to='/users'>
                                            {author}
                                        </Link>
                                    </p>
                                </Box>
                                <DifficultyBar diff={Math.floor(Math.random()*11)}/>
                                {/* <DifficultyBar diff={difficulty}/> */}
                                {/* <Box my={3}>Сложность рецепта: {difficulty} / 10</Box> */}
                                <Box my={3}>Время приготовления: {formatTime(Math.floor(Math.random()*150)+20)}</Box>
                                {/* <Box my={3}>Время приготовления: {formatTime(time)} минут</Box> */}
                                <Box my={3}>Рейтинг: {rating}</Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={3} square={true}>
                            <Box p={2}>
                                <Ingredients ingredients={ingredients} />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={3} square={true}>
                            <Box p={2}>
                                <p>Описание: {description}</p>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <div
                            style={{
                                border: '1px solid black',
                                padding: '5px',
                                borderRadius: '5px',
                            }}
                        >
                            <h2 style={{ marginBottom: '10px' }}>Комментарии:</h2>
                            {renderReviews()}
                        </div>
                        {/* <AddCommentaryForm recipeId={recipeId} /> */}
                    </Grid>
                </Grid>
            </Box>
};

export default RecipeStepsList;
