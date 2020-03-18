import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function AddressForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Dados Principais
      </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="titulo"
                        name="titulo"
                        label="Titulo"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="tipoImovel"
                        select
                        label="Tipo de Imovel"
                        fullWidth
                    >
                        <MenuItem value={1}>Casa</MenuItem>
                        <MenuItem value={2}>Apartamento</MenuItem>
                        <MenuItem value={3}>Imóvel Comercial</MenuItem>
                        <MenuItem value={4}>Terreno</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="condicaoImovel"
                        select
                        label="Transação"
                        fullWidth
                    >
                        <MenuItem value={1}>Comprar</MenuItem>
                        <MenuItem value={2}>Alugar</MenuItem>
                        <MenuItem value={3}>Imóveis Novos</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="situacao"
                        select
                        label="Situação do Imóvel"
                        fullWidth
                    >
                        <MenuItem value={1}>Comprar</MenuItem>
                        <MenuItem value={2}>Alugar</MenuItem>
                        <MenuItem value={3}>Imóveis Novos</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="area"
                        name="area"
                        label="Área útil (m²)"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid> 
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="area_total"
                        name="area_total"
                        label="Área total (m²) (Opcional)"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid> 
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="quartos"
                        name="quartos"
                        label="Quartos"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="banheiros"
                        name="banheiros"
                        label="Banheiros"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid> 
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="suites"
                        name="suites"
                        label="Suítes"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid> 
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="garage"
                        name="garage"
                        label="Vagas de Garages"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        multiline={true}
                        id="descricao"
                        name="descricao"
                        label="Descrição do Imóvel"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="valor"
                        name="valor"
                        label="Valor de Venda"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="codominio"
                        name="codominio"
                        label="Condomínio (R$/mês)"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid> 
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="iptu"
                        name="iptu"
                        label="IPTU (R$/ano)"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid>           
                
            </Grid>
        </React.Fragment >
    );
}