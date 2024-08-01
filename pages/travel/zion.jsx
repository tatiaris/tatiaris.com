import { Breadcrumbs, Button, Image, Page, Text } from "@geist-ui/react";
import { ChevronDown, ChevronDownCircle, ChevronUp, ChevronUpCircle, QuestionCircle } from "@geist-ui/react-icons";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import ImageScroller from "../../components/ImageScroller";
import Copyright from "../../components/Copyright";

export const Zion = () => {
  const [showCostBreakdown, setShowCostBreakdown] = useState(false);
  const cost = [
    {
      name: "Hotel",
      cost: 40
    },
    {
      name: "Gas",
      cost: 50
    },
    {
      name: "Food & Snacks",
      cost: 50
    },
    {
      name: "Parking",
      cost: 20
    },
    {
      name: "National Park Entry",
      cost: 10
    },
    {
      name: "Waterproof Gear Rental",
      cost: 60
    }
  ]
  return (
    <Page className="blog-page">
      <Head>
        <title>Zion National Park | Rishabh Tatia</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Zion National Park" />
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
        <meta property="og:title" content="Zion National Park" />
        <meta property="og:site_name" content="Rishabh Tatia" />
        <meta property="og:url" content="tatiaris.com/" />
        <meta property="og:description" content="Zion National Park" />
        <meta property="og:type" content="profile" />
        <meta httpEquiv="content-language" content="en" />
      </Head>
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">tatiaris</Breadcrumbs.Item>
        <Breadcrumbs.Item>travel</Breadcrumbs.Item>
      </Breadcrumbs>
      <br />
      <Text h3>
        Zion National Park
      </Text>
      <div className="world-map-container">
        <div className="world-map">
          <Image src="/travel/world-map.svg" />
          <Link target="_blank" href={"https://www.google.com/maps/search/37%C2%B018'18.0%22N+112%C2%B056'56.8%22W/@37.305,-112.951686,17z?entry=ttu"}>
            <img className="pin" src="https://www.svgrepo.com/show/177095/pin-signs.svg" style={{ top: '4%', left: '4.5%' }} />
          </Link>
        </div>
      </div>
      <div className="meta-data-table">
        <div className="field-value-container">
          <Text h5 className="field">
            Location
          </Text>
          <Text className="value">
            Utah, USA
          </Text>
        </div>
        <div className="field-value-container">
          <Text h5 className="field">
            Date
          </Text>
          <Text className="value">
            2024-07-04
          </Text>
        </div>
        <div className="field-value-container">
          <Text h5 className="field">
            Party Size
          </Text>
          <Text className="value">
            2
          </Text>
        </div>
        <div className="field-value-container">
          <Text h5 className="field">
            Total Cost
          </Text>
          <Text className="value" style={{ display: 'flex', alignItems: 'center' }}>
            ~{cost.reduce((a, b) => a + b.cost, 0)} USD
            <button style={{ border: 'none', background: 'none', padding: 0, marginLeft: 5, display: 'flex', alignItems: 'center' }} onClick={() => setShowCostBreakdown(!showCostBreakdown)}>
              {showCostBreakdown ?
                <ChevronDownCircle size={16} color="grey" /> :
                <ChevronUpCircle size={16} color="grey" />
              }
            </button>
          </Text>
        </div>
        <div className={`expandable-wrapper ${showCostBreakdown ? 'show' : 'hide'}`}>
          <div style={{ width: '100%' }}>
            <div className="cost-breakdown-container">
              {cost.map((c, i) => (
                <div key={i} className="field-value-container">
                  <Text h6 className="field" style={{ margin: 0 }}>
                    {c.name}
                  </Text>
                  <Text className="value">
                    ${c.cost}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ImageScroller images={[
        '/travel/zion/1.png',
        '/travel/zion/2.png',
        '/travel/zion/3.png',
        '/travel/zion/4.png',
        '/travel/zion/5.png',
        '/travel/zion/6.png',
      ]} />
      <Text>
        {`Hiking through The Narrows at Zion National Park was an unforgettable experience.
        The Narrows is a slot canyon carved by the Virgin River, with walls a thousand feet tall and the river sometimes just twenty to thirty feet wide.
        The hike is a 16-mile round trip, the majority being a river hike.
        Abijith and I rented waterproof gear from a nearby store (highly recommended), and we were ready to go.`}
      </Text>
      <br />
      <video height="300" controls style={{ float: 'inline-start', marginRight: 15 }}>
        <source src="/travel/zion/7.mov" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <Text style={{ minHeight: 300, marginBottom: 100 }}>
        {`We started the hike early in the morning, moving against the cold current.
        The views were breathtaking, with the sun shining through the canyon walls, illuminating the river.
        We went about 5 miles and decided to turn back, as we wanted to explore other parts of the park.
        The water that was previously freezing cold felt good on the way back now that the sun was out.
        The hike took us about 4-5 hours, and we were exhausted by the end of it, but it was worth it :)`}
      </Text>
      <br /><br /><br />
      <Copyright theme={'light'} />
    </Page>
  );
}

export default Zion;