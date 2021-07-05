import React from 'react';

const getSitemap = () => `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tatiaris.com/</loc>
    <lastmod>2021-01-06</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    res.setHeader('Content-Type', 'text/xml');
    res.write(getSitemap());
    res.end();
  }
}

export default Sitemap;
