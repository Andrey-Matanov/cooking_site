import React from 'react';
import { Link } from 'react-router-dom';

import DifficultyBar from './DifficultyBar.jsx'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Paper, Typography, Grid, ButtonBase } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles((theme) => ({
    image: {
        width: 160,
        height: 160,
        alignItems: 'center',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
}))

const RecipeItem = (props) => {

    const classes = useStyles();

    const { id, name, author, time, difficulty, rating, description, image } = props;

    const formatTime = (sourceTime) => {
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

    return (
        <Box my={0}>
            <Paper elevation={3} square={true}> 
                <Box p={4}>
                    <Grid container direction='row' alignItems='center' spacing={2}>
                        <Grid item className={classes.image}>
                            <img className={classes.img} src={'https://via.placeholder.com/150'} alt='recipe'></img>
                        </Grid>
                        <Grid container item sm direction='column' justify='space-between' spacing={1}>
                            <Grid item>
                                <Link to={`/recipes/${id}`} className={classes.link}>
                                    <Typography variant='h4'>{name}</Typography>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Typography variant='h5'>{author}</Typography>
                            </Grid>
                            <Grid item container xs alignItems='center' spacing={2}>
                                <Grid item><AccessTimeIcon /></Grid>
                                <Grid item><Typography variant='body1'>{formatTime(time)}</Typography></Grid>
                            </Grid>
                            <Grid item>
                                <DifficultyBar diff={difficulty}/>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1'>Рейтинг: {rating}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body2'>{description}</Typography>
                            </Grid>
                        </Grid>
                    </Grid> 


                    {/* <Link to={`/recipes/${id}`}>
                        <Typography vriant='h2'>{name}</Typography>
                    </Link>
                    <Typography variant='h4'>{author}</Typography>
                    <div>
                        <img src={image} alt='recipe'></img>
                        <div>
                            <Box>
                                <AccessTimeIcon />
                                <p>{formatTime(time)}</p>
                            </Box>
                            <div className='recipe-difficuilty'>
                                <DifficultyBar diff={difficulty}/>
                            </div>
                            <div className='recipe-rating'>
                                <p>Рейтинг: {rating}</p>
                            </div>
                            <p className='recipe-item-text'>{description}</p>
                        </div>
                    </div> */}
                </Box>
            </Paper>
        </Box>
    );
};

export default RecipeItem;
