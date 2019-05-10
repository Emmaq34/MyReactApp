import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
     root:{
        marginTop:60,
     },
     iframe:{
        height:"100vh",
        width:"100%"
     },
  });

class Color extends React.Component{

    render(){
        const{classes} = this.props;
        return(
            <iframe className= {classes.iframe}
            	title='page-colors-iframe'
            	src='https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=3F51B5&secondary.color=F44336'
            /> 
        );
    }
}

export default withStyles(styles)(Color);