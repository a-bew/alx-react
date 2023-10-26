// App.test.js

import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('renders a div with class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div.App-header')).toHaveLength(1);
    });

    it('renders a div with class App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div.App-body')).toHaveLength(1);
    });

    it('renders a div with class App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div.App-footer')).toHaveLength(1);
    });

});