import React from "react";

export default class ItemAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            image: null,
            imagePreviewUrl: null,
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let form = document.forms.itemAdd;
        this.props.createItem({
            name: form.name.value,
            image: this.state.image,
        });
        // Clear the form and state for the next input.
        form.name.value = "";
        this.state.image = null;
        this.state.imagePreviewUrl = null;
    }

    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                image: file,
                imagePreviewUrl: reader.result,
            });
        };

        reader.readAsDataURL(file);
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (
                <img src={imagePreviewUrl} className={"img-preview"} />
            );
        } else {
            $imagePreview = (
                <div className="previewText">Please select an image.</div>
            );
        }
        return (
            <div>
                <form name="itemAdd" onSubmit={this.handleSubmit}>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="name">Name:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input
                                    type="file"
                                    onChange={(e) => this.handleImageChange(e)}
                                />
                            </td>
                            <td>
                                <div className="img-preview">
                                    {$imagePreview}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button>Add</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }
}

// const ItemAdd = () => {
//     return <div></div>;
// };

// export default ItemAdd;
