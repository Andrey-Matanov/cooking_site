import React from "react";
import styled from "styled-components";
import FormInput from "../../Inputs/FormInput";
import FormTextarea from "../../Inputs/FormTextArea";

const Step = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

const AddRecipeFormStep = ({
    number,
    name,
    description,
    image,
    handleChange,
}) => {
    return (
        <Step>
            <p>Шаг № {number}</p>
            <label htmlFor={`step${number}_name`}>Название</label>
            <FormInput
                value={name}
                onChange={handleChange}
                name={`steps[${number - 1}].name`}
            />
            <label htmlFor={`step${number}_description`}>Описание</label>
            <FormTextarea
                value={description}
                onChange={handleChange}
                name={`steps[${number - 1}].description`}
                id={`step${number}`}
            />
        </Step>
    );
};

export default AddRecipeFormStep;
