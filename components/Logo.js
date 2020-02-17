import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      width: '100%',
      height: '100%',
      padding: 10,
    },
    [theme.breakpoints.down('md')]: {      
      width: 100,
      height: 100,
      padding: 3,
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    
    
  }
}));

export default function Logo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="logo" width='100%' height='100%' />
        </a>
      </Link>
    </div>
  );
};
