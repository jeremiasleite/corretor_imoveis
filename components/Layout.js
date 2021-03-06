import NavBar from "./NavBar";
import Footer from "./Footer";
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';

const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%"
};

const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column"
};

const Layout = props => (
    <div className="Layout" style={layoutStyle}>
        <React.Fragment>
            <CssBaseline />
            {/*<NavBar/>*/}
            <Header></Header>
            <div className="Content" style={contentStyle}>
                {props.children}
            </div>
            <Footer />
        </React.Fragment>
    </div>
);

export default Layout;