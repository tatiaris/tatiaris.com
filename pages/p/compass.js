import React, { useEffect, useState } from 'react';
import { Page, Breadcrumbs, Input, Text, Button, Spacer, Select } from '@geist-ui/react';
import CustomHead from '../../components/CustomHead';

const Project = () => {
  // const [locationName, setLocationName] = useState('');
  // const [locationNeighbors, setLocationNeighbors] = useState('');
  // const [nodeType, setNodeType] = useState('path');
  // const handleTypeChange = (val) => {
  //   setNodeType(val);
  // };

  const normalizeDirection = (deg) => {
    return Math.round(deg);
  };

  const pageDetails = {
    title: 'Compass that is golden',
    description: 'leads to where you most desire',
    icon: 'favicon.ico',
    url: 'tatiaris.com/compass'
  };

  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0,
    altitude: 0
  });

  const [orientation, setOrientation] = useState({
    absolute: 0,
    alpha: 0,
    beta: 0,
    gamma: 0
  });

  const handleOrientation = (event) => {
    let newAlpha = event.alpha;
    // if (Math.abs(orientation.alpha - newAlpha) > Math.abs(orientation.alpha + 360 - newAlpha)) {
    //   newAlpha = orientation.alpha + (orientation.alpha + 360 - newAlpha);
    // }
    setOrientation({
      absolute: event.absolute,
      alpha: newAlpha,
      beta: event.beta,
      gamma: event.gamma
    });
  };

  // const submitCoorData = () => {
  //   const coorData = {
  //     latitude: coords.latitude,
  //     longitude: coords.longitude,
  //     altitude: coords.altitude,
  //     nodeName: locationName,
  //     nodeNeighbors: locationNeighbors,
  //     nodeType: nodeType
  //   };
  //   fetch('/api/compass', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(coorData)
  //   }).then(r => console.log(r)).catch(err => console.log(err))
  // };

  const allowGyroData = () => {
    window.addEventListener('deviceorientation', handleOrientation, true);
    const isIOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/);
    if (isIOS) {
      DeviceOrientationEvent.requestPermission()
        .then((response) => {
          if (response === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation, true);
          } else {
            alert('has to be allowed!');
          }
        })
        .catch(() => alert('not supported'));
    } else {
      window.addEventListener('deviceorientationabsolute', handleOrientation, true);
    }
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition((p) => {
        setCoords({
          latitude: p.coords.latitude,
          longitude: p.coords.longitude,
          altitude: p.coords.altitude
        });
      });
    }
  }, []);

  return (
    <Page id="project-container">
      <CustomHead pageDetails={pageDetails} />
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">tatiaris</Breadcrumbs.Item>
        <Breadcrumbs.Item>projects</Breadcrumbs.Item>
        <Breadcrumbs.Item>compass</Breadcrumbs.Item>
      </Breadcrumbs>
      <br />
      <Text h3>{pageDetails.title.toUpperCase()}</Text>
      <Button onClick={allowGyroData}>Allow gyro data</Button>
      <Spacer y={0.5} />
      <Input className="compass-input" label="Latitude" placeholder="0" value={coords.latitude} />
      <Spacer y={0.5} />
      <Input className="compass-input" label="Longitude" placeholder="0" value={coords.longitude} />
      <Spacer y={0.5} />
      <Input className="compass-input" label="Altitude" placeholder="0" value={coords.altitude} />
      <Spacer y={0.5} />
      <Input className="compass-input" label="Location Name" placeholder="346" />
      <Spacer y={0.5} />
      <Input className="compass-input" label="Location Neighbors" placeholder="345:1, 344:2" />
      <Spacer y={1} />
      {/* <span style={{ paddingRight: '1em' }}>Type:</span>
      <Select placeholder="Type" onChange={handleTypeChange}>
        <Select.Option value="1">Path</Select.Option>
        <Select.Option value="2">Location</Select.Option>
        <Select.Option value="3">Staircase</Select.Option>
        <Select.Option value="4">Elevator</Select.Option>
      </Select>
      <Spacer y={1} /> */}
      <div id="compass-container">
        <img className="compass-bottom" src="/img/compass/bottom.png" alt="" />
        <img style={{ transform: `rotate(${normalizeDirection(orientation.alpha)}deg)` }} className="compass-top" src="/img/compass/top.png" alt="" />
        <img className="compass-glow" src="/img/compass/glow.png" alt="" />
      </div>
      {/* <Copyright theme="light" /> */}
    </Page>
  );
};

export default Project;
