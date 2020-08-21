import React, { useState, useEffect } from 'react';
import { Donut } from '@ant-design/charts';

const DemoDonut: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其它',
      value: 5,
    },
  ];
  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: '环图',
    },
    description: {
      visible: true,
      text: '环图的外半径决定环图的大小\uFF0C而内半径决定环图的厚度\u3002',
    },
    radius: 0.8,
    padding: 'auto',
    data,
    angleField: 'value',
    colorField: 'type',
  };
  return <Donut {...config} />;
};

export default DemoDonut;