import React from "react";
import styled from "styled-components";
import FormInput from "../../Inputs/FormInput";
import FormTextarea from "../../Inputs/FormTextArea";
import AddImageField from "./AddImageField";

const Error = styled.div`
    color: red;
`;

const Step = styled.div`
    padding: 10px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

const AddRecipeFormStep = ({
    index,
    name,
    description,
    image,
    errors,
    handleChange,
    setFieldValue,
    removeCurrentStep,
}) => {
    console.log(errors);
    return (
        <Step>
            <p>Шаг № {index + 1}</p>
            <label htmlFor={`step${index + 1}_name`}>Название</label>
            <FormInput
                value={name}
                onChange={handleChange}
                name={`steps[${index}].name`}
            />
            {typeof errors === "object" && errors[index] ? (
                <Error>{errors[index].name}</Error>
            ) : null}
            <label htmlFor={`step${index + 1}_description`}>Описание</label>
            <FormTextarea
                value={description}
                onChange={handleChange}
                name={`steps[${index}].description`}
                id={`step${index + 1}`}
            />
            {typeof errors === "object" && errors[index] ? (
                <Error>{errors[index].description}</Error>
            ) : null}
            <div>
                <p>Изображение</p>
                <AddImageField
                    image={image}
                    formFieldName={`steps[${index}].image`}
                    setFieldValue={setFieldValue}
                />
            </div>
            <button onClick={removeCurrentStep}>Удалить текущий шаг</button>
        </Step>
    );
};

export default AddRecipeFormStep;
