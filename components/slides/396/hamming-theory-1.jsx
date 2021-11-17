import React from 'react';

/**
 * HammingTheory slide component
 */
export const HammingTheory1 = () => {
  return (
    <div>
      <div className="title-container">
        <h1>Hamming (7, 4) Code Theory (Continued)</h1>
      </div>
      <div className="slide-content-container">
        <ul>
          <li>Syndrome: Vector to determine where the error occurs (if it does)</li>
          <li>Use the Parity Check Matrix for the Hammining (7, 4) code</li>
          <br />
          <img width="400" src="/img/slides/7-4-parity.png" alt="" style={{ marginLeft: '500px' }} />
          <li>To find the Syndrome for the encoded message</li>
          <br />
          <img width="500" src="/img/slides/7-4-syndrome.png" alt="" style={{ marginLeft: '450px' }} />
        </ul>
      </div>
    </div>
  );
};

export default HammingTheory1;
