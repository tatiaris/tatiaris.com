import React from 'react';

/**
 * GolayCode slide component
 */
export const GolayCode = () => {
  return (
    <div>
      <div className="title-container">
        <h1>Binary Golay Code</h1>
      </div>
      <div className="slide-content-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <ul>
            <li>k = 12 (length of input)</li>
            <li>n = 23 (length of encoded bitstring)</li>
            <li>Can correct 3-bit errors</li>
            <li>Can detect up to 7-bit errors</li>
          </ul>
        </div>
        <img width="600" src="/img/slides/golay-code.png" alt="" />
      </div>
    </div>
  );
};

export default GolayCode;
