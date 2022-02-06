import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";

import TextInput from "../../form-components/text-input";
import SelectField from "../../form-components/select-input";
import ImageDropzone from "../../form-components/dropzone-input";

const PortfolioForm = (props) => {
    const itemToEdit = props.itemToEdit;
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setEditMode(Object.keys(itemToEdit).length > 0 ? true : false);
    }, [itemToEdit]);

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
            onSubmit={(values) => console.log(values)}
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
                    <textarea name="description" placeholder="Description" />
                </div>
                <div className="three-columns">
                    <ImageDropzone field="thumb_image" />
                    <ImageDropzone field="banner_image" />
                    <ImageDropzone field="logo_image" />
                </div>
                <button type="submit">Save</button>
            </Form>
        </Formik>
    );
};

export default PortfolioForm;
