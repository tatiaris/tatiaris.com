import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import { Page, Breadcrumbs, Table, Text } from '@geist-ui/react'

const Project = () => {
  const [userIpData, setUserIpData] = useState({
    "ip": "undetermined",
    "isp": "undetermined",
    "org": "undetermined",
    "hostname": "undetermined",
    "latitude": 0,
    "longitude": 0,
    "postal_code": "undetermined",
    "city": "undetermined",
    "country_code": "undetermined",
    "country_name": "undetermined",
    "continent_code": "undetermined",
    "continent_name": "undetermined",
    "region": "undetermined",
    "district": "undetermined",
    "timezone_name": "undetermined",
    "connection_type": "undetermined",
    "asn_number": 0,
    "asn_org": "undetermined",
    "asn": "undetermined",
    "currency_code": "undetermined",
    "currency_name": "undetermined",
    "success": false,
    "premium": false
  })

  const [userDeviceData, setUserDeviceData] = useState({
    browser: "could not determine",
    os: "could not determine",
    screen_width: 0,
    screen_height: 0,
  })

  const loadUserDeviceData = () => {
    const userAgentData = navigator.userAgent.split(/[()]+/)
    setUserDeviceData({
      browser: userAgentData[userAgentData.length - 1],
      os: (navigator.oscpu) ? navigator.oscpu : "could not determine",
      screen_width: Math.max(window.screen.width, window.innerWidth, window.screen.availWidth),
      screen_height: Math.max(window.screen.height, window.innerHeight, window.screen.availHeight),
    })
  }

  const fetchIpData = async () => {
    const geoIPRes = await fetch('https://json.geoiplookup.io/')
    const ipData = await geoIPRes.json()
    if (ipData) { setUserIpData(ipData) }
  }

  useEffect(() => {
    if (document) fetchIpData()
    loadUserDeviceData();
  }, [])

  const userData = [
    { property: 'Operating System', type: 'Device', value: userDeviceData.os },
    { property: 'Browser', type: 'Device', value: userDeviceData.browser },
    { property: 'Screen Width', type: 'Device', value: <Text style={{ color: '#f827e6' }}>{userDeviceData.screen_width}px</Text> },
    { property: 'Screen Height', type: 'Device', value: <Text style={{ color: '#f827e6' }}>{userDeviceData.screen_height}px</Text> },
    { property: 'IP Address', type: 'IP', value: userIpData.ip },
    { property: 'Country', type: 'IP', value: userIpData.country_name },
    { property: 'Region', type: 'IP', value: userIpData.region },
    { property: 'City', type: 'IP', value: userIpData.city },
    { property: 'Postal Code', type: 'IP', value: userIpData.postal_code },
    { property: 'Coordinates', type: 'IP', value: <Text style={{ color: '#f827e6' }}>{userIpData.latitude}, {userIpData.longitude}</Text> },
    { property: 'Internet Service Provider', type: 'IP', value: userIpData.isp },
  ]

  return (
    <Page id="project-container">
      <Head>
        <title>About You</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="The information every website knows about you." />
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
        <meta property="og:title" content={`About You`} />
        <meta property="og:site_name" content="Rishabh Tatia" />
        <meta property="og:url" content="tatiaris.com/p/about_you" />
        <meta property="og:description" content="The information every website knows about you." />
        <meta property="og:type" content="profile" />
        <meta httpEquiv="content-language" content="en" />
      </Head>
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">tatiaris</Breadcrumbs.Item>
        <Breadcrumbs.Item>projects</Breadcrumbs.Item>
        <Breadcrumbs.Item>about_you</Breadcrumbs.Item>
      </Breadcrumbs>
      <br/>
      <Text h3>ABOUT YOU</Text>
      <Text>
        This tool was created for informational purposes in order to let people know about their 
        data that is <b>easily</b> accessible to someone via the web. In order to protect or "curtain"
        your data from websites and several other benefits, 
        please use a <a href="https://www.forbes.com/sites/tjmccue/2019/06/20/why-use-a-vpn/">VPN</a>.
      </Text>
      <Table data={userData} style={{ marginTop: "2em" }}>
        <Table.Column prop="property" label="property" />
        <Table.Column prop="type" label="type" />
        <Table.Column prop="value" label="value" />
      </Table>
    </Page>
  )
}

export default Project;