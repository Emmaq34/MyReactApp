import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TemplateTabs from './tab';
import { Charts } from './index';
import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeblock";
const styles = theme => ({
    root: {
        marginTop: 60,
    },

});

class Mark extends React.Component {

    render() {
        const { classes } = this.props;
        const string = `
        import * as Charts from 'react-vis';
        <XYPlot width={700} height={500}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <MarkSeries
        className="mark-series-example"
        strokeWidth={2}
        opacity="0.8"
        sizeRange={[5, 15]}
        data={[
        {x: 1, y: 10, size: 30},
        {x: 1.7, y: 12, size: 10},
        {x: 2, y: 5, size: 1},
        {x: 3, y: 15, size: 12},
        {x: 2.5, y: 7, size: 4}
        ]}
        />
        </XYPlot>`
        const {
            XYPlot,
            XAxis,
            YAxis,
            VerticalGridLines,
            HorizontalGridLines,
            MarkSeries
        } = Charts;

        return (
            <div className={classes.root}>

                <TemplateTabs markDown={(
                    <ReactMarkdown
                        source={string}
                        renderers={{ code: CodeBlock }}
                    />
                )} label={"MARK DEMO"} content={(
                    <XYPlot width={700} height={500}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <MarkSeries
                      className="mark-series-example"
                      strokeWidth={2}
                      opacity="0.8"
                      sizeRange={[5, 15]}
                      data={[
                        {x: 1, y: 10, size: 30},
                        {x: 1.7, y: 12, size: 10},
                        {x: 2, y: 5, size: 1},
                        {x: 3, y: 15, size: 12},
                        {x: 2.5, y: 7, size: 4}
                      ]}
                    />
                  </XYPlot>
                )} />

            </div>
        );
    }
}

export default withStyles(styles)(Mark);