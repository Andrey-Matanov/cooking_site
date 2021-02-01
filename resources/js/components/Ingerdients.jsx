import React from 'react';
import { List, ListItem, Divider, Box, Typography, Grid } from '@material-ui/core';

const Ingredients = (props) => {

    const { ingredients } = props;

    const renderIngredientsList = (ingredients) => {
        if (ingredients) {
            return ingredients.map(item => (
                <>
                    <ListItem key={item.ingredient_id}>
                        <Grid container justify='space-between'>
                            <Grid item>
                                <Typography variant='body1'>{item.ingredient_name}:</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1'>{item.count} {item.unit_name}</Typography>
                            </Grid>
                        </Grid>
                        {/* <ListItemText variant="body1">{item.ingredient_name}: {item.count} {item.unit_name}</ListItemText> */}
                    </ListItem>
                    <Divider />
                </>
            ))
        } else {
            return [];
        }
    }

    return <div>
                <Box><Typography variant='h5'>Ингредиенты</Typography></Box>
                <List>
                    {renderIngredientsList(ingredients)}
                </List>
            </div>;
};

export default Ingredients;
