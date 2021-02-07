import React from "react";

const AddRecipeFormIngredient = ({
    i,
    id,
    amount,
    ingredients,
    unitId,
    handleChange,
    setFieldValue,
}) => {
    const getUnitName = (unitId) =>
        ["граммы", "миллилитры", "штуки", "ч.л.", "ст.л."][unitId - 1];

    return (
        <div
            style={{
                border: "1px solid black",
                padding: "10px",
                marginBottom: "10px",
            }}
        >
            <select
                style={{ marginBottom: "10px" }}
                value={id}
                onChange={(e) =>
                    setFieldValue(`ingredients[${i}].id`, +e.target.value)
                }
                name={`ingredients[${i}].id`}
            >
                {ingredients.map((ingredient) => (
                    <option key={ingredient.id} value={ingredient.id}>
                        {ingredient.name}
                    </option>
                ))}
            </select>
            <div>
                <label htmlFor={`ingredient${i}_amount`}>
                    Количество{`(${getUnitName(unitId)})`}
                </label>
                <input
                    id={`ingredient${i}_amount`}
                    type="number"
                    value={amount}
                    onChange={handleChange}
                    name={`ingredients[${i}].amount`}
                />
            </div>
        </div>
    );
};

export default AddRecipeFormIngredient;
