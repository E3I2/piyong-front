import { ResponsivePie } from '@nivo/pie'
import axios from 'axios';
import { useState, useEffect } from 'react';

// import { ExampleJson } from '../Bbiyong2/ExampleJson';

const MyResponsivePie = () => {
    // const [datachart, setDataChart] = useState([ExampleJson[0]]);
    const [datachart, setDataChart] = useState([[]]);
    const [chartData, setChartData] = useState([]);
  
    useEffect(() => {
        axios.get('http://192.168.31.142:8080/mafia-chart')
        .then(res => setDataChart(res.data))
        .catch(err => console.log(err));
        }, []);


    useEffect(() => {
        setDataChart([datachart[datachart.length - 1]]);
      }, []);
        
    // useEffect(() => {
    //     setDataChart([ExampleJson[ExampleJson.length - 1]]);
    //   }, []);

    useEffect(() => {
        if (datachart.length > 0) {
          const lastData = datachart[datachart.length - 1];
          setChartData([      ["road1", "road1_mafia"],
            ["road2", "road2_mafia"],
            ["road3", "road3_mafia"],
            ["road4", "road4_mafia"]
          ].map((road) => {
            let obj = {};
            obj["id"] = road[0];
            obj["label"] = lastData[road[1]];
            obj["value"] = parseInt(lastData[road[0]]);
            obj["color"] = parseInt(lastData[road[0]]);
            return obj;
          }));
        }
      }, [datachart]);
  
    // useEffect(() => {

    //     setChartData([["road1", "road1_mafia"], ["road2", "road2_mafia"], ["road3", "road3_mafia"], ["road4", "road4_mafia"]].map((road) => {
    //     let obj = {}

    //     obj["id"] = road[0]
    //     obj["label"] = datachart[0][road[1]]
    //     obj["value"] = parseInt(datachart[0][road[0]])
    //     obj["color"] = parseInt(datachart[0][road[0]])

    //     return obj
    //   }));

    // //   setChartData(ChartsData);
    // }, [datachart]);
  
    return (
      <div style={{height: "620px" }}>
        <ResponsivePie
          data={chartData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={5}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [   
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={10}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
       
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 20,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
</div>
    );
};

export default MyResponsivePie;