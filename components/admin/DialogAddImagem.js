import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from "react-redux";
import { DropzoneArea } from 'material-ui-dropzone'
import fetch from 'unfetch';
import Swal from 'sweetalert2'
import Router from 'next/router';

const FormDialog = (props) => {
    const router = useRouter()
    const { pid } = router.query
    const [files, setFiles] = useState([])
    
    const handleClose = () => {
        props.dispatch({ type: 'CLOSE_DIALOG', payload: {} });
    };
    const handleChange = (event) => {
        setFiles(event)
    }
    console.log(pid)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData()        
        data.append('file', files[0])
        data.append('upload_preset', 'daniel')
        const API_URL = 'https://api.cloudinary.com/v1_1/ddodogvjv/image/upload'
        const response = await fetch(API_URL, {
            method: 'POST',
            body: data
        })
        const responseFile = await response.json()
        handleClose()        
        if (response.ok) {
            const res2 = await fetch(props.config.urlBase + '/api/imovel/upload/'+pid, {
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT',
                body:  JSON.stringify(responseFile)
            })
            if (res2.ok) {
                Router.push('/admin/imovel/'+pid)
                Swal.fire({ icon: 'success', text: 'Imagem Adicionada com sucesso!' })
                
            } else {
                Swal.fire({ icon: 'error', text: 'Erro ao adicionar a imagem!' })
            }
        } else {
            Swal.fire({ icon: 'error', text: 'Erro ao adicionar a imagem!' })
        }

    }
    return (
        <React.Fragment>
            <DialogTitle id="form-dialog-title">Adicionar Imagens</DialogTitle>
            <DialogContent dividers={true}>
                <DropzoneArea
                    filesLimit={1}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    dropzoneText="Arraste e solte um arquivo de imagem aqui ou click"
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    showFileNames={true}
                    showPreviews={true}
                    showPreviewsInDropzone={false}
                    maxFileSize={5000000}
                    onChange={handleChange}
                    submitButtonText={true}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
          </Button>
                <Button onClick={handleSubmit} color="primary">
                    Adicionar
          </Button>
            </DialogActions>
        </React.Fragment>
    );
}

export default connect(state => state)(FormDialog)