import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging HOC', () => {
    // Mock console.log
    let originalLog;
    beforeEach(() => {
        originalLog = console.log;
        console.log = jest.fn();
    });

    afterEach(() => {
        // Restore the original console.log
        console.log = originalLog;
    });

    it('should log Component is mounted and Component is going to unmount when wrapping pure HTML', () => {
        const WrappedHTML = WithLogging(() => <p />);

        const wrapper = mount(<WrappedHTML />);
        expect(console.log).toHaveBeenCalledWith('Component is mounted');

        wrapper.unmount();
        expect(console.log).toHaveBeenCalledWith('Component is going to unmount');
    });

    it('should log Component NAME is mounted and Component NAME is going to unmount when wrapping a named component', () => {
        const Login = () => <div>Login component</div>;
        const WrappedComponent = WithLogging(Login);

        const wrapper = mount(<WrappedComponent />);
        expect(console.log).toHaveBeenCalledWith('Component Login is mounted');

        wrapper.unmount();
        expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
    });
});
