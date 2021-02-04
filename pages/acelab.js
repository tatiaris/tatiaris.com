import React, { useEffect, useState } from 'react';
import Copyright from '../components/Copyright';
import { Page, Breadcrumbs, Input, Text, Row, Col, Select, Spacer, Code, Snippet } from '@geist-ui/react';
import CustomHead from '../components/CustomHead';

const Acelab = () => {
  // Page meta data
  const pageDetails = {
    title: 'Acelab Object Generator',
    description: 'Helper software to generate js objects for acelab',
    icon: 'favicon.ico',
    url: 'tatiaris.com/acelab'
  };

  // Employee variables
  const [employeeName, setEmployeeName] = useState('');
  const [employeeSection, setEmployeeSection] = useState('');
  const [employeeImg, setEmployeeImg] = useState('');
  const [employeeLinkedin, setEmployeeLinkedin] = useState('');
  const [employeePage, setEmployeePage] = useState('');
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [employeeRole, setEmployeeRole] = useState('');
  const handleEmployeeSection = (val) => setEmployeeSection(val);

  // Publication variables
  const [pubTitle, setPubTitle] = useState('');
  const [pubLink, setPubLink] = useState('');
  const [pubId, setPubId] = useState('');
  const [pubDetails, setPubDetails] = useState('');
  const [pubImg, setPubImg] = useState('');
  const [pubAuthors, setPubAuthors] = useState('');

  // News variables
  const [newsOrder, setNewsOrder] = useState('');
  const [newsTitle, setNewsTitle] = useState('');
  const [newsDescription, setNewsDescription] = useState('');
  const [newsImg, setNewsImg] = useState('');
  const [newsDate, setNewsDate] = useState('');
  const [newsUrl, setNewsUrl] = useState('');

  const newEmployeeCode = `{
  name: "${employeeName}",
  section: "${employeeSection}",
  email: "${employeeEmail}",
  role: "${employeeRole}",
  img: "${employeeImg}",
  linkedin: "${employeeLinkedin}",
  page_link: "${employeePage}"
}`;

  const newPublicationCode = `<div class="article-container">
  <div class="article-img-container">
    <img class="article-img" src="${pubImg}" alt="" />
  </div>
  <div class="article-info-container">
    <div class="article-info">
      ${pubId}) ${pubAuthors} <a href="${pubLink}">${pubTitle}</a>. ${pubDetails}
    </div>
  </div>
</div>`;

  const newsCardCode = `{
  order: ${newsOrder},
  title: "${newsTitle}",
  description: "${newsDescription}",
  img: "${newsImg}",
  date: "${newsDate}",
  url: "${newsUrl}",
},`;

  const newsArticleCode = `<div id="profileContainer">
  <div id="bio" class="bioPageSection">
      <div class="details-container">
          <div class="img-description-container">
              <div id="bioPhotoContainer" class="highlights-carousel">
                  <img id="bioPhoto" src="${newsImg}">
              </div>
              ${newsDescription}
          </div>
      </div>
  </div>
</div>
<style>
.site-inner {
  min-height: 72vh;
}
.content .entry {
  background-color: transparent;
}
article.page.type-page.status-publish.entry {
  background-color: transparent;
}
div.site-container {
  background: url('https://382451-1200779-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/11/White-honeycomb-hexagon-Mirrored.jpg') no-repeat center center fixed;
  background-size: cover;
}
header.entry-header h1 {
  background-color: #fff;
  border-radius: 4px;
  display: inline-block;
  padding: .8vw;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  margin-bottom: 2rem;
}
</style>`;

  const newsMiniCode = `<div class="news_article">
  <a href="${newsUrl}">${newsTitle}</a><br>${newsDate}
</div>`;

  return (
    <Page id="project-container">
      <CustomHead pageDetails={pageDetails} />
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">tatiaris</Breadcrumbs.Item>
        <Breadcrumbs.Item>acelab</Breadcrumbs.Item>
      </Breadcrumbs>
      <br />
      <Text h3>{pageDetails.title.toUpperCase()}</Text>
      <br />
      <Text h4>New Employee</Text>
      <Row style={{ flexWrap: 'wrap' }} justify="space-between">
        <Col style={{ width: '450px' }}>
          <Input onChange={(e) => setEmployeeName(e.target.value)} label="Name" placeholder="John Doe" />
          <Spacer y={0.5} />
          <div className="select-inp-container">
            <span className="select-inp-label">Section</span>
            <Select placeholder="Choose one" onChange={handleEmployeeSection}>
              <Select.Option value="leadershipSection">Leadership</Select.Option>
              <Select.Option value="adminSection">Admin</Select.Option>
              <Select.Option value="researchStaffSection">Research Staff</Select.Option>
              <Select.Option value="doctoralStudentsSection">PhD Student</Select.Option>
              <Select.Option value="mastersStudentsSection">Master Student</Select.Option>
              <Select.Option value="developmentTeamSection">Development Team</Select.Option>
              <Select.Option value="undergraduateStudentsSection">Undergrad Student</Select.Option>
              <Select.Option value="alumniSection_phd">PhD Alumni</Select.Option>
              <Select.Option value="oldUndergradSection">Undergrad Alumni</Select.Option>
            </Select>
          </div>
          <Spacer y={0.1} />
          <Input onChange={(e) => setEmployeeEmail(e.target.value)} label="Email" placeholder="johndoe@tamu.edu" />
          <Spacer y={0.1} />
          <Input onChange={(e) => setEmployeeRole(e.target.value)} label="Role" placeholder="Web Developer" />
          <Spacer y={0.1} />
          <Input onChange={(e) => setEmployeeImg(e.target.value)} className="lg-input" label="Headshot Url" placeholder="https://acelab.tamu.edu/jd-img.png" />
          <Spacer y={0.1} />
          <Input onChange={(e) => setEmployeeLinkedin(e.target.value)} className="lg-input" label="LinkedIn Url" placeholder="https://linkedin.com/in/johndoe" />
          <Spacer y={0.1} />
          <Input onChange={(e) => setEmployeePage(e.target.value)} className="lg-input" label="Page Url" placeholder="https://acelab.tamu.edu/johndoe" />
        </Col>
        <Col style={{ width: '450px', marginTop: '15px' }}>
          <Snippet symbol="" text={newEmployeeCode} toastType="warning" />
        </Col>
      </Row>
      <Spacer y={2} />
      <Text h4>New Publication Article</Text>
      <Row style={{ flexWrap: 'wrap' }} justify="space-between">
        <Col style={{ width: '450px' }}>
          <Input onChange={(e) => setPubId(e.target.value)} label="ID" placeholder="42" />
          <Spacer y={0.1} />
          <Input onChange={(e) => setPubTitle(e.target.value)} label="Title" placeholder="Example Publication" />
          <Spacer y={0.1} />
          <Input onChange={(e) => setPubAuthors(e.target.value)} className="lg-input" label="Authors" placeholder="Name F., Name S., Name T., Name F. (2021)." />
          <Spacer y={0.1} />
          <Input onChange={(e) => setPubLink(e.target.value)} className="lg-input" label="Link" placeholder="https://acelab.tamu.edu/ex-pub" />
          <Spacer y={0.1} />
          <Input onChange={(e) => setPubDetails(e.target.value)} className="lg-input" label="Details" placeholder="Details for the example publication" />
          <Spacer y={0.1} />
          <Input onChange={(e) => setPubImg(e.target.value)} className="lg-input" label="Image" placeholder="https://acelab.tamu.edu/ex-pub.png" />
        </Col>
        <Col style={{ width: '450px', marginTop: '15px' }}>
          <Snippet symbol="" text={newPublicationCode} toastType="warning" />
        </Col>
      </Row>
      <Spacer y={2} />
      <Text h4>New News Article</Text>
      <Row style={{ flexWrap: 'wrap' }} justify="space-between">
        <Col style={{ width: '450px' }}>
          <Input onChange={(e) => setNewsOrder(e.target.value)} label="Order" placeholder="67" />
          <Spacer y={0.1} />
          <Input onChange={(e) => setNewsTitle(e.target.value)} label="Title" placeholder="Example News Title" />
          <Spacer y={0.1} />
          <Input onChange={(e) => setNewsDescription(e.target.value)} className="lg-input" label="Description" placeholder="Example news description..." />
          <Spacer y={0.1} />
          <Input onChange={(e) => setNewsDate(e.target.value)} className="lg-input" label="Date" placeholder="Feb. 02, 2021." />
          <Spacer y={0.1} />
          <Input onChange={(e) => setNewsImg(e.target.value)} className="lg-input" label="Image" placeholder="https://acelab.tamu.edu/news-img.png" />
          <Spacer y={0.1} />
          <Input onChange={(e) => setNewsUrl(e.target.value)} className="lg-input" label="Url" placeholder="https://acelab.tamu.edu/news-article" />
          <Spacer y={0.6} />
          <Snippet symbol="" text={newsCardCode} toastType="warning" />
          <Spacer y={0.6} />
          <Snippet symbol="" text={newsMiniCode} toastType="warning" />
        </Col>
        <Col style={{ width: '450px', marginTop: '15px' }}>
          <Snippet style={{ marginTop: '15px' }} symbol="" text={newsArticleCode} toastType="warning" />
        </Col>
      </Row>
      <Copyright theme="light" />
    </Page>
  );
};

export default Acelab;
