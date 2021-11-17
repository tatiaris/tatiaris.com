import React from 'react';

/**
 * Recap slide component
 */
export const Recap = () => {
  return (
    <div>
      <div className="title-container">
        <h1>Recap</h1>
      </div>
      <div className="slide-content-container">
        <ul>
          <li>Bit string: A string consisting of only 0s and 1s (Example: 100)</li>
          <li>Error: When one or more bits inside a bit string are flipped</li>
          <ul>
            <li>
              Example: 100 =&gt; 10<span className="t-red">1</span>
            </li>
          </ul>
          <li>Error Correcting Codes (ECCs) are used to detect and correct errors in a potentially corrupted bit string</li>
          <ul>
            <li>
              Example: 100 =&gt; 100<span className="t-blue">100100</span> =&gt; 1<span className="t-red">1</span>010<span className="t-red">1</span>100 =&gt; 100
            </li>
          </ul>
          <li>Types of Errors:</li>
          <ul>
            <li>Single - Can correct single bit errors</li>
            <li>Multiple - Can correct multiple bit errors</li>
            <li>Burst - Ideal for errors with consecutive corrupted bits</li>
          </ul>
          <li>Algorithms:</li>
          <ul>
            <li>Block and tree algorithms, Reed Mueller Codes, Cyclic Codes</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Recap;
