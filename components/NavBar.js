import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';

import Grid from '@material-ui/core/Grid';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
    toolbar: {
        [theme.breakpoints.down('md')]: {
            height: 90,
        },
        [theme.breakpoints.up('md')]: {
            height: 80,
        },
        //paddingTop: theme.spacing(1),
        //paddingBottom: theme.spacing(2),
        //verticalAlign: 'middle'
    },
    imgLogo: {
        [theme.breakpoints.up('md')]: {
            width: 50,
            height: 50,
        },
        [theme.breakpoints.down('md')]: {
            width: 50,
            height: 50,
        },
    },
    textTitle: {
        [theme.breakpoints.up('md')]: {
            paddingTop: 15,
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: 15,
        },
        paddingLeft: 5
    },
    logo: {
        display: 'flex',
        padding: 5,
        flexWrap: 'wrap'
    },
    item:{
        margin: 5
    }

}));

export default function NavBar() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>

                <Grid  // Add it here :)
                    container
                    alignItems="center"
                    
                >
                    <Grid item md={4} xs={12} className={classes.logo}>
                        <Link href="/">
                            <a>
                                <img className={classes.imgLogo} src="/logo.svg" alt="my image" />
                            </a>
                        </Link>
                        <Typography className={classes.item, classes.textTitle} variant="h6" color="inherit" noWrap>
                            <strong>Daniel Medeiros Imóveis</strong>
                        </Typography>
                    </Grid>

                    <Grid item md={5}>

                    </Grid>

                    <Grid item md={3} xs={12}>
                        <div className={classes.item}>
                            <PhoneIcon fontSize='small'></PhoneIcon>
                            <span>(81)000000000</span>                           
                            
                        </div>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};