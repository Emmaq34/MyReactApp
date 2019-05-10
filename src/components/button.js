import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TemplateTabs from './tab';
import Button from '@material-ui/core/Button';
import { MarkdownElement as Markdown } from '@material-ui/docs/';
import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeblock";

const styles = theme => ({
     root:{
        marginTop:60,
     },
     section:{
        border: "1px solid black",
     },
     markdown:{
         backgroundColor:"black",
     }
  });

  class Buttons extends React.Component{

    render(){
        const{classes} = this.props;
        const string = `
        import { Button } from "ZapWebCommon/lib/js/"
        <Button
            color="primary | secondary"
            variant="outlined | contained"
            size="small | medium | large"
        >
            Button
        </Button>
        <Button disabled>Disabled Button</Button> `;

        return(
            <div className={classes.root}>
               
               <TemplateTabs markDown = {(
                   <ReactMarkdown
                   source={string}
                   renderers={{ code: CodeBlock }}
               />
          
            )} label={"BUTTON DEMO"} content={( 
               <div>
                  <h3>Default</h3>
                    <div className= {classes.section}>
                        <Button>Default</Button>
                        <Button color="primary">
                            Primary
                        </Button>
                        <Button color="secondary">
                            Secondary
                        </Button>
                        <Button disabled>
                            Disabled
                        </Button>
                    </div>
                    <h3>Outlined</h3>
            <div className= {classes.section}>
                <Button variant="outlined">Default</Button>
                <Button variant="outlined" color="primary">
                    Primary
                </Button>
                <Button variant="outlined" color="secondary">
                    Secondary
                </Button>
                <Button variant="outlined" disabled>
                    Disabled
                </Button>
            </div>
            <h3>Contained</h3>
            <div className= {classes.section}>
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
            </div>
            <h3>Size</h3>
            <div className= {classes.section}>
                <Button size="small" variant="contained">
                    Small
                </Button>
                <Button size="medium" variant="contained" color="secondary">
                    Medium
                </Button>
                <Button size="medium" variant="contained" disabled>
                    Disabled
                </Button>
                <Button size="large" variant="contained" color="primary">
                    Large
                </Button>
            </div>
                </div> 
            )}/>
            
            </div>
        );
    }
}

export default withStyles(styles)(Buttons);