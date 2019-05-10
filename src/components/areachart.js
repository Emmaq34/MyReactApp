import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TemplateTabs from './tab';
import {Charts} from './index';
import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeblock";
const styles = theme => ({
     root:{
        marginTop:60,
     },
     
  });

  class AreaChart extends React.Component{

    render(){
        const{classes} = this.props;
        const string = `
        import * as Charts from 'react-vis';
        <XYPlot
        width={500}
        height={500}
        >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <AreaSeries
          data={[
            {
              x: 0,
              y: 10
            },
            {
              x: 1,
              y: 10.105733267081789
            },
            {
              x: 2,
              y: 10.199111355803335
            },
            {
              x: 3,
              y: 9.787061894661585
            },
            {
              x: 4,
              y: 10.476702337891172
            },
            {
              x: 5,
              y: 9.609163756591332
            },
            {
              x: 6,
              y: 9.071582283659302
            },
            {
              x: 7,
              y: 9.165611189455152
            },
            {
              x: 8,
              y: 9.703597797747113
            },
            {
              x: 9,
              y: 9.51596644715648
            },
            {
              x: 10,
              y: 8.782809097885071
            },
            {
              x: 11,
              y: 8.77219595103449
            },
            {
              x: 12,
              y: 8.901551750750901
            },
            {
              x: 13,
              y: 8.323699686755019
            },
            {
              x: 14,
              y: 7.922595960134426
            },
            {
              x: 15,
              y: 7.426385104089872
            },
            {
              x: 16,
              y: 7.879889396599538
            },
            {
              x: 17,
              y: 7.733037491812409
            },
            {
              x: 18,
              y: 7.985178620124024
            },
            {
              x: 19,
              y: 8.061227010120732
            },
            {
              x: 20,
              y: 7.759508743171364
            }
          ]}
          opacity={0.5}
          style={{}}
        />
        </XYPlot>`
        const {
            XYPlot,
            AreaSeries,
            XAxis,
            YAxis,
            VerticalGridLines,
            HorizontalGridLines
        } = Charts;
    
        //const {width, height} = this.props;
        return(
            <div className={classes.root}>
               
               <TemplateTabs markDown = {(
                <ReactMarkdown
                source={string}
                renderers={{ code: CodeBlock }}
                />
            )} label={"AREA CHART DEMO"} content={( 
               <div>
                <XYPlot
        width={500}
        height={500}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <AreaSeries
          data={[
            {
              x: 0,
              y: 10
            },
            {
              x: 1,
              y: 10.105733267081789
            },
            {
              x: 2,
              y: 10.199111355803335
            },
            {
              x: 3,
              y: 9.787061894661585
            },
            {
              x: 4,
              y: 10.476702337891172
            },
            {
              x: 5,
              y: 9.609163756591332
            },
            {
              x: 6,
              y: 9.071582283659302
            },
            {
              x: 7,
              y: 9.165611189455152
            },
            {
              x: 8,
              y: 9.703597797747113
            },
            {
              x: 9,
              y: 9.51596644715648
            },
            {
              x: 10,
              y: 8.782809097885071
            },
            {
              x: 11,
              y: 8.77219595103449
            },
            {
              x: 12,
              y: 8.901551750750901
            },
            {
              x: 13,
              y: 8.323699686755019
            },
            {
              x: 14,
              y: 7.922595960134426
            },
            {
              x: 15,
              y: 7.426385104089872
            },
            {
              x: 16,
              y: 7.879889396599538
            },
            {
              x: 17,
              y: 7.733037491812409
            },
            {
              x: 18,
              y: 7.985178620124024
            },
            {
              x: 19,
              y: 8.061227010120732
            },
            {
              x: 20,
              y: 7.759508743171364
            }
          ]}
          opacity={0.5}
          style={{}}
        />
      </XYPlot>
                </div> 
            )}/>
            
            </div>
        );
    }
}

export default withStyles(styles)(AreaChart);