import React, { Component } from 'react'
import { DropzoneArea } from 'material-ui-dropzone'
import { connect } from "react-redux";

const DropzoneAreaExample = (props) => {

    const handleChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <div>
            <DropzoneArea
                filesLimit={5}
                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                dropzoneText="Arraste e solte um arquivo de imagem aqui ou click"
                showFileNames={true}
                showPreviews={true}
                showPreviewsInDropzone={false}
                maxFileSize={5000000}
                onChange={handleChange}
            />            
        </div>

    )

}

export default connect(state => state.createImovel)(DropzoneAreaExample);