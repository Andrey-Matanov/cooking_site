import React from "react";
import {
    List,
    ListItem,
    Box,
    Typography,
    Grid,
} from "@material-ui/core";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrumstickBite, faCheese, faCandyCane, faBolt } from '@fortawesome/free-solid-svg-icons';

const Nutrition = (props) => {
    const { ingredients } = props;

    let nutritionValues = {
        calorie: 0,
        protein: 0,
        fat: 0,
        carb: 0,
    }

    ingredients.map(item => {
        nutritionValues.calorie += item.calorie * item.count;
        nutritionValues.protein += item.protein * item.count;
        nutritionValues.fat += item.fat * item.count;
        nutritionValues.carb += item.carb * item.count;
    })

    nutritionValues ? Object.keys(nutritionValues).forEach(item => {
        nutritionValues[item] = Math.ceil(nutritionValues[item], 0)
    }) : null

    return (
        <div>
            <Box>
                <Typography variant="h5">Пищевая ценность</Typography>
                <Typography variant="caption">Приблизительное значение на основе ингредиентов</Typography>
            </Box>
            <List>
                <ListItem>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Typography variant="body1">
                                <FontAwesomeIcon icon={faBolt} /> Энергитическая ценность:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                {nutritionValues.calorie} ккал
                            </Typography>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Typography variant="body1">
                                <FontAwesomeIcon icon={faDrumstickBite} /> Протеины:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                {nutritionValues.protein} г
                            </Typography>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Typography variant="body1">
                                <FontAwesomeIcon icon={faCandyCane} /> Углеводы:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                {nutritionValues.carb} г
                            </Typography>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Typography variant="body1">
                                <FontAwesomeIcon icon={faCheese} /> Жиры:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                {nutritionValues.fat} г
                            </Typography>
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
        </div>
    );
};

export default Nutrition;
