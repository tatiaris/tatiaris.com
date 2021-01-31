import React, { useEffect, useState } from 'react';
import Copyright from '../../components/Copyright';
import { Page, Breadcrumbs, Input, Text, Row, Button, Spacer } from '@geist-ui/react';
import CustomHead from '../../components/CustomHead';

const Project = () => {
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
    setOrientation({
      absolute: event.absolute,
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma
    });
  };

  const allowGyroData = () => {
    window.addEventListener('deviceorientation', handleOrientation, true);
    console.log(navigator.userAgent);
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
      <Text>{JSON.stringify(coords)}</Text>
      <Text>{JSON.stringify(orientation)}</Text>
      <Button onClick={allowGyroData}>Allow gyro data</Button>
      <Spacer y={0.5} />
      <Input label="Latitude" placeholder="0" value={coords.latitude} />
      <Spacer y={0.5} />
      <Input label="Longitude" placeholder="0" value={coords.longitude} />
      <Spacer y={0.5} />
      <Input label="Altitude" placeholder="0" value={coords.altitude} />
      <Spacer y={0.5} />
      <Input label="Location Name" placeholder="A" value={coords.latitude} />
      <Spacer y={0.5} />
      <Copyright theme="light" />
    </Page>
  );
};

export default Project;
