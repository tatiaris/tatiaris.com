import React from 'react';

/**
 * HammingTheory slide component
 */
export const HammingTheory2 = () => {
  return (
    <div>
      <div className="title-container">
        <h1>Hamming (7, 4) Code Theory (Continued) - Syndrome Table</h1>
      </div>
      <div className="slide-content-container">
        <table>
          <tr>
            <th>
              <b>Syndrome</b>
            </th>
            <th>
              <b>Error</b>
            </th>
            <th>
              <b>Location</b>
            </th>
          </tr>
          <tr>
            <td>000</td>
            <td>0000 000</td>
            <td>None</td>
          </tr>
          <tr>
            <td>110</td>
            <td>1000 000</td>
            <td>
              d<sub>1</sub>
            </td>
          </tr>
          <tr>
            <td>101</td>
            <td>0100 000</td>
            <td>
              d<sub>2</sub>
            </td>
          </tr>
          <tr>
            <td>011</td>
            <td>0010 000</td>
            <td>
              d<sub>3</sub>
            </td>
          </tr>
          <tr>
            <td>111</td>
            <td>0001 000</td>
            <td>
              d<sub>4</sub>
            </td>
          </tr>
          <tr>
            <td>100</td>
            <td>0000 100</td>
            <td>
              p<sub>1</sub>
            </td>
          </tr>
          <tr>
            <td>010</td>
            <td>0000 010</td>
            <td>
              p<sub>2</sub>
            </td>
          </tr>
          <tr>
            <td>001</td>
            <td>0000 001</td>
            <td>
              p<sub>3</sub>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default HammingTheory2;
