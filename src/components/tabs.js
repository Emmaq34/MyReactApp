import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TemplateTabs from './tab';
import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeblock";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



const styles = theme => ({
     root:{
        marginTop:60,
     },
     paper: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
      },
      table: {
        minWidth: 700,
        height: "50vh",
      },
  });
  
 

  class MyTabs extends React.Component{
    state = {
        value: 0,
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
      };
    render(){
        const{classes} = this.props;
        const { value } = this.state;
        const string = `
        import AppBar from '@material-ui/core/AppBar';
        import Tabs from '@material-ui/core/Tabs';
        import Tab from '@material-ui/core/Tab';
        <AppBar position="static">
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
        </AppBar> `;

        return(
            <div className={classes.root}>
               
               <TemplateTabs markDown = {(
                   <ReactMarkdown
                   source={string}
                   renderers={{ code: CodeBlock }}
               />
          
            )} label={"TAB DEMO"} content={( 
               <div>
                  <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        {value === 0 && <div>Item One</div>}
        {value === 1 && <div>Item Two</div>}
        {value === 2 && <div>Item Three</div>}
                </div> 
            )}/>
            
            </div>
        );
    }
}

export default withStyles(styles)(MyTabs);