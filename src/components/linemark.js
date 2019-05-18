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

class Linemark extends React.Component {

    render() {
        const { classes } = this.props;
        const string = `
        import * as Charts from 'react-vis';
        <XYPlot width={700} height={500}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineMarkSeries
        className="linemark-series-example"
        style={{
        strokeWidth: '3px'
        }}
        lineStyle={{ stroke: 'red' }}
        markStyle={{ stroke: 'blue' }}
        data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]}
        />
        <LineMarkSeries
        className="linemark-series-example-2"
        curve={'curveMonotoneX'}
        data={[{ x: 1, y: 11 }, { x: 1.5, y: 29 }, { x: 3, y: 7 }]}
        />
        </XYPlot>`
        const {
            XYPlot,
            XAxis,
            YAxis,
            VerticalGridLines,
            HorizontalGridLines,
            LineMarkSeries
        } = Charts;

        return (
            <div className={classes.root}>

                <TemplateTabs markDown={(
                    <ReactMarkdown
                        source={string}
                        renderers={{ code: CodeBlock }}
                    />
                )} label={"LINEMARK DEMO"} content={(
                    <XYPlot width={700} height={500}>
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis />
                        <YAxis />
                        <LineMarkSeries
                            className="linemark-series-example"
                            style={{
                                strokeWidth: '3px'
                            }}
                            lineStyle={{ stroke: 'red' }}
                            markStyle={{ stroke: 'blue' }}
                            data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 15 }]}
                        />
                        <LineMarkSeries
                            className="linemark-series-example-2"
                            curve={'curveMonotoneX'}
                            data={[{ x: 1, y: 11 }, { x: 1.5, y: 29 }, { x: 3, y: 7 }]}
                        />
                    </XYPlot>
                )} />

            </div>
        );
    }
}

export default withStyles(styles)(Linemark);