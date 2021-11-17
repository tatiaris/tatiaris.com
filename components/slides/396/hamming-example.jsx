import React, { useEffect, useState } from 'react';

/**
 * HammingExample slide component
 */
export const HammingExample = () => {
  const [d1, setD1] = useState(0);
  const [d2, setD2] = useState(0);
  const [d3, setD3] = useState(0);
  const [d4, setD4] = useState(0);
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);
  const [p3, setP3] = useState(0);

  const [d1e, setD1e] = useState(0);
  const [d2e, setD2e] = useState(0);
  const [d3e, setD3e] = useState(0);
  const [d4e, setD4e] = useState(0);
  const [p1e, setP1e] = useState(0);
  const [p2e, setP2e] = useState(0);
  const [p3e, setP3e] = useState(0);

  const [d1f, setD1f] = useState(0);
  const [d2f, setD2f] = useState(0);
  const [d3f, setD3f] = useState(0);
  const [d4f, setD4f] = useState(0);

  const [errorIndex, setErrorIndex] = useState('Nowhere');

  useEffect(() => {
    setP1((d1 + d2 + d4) % 2);
    setP2((d1 + d3 + d4) % 2);
    setP3((d2 + d3 + d4) % 2);

    setD1e(d1);
    setD2e(d2);
    setD3e(d3);
    setD4e(d4);

    setP1e((d1 + d2 + d4) % 2);
    setP2e((d1 + d3 + d4) % 2);
    setP3e((d2 + d3 + d4) % 2);
  }, [d1, d2, d3, d4]);

  useEffect(() => {
    const p1Wrong = p1e !== (d1e + d2e + d4e) % 2;
    const p2Wrong = p2e !== (d1e + d3e + d4e) % 2;
    const p3Wrong = p3e !== (d2e + d3e + d4e) % 2;

    let d1c = d1e;
    let d2c = d2e;
    let d3c = d3e;
    let d4c = d4e;

    if (p1Wrong && p2Wrong && p3Wrong) {
      d4c = (d4c + 1) % 2;
      setErrorIndex('d4');
    } else if (p1Wrong && p2Wrong) {
      d1c = (d1c + 1) % 2;
      setErrorIndex('d1');
    } else if (p1Wrong && p3Wrong) {
      d2c = (d2c + 1) % 2;
      setErrorIndex('d2');
    } else if (p3Wrong && p2Wrong) {
      d3c = (d3c + 1) % 2;
      setErrorIndex('d3');
    } else {
      setErrorIndex('Nowhere');
    }

    setD1f(d1c);
    setD2f(d2c);
    setD3f(d3c);
    setD4f(d4c);
  }, [d1e, d2e, d3e, d4e, p1e, p2e, p3e]);

  return (
    <div>
      <div className="title-container">
        <h1>Hamming (7, 4) Code Example</h1>
      </div>
      <div className="slide-content-container" style={{ display: 'flex' }}>
        <div style={{ width: '70%' }}>
          <div style={{ display: 'flex' }}>
            4-Bit Message:
            <div className="bit-btns-container">
              <button onClick={() => setD1((d1 + 1) % 2)} className={`bit d1 bit-btn-${d1}`}>
                {d1}
              </button>
              <button onClick={() => setD2((d2 + 1) % 2)} className={`bit d2 bit-btn-${d2}`}>
                {d2}
              </button>
              <button onClick={() => setD3((d3 + 1) % 2)} className={`bit d3 bit-btn-${d3}`}>
                {d3}
              </button>
              <button onClick={() => setD4((d4 + 1) % 2)} className={`bit d4 bit-btn-${d4}`}>
                {d4}
              </button>
            </div>
          </div>
          <br />P<sub>1</sub> = d<sub>1</sub> + d<sub>2</sub> + d<sub>4</sub> = {p1} <br />P<sub>2</sub> = d<sub>1</sub> + d<sub>3</sub> + d<sub>4</sub> = {p2} <br />P<sub>3</sub> = d<sub>2</sub> + d
          <sub>3</sub> + d<sub>4</sub> = {p3} <br />
          <br />
          <div style={{ display: 'flex' }}>
            7-Bit Encoded Message:
            <div className="bit-btns-container">
              <button onClick={() => setD1e((d1e + 1) % 2)} className={`bit d1 bit-btn-${d1 == d1e ? 1 : 0}`}>
                {d1e}
              </button>
              <button onClick={() => setD2e((d2e + 1) % 2)} className={`bit d2 bit-btn-${d2 == d2e ? 1 : 0}`}>
                {d2e}
              </button>
              <button onClick={() => setD3e((d3e + 1) % 2)} className={`bit d3 bit-btn-${d3 == d3e ? 1 : 0}`}>
                {d3e}
              </button>
              <button onClick={() => setD4e((d4e + 1) % 2)} className={`bit d4 bit-btn-${d4 == d4e ? 1 : 0}`}>
                {d4e}
              </button>
              <button onClick={() => setP1e((p1e + 1) % 2)} className={`bit p1 bit-btn-${p1 == p1e ? 1 : 0}`}>
                {p1e}
              </button>
              <button onClick={() => setP2e((p2e + 1) % 2)} className={`bit p2 bit-btn-${p2 == p2e ? 1 : 0}`}>
                {p2e}
              </button>
              <button onClick={() => setP3e((p3e + 1) % 2)} className={`bit p3 bit-btn-${p3 == p3e ? 1 : 0}`}>
                {p3e}
              </button>
            </div>
          </div>
          <br />
          Error found at: {errorIndex}
          <br />
          <br />
          <div style={{ display: 'flex' }}>
            4-Bit Decoded Message:
            <div className="bit-btns-container">
              <button className={`bit d1 bit-btn-${d1 == d1f ? 1 : 0}`}>{d1f}</button>
              <button className={`bit d2 bit-btn-${d2 == d2f ? 1 : 0}`}>{d2f}</button>
              <button className={`bit d3 bit-btn-${d3 == d3f ? 1 : 0}`}>{d3f}</button>
              <button className={`bit d4 bit-btn-${d4 == d4f ? 1 : 0}`}>{d4f}</button>
            </div>
          </div>
        </div>
        <div style={{ width: '30%' }}>
          <b>Note:</b>
          <br />
          No Error Correcting Codes are perfect because it is always theoretically possible to convert one valid message into another valid message <br />
          <br />
          In this case, the code <span className="t-blue">1010101</span> will always be a valid code and no errors will be detected.
        </div>
      </div>
    </div>
  );
};

export default HammingExample;
