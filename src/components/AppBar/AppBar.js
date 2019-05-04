import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import {Link} from 'react-router-dom';
import * as Icons from '@material-ui/icons/';




const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appbar:{
    height:50,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  show:{
    marginTop:50,
   
  },
  sidebar:{
    width:"20%",
    height:"100vh",
    backgroundColor: theme.palette.background.paper,
    borderRight: "3px solid green",
    position: "absolute"
   
  },
  
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});
class ButtonAppBar extends React.Component {
    state = {
      anchorEl: null,
      showing: false,
      openSideList: false,
    };
    
    handleClick = event => {
      this.setState({ 
        anchorEl: event.currentTarget,
      });
    };
  
    handleClose = () => {
      this.setState({ anchorEl: null });
    };

    sideLitstClick = () => {
      this.setState({
        openSideList: !this.state.openSideList,
      });
    };
  
    render() {
      const { anchorEl } = this.state;
      const { classes } = this.props;
      const {listData} = this.props;
      console.log(listData);
      
      const sidebarData = listData.navItems.map(name =>{
        console.log(name);
        console.log(typeof name.subNavItems);
        var i = 1;
        if(  typeof name.subNavItems === "object" ){
            console.log(1);
            const Icon = Icons[name.icon];
            return(
              <React.Fragment >
              <Link to= {name.url}>
              <ListItem button onClick={this.sideLitstClick}>
                 <ListItemIcon>
                    <Icon />
                 </ListItemIcon>
                 <ListItemText inset primary={name.label} />
                   {this.state.openSideList ? <ExpandLess /> : <ExpandMore />}
               </ListItem>
               </Link>
               {name.subNavItems.map(subSidebar =>{
                const Iconsub = Icons[subSidebar.icon];
                return(
                  <Link to={subSidebar.url}>
                  <Collapse in={this.state.openSideList} timeout="auto" unmountOnExit>
                     <List component="div" disablePadding>
                       <ListItem button className={classes.nested}>
                          <ListItemIcon>
                             <Iconsub />
                          </ListItemIcon>
                          <ListItemText inset primary={subSidebar.label} />
                        </ListItem>
                      </List>
                   </Collapse>
                   </Link>
                   
               )
             })}
             </React.Fragment>
            );  
        }
        else{
          console.log(2);
          console.log(name.icon);
          const Icon = Icons[name.icon];
          return(
            <Link to= {name.url}>
              <ListItem button >
                 <ListItemIcon>
                  <Icon/>
                 </ListItemIcon>
                 <ListItemText inset primary= {name.label} />
               </ListItem>
               </Link>
          )
        }
      })
      
      
      return (
        <div position = "relative" className={classes.root}>
          <AppBar position="absolute" className={classes.appbar}>
          <Toolbar>
          <IconButton className={classes.menuButton} onClick={() => {this.props.sideBarOpen()}} color="inherit" aria-label="Menu">
              <MenuIcon />
          </IconButton>
          

          <Typography variant="title"  className={classes.grow}>
            Title
          </Typography>
          <IconButton  aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
            color="inherit" aria-label="Menu">
               <AccountCircle />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            getContentAnchorEl={null}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleClose}>My account</MenuItem>
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
          </Menu>
          
          </Toolbar> 
        </AppBar>
        <div className = {classes.show} style={{ display: (this.props.sideBarShow ? 'block' : 'none')}}>
            <List className={classes.sidebar}>
               {sidebarData}
            </List>
        </div>
        
        </div>

      );
    }
  }

export default withStyles(styles)(ButtonAppBar);