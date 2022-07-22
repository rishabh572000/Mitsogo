import React, {useEffect, useState} from 'react';
import { Pie } from '@ant-design/plots';
import { Area } from '@ant-design/plots';

export default function GraphOne() {

  const [dataset, setDataset] = useState([]);

  // const lodata=[
  //   { "country": "Total views", "date": 100, "value": 10 },
  //   { "country": "Product sold", "date": 133, "value": 12 },
  //   { "country": "Product sold", "date": 151, "value": 20 },
  //   { "country": "Product sold", "date": 161, "value": 50 },
  //   { "country": "Product sold", "date": 111, "value": 25 },
  //   { "country": "Product sold", "date": 177, "value": 35 },
  //   { "country": "Product sold", "date": 119, "value": 12 },
  //   { "country": "Product sold", "date": 155, "value": 8 },
  //   { "country": "Product sold", "date": 144, "value": 17 },
  //   { "country": "Product sold", "date": 154, "value": 19 },
  //   { "country": "Product sold", "date": 193, "value": 28 },
  //   { "country": "Product sold", "date": 144, "value": 35 },
  //   { "country": "Product sold", "date": 211, "value": 33 },
  //   { "country": "Total views", "date": 145, "value": 19 },
  //   { "country": "Total views", "date": 182, "value": 45 },
  //   { "country": "Total views", "date": 133, "value": 22 },
  //   { "country": "Total views", "date": 183, "value": 32 },
  //   { "country": "Total views", "date": 162, "value": 42 },
  //   { "country": "Total views", "date": 182, "value": 12 },
  //   { "country": "Total views", "date": 111, "value": 9 },
  //   { "country": "Total views", "date": 152, "value": 45 },
  //   { "country": "Total views", "date": 144, "value": 32 },
  //   { "country": "Total views", "date": 121, "value": 20},
  //   { "country": "Total views", "date": 133, "value": 29 },
  // ]

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
      .then((response) => response.json())
      .then((json) => setDataset(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config2 = {
    data:dataset,
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
    smooth: true,
    legend: {
      layout: 'horizontal',
      position: 'bottom'
    },
  };



  const data = [
    {
      type: 'France 7260 Sales',
      value: 7260,
    },
    {
      type: 'Italy 3970 Sales',
      value: 3970,
    },
    {
      type: 'Japan 4260 Sales',
      value: 4260,
    },
    {
      type: 'Canada 3970 Sales',
      value: 3970,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    legend: {
      layout: 'horizontal',
      position: 'bottom'
    },
    label: false,
    statistic: {
      title: 'Sales Distribution',
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'feafafa',
      },
    },
  };  


return (
    <>
    <div className='graph'>
    <div className='graphone card' style={{marginRight:0}}>
        <p>Statistics</p>
        <Area style={{height:280}} {...config2} />
    </div>

    <div className='graphone card'>
        <p>Sales Distribution</p>
      <Pie style={{height:280}} {...config} />
    </div>
    </div>

    
    </>
)
}
