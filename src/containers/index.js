import React, {Component} from 'react';
import ButtonAppBar from '../components/AppBar/AppBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "../components/home";
import Color from "../components/color";
import { withStyles } from '@material-ui/core/styles';
import navItems from '../components/AppBar/data';

const styles = {
     moveRight:{
         marginLeft:30,
         marginTop:50
     },
     moveLeft:{
         marginLeft:300,
         marginTop:50
     }
  };
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showing: false
        };
  
        this.toggleChildMenu = this.toggleChildMenu.bind(this);
     }
  
     toggleChildMenu() {
        this.setState(state => ({
          showing: !state.showing
        }));
     }
  
      
    render(){
        const { classes } = this.props;
        return(
            <Router>
            <div className="App">
                <ButtonAppBar listData={navItems} sideBarOpen={this.toggleChildMenu} sideBarShow={this.state.showing} />
                <div className={this.state.showing ? classes.moveLeft : classes.moveRight}>
                <Switch >
                <Route path = "/home" component = {Home} />
                <Route path = "/colors" component = {Color} />
                </Switch>
                </div>
            </div>
        </Router>
        );
    }
}
export default withStyles(styles)(App);