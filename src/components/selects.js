import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TemplateTabs from './tab';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeblock";



const styles = theme => ({
    root: {
        marginTop: 60,
    },
    markdown: {
        backgroundColor: "#eeeeee",
    },
    button: {
        display: 'block',
    
    },
    formControl: {
       
        minWidth: 120,
    },
});
 
class Selects extends React.Component {
    constructor(props){
        super(props);
        this.state={
            age: "",
            open: false,
        }
    }

    handleChange=(event)=>{
        this.setState({
            age: event.target.value
        })
    }

    handleClose=()=>{
        this.setState({
            open: false
        });
    }

    handleOpen=()=>{
        this.setState({
            open: true
        })
    }
    
    render() {
        const { classes } = this.props;
        const { handleClose, handleOpen, handleChange} = this
        const { age, open} = this.state;
        const string = `
        import Select from '@material-ui/core/Select';
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
        <Select
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={age}
        onChange={handleChange}
        inputProps={{
        name: 'age',
        id: 'demo-controlled-open-select',
        }}
        >
        <MenuItem value="">
        <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>`;

        return (
            <div className={classes.root}>

                <TemplateTabs markDown={(
                    <ReactMarkdown className={classes.markdown}
                        source={string}
                        renderers={{ code: CodeBlock }}
                    />

                )} label={"SELECTS DEMO"} content={(
                    <form autoComplete="off">
                        <Button className={classes.button} onClick={handleOpen}>
                            Open the select
                        </Button>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
                            <Select
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={age}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'age',
                                    id: 'demo-controlled-open-select',
                                }}
                            >
                                <MenuItem value="">
                                 <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                )} />

            </div>
        );
    }
}

export default withStyles(styles)(Selects);