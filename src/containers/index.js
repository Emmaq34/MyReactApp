import React, {Component} from 'react';
import ButtonAppBar from '../components/AppBar/AppBar';
import {BrowserRouter as Router, Switch, Route, HashRouter} from 'react-router-dom';
import Footer from "../components/Footer";
import Home from "../components/home";
import Color from "../components/color";
import Button from "../components/button";
import { withStyles } from '@material-ui/core/styles';
import BarChart from "../components/barchart";
import AreaChart from "../components/areachart";
import LineChart from "../components/linechart";
import PieChart from "../components/piechart";
import StackedBarChart from "../components/stackedbarchart";
import ScatterPlotChart from "../components/scatterplotchart";
import IconPage from '../components/icon';
import Tables from '../components/table';
import MyTabs from '../components/tabs';
import Spinner from '../components/spinner';
import Avatars  from '../components/avatar';
import Chips from '../components/chips';
import Dividers from '../components/dividers';
import Snackbars from '../components/snackbars';
import Switches from '../components/switches';
import Textfields from '../components/textfields';
import Selects from '../components/selects';
import '../../node_modules/react-vis/dist/style.css';
import { connect } from "react-redux";
import { showAction } from "../components/Actions/showAction";
import  { hideAction }  from "../components/Actions/hideAction";


const styles = {
     moveRight:{
         marginLeft:30,
         marginTop:50
     },
     moveLeft:{
         marginLeft:300,
         marginTop:50
     },
     contents:{
         width:"100%",
         height:"100vh",
         overflow:"auto",
     }
  };
  
class App extends Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
          showing: true
        };
  
        this.toggleChildMenu = this.toggleChildMenu.bind(this);
     }
  
     toggleChildMenu() {
        this.setState(state => ({
          showing: !state.showing
        }));
     }
     */
    
     
    render(){
        const { classes } = this.props;
        const {listData} = this.props;
        const {links} = this.props;
        
        return(
            <Router basename={"/MyReactApp"}>
            <div className="App">
                <ButtonAppBar data= {listData} menueLinks={links}/>
                <div className={this.props.switching ? classes.moveLeft : classes.moveRight}>
                <div className={classes.contents}>
                <Switch >
                <Route exact path = "/" component = {Home} />
                <Route path = "/colors" component = {Color} />
                <Route path = "/components/button" component = {Button} />
                <Route path = "/charts/bar" component = {BarChart} />
                <Route path = "/charts/area" component = {AreaChart} />
                <Route path = "/charts/line" component = {LineChart} />
                <Route path = "/charts/pie" component = {PieChart} />
                <Route path = "/charts/stackbar" component = {StackedBarChart} />
                <Route path = "/charts/scatterplot" component = {ScatterPlotChart} />
                <Route path = "/icons" component = {IconPage} />
                <Route path = "/components/table" component = {Tables} />
                <Route path = "/components/tabs" component = {MyTabs} />
                <Route path = "/components/spinner" component = {Spinner} />
                <Route path = "/components/avatar" component = {Avatars} />
                <Route path = "/components/chips" component = {Chips} />
                <Route path = "/components/dividers" component = {Dividers} />
                <Route path = "/components/snackbars" component = {Snackbars} />
                <Route path = "/components/switches" component = {Switches} />
                <Route path = "/components/textfields" component = {Textfields} />
                <Route path = "/components/selects" component = {Selects} />
                </Switch>
                <Footer/>
                </div>
                </div>
            </div>
        </Router>
        );
    }
}
const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    showAction: () => dispatch(showAction),
    hideAction: () => dispatch(hideAction)
  });
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
