import React from 'react';

/**
 * Hamming slide component
 */
export const Hamming = () => {
  return (
    <div>
      <div className="title-container">
        <h1>Hamming (7, 4) Code</h1>
      </div>
      <div className="slide-content-container" style={{ display: 'flex' }}>
        <ul style={{ width: '50%' }}>
          <li>Single error correcting</li>
          <li>Data sent in blocks</li>
          <li>
            Encodes <b className="t-blue">4</b> bits of data into <b className="t-blue">7</b> bits by adding <b className="t-blue">3</b> parity bits
          </li>
          <ul>
            <li>
              p<sub>1</sub> = d<sub>1</sub> + d<sub>2</sub> + d<sub>4</sub>
            </li>
            <li>
              p<sub>2</sub> = d<sub>1</sub> + d<sub>3</sub> + d<sub>4</sub>
            </li>
            <li>
              p<sub>3</sub> = d<sub>2</sub> + d<sub>3</sub> + d<sub>4</sub>
            </li>
          </ul>
          <li>Final Encoded Code</li>
          <ul>
            <li>
              C = d<sub>1</sub>d<sub>2</sub>d<sub>3</sub>d<sub>4</sub>p<sub>1</sub>p<sub>2</sub>p<sub>3</sub>
            </li>
          </ul>
          <li>Rate = (message length/block length) = 4/7 = 0.571</li>
          <ul>
            <li>Low rate = High redundancy</li>
          </ul>
        </ul>
        <div>
          <img src="/img/slides/parity-circle.png" alt="parity venn" />
        </div>
      </div>
    </div>
  );
};

export default Hamming;
