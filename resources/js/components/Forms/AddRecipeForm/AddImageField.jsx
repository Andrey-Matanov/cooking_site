import React from "react";
import { baseURL } from "../../../utils";

const AddImageField = ({ image, formFieldName, setFieldValue }) => {
    return (
        <div>
            <input
                type="file"
                onChange={(e) => {
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
                }}
            />
            {image ? (
                <img src={image} alt="recipeImage" width="200" height="200" />
            ) : null}
        </div>
    );
};

export default AddImageField;
