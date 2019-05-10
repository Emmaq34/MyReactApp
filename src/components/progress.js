import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TemplateTabs from './tab';
import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeblock";
import LinearProgress from '@material-ui/core/LinearProgress';


const styles = theme => ({
     root:{
        marginTop:60,
     },
     progress:{
         marginTop:30,
     }
  });
  
 

  class Progress extends React.Component{
    
    render(){
        const{classes} = this.props;
        const string = `
        import LinearProgress from '@material-ui/core/LinearProgress';
        <LinearProgress />
        <br />
        <LinearProgress color="secondary" /> `  

        return(
            <div className={classes.root}>
               
               <TemplateTabs markDown = {(
                   <ReactMarkdown
                   source={string}
                   renderers={{ code: CodeBlock }}
               />
          
            )} label={"PROGRESS DEMO"} content={( 
               <div className={classes.progress}>
                  <LinearProgress />
                    <br />
                <LinearProgress color="secondary" />
                </div> 
            )}/>
            
            </div>
        );
    }
}

export default withStyles(styles)(Progress);