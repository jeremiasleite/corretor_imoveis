import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from "react-redux";
import AddImagem from '../../components/admin/AddImagem'

const FormDialog = (props) => {    
    const handleClose = () => {
        props.dispatch({ type: 'CLOSE_DIALOG', payload: {} });
    };

    return (
        <div>
            <DialogTitle id="form-dialog-title">Adicionar Imagens</DialogTitle>
            <DialogContent>
                <AddImagem/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
          </Button>
                <Button onClick={handleClose} color="primary">
                    Adicionar
          </Button>
            </DialogActions>
        </div>
    );
}

export default connect(state => state)(FormDialog)