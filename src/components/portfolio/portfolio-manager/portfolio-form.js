import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form } from "formik";

import TextInput from "../../form-components/text-input";
import SelectField from "../../form-components/select-input";
import ImageDropzone from "../../form-components/dropzone-input";
import TextAreaField from "../../form-components/text-area-field";

const PortfolioForm = (props) => {
    const itemToEdit = props.itemToEdit;
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setEditMode(Object.keys(itemToEdit).length > 0 ? true : false);
    }, [itemToEdit]);

    const deleteImage = (imageType) => {
        axios
            .delete(
                `https://tararichardson.devcamp.space/portfolio/delete-portfolio-image/${itemToEdit.id}?image_type=${imageType}`,
                { withCredentials: true }
            )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => console.log(error.response));
    };

    const buildForm = (values) => {
        let formData = new FormData();

        formData.append("portfolio_item[name]", values.name);
        formData.append("portfolio_item[desccription]", values.description);
        formData.append("portfolio_item[url]", values.url);
        formData.append("portfolio_item[category]", values.category);
        if (values.thumb_image) {
            formData.append("portfolio_item[thumb_image]", values.thumb_image);
        }
        if (values.banner_image) {
            formData.append("portfolio_item[banner_image]", values.banner_image);
        }
        if (values.logo_image) {
            formData.append("portfolio_item[logo_image]", values.logo);
        }

        return formData;
    };

    const handleSubmit = (values) => {
        if (editMode) {
            axios
                .put(
                    `https://tararichardson.devcamp.space/portfolio/portfolio_items`,
                    buildForm(values),
                    { withCredentials: true }
                )
                .then((response) => {
                    console.log("response from PUT endpoint", response);
                    // setEditMode(false);
                    props.setItemToEdit({});
                })
                .catch((error) => console.log("Error from PUT endpoint", error.response));
        } else {
            axios
                .post(
                    `https://tararichardson.devcamp.space/portfolio/portfolio_items`,
                    buildForm(values),
                    { withCredentials: true }
                )
                .then((response) => {
                    console.log("response from POST endpoint", response);
                })
                .catch((error) => console.log("Error from POST endpoint", error.response));
        }
    };

    return (
        <Formik
            initialValues={{
                name: itemToEdit.name || "",
                description: itemToEdit.description || "",
                category: itemToEdit.category || "",
                position: itemToEdit.position || "",
                url: itemToEdit.url || "",
                thumb_image: itemToEdit.thumb_image || "",
                banner_image: itemToEdit.banner_image || "",
                logo: itemToEdit.logo || "",
            }}
            enableReinitialize={true}
            onSubmit={(values) => handleSubmit(values)}
        >
            <Form className="portfolio-form-wrapper">
                <div className="two-columns">
                    <TextInput label="" placeholder="Portfolio Item Name" name="name" />
                    <TextInput label="" placeholder="URL" name="url" />
                </div>
                <div className="two-columns">
                    <TextInput name="position" label="" placeholder="Position" />
                    <SelectField name="category" label="">
                        <option value="eCommerce">eCommerce</option>
                        <option value="Scheduling">Scheduling</option>
                        <option value="Enterprise">Enterprise</option>
                        <option value="Gaming">Gaming</option>
                    </SelectField>
                </div>
                <div className="one-column">
                    <TextAreaField label="" name="description" placeholder="Description" />
                </div>
                <div className="three-columns">
                    {editMode && itemToEdit.thumb_image_url ? (
                        <div className="portfolio-manager-image-wrapper">
                            <img src={itemToEdit.thumb_image_url} alt="Thumbnail" />
                            <button type="button">Remove file</button>
                        </div>
                    ) : (
                        <ImageDropzone field="thumb_image" />
                    )}
                    {editMode && itemToEdit.banner_image_url ? (
                        <div className="portfolio-manager-image-wrapper">
                            <img src={itemToEdit.banner_image_url} alt="Banner" />
                            <button type="button" onClick={() => deleteImage("banner_image")}>
                                Remove file
                            </button>
                        </div>
                    ) : (
                        <ImageDropzone field="banner_image" />
                    )}
                    {editMode && itemToEdit.logo_url ? (
                        <div className="portfolio-manager-image-wrapper">
                            <img src={itemToEdit.logo_url} alt="Logo" />
                            <button type="button" onClick={() => deleteImage("logo")}>
                                Remove file
                            </button>
                        </div>
                    ) : (
                        <ImageDropzone field="logo" />
                    )}
                </div>
                <button type="submit">Save</button>
            </Form>
        </Formik>
    );
};

export default PortfolioForm;
