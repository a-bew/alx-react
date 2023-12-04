import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection Component', () => {
    it('renders an h2 element with the correct title and children', () => {
        // Define test title and children
        const title = 'test title';
        const children = <p>test children node</p>;

        // Render the BodySection component
        const wrapper = shallow(<BodySection title={title}>{children}</BodySection>);

        // Assert that there is one h2 element with the correct title
        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.find('h2').text()).toBe(title);

        // Assert that there is one p element with the correct children
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.find('p').text()).toBe('test children node');
    });
});
