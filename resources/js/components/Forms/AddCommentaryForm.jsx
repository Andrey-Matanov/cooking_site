import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { addCommentary } from "../../actions/recipesListActions";

const AddCommentaryForm = ({ recipeId }) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            text: "",
        },
        onSubmit: ({ text }) => {
            dispatch(addCommentary(recipeId, text));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h2>Добавить комментарий</h2>
            <textarea
                value={formik.values.text}
                onChange={formik.handleChange}
                name="text"
                placeholder="Введите комментарий..."
            />
            <button type="submit">Отправить</button>
        </form>
    );
};

export default AddCommentaryForm;
