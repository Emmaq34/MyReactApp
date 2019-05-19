import React, { Component } from 'react';
import * as Icons from '@material-ui/icons/';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeblock";

const styles = theme => ({
    pageicons:{
       marginTop:60,
       widthin:"100%",
       height:"100vh",
    },
    icon:{
       color: "#3f51b5",
    },
 });

 class IconPage extends Component {
  constructor(props) {
      super(props);
      this.state = {
          selected: null,
      };
      this.iconsComp = null;
  }

  onSelect(key) {
      this.setState({
          selected: key
      });
  }

  handleClose = () => {
      this.setState({ selected: false });
  };

  buildIconComp() {
      if(this.iconsComp) return this.iconsComp;

      const iconsComp = [];

      for(let key in Icons) {
          const Icon = Icons[key];
          const className = key === this.state.selected ? 'selected' : '';
          const { classes } = this.props;

          iconsComp.push(
              <Button className = {className} 
                  key={'icon-' + key}
                  onClick={this.onSelect.bind(this, key)}
              >
                  <Icon className={classes.icon}/>
              </Button>
          );
      };

      this.iconsComp = iconsComp;

      return this.iconsComp;
  }

  buildCodeSample() {
    const string = `
    import { Icons } from "@material-ui/icons/";
    const IconComponent = Icons['${this.state.selected}'];
    return <div><IconComponent /></div>; `;
      return (
        <ReactMarkdown
        source={string}
        renderers={{ code: CodeBlock }}
    />
      )
  }

  renderModal() {
      const {selected} = this.state;

      if(!selected) return;

      const Icon = Icons[selected];

      return (
          <Dialog
              open={!!selected}
              onClose={this.handleClose}
              title={<div className='modal-icon-title'>Sample Usage for Icon {selected}<Icon /></div>}
              
          >
              <DialogTitle>Sample Usage for Icon {selected}<Icon /></DialogTitle>
              {this.buildCodeSample()}
              <DialogActions>
              <IconButton aria-label="Close"  onClick={this.handleClose}>
                  <CloseIcon />
              </IconButton>
             </DialogActions>
          </Dialog>
      )
  }

  render() {
      return (
          <div className='page-icons'>
              <h3>Click an Icon to see sample usage</h3>
              <div>{this.buildIconComp()}</div>
              {this.renderModal()}
          </div>
      )
  }
}

export default withStyles(styles)(IconPage);