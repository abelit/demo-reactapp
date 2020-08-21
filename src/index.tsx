import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import LineDemo from './components/charts/LineDemo';
import DemoDonut from './components/charts/DemoDonut';
import WorldDemo from './components/charts/WordCloud';
import AntColumn from './components/charts/AntColumn';
import BarDemo from './components/charts/BarDemo';
import ColumnLineDemo from './components/charts/ColumnLineDemo';
import BubbleDemo from './components/charts/BubbleDemo';

import IconDemo from './components/ant/IconDemo';
import FormSizeDemo, {DynamicFieldSet} from './components/ant/FormDemo';
import DatePickerDemo from './components/ant/DatePickerDemo';
import SkeletonDemo from './components/ant/SkeletonDemo';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <SkeletonDemo />
    <DatePickerDemo />
    <FormSizeDemo />
    <DynamicFieldSet />
    <IconDemo />
    <LineDemo />
    <AntColumn />
    <DemoDonut />
    <WorldDemo />
    <BarDemo />
    <ColumnLineDemo />
    <BubbleDemo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
