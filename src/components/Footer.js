import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    footer:{
       bottom:0,
       position:"fixed",
    },
 });
class Footer extends React.Component{
  render(){
    const{classes} = this.props;
    return(
        <div className= {classes.footer}>
          © 2019 Material UI React
        </div>
      );
  }

}

export default  withStyles(styles)(Footer);