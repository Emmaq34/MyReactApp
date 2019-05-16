import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TemplateTabs from './tab';
import Button from '@material-ui/core/Button';

import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeblock";
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
     root:{
        marginTop:60,
     },
     button:{
        display:"flex",
        justifyContent :"space-evenly",
        flexDirection:"column",
        alignItems: "center",
        height:"100%",
     },
     markdown:{
        backgroundColor:"#eeeeee",

     },
     margin: {
        margin: 2*theme.spacing.unit,
      },
      extendedIcon: {
        marginRight: 2*theme.spacing.unit,
      },
  });

  class Buttons extends React.Component{

    render(){
        const{classes} = this.props;
        const string = `
        import { Button } from "@material-ui/core/Button"
        <Button size="small" className={classes.margin}>
        Small
        </Button>
        <Button size="medium" className={classes.margin}>
         Medium
        </Button>
        <Button size="large" className={classes.margin}>
        Large
        </Button> `;

        return(
            <div className={classes.root}>
               
               <TemplateTabs   markDown = {(
                   <ReactMarkdown className={classes.markdown}
                   source={string}
                   renderers={{ code: CodeBlock }}
               />
          
            )} label={"BUTTON DEMO"} content={( 
               <div className={classes.button}> 

                 <div>
                    <Button size="small" className={classes.margin}>
                    Small
                    </Button>
                    <Button size="medium" className={classes.margin}>
                    Medium
                    </Button>
                    <Button size="large" className={classes.margin}>
                    Large
                    </Button>
                </div>
                <div>
                    <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                    Small
                    </Button>
                    <Button variant="outlined" size="medium" color="primary" className={classes.margin}>
                    Medium
                    </Button>
                    <Button variant="outlined" size="large" color="primary" className={classes.margin}>
                    Large
                    </Button>
                </div>
                <div>
                    <Button variant="contained" size="small" color="primary" className={classes.margin}>
                    Small
                    </Button>
                    <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                    Medium
                    </Button>
                    <Button variant="contained" size="large" color="primary" className={classes.margin}>
                    Large
                    </Button>
                </div>
                <div>
                    <Fab size="small" color="secondary" aria-label="Add" className={classes.margin}>
                    <AddIcon />
                    </Fab>
                    <Fab size="medium" color="secondary" aria-label="Add" className={classes.margin}>
                    <AddIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="Add" className={classes.margin}>
                    <AddIcon />
                    </Fab>
                </div>
                <div>
                    <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="Add"
                    className={classes.margin}
                    >
                    <NavigationIcon className={classes.extendedIcon} />
                    Extended
                    </Fab>
                    <Fab
                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label="Add"
                    className={classes.margin}
                    >
                    <NavigationIcon className={classes.extendedIcon} />
                    Extended
                    </Fab>
                    <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
                    <NavigationIcon className={classes.extendedIcon} />
                    Extended
                    </Fab>
                </div>
              </div> 
            )}/>
            
            </div>
        );
    }
}

export default withStyles(styles)(Buttons);