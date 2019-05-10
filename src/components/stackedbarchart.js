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

  class StackedBarChart extends React.Component{

    render(){
        const{classes} = this.props;
        const string = `
        import * as Charts from 'react-vis';
        <XYPlot
          stackBy="y"
          xDomain={[
            0,
            8
          ]}
          yDomain={[
            0,
            50
          ]}
          width={600}
          height={500}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries
            cluster="stack 1"
            data={[
              {
                x: 0,
                y: 10
              },
              {
                x: 1,
                y: 12.077792409917427
              },
              {
                x: 2,
                y: 10.8253430474924
              },
              {
                x: 3,
                y: 10.316423721676621
              },
              {
                x: 4,
                y: 10.015041420903938
              },
              {
                x: 5,
                y: 11.760252623908936
              },
              {
                x: 6,
                y: 12.206552688134733
              },
              {
                x: 7,
                y: 14.00754345141172
              },
              {
                x: 8,
                y: 13.334025519982529
              }
            ]}
            style={{}}
          />
          <VerticalBarSeries
            cluster="stack 1"
            data={[
              {
                x: 0,
                y: 10
              },
              {
                x: 1,
                y: 10.009183380617278
              },
              {
                x: 2,
                y: 12.193993302482362
              },
              {
                x: 3,
                y: 12.485633359179372
              },
              {
                x: 4,
                y: 14.426294430642923
              },
              {
                x: 5,
                y: 15.171198040514977
              },
              {
                x: 6,
                y: 12.839586846277957
              },
              {
                x: 7,
                y: 14.44727198529152
              },
              {
                x: 8,
                y: 15.036375889406496
              }
            ]}
            style={{}}
          />
          <VerticalBarSeries
            cluster="stack 1"
            data={[
              {
                x: 0,
                y: 10
              },
              {
                x: 1,
                y: 11.770169288636193
              },
              {
                x: 2,
                y: 9.724928633080426
              },
              {
                x: 3,
                y: 10.543276447593408
              },
              {
                x: 4,
                y: 12.102019097701225
              },
              {
                x: 5,
                y: 14.319728257871514
              },
              {
                x: 6,
                y: 13.380300053811409
              },
              {
                x: 7,
                y: 14.093495381619489
              },
              {
                x: 8,
                y: 12.37448617978271
              }
            ]}
            style={{}}
          />
          </XYPlot>`  
        const {
            XYPlot,
            VerticalBarSeries,
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
            )} label={"STACKED BAR CHART DEMO"} content={( 
               <div>
                 <XYPlot
          stackBy="y"
          xDomain={[
            0,
            8
          ]}
          yDomain={[
            0,
            50
          ]}
          width={600}
          height={500}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries
            cluster="stack 1"
            data={[
              {
                x: 0,
                y: 10
              },
              {
                x: 1,
                y: 12.077792409917427
              },
              {
                x: 2,
                y: 10.8253430474924
              },
              {
                x: 3,
                y: 10.316423721676621
              },
              {
                x: 4,
                y: 10.015041420903938
              },
              {
                x: 5,
                y: 11.760252623908936
              },
              {
                x: 6,
                y: 12.206552688134733
              },
              {
                x: 7,
                y: 14.00754345141172
              },
              {
                x: 8,
                y: 13.334025519982529
              }
            ]}
            style={{}}
          />
          <VerticalBarSeries
            cluster="stack 1"
            data={[
              {
                x: 0,
                y: 10
              },
              {
                x: 1,
                y: 10.009183380617278
              },
              {
                x: 2,
                y: 12.193993302482362
              },
              {
                x: 3,
                y: 12.485633359179372
              },
              {
                x: 4,
                y: 14.426294430642923
              },
              {
                x: 5,
                y: 15.171198040514977
              },
              {
                x: 6,
                y: 12.839586846277957
              },
              {
                x: 7,
                y: 14.44727198529152
              },
              {
                x: 8,
                y: 15.036375889406496
              }
            ]}
            style={{}}
          />
          <VerticalBarSeries
            cluster="stack 1"
            data={[
              {
                x: 0,
                y: 10
              },
              {
                x: 1,
                y: 11.770169288636193
              },
              {
                x: 2,
                y: 9.724928633080426
              },
              {
                x: 3,
                y: 10.543276447593408
              },
              {
                x: 4,
                y: 12.102019097701225
              },
              {
                x: 5,
                y: 14.319728257871514
              },
              {
                x: 6,
                y: 13.380300053811409
              },
              {
                x: 7,
                y: 14.093495381619489
              },
              {
                x: 8,
                y: 12.37448617978271
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

export default withStyles(styles)(StackedBarChart);