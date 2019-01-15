import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/dashboardPage';

test('Should render the main dashboard page', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});