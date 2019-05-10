import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TemplateTabs from './tab';
import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeblock";
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Grid from '@material-ui/core/Grid';



const styles = theme => ({
     root:{
        marginTop:60,
     },
     avatar: {
        margin: 10,
      },
      pinkAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: pink[500],
      },
      greenAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: green[500],
      },
  });
  
 

  class Avatars extends React.Component{
    
    render(){
        const{classes} = this.props;
        const string = `
        import Avatar from '@material-ui/core/Avatar';
        import FolderIcon from '@material-ui/icons/Folder';
        import PageviewIcon from '@material-ui/icons/Pageview';
        import AssignmentIcon from '@material-ui/icons/Assignment';
        <Avatar className={classes.avatar}>
          <FolderIcon />
        </Avatar>
        <Avatar className={classes.pinkAvatar}>
          <PageviewIcon />
        </Avatar>
        <Avatar className={classes.greenAvatar}>
          <AssignmentIcon />
        </Avatar> `  

        return(
            <div className={classes.root}>
               
               <TemplateTabs markDown = {(
                   <ReactMarkdown
                   source={string}
                   renderers={{ code: CodeBlock }}
               />
          
            )} label={"AVATAR DEMO"} content={( 
               <div >
                  <Grid container justify="center" alignItems="center">
      <Avatar className={classes.avatar}>
        <FolderIcon />
      </Avatar>
      <Avatar className={classes.pinkAvatar}>
        <PageviewIcon />
      </Avatar>
      <Avatar className={classes.greenAvatar}>
        <AssignmentIcon />
      </Avatar>
    </Grid>
                </div> 
            )}/>
            
            </div>
        );
    }
}

export default withStyles(styles)(Avatars);