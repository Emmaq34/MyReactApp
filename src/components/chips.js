import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TemplateTabs from './tab';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeblock";


const styles = theme => ({
    root: {
        marginTop: 60,
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing.unit / 2,
    },
    chip: {
        margin: theme.spacing.unit / 2,
    },
    markdown: {
        backgroundColor: "#eeeeee",
    },

});

class Chips extends React.Component {
    state = {
        chipData: [
            { key: 0, label: 'Angular' },
            { key: 1, label: 'jQuery' },
            { key: 2, label: 'Polymer' },
            { key: 3, label: 'React' },
            { key: 4, label: 'Vue.js' },
        ],
    };

    handleDelete = data => () => {
        if (data.label === 'React') {
            alert('Why would you want to delete React?! :)'); // eslint-disable-line no-alert
            return;
        }

        this.setState(state => {
            const chipData = [...state.chipData];
            const chipToDelete = chipData.indexOf(data);
            chipData.splice(chipToDelete, 1);
            return { chipData };
        });
    };
    render() {
        const { classes } = this.props;
        const string = `
        <Paper className={classes.paper}>
        {this.state.chipData.map(data => {
        let icon = null;
        if (data.label === 'React') {
        icon = <TagFacesIcon />;
        }
        return (
        <Chip
        key={data.key}
        icon={icon}
        label={data.label}
        onDelete={this.handleDelete(data)}
        className={classes.chip}
        />
        );
        })}
        </Paper> `;

        return (
            <div className={classes.root}>

                <TemplateTabs markDown={(
                    <ReactMarkdown className={classes.markdown}
                        source={string}
                        renderers={{ code: CodeBlock }}
                    />

                )} label={"CHIP DEMO"} content={(
                    <Paper className={classes.paper}>
                        {this.state.chipData.map(data => {
                            let icon = null;

                            if (data.label === 'React') {
                                icon = <TagFacesIcon />;
                            }

                            return (
                                <Chip
                                    key={data.key}
                                    icon={icon}
                                    label={data.label}
                                    onDelete={this.handleDelete(data)}
                                    className={classes.chip}
                                />
                            );
                        })}
                    </Paper>

                )} />

            </div>
        );
    }
}

export default withStyles(styles)(Chips);