import Layout from '../../components/admin/Layout'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router'
import { connect } from "react-redux";
import fetch from 'unfetch';

import CreateImovel1 from '../../components/admin/CreateImovel1'
import CreateImovelEndereco from '../../components/admin/CreateImovelEndereco';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const steps = ['Dados Principais', 'Endereço'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <CreateImovel1 />;
        case 1:
            return <CreateImovelEndereco />;
        default:
            throw new Error('Unknown step');
    }
}

function Checkout(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const finalizar = () => {
        cadastrarImovel();
        setActiveStep(activeStep + 1);        
    };

    const novoCadastro = () => {
        //props.dispatch({type: 'CREATE_IMOVEL_RESET', payload: {}});        
        setActiveStep(0);        
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    
    const cadastrarImovel = async ()=>{
        
        const API_URL = props.config.urlBase + '/api/imovel';
        try {            
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(props.createImovel)
              })
            if(response.ok){
                //ok
                props.dispatch({type: 'CREATE_IMOVEL_RESET', payload: {}});
            }else{
                const { error } = await response.json();
                setErro(error)
            }            
        } catch (error) {
            console.error(
                'You have an error in your code or there are Network issues.',
                error
            )
            throw new Error(error)
        }
    }
    //console.log(props)
    return (
        <Layout>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Adicionar Novo Imóvel
          </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map(label => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Imóvel criado com sucesso.
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={novoCadastro}
                                >
                                    Cadastrar novo imóvel
                                </Button>
                            </React.Fragment>
                        ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <div className={classes.buttons}>
                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} className={classes.button}>
                                                Voltar
                                            </Button>
                                        )}
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={activeStep === steps.length-1 ? finalizar : handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                                        </Button>
                                    </div>
                                </React.Fragment>
                            )}
                    </React.Fragment>
                </Paper>
            </main>
        </Layout>
    );
}

export default connect(state => state)(Checkout)