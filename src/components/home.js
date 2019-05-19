import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
     root:{
        marginTop:60,
     },
     paper:{
         width:"100%",
         height:"50vh",
         backgroundColor:"#f5f2f0"
        
     },
     font:{
         fontSize:"1.2em"
     }
  });

class Home extends React.Component{

    render(){
        const{classes} = this.props;
        return(
            <div className={classes.root}>
                <Paper  className={classes.paper} elevation={10}>
                <h2>Material UI React</h2>
                <h4 className={classes.font}>React components for faster and easier web development. Build your own design system, or start with Material Design.
                Material-UI components work in isolation. They are self-supporting, and will inject, and only inject, the styles they need to display. They don't rely on any global style-sheets such as normalize.css.
                You can use any of the components as demonstrated in the documentation. Please refer to each component's demo page to see how they should be imported.</h4>
                <h4 className={classes.font}>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</h4>
                <h4 className={classes.font}>Build encapsulated components that manage their own state, then compose them to make complex UIs.</h4>
                
                </Paper>
                
            </div>
            
        );
    }
}

export default withStyles(styles)(Home);