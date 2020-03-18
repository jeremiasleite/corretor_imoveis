import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Endereço
      </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="logradouro"
                        name="logradouro"
                        label="Logradouro"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="numero"
                        name="numero"
                        label="Número"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="bairro"
                        name="bairro"
                        label="Bairro"
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="cidade"
                        name="cidade"
                        label="Cidade"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="estado" name="estado" label="Estado" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="cep"
                        name="cep"
                        label="CEP"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="complemento"
                        name="complemento"
                        label="Complemento"
                        fullWidth
                    />
                </Grid>
                
                
            </Grid>
        </React.Fragment>
    );
}