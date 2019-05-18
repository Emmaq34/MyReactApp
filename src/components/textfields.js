import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TemplateTabs from './tab';
import TextField from '@material-ui/core/TextField';
import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeblock";


const styles = theme => ({
    root: {
        marginTop: 60,
    },
    markdown: {
        backgroundColor: "#eeeeee",
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },

});

class Textfields extends React.Component {
    
    state = {
        name: 'Name',
      
    };
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;
        const string = `
        import TextField from '@material-ui/core/TextField';
        <form className={classes.container} noValidate autoComplete="off">
        <TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
        value={this.state.name}
        onChange={this.handleChange('name')}
        margin="normal"
        />            
        </form>`;

        return (
            <div className={classes.root}>

                <TemplateTabs markDown={(
                    <ReactMarkdown className={classes.markdown}
                        source={string}
                        renderers={{ code: CodeBlock }}
                    />

                )} label={"TEXTFIELDS DEMO"} content={(
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="standard-name"
                            label="Name"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />

                        <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue="Required"
                            className={classes.textField}
                            margin="normal"
                        />

                        <TextField
                            error
                            id="standard-error"
                            label="Error"
                            defaultValue="Error"
                            className={classes.textField}
                            margin="normal"
                        />

                        <TextField
                            disabled
                            id="standard-disabled"
                            label="Disabled"
                            defaultValue="Disabled"
                            className={classes.textField}
                            margin="normal"
                        />

                        <TextField
                            id="standard-password-input"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                        />

                        <TextField
                            id="standard-read-only-input"
                            label="Read Only"
                            defaultValue="Read only"
                            className={classes.textField}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </form>
                )} />

            </div>
        );
    }
}

export default withStyles(styles)(Textfields);