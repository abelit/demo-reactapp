import React, { useState } from 'react';
import { DatePicker, Space, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

const { RangePicker } = DatePicker;

const DatePickerDemo = () => {
    return (
        <ConfigProvider locale={zhCN}>
            <Space direction="vertical" size={12}>
                <RangePicker />
                <RangePicker showTime />
                <RangePicker picker="week" />
                <RangePicker picker="month" />
                <RangePicker picker="year" />
            </Space>
        </ConfigProvider>
    );
}


export default DatePickerDemo;