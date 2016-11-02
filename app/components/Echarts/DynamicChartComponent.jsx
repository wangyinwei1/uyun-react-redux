import React from 'react';
import ReactEcharts from '../../util/echarts-for-react';

const DynamicChartComponent = React.createClass({
    propTypes: {
    },
    timeTicket: null,
    count: 51,
    getInitialState: function() {
        return {option: this.getOption()};
    },
    fetchNewDate: function() {
        let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
        let option = this.state.option;
        let data0 = option.series[0].data;
        let data1 = option.series[1].data;
        data0.shift();
        data0.push(Math.round(Math.random() * 1000));
        data1.shift();
        data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);
        option.xAxis[1].data.shift();
        option.xAxis[1].data.push(this.count++);
        this.setState({option: option});
    },
    componentDidMount: function() {
        // if (this.timeTicket) {
        //     clearInterval(this.timeTicket);
        // }
        // this.timeTicket = setInterval(this.fetchNewDate, 1000);
    },
    componentWillUnmount: function() {
        // if (this.timeTicket) {
        //     clearInterval(this.timeTicket);
        // }
    },
    getOption: function() {
        const overviewOrCenterSwitch = true;
        const option = {
            grid: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 0,
                borderWidth: 0
            },
            tooltip : {
                trigger: 'axis',
                formatter: "{b} &nbsp; "+(overviewOrCenterSwitch == "system"?"吞吐量":"交易量")+": {c}",
                showDelay: 0,
                transitionDuration: 0,
                position: function(pos){
                    return [pos[0], 10];
                }
            },
            xAxis : [
                {
                    type : 'category',
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        //标签的间隔决定了分割线的间隔
                        interval: 0,
                        textStyle: {
                            align: "left"
                        }
                    },
                    axisTick: {
                        show: false,
                        interval: 3
                    },
                    splitLine : {
                        show: true,
                        lineStyle: {
                            color: "rgba(0,0,0,0.1)",
                            type: 'solid',
                            width: 1
                        }
                    },
                    splitArea : {
                        show: true,
                        areaStyle:{
                            color:['rgba(92,203,57,0.3)','rgba(92,203,57,0.3)']
                        }
                    },
                    data : null
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitLine : {
                        show:false
                    }
                }
            ],
            series : [
                {
                    type:'bar',
                    data: [434,43,42,4234,4234,43234,34],
                    name: overviewOrCenterSwitch == "system"?"吞吐量":"交易量",
                    barCategoryGap: 2,
                    itemStyle: {
                        normal: {
                            color: 'rgba(92,203,57,1)'
                        }
                    }
                }
            ]
        };

        return option;
    },
     onChartClick: function(param, echart) {
        console.log(param, echart);
    },
    render: function() {
         let onEvents = {
            'click': this.onChartClick
        };
        return (
            <div className='examples'>
                <div className='parent'>
                    <ReactEcharts ref='echarts_react'
                        option={this.state.option} 
                        style={{height:120}}
                        onEvents={onEvents} />
                </div>
            </div>
        );
    }
});

export default DynamicChartComponent;