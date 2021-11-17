import React from 'react';

/**
 * HammingTheory3 slide component
 */
export const HammingTheory3 = () => {
  return (
    <div>
      <div className="title-container">
        <h1>Hamming Code Theory (Continued) - Standardization</h1>
      </div>
      <div className="slide-content-container">
        <ul>
          <li>
            Let{' '}
            <span className="t-blue">
              <i>k</i>
            </span>{' '}
            represent the length of the input message
          </li>
          <li>
            And let{' '}
            <span className="t-blue">
              <i>n</i>
            </span>{' '}
            represent the length of the encoded message
          </li>
          <li>We can express any code in it&apos;s standard form as follows:</li>
          <br />
          <img width="300" src="/img/slides/aug-G.png" alt="" style={{ marginLeft: '550px' }} />
          <br />
          <br />
          <img width="400" src="/img/slides/aug-P.png" alt="" style={{ marginLeft: '500px' }} />
          <br />
          <br />
          <li>Since both matrices G and P share the submatrix X, we can easily construct one given the other</li>
          <li>Both matrices also contain an identity matrix preserved for the original message</li>
        </ul>
      </div>
    </div>
  );
};

export default HammingTheory3;
