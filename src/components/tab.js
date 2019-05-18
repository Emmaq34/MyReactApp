import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    
  },
  appBar:{
    
    color:'black',
  },
  tab:{
    backgroundColor:"#0091ea",
    color: "white"
  },
  paper:{
    height:'70vh',
    overflow: 'auto',
    backgroundColor:"#f5f2f0"
  },
  content:{
    height:"100%",
    backgroundColor:"#f5f2f0",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  markdown:{
    backgroundColor:"#f5f2f0",
  }
 
});

class TemplateTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ 
      value
      });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Tabs className={classes.tab} value={value} onChange={this.handleChange}>
            <Tab label={this.props.label || "Item One"} />
            <Tab label="SAMPLE CODE" />
          </Tabs>
        </AppBar>
        <Paper className={classes.paper} elevation={10}>
        {value === 0 && <div className={classes.content}>{this.props.content}</div>}
        {value === 1 && <div className={classes.markdown}>{this.props.markDown}</div>}
        </Paper>
  
      </div>
    );
  }
}

TemplateTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemplateTabs);