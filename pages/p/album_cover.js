import React, { useEffect, useState } from 'react';
import { Page, Breadcrumbs, Input, Text, Row, Spacer, Col, Slider, Button } from '@geist-ui/react';
import CustomHead from '../../components/CustomHead';
import Copyright from '../../components/Copyright';
import { PauseFill, FastForward, Rewind, Wifi, BatteryCharging, Activity, Bell } from '@geist-ui/react-icons';

const Project = () => {
  const [coverImgUrl, setCoverImgUrl] = useState('https://tatiaris.com/img/bm_hooligans_cover.jpg');
  const [artistName, setArtistName] = useState('Bruno Mars');
  const [songName, setSongName] = useState('Count on Me');
  const [currentTime, setCurrentTime] = useState('11:25');
  const [songLength, setSongLength] = useState('3:17');
  const [songPoint, setSongPoint] = useState('0:01');
  const [dominantColor, setDominantColor] = useState('#eee');
  const [accentColor, setAccentColor] = useState('#aaa');

  const pageDetails = {
    title: 'Album Cover Generator',
    description: 'Create your own tiktok album cover with this filter tool',
    icon: 'favicon.ico',
    url: 'tatiaris.com/p/album_cover'
  };

  useEffect(() => {
    const getImgFeatures = async () => {
      const imgFeaturesRes = await fetch(`/api/image_features?imgUrl=${encodeURIComponent(coverImgUrl)}`);
      const imgFeatures = await imgFeaturesRes.json();
      console.log(imgFeatures);
      setDominantColor(imgFeatures.colorData.dominantColorForeground);
      setAccentColor(`#${imgFeatures.colorData.accentColor}`);
    };
    getImgFeatures();
  }, [coverImgUrl]);

  return (
    <Page id="project-container">
      <CustomHead pageDetails={pageDetails} />
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">tatiaris</Breadcrumbs.Item>
        <Breadcrumbs.Item>projects</Breadcrumbs.Item>
        <Breadcrumbs.Item>album_cover</Breadcrumbs.Item>
      </Breadcrumbs>
      <br />
      <Text h3>{pageDetails.title.toUpperCase()}</Text>
      <Row style={{ flexWrap: 'wrap' }} justify="space-between">
        <Col style={{ width: '450px', marginTop: '15px' }}>
          <Input label="Image" placeholder="https://tatiaris.com/img/bm_hooligans_cover.jpg" initialValue={coverImgUrl} onChange={(e) => setCoverImgUrl(e.target.value)} />
          <Spacer y={0.5} />
          <Input label="Song Title" placeholder="Count on Me" initialValue={songName} onChange={(e) => setSongName(e.target.value)} />
          <Spacer y={0.5} />
          <Input label="Artist Name" placeholder="Bruno Mars" initialValue={artistName} onChange={(e) => setArtistName(e.target.value)} />
          <Spacer y={0.5} />
          <Input label="Clock Time" placeholder="11:25" initialValue={currentTime} onChange={(e) => setCurrentTime(e.target.value)} />
          <Spacer y={0.5} />
          <Input label="Song Length" placeholder="3:17" initialValue={songLength} onChange={(e) => setSongLength(e.target.value)} />
          <Spacer y={0.5} />
          <Input label="Song Location" placeholder="0:01" initialValue={songPoint} onChange={(e) => setSongPoint(e.target.value)} />
          <Spacer y={0.5} />
          <Input label="Custom Dominant Color" initialValue={dominantColor} onChange={(e) => setDominantColor(e.target.value)} type="color" />
          <Spacer y={0.5} />
          <Input label="Custom Accent Color" initialValue={accentColor} onChange={(e) => setAccentColor(e.target.value)} type="color" />
        </Col>
        <Col style={{ width: '450px', marginTop: '15px' }}>
          <div className="phone-screen" style={{ background: `linear-gradient(to right top, ${accentColor} 0%, ${dominantColor} 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))` }}>
            <div className="status-bar">
              <div className="phone-time-container">
                {currentTime}
                <Spacer x={0.3} />
                <Activity color="white" size={20} />
                <Spacer x={0.3} />
                <Bell color="white" size={20} />
              </div>
              <div className="phone-symbols-container">
                <Wifi color="white" size={20} />
                <Spacer x={0.3} />
                <BatteryCharging color="white" size={20} />
              </div>
            </div>
            <div className="album-img-container">
              <img width="360" height="360" src={coverImgUrl} alt="" />
            </div>
            <div className="song-data-container">
              <span className="song-title">{songName}</span>
              <br />
              <span className="song-artist">{artistName}</span>
            </div>
            <div className="music-controls-container">
              <Slider className="music-slider" />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                <span>{songPoint}</span>
                <span>{songLength}</span>
              </div>
              <div className="music-btns-container">
                <Rewind color="white" size={36} />
                <PauseFill color="white" size={36} />
                <FastForward color="white" size={36} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Copyright theme="light" />
    </Page>
  );
};

export default Project;
