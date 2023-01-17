import React, { useEffect, useState } from 'react';
import Copyright from '../../components/Copyright';
import Head from 'next/head';
import { Page, Breadcrumbs, Grid, Col, Text, Input, Spacer } from '@geist-ui/react';

const Project = () => {
  const [initialDeposit, setInitialDeposit] = useState(10000);
  const [depositFrequency, setDepositFrequency] = useState(14);
  const [depositAmount, setDepositAmount] = useState(50);
  const [growthFrequency, setGrowthFrequency] = useState(31);
  const [growthRate, setGrowthRate] = useState(1);
  const [range, setRange] = useState(365);

  let CanvasJSReact, CanvasJS, CanvasJSChart;

  let bump = initialDeposit;
  const incomeDatePoints = [{ x: 0, y: initialDeposit }];
  for (let i = 1; i < range; i++) {
    const deposit = i % depositFrequency == 0 ? parseFloat(depositAmount) : 0;
    const gain = bump * (growthRate / (growthFrequency * 100));
    incomeDatePoints.push({ x: i, y: incomeDatePoints[i - 1].y + gain + deposit });
    if (i % depositFrequency == 0) bump = incomeDatePoints[i].y;
  }

  const totalInput = initialDeposit + depositAmount * Math.floor(range / depositFrequency);
  const totalOutput = Math.round(incomeDatePoints[incomeDatePoints.length - 1].y);
  const totalProfit = Math.round(((totalOutput - totalInput) * 100) / totalInput);

  const incomeLineChartOptions = {
    animationEnabled: true,
    zoomEnabled: true,
    exportEnabled: true,
    theme: 'light2',
    axisY: {
      title: 'Wealth',
      prefix: '$',
      crosshair: {
        enabled: true
      }
    },
    axisX: {
      title: 'Days',
      crosshair: {
        enabled: true,
        snapToDataPoint: true
      }
    },
    data: [
      {
        type: 'line',
        name: 'Wealth',
        dataPoints: incomeDatePoints
      }
    ]
  };

  if (typeof window !== 'undefined') {
    CanvasJSReact = require('../../public/react-vis/canvasjs.react');
    CanvasJSChart = CanvasJSReact.default.CanvasJSChart;
  }
  return (
    <Page id="project-container">
      <Head>
        <title>Wealth Tracker</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="The information every website knows about you." />
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
        <meta property="og:title" content={`Wealth Tracker`} />
        <meta property="og:site_name" content="Rishabh Tatia" />
        <meta property="og:url" content="tatiaris.com/p/wealth_tracker" />
        <meta property="og:description" content="The information every website knows about you." />
        <meta property="og:type" content="profile" />
        <meta httpEquiv="content-language" content="en" />
      </Head>
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">tatiaris</Breadcrumbs.Item>
        <Breadcrumbs.Item>projects</Breadcrumbs.Item>
        <Breadcrumbs.Item>wealth_tracker</Breadcrumbs.Item>
      </Breadcrumbs>
      <br />
      <Text h3>WEALTH TRACKER</Text>
      <Text>Adjust and play around with the variables below to track and visualize your wealth and profits through investments and compounding interest over the chosen period of time.</Text>
      <Spacer y={0.5} />
      <Grid.Container style={{ flexWrap: 'wrap' }}>
        <Input
          className="inc-tracker-inp"
          label="Initial Deposit"
          labelRight="$"
          onChange={(e) => setInitialDeposit(parseFloat(e.target.value))}
          initialValue={initialDeposit}
          type="number"
          placeholder="ex: 10000"
        />
        <Spacer x={1} />
        <Input className="inc-tracker-inp" label="Graph Range" labelRight="days" onChange={(e) => setRange(parseFloat(e.target.value))} initialValue={range} type="number" placeholder="ex: 365" />
      </Grid.Container>
      <Spacer y={0.5} />
      <Grid.Container style={{ flexWrap: 'wrap' }}>
        <Input
          className="inc-tracker-inp"
          label="Deposit Frequency"
          labelRight="days"
          onChange={(e) => setDepositFrequency(parseFloat(e.target.value))}
          initialValue={depositFrequency}
          type="number"
          placeholder="ex: 14"
        />
        <Spacer x={1} />
        <Input
          className="inc-tracker-inp"
          label="Deposit Amount"
          labelRight="$"
          onChange={(e) => setDepositAmount(parseFloat(e.target.value))}
          initialValue={depositAmount}
          type="number"
          placeholder="ex: 50"
        />
      </Grid.Container>
      <Spacer y={0.5} />
      <Grid.Container style={{ flexWrap: 'wrap' }}>
        <Input
          className="inc-tracker-inp"
          label="Growth Frequency"
          labelRight="days"
          onChange={(e) => setGrowthFrequency(parseFloat(e.target.value))}
          initialValue={growthFrequency}
          type="number"
          placeholder="ex: 31"
        />
        <Spacer x={1} />
        <Input className="inc-tracker-inp" label="Growth Rate" labelRight="%" onChange={(e) => setGrowthRate(parseFloat(e.target.value))} initialValue={growthRate} type="number" placeholder="ex: 1" />
      </Grid.Container>
      <Spacer y={0.5} />
      <Grid.Container style={{ flexWrap: 'wrap' }}>
        <Input className="mini-inp-container inc-tracker-inp" label="Total Input" labelRight="$" value={totalInput} disabled />
        <Spacer x={1} />
        <Input className="mini-inp-container inc-tracker-inp" label="Total Output" labelRight="$" value={totalOutput} disabled />
        <Spacer x={1} />
        <Input className="mini-inp-container inc-tracker-inp" label="Total Profit" labelRight="%" value={totalProfit} disabled />
      </Grid.Container>
      <br />
      <br />
      <div>{typeof window !== 'undefined' && <CanvasJSChart options={incomeLineChartOptions} />}</div>
      <br />
      <Copyright theme="light" />
    </Page>
  );
};

export default Project;
