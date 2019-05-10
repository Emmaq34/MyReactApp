import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TemplateTabs from './tab';
import {Charts} from './index';
import { MarkdownElement as Markdown } from '@material-ui/docs/';
import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeblock";

const styles = theme => ({
     root:{
        marginTop:60,
     },
     
  });

  class ScatterPlotChart extends React.Component{

    render(){
        const{classes} = this.props;
        const string = `
        import * as Charts from 'react-vis';
        <XYPlot
        width={700}
        height={500}
        >
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
            {
              x: 15.07701776924299,
              y: 13.148711736360678
            },
            {
              x: 4.2213660435955624,
              y: 10.755779193290609
            },
            {
              x: 10.8885611452339,
              y: 7.73601126628626
            },
            {
              x: 3.9676223996429894,
              y: 10.939619169401752
            },
            {
              x: 11.379219026743282,
              y: 10.43536293828344
            },
            {
              x: 9.81595821132942,
              y: 4.5131797897198345
            },
            {
              x: 19.16688923674418,
              y: 8.861316957391434
            },
            {
              x: 8.051148951835504,
              y: 5.48868068371565
            },
            {
              x: 2.1012052166109507,
              y: 1.832911203667007
            },
            {
              x: 14.251114232724436,
              y: 2.840374112120503
            },
            {
              x: 16.689160132910388,
              y: 8.822316479888208
            },
            {
              x: 11.780389013238771,
              y: 9.898352315192401
            },
            {
              x: 15.633437881764705,
              y: 11.740784458127118
            },
            {
              x: 19.018549176013725,
              y: 3.8757702577168507
            },
            {
              x: 0.5292679164688563,
              y: 13.705733440974438
            },
            {
              x: 9.747546323310807,
              y: 0.9735147992492221
            },
            {
              x: 18.332312922760977,
              y: 4.304326423652691
            },
            {
              x: 6.250626018622869,
              y: 17.909121018000093
            },
            {
              x: 3.1550138862265875,
              y: 6.848324418241236
            },
            {
              x: 13.501875269121633,
              y: 3.689317801152412
            },
            {
              x: 3.09610369206641,
              y: 2.6335013500810867
            }
          ]}
        />
        </XYPlot>`;
        const {
            XYPlot,
            MarkSeries,
            XAxis,
            YAxis,
            VerticalGridLines,
            HorizontalGridLines
        } = Charts;
    
       // const {width, height} = this.props;
        return(
            <div className={classes.root}>
               
               <TemplateTabs markDown = {(
                <ReactMarkdown
                source={string}
                renderers={{ code: CodeBlock }}
                />
            )} label={"SCATTER PLOT CHART DEMO"} content={( 
               <div>
                 <XYPlot
        width={700}
        height={500}
      >
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
            {
              x: 15.07701776924299,
              y: 13.148711736360678
            },
            {
              x: 4.2213660435955624,
              y: 10.755779193290609
            },
            {
              x: 10.8885611452339,
              y: 7.73601126628626
            },
            {
              x: 3.9676223996429894,
              y: 10.939619169401752
            },
            {
              x: 11.379219026743282,
              y: 10.43536293828344
            },
            {
              x: 9.81595821132942,
              y: 4.5131797897198345
            },
            {
              x: 19.16688923674418,
              y: 8.861316957391434
            },
            {
              x: 8.051148951835504,
              y: 5.48868068371565
            },
            {
              x: 2.1012052166109507,
              y: 1.832911203667007
            },
            {
              x: 14.251114232724436,
              y: 2.840374112120503
            },
            {
              x: 16.689160132910388,
              y: 8.822316479888208
            },
            {
              x: 11.780389013238771,
              y: 9.898352315192401
            },
            {
              x: 15.633437881764705,
              y: 11.740784458127118
            },
            {
              x: 19.018549176013725,
              y: 3.8757702577168507
            },
            {
              x: 0.5292679164688563,
              y: 13.705733440974438
            },
            {
              x: 9.747546323310807,
              y: 0.9735147992492221
            },
            {
              x: 18.332312922760977,
              y: 4.304326423652691
            },
            {
              x: 6.250626018622869,
              y: 17.909121018000093
            },
            {
              x: 3.1550138862265875,
              y: 6.848324418241236
            },
            {
              x: 13.501875269121633,
              y: 3.689317801152412
            },
            {
              x: 3.09610369206641,
              y: 2.6335013500810867
            }
          ]}
        />
      </XYPlot>
                </div> 
            )}/>
            
            </div>
        );
    }
}

export default withStyles(styles)(ScatterPlotChart);