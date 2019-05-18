import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TemplateTabs from './tab';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeblock";
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root: {
        marginTop: 60,
    },
    snackbar: {
        margin: theme.spacing.unit,
    },
    markdown: {
        backgroundColor: "#eeeeee",
    },

});
const action = (
    <Button color="secondary" size="small">
      lorem ipsum dolorem
    </Button>
  );
class Snackbars extends React.Component {


    render() {
        const { classes } = this.props;
        const string = `
        import SnackbarContent from '@material-ui/core/SnackbarContent';
        <SnackbarContent
        className={classes.snackbar}
        message={
          'I love candy. I love cookies. I love cupcakes. 
        }
        />`;

        return (
            <div className={classes.root}>

                <TemplateTabs markDown={(
                    <ReactMarkdown className={classes.markdown}
                        source={string}
                        renderers={{ code: CodeBlock }}
                    />

                )} label={"SNACKBARS DEMO"} content={(
                    <div>
                        <SnackbarContent className={classes.snackbar} message="I love snacks." action={action} />
                        <SnackbarContent
                            className={classes.snackbar}
                            message={
                                'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
                            }
                        />
                        <SnackbarContent
                            className={classes.snackbar}
                            message="I love candy. I love cookies. I love cupcakes."
                            action={action}
                        />
                        <SnackbarContent
                            className={classes.snackbar}
                            message={
                                'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
                            }
                            action={action}
                        />
                    </div>

                )} />

            </div>
        );
    }
}

export default withStyles(styles)(Snackbars);