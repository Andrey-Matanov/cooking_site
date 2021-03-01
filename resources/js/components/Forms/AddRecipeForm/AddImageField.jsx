import React from "react";
import { Button, Typography } from "@material-ui/core";
import { baseURL } from "../../../utils";

const AddImageField = ({
    label = "Изображение",
    image,
    formFieldName,
    setFieldValue,
}) => {
    const handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = async () => {
            const response = await fetch(`${baseURL}/api/save`, {
                method: "POST",
                body: JSON.stringify({
                    data: reader.result.slice(5),
                }),
            });
            const json = await response.json();

            setFieldValue(
                formFieldName,
                `${baseURL}/storage/images/${json.path}`
            );
        };

        reader.readAsDataURL(file);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography>{label}</Typography>
            <label htmlFor="upload-photo">
                <input
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                />

                <Button color="secondary" variant="contained" component="span">
                    Загрузить изображение
                </Button>
            </label>

            {image ? (
                <img src={image} alt="recipeImage" width="200" height="200" />
            ) : null}
        </div>
    );
};

export default AddImageField;
