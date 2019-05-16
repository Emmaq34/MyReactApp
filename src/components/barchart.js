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

  class BarChart extends React.Component{

    render(){
        const{classes} = this.props;
        const string = `
      import * as Charts from 'react-vis';
      <XYPlot
        width={700}
        height={500}
        xDomain={[
            0,
            17
        ]}
        yDomain={[
            0,
            8
        ]}
      >
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <HorizontalBarSeries
        data={[
          {
            x: 10,
            y: 0
          },
          {
            x: 12.077792409917427,
            y: 1
          },
          {
            x: 10.8253430474924,
            y: 2
          },
          {
            x: 10.316423721676621,
            y: 3
          },
          {
            x: 10.015041420903938,
            y: 4
          },
          {
            x: 11.760252623908936,
            y: 5
          },
          {
            x: 12.206552688134733,
            y: 6
          },
          {
            x: 14.00754345141172,
            y: 7
          },
          {
            x: 13.334025519982529,
            y: 8
          }
        ]}
        style={{}}
      />
      </XYPlot>`
        const {
            XYPlot,
            HorizontalBarSeries,
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
            )} label={"BAR CHART DEMO"} content={( 
               <div>
                 <XYPlot
            width={700}
            height={500}
            xDomain={[
                0,
                17
            ]}
            yDomain={[
                0,
                8
            ]}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <HorizontalBarSeries
            data={[
              {
                x: 10,
                y: 0
              },
              {
                x: 12.077792409917427,
                y: 1
              },
              {
                x: 10.8253430474924,
                y: 2
              },
              {
                x: 10.316423721676621,
                y: 3
              },
              {
                x: 10.015041420903938,
                y: 4
              },
              {
                x: 11.760252623908936,
                y: 5
              },
              {
                x: 12.206552688134733,
                y: 6
              },
              {
                x: 14.00754345141172,
                y: 7
              },
              {
                x: 13.334025519982529,
                y: 8
              }
            ]}
            style={{}}
          />
        </XYPlot>
                </div> 
            )}/>
            
            </div>
        );
    }
}

export default withStyles(styles)(BarChart);