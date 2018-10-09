import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Landing from '../components/Landing';
import logo from '../assets/images/logo.png';
import Footer from '../components/Footer';


Enzyme.configure({ adapter: new Adapter() });

// Landing Page Test
describe('>>>LANDING PAGE COMPONENT', () => {
  let component;
  let footerComponent;
  let node;
  // Jest beforeEach()
  beforeEach((() => {
    component = shallow(<Landing />);
  }
  ));
  beforeEach((() => {
    footerComponent = shallow(<Footer />);
  }
  ));
  beforeEach((() => {
    node = component.find('h3');
  }
  ));

  it('render the DUMB component', () => {
    expect(component.length).toEqual(1);
  });

  it('render the DUMB footer component', () => {
    expect(footerComponent.length).toEqual(1);
  });

  it('has an h3 tag', () => {
    expect(node).toBeTruthy();
  });

  it('has the landing page navigation bar', () => {
    expect(component.contains(
      <div className="topnav-land">
        <p>M-Tracker</p>
        <Link to="/login">Login</Link>

      </div>,
    )).toBe(true);
  });

  it('has the application logo on the landing page', () => {
    expect(component.contains(
      <p>
        <img src={logo} className="logo-land" alt="" />
      </p>,
    )).toBe(true);
  });

  it('has a topnav-land class', () => {
    expect(node.hasClass('app-description-land')).toBeTruthy();
  });
});
