import React from 'react';

class TimerDemo extends React.Component<{},any> {
    constructor(props: any) {
        super(props);
        this.state = { seconds: 0 };
    }
    private interval: any;

    tick() {
        this.setState((state: any) => ({
            seconds: state.seconds + 1
        }));
    };

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    };

    render() {
        return (
            <div>
                Seconds: {this.state.seconds}
            </div>
        );
    };
};

export default TimerDemo;