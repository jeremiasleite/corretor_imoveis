import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    toolbar: {
        [theme.breakpoints.down('md')]: {
            height: 80,
        },
        [theme.breakpoints.up('md')]: {
            minHeight: 128,
        },
       
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        verticalAlign: 'middle'
    },
    imgLogo: {
        [theme.breakpoints.up('md')]: {
            width: 100,
            height: 100,
        },
        [theme.breakpoints.down('md')]: {
            width: 50,
            height: 50,
        },
    },
    textTitle: {
        [theme.breakpoints.up('md')]: {
            paddingTop: 40,
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: 15,
        },
        paddingLeft: 5
    }
}));

export default function NavBar() {
    const classes = useStyles();
    return (
    <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
            <img className={classes.imgLogo} src="/logo.svg" alt="my image" />
            <Typography className={classes.textTitle} variant="h6" color="inherit" noWrap>
                <strong>Daniel Medeiros Imóveis</strong>
            </Typography>
        </Toolbar>
    </AppBar>
    );
};