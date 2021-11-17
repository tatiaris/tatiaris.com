import React from 'react';

/**
 * HammingTheory slide component
 */
export const HammingTheory = () => {
  return (
    <div>
      <div className="title-container">
        <h1>Hamming (7, 4) Code Theory</h1>
      </div>
      <div className="slide-content-container">
        <ul style={{}}>
          {/* <li>A <span className="t-blue">linear code</span> has the property that the combination of any two codewords is also a codeword</li>
          <ul>
            <li>Example: Let C<sub>1</sub> = <span className="t-blue">1010101</span> and C<sub>2</sub> = <span className="t-blue">0110110</span> be valid codewords</li>
            <li>Then C<sub>3</sub> = C<sub>1</sub> + C<sub>2</sub> = 1010101 + 0110110 = <span className="t-blue">1100011</span> is a valid codeword</li>
          </ul> */}
          <li>Time to generalize the definition for error correcting codes!</li>
          <li>Use the Generator Matrix for the (7, 4) Hamming Code</li>
          <br />
          <img src="/img/slides/7-4-generator.png" width="300" alt="" style={{ marginLeft: '550px' }} />
          <br />
          <li>To get the encoded message:</li>
          <br />
          <img src="/img/slides/7-4-encoding.png" width="400" alt="" style={{ marginLeft: '500px' }} />
        </ul>
      </div>
    </div>
  );
};

export default HammingTheory;
