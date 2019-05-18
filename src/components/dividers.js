import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TemplateTabs from './tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeblock";


const styles = theme => ({
    root: {
        marginTop: 60,
    },
    dividers:{
        width: '100%',
        maxWidth: '360px',
        backgroundColor: "white",
    },
    markdown: {
        backgroundColor: "#eeeeee",
    },

});

class Dividers extends React.Component {


    render() {
        const { classes } = this.props;
        const string = `
        import Divider from '@material-ui/core/Divider';
        <List component="nav"}>
        <ListItem button>
        <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem button divider>
        <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
        <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem button>
        <ListItemText primary="Spam" />
        </ListItem>
        </List>`;

        return (
            <div className={classes.root}>

                <TemplateTabs markDown={(
                    <ReactMarkdown className={classes.markdown}
                        source={string}
                        renderers={{ code: CodeBlock }}
                    />

                )} label={"DIVIDER DEMO"} content={(
                    <List component="nav" className={classes.dividers}>
                        <ListItem button>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Trash" />
                        </ListItem>
                        <Divider light />
                        <ListItem button>
                            <ListItemText primary="Spam" />
                        </ListItem>
                    </List>
                )} />

            </div>
        );
    }
}

export default withStyles(styles)(Dividers);