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

import {Link, NavLink} from 'react-router-dom';
import * as Icons from '@material-ui/icons/';

import { connect } from "react-redux";
import { showAction } from "../../components/Actions/showAction";
import  { hideAction }  from "../../components/Actions/hideAction";



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appbar:{
    height:60,
  },
  grow: {
    flexGrow: 1,
    color:"white"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  show:{
    marginTop:60,
   
  },
  sidebar:{
    height:"100vh",
    overflow:"auto",
    borderRight:"3px solid green",
    position: "absolute"
   
  },
  
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});
class ButtonAppBar extends React.Component {
    state = {
      showing: false,
      openSideList: false,
    };
   
   handleClickAction = (event) => {
    this.props.handleClick(event);
  };

  handleCloseAction = () => {
    this.props.handleClose();
  };
    sideListClick = (oneState) => {
      this.props.sideList(oneState);
    };
 
  
    render() {
      const { anchorEl } = this.props;
      const { classes } = this.props;


      const menueItems = this.props.menueLinks.map(i =>{
        return(
          <MenuItem onClick={this.handleCloseAction}><a href={i.url}>{i.name}</a></MenuItem>
        )
      });
      
      const sidebarData = this.props.data.map(name =>{
        
        if(typeof name.subNavItems === "object"){
            //console.log('the this inside subnavitem ', this)
            //console.log('name url ', name.url)
            //console.log('name label ', name.label)
            const Icon = Icons[name.icon];
            if(this.props[name.label]=== undefined){
              if(window.location.pathname.indexOf(name.url) > -1){
                this.sideListClick(name.label)
              }
            }
            return(
              <React.Fragment >
              <ListItem button onClick={()=>{this.sideListClick(name.label)}}>
                 <ListItemIcon>
                    <Icon />
                 </ListItemIcon>
                 <ListItemText inset primary={name.label} />
                   {this.props[name.label] ? <ExpandLess /> : <ExpandMore />}
               </ListItem>
               {name.subNavItems.map(subSidebar =>{
                const Iconsub = Icons[subSidebar.icon];
                return(
                  <NavLink to={subSidebar.url}>
                  <Collapse in={this.props[name.label]} timeout="auto" unmountOnExit>
                     <List component="div" disablePadding>
                       <ListItem button className={classes.nested}>
                          <ListItemIcon>
                             <Iconsub />
                          </ListItemIcon>
                          <ListItemText inset primary={subSidebar.label} />
                        </ListItem>
                      </List>
                   </Collapse>
                   </NavLink> 
               )
             })}
             </React.Fragment>
            );  
        }
        else{
          //console.log(2);
          //console.log(name.icon);
          const Icon = Icons[name.icon];
          return(
            <NavLink exact to= {name.url} >
              <ListItem button >
                 <ListItemIcon>
                  <Icon/>
                 </ListItemIcon>
                 <ListItemText inset primary= {name.label} />
               </ListItem>
               </NavLink>
          )
        }
      })
      
      
      return (
        <div position = "relative" className={classes.root}>
          <AppBar position="absolute" className={classes.appbar}>
          <Toolbar>
          <IconButton className={classes.menuButton} onClick={this.props.switching? this.props.hideAction : this.props.showAction} color="inherit" aria-label="Menu">
              <MenuIcon />
          </IconButton>
          

          <Typography variant="title"  className={classes.grow}>
            Material UI Libarary
          </Typography>
          <IconButton
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={ this.handleClickAction}
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
            onClose={this.handleCloseAction}
          >
          {menueItems}
          </Menu>
          
          </Toolbar> 
        </AppBar>
        <div className = {classes.show} style={{ display: (this.props.switching ? '' : 'none')}}>
            <List className={classes.sidebar}>
               {sidebarData}
            </List>
        </div>
        
        </div>

      );
    }
  }
  const mapStateToProps = state => ({
    ...state,
  });
  const mapDispatchToProps = dispatch => {
   return{
    showAction: () => dispatch(showAction),
    hideAction: () => dispatch(hideAction),
    handleClick: (event) => {dispatch({type: 'openMenue', event : event})},
    handleClose: () => {dispatch({type: 'closeMenue'})},
    sideList: (oneState) => {dispatch({type: 'sidelist', oneState : oneState})},
   };
    
  };

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ButtonAppBar));
