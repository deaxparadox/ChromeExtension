import React from 'react';
import logo from './logo.svg';
import './App.css';

import { replaceTest } from './tabs';

const Footer = (
  <div className='footer'>
    <ul className='footerList'>
      <li className='footerListItem'>1</li>
      <li className='footerListItem'>2</li>
    </ul>
  </div>
)

console.log(replaceTest)
function App() {
  return (
    <div className="App">
      <h1 className='Heading'>SEO Extension built with React!</h1>

      <ul className="SEOForm">
        <li className="SEOValidation">
          <div className="SEOValidationField">
            <span className="SEOValidationFieldTitle">Title</span>
            <span className="SEOValidationFieldStatus Error">
              90 Characters
            </span>
          </div>
          <div className="SEOVAlidationFieldValue">
            The title of the page
          </div>
        </li>

        <li className="SEOValidation">
          <div className="SEOValidationField">
            <span className="SEOValidationFieldTitle">Main Heading</span>
            <span className="SEOValidationFieldStatus Ok">
              1
            </span>
          </div>
          <div className="SEOVAlidationFieldValue">
            The main headline of the page (H1)
          </div>
        </li>
      </ul>
      { Footer }
    </div>
  );
}

export default App;
