import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useFormikContext } from "formik";

const ImageDropzone = (props) => {
    const [files, setFiles] = useState([]);

    const formikProps = useFormikContext();
    const onDrop = useCallback((acceptedFiles) => {
        formikProps.setFieldValue(props.field, acceptedFiles);
        setFiles(
            acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) }))
        );
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    const style = {
        alignItems: "center",
        padding: "20px",
        borderWidth: 2,
        borderColor: "#eeeeee",
        backgroundColor: "#fafafa",
        borderStyle: "dashed",
        transition: "border .24s ease-in-out",
    };

    return (
        <div className="dropzone-input-wrapper" {...getRootProps({ style })}>
            <input className="dropzone-input" {...getInputProps} />
            Drag and drop a file here!
            {files.length > 0 ? <img src={files[0].preview} alt="testing" /> : null}
        </div>
    );
};

export default ImageDropzone;
