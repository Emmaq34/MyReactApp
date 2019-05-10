import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
     root:{
        marginTop:60,
     },
     paper:{
         width:"100%",
         height:"50vh"
     }
  });

class Home extends React.Component{

    render(){
        const{classes} = this.props;
        return(
            <div className={classes.root}>
                <Paper  className={classes.paper} elevation={10}>
                <h2>
                React components for faster and easier web development. Build your own design system, or start with Material Design.
                Material-UI components work in isolation. They are self-supporting, and will inject, and only inject, the styles they need to display. They don't rely on any global style-sheets such as normalize.css.
                You can use any of the components as demonstrated in the documentation. Please refer to each component's demo page to see how they should be imported.
                </h2>
                </Paper>
                
            </div>
            
        );
    }
}

export default withStyles(styles)(Home);