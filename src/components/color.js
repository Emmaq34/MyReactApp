import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
     root:{
        marginTop:50,
     }
  });

class Color extends React.Component{

    render(){
        const{classes} = this.props;
        return(
            <div className={classes.root}>
               <h1>Color</h1>
               <p>With some content</p>
            </div>
        );
    }
}

export default withStyles(styles)(Color);