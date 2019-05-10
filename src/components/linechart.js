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

  class LineChart extends React.Component{

    render(){
        const{classes} = this.props;
        const string = `
        import * as Charts from 'react-vis';
        <XYPlot
        width={600}
        height={500}
        >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="X Axis" position="start"/>
        <YAxis title="Y Axis"/>
        <LineSeries
          className="first-series"
          data={[
            {x: 1, y: 3},
            {x: 2, y: 5},
            {x: 3, y: 15},
            {x: 4, y: 12}
          ]}/>
        <LineSeries
          className="second-series"
          data={null}/>
        <LineSeries
          className="third-series"
          style={{
            strokeDasharray: '2 2'
          }}
          data={[
            {x: 1, y: 10},
            {x: 2, y: 4},
            {x: 3, y: 2},
            {x: 4, y: 15}
          ]}
          strokeDasharray="7, 3"
          />
        <LineSeries
          className="fourth-series"
          data={[
            {x: 1, y: 7},
            {x: 2, y: 11},
            {x: 3, y: 9},
            {x: 4, y: 2}
          ]}/>
        </XYPlot>`  

        const {
            XYPlot,
            LineSeries,
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
            )} label={"LINE CHART DEMO"} content={( 
               <div>
                 <XYPlot
        width={600}
        height={500}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="X Axis" position="start"/>
        <YAxis title="Y Axis"/>
        <LineSeries
          className="first-series"
          data={[
            {x: 1, y: 3},
            {x: 2, y: 5},
            {x: 3, y: 15},
            {x: 4, y: 12}
          ]}/>
        <LineSeries
          className="second-series"
          data={null}/>
        <LineSeries
          className="third-series"
          style={{
            strokeDasharray: '2 2'
          }}
          data={[
            {x: 1, y: 10},
            {x: 2, y: 4},
            {x: 3, y: 2},
            {x: 4, y: 15}
          ]}
          strokeDasharray="7, 3"
          />
        <LineSeries
          className="fourth-series"
          data={[
            {x: 1, y: 7},
            {x: 2, y: 11},
            {x: 3, y: 9},
            {x: 4, y: 2}
          ]}/>
      </XYPlot>
                </div> 
            )}/>
            
            </div>
        );
    }
}

export default withStyles(styles)(LineChart);