import React from "react";
import styled from "styled-components";

const FormTextarea = styled.textarea`
    flex-basis: 100%;
    resize: none;
`;

const AddRecipeFormStep = ({ number, description, image, handleChange }) => {
    return (
        <div className="step">
            <p>Шаг № {number}</p>
            <FormTextarea
                value={description}
                onChange={handleChange}
                name={`steps[${number - 1}].description`}
                id={`step${number}`}
            />
        </div>
    );
};

export default AddRecipeFormStep;
