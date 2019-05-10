import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TemplateTabs from './tab';
import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeblock";
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
     root:{
        marginTop:60,
     },
     progress:{
        margin: theme.spacing.unit * 2,
     }
  });
  
 

  class Spinner extends React.Component{
    
    render(){
        const{classes} = this.props;
        const string = `
        import CircularProgress from '@material-ui/core/CircularProgress';
        <CircularProgress className={classes.progress} />
        <CircularProgress className={classes.progress} color="secondary" /> `;

        return(
            <div className={classes.root}>
               
               <TemplateTabs markDown = {(
                   <ReactMarkdown
                   source={string}
                   renderers={{ code: CodeBlock }}
               />
          
            )} label={"SPINNER DEMO"} content={( 
               <div>
                  <div>
                    <CircularProgress className={classes.progress} />
                    <CircularProgress className={classes.progress} color="secondary" />
                 </div>
                </div> 
            )}/>
            
            </div>
        );
    }
}

export default withStyles(styles)(Spinner);