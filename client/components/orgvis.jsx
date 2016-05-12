import {reduce, each} from 'lodash';
import React, {Component} from 'react';
import SearchItem from './searchitem';
import Chart from 'chart.js';
var PieChart = require('../../node_modules/react-chartjs/lib/pie');
//Chart.defaults.global.responsive = true;

export default class OrgVis extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.props.getTrendingOrgs();
  }

  drawChart() {
    var pieOptions = {
      animatable: true,
      segmentShowStroke : true,
      segmentStrokeColor : "#fff",
      segmentStrokeWidth : 2,
      percentageInnerCutout : 0,
      animationSteps : 100,
      animationEasing : "easeOutBounce",
      animateRotate : true,
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    }

    var pieData = [];
    var count = 0;
    var colors = [
      {color: "#F7464A", highlight: "#FF5A5E"},
      {color: "#46BFBD", highlight: "#5AD3D1"},
      {color: "#FDB45C", highlight: "#FFC870"},
      {color: "#949FB1", highlight: "#A8B3C5"},
      {color: "#4D5360", highlight: "#616774"}
    ];

    _.each(this.props.orgs.data, (item) => {
      if(count < 5){
        pieData.push({
          value: item.instances,
          color: colors[count].color, //"#F7464A", //
          highlight: colors[count].highlight, //"#FF5A5E", //
          label: item.org
        });
        count++;
      }
    });

    return (<PieChart data={pieData} options={pieOptions}/>);
  }

  populateResults() {
    //console.log('populateResults: ', this.props.orgs.data);
    return _.reduce(this.props.orgs.data, (accum, item) => {

      let html = (
        <div key={item.key} className="col s2 m1" >
          <a href={item.url}  target='_blank'>
            <div className='center-align'>
              <img className='imgTrendOrg' src={item.avatar} alt='org avatar' />
              <div className='truncate'>{" " + item.org + " "}</div>
            </div>
          </a>
        </div>
      );
      accum.push(html);
      return accum;
    }, []);
  }

  render() {
    return (

      <div className="section" >
        <div  className="row" >
          <h5 >Trending Organizations</h5>
          <div className="divider"></div>
          <div className='col s3'>
            <a >{this.drawChart()}</a>
          </div>
          <div className='col s9'>
            <div className='row'>
              {this.populateResults()}

            </div>
          </div>
        </div>

      </div>
    )
  }
};
