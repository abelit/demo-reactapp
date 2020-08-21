import React from 'react';

class PropsDemo extends React.Component<{ name: string }> {
    render() {
        return (
            <div style={{ color: "purple", backgroundColor: "green" }}>
                Hello {this.props.name}
            </div>
        );
    };
}


export default PropsDemo;