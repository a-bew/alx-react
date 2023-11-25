import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
    class WithLoggingComponent extends Component {
        componentDidMount() {
            console.log(`Component ${this.getDisplayName(WrappedComponent)} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${this.getDisplayName(WrappedComponent)} is going to unmount`);
        }

        getDisplayName(WrappedComponent) {
            return WrappedComponent.displayName || WrappedComponent.name || 'Component';
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    WithLoggingComponent.displayName = `WithLogging(${WithLoggingComponent.getDisplayName(WrappedComponent)})`;

    return WithLoggingComponent;
};

export default WithLogging;
