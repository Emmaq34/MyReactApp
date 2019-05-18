import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TemplateTabs from './tab';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeblock";


const styles = theme => ({
    root: {
        marginTop: 60,
    },
    
    markdown: {
        backgroundColor: "#eeeeee",
    },

});

class Switches extends React.Component {

    state = {
        checkedA: true,
        checkedB: true,
      };
    
      handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };
    
    render() {
        const { classes } = this.props;
        const string = `
        import Switch from '@material-ui/core/Switch';
        <FormControlLabel
        control={
        <Switch
        checked={this.state.checkedA}
        onChange={this.handleChange('checkedA')}
        value="checkedA"
        />
        }
        label="Secondary"
        />
        `;

        return (
            <div className={classes.root}>

                <TemplateTabs markDown={(
                    <ReactMarkdown className={classes.markdown}
                        source={string}
                        renderers={{ code: CodeBlock }}
                    />

                )} label={"SWITCHES DEMO"} content={(
                    <FormGroup row>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={this.state.checkedA}
                          onChange={this.handleChange('checkedA')}
                          value="checkedA"
                        />
                      }
                      label="Secondary"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={this.state.checkedB}
                          onChange={this.handleChange('checkedB')}
                          value="checkedB"
                          color="primary"
                        />
                      }
                      label="Primary"
                    />
                    <FormControlLabel control={<Switch value="checkedC" />} label="Uncontrolled" />
                    <FormControlLabel disabled control={<Switch value="checkedD" />} label="Disabled" />
                    <FormControlLabel disabled control={<Switch checked value="checkedE" />} label="Disabled" />
                  </FormGroup>
                )} />

            </div>
        );
    }
}

export default withStyles(styles)(Switches);