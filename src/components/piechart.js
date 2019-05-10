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

  class PieChart extends React.Component{

    render(){
        const{classes} = this.props;
        const string = `
        import * as Charts from 'react-vis';
        <RadialChart
        width={350}
        height={400}
        data={[
          {
            angle: 30,
            label: 'Apple'
          },
          {
            angle: 11,
            label: 'Google'
          },
          {
            angle: 4,
            label: 'Facebook'
          },
          {
            angle: 3,
            label: 'Netflix'
          },
          {
            angle: 17,
            label: 'Amazon'
          }
        ]}
        labelsRadiusMultiplier={1.1}
        labelsStyle={{
          fontSize: 12
        }}
        showLabels
        />`  
        const {
            RadialChart
        } = Charts;
        //const {width, height} = this.props;
        return(
            <div className={classes.root}>
               
               <TemplateTabs markDown = {(
                <ReactMarkdown
                source={string}
                renderers={{ code: CodeBlock }}
                />
            )} label={"PIE CHART DEMO"} content={( 
               <div>
                 <RadialChart
        width={350}
        height={400}
        data={[
          {
            angle: 30,
            label: 'Apple'
          },
          {
            angle: 11,
            label: 'Google'
          },
          {
            angle: 4,
            label: 'Facebook'
          },
          {
            angle: 3,
            label: 'Netflix'
          },
          {
            angle: 17,
            label: 'Amazon'
          }
        ]}
        labelsRadiusMultiplier={1.1}
        labelsStyle={{
          fontSize: 12
        }}
        showLabels
      />
                </div> 
            )}/>
            
            </div>
        );
    }
}

export default withStyles(styles)(PieChart);