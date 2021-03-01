import React, { useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import {
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
} from "@material-ui/core";

const AddRecipeFormIngredient = ({
    currentNumber,
    currentId,
    currentName,
    currentAmount,
    ingredients,
    errors,
    touched,
    usedIngredients,
    setFieldValue,
    unitId,
    handleChange,
    handleBlur,
}) => {
    const getUnitName = (unitId) =>
        ["граммы", "миллилитры", "штуки", "ч.л.", "ст.л."][unitId - 1];

    useEffect(() => {
        if (ingredients.length) {
            console.log("Ingredient" + currentName + " - rerender");
        }
    });

    const Ingredient = ({ index, style }) => {
        const isCurrent = ingredients[index].id === currentId;
        const isDisabled =
            usedIngredients.some(
                (ingredient) => ingredient.id === ingredients[index].id
            ) && ingredients[index].id !== currentId;

        return (
            <button
                disabled={isDisabled}
                onClick={() =>
                    setFieldValue(
                        `ingredients[${currentNumber}].id`,
                        ingredients[index].id
                    )
                }
                type="button"
                style={{
                    ...style,
                    color: isCurrent
                        ? "green"
                        : isDisabled
                        ? "lightray"
                        : "black",
                }}
            >
                {ingredients[index].name}
            </button>
        );
    };

    console.log(currentNumber);
    console.log(errors);

    return (
        <Card variant="outlined" style={{ marginBottom: "10px" }}>
            <CardContent>
                <Typography
                    variant="body1"
                    color="primary"
                    style={{ marginBottom: "10px" }}
                >
                    Выбранный ингредиент: {currentName}
                </Typography>

                <div>
                    <List
                        height={150}
                        itemCount={ingredients.length}
                        itemSize={35}
                        width={300}
                    >
                        {Ingredient}
                    </List>
                </div>
                <div>
                    <TextField
                        fullwidth="true"
                        type="number"
                        id={`ingredients[${currentNumber}].amount`}
                        name={`ingredients[${currentNumber}].amount`}
                        label={`Количество(${getUnitName(unitId)})`}
                        value={currentAmount}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                            typeof touched === "object" &&
                            touched[currentNumber] &&
                            touched[currentNumber].amount &&
                            typeof errors === "object" &&
                            Boolean(errors[currentNumber]) &&
                            Boolean(errors[currentNumber].amount)
                        }
                        helperText={
                            typeof touched === "object" &&
                            touched[currentNumber] &&
                            touched[currentNumber].amount &&
                            errors &&
                            errors[currentNumber] &&
                            errors[currentNumber].amount
                        }
                    />
                </div>
                <Button
                    color="secondary"
                    variant="contained"
                    type="button"
                    onClick={() => {
                        setFieldValue(
                            "ingredients",
                            [...usedIngredients].filter(
                                (ingredient) => ingredient.id !== currentId
                            )
                        );
                    }}
                >
                    Удалить текущий ингрендиент
                </Button>
            </CardContent>
        </Card>
    );
};

export default AddRecipeFormIngredient;
