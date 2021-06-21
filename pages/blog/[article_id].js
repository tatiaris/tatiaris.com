import { Page, Breadcrumbs, Text } from '@geist-ui/react';
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';
import { articles } from '../../components/Articles';
import Copyright from '../../components/Copyright';
import Error from 'next/error';

/**
 * Article component
 */
export const Article = () => {
  const router = useRouter();
  const { article_id } = router.query;

  if (!(article_id in articles)) {
    return <Error statusCode={404} />;
  }

  const articleObj = articles[article_id];

  return (
    <>
      <Page>
        <Head>
          <title>{articleObj.title} | Rishabh Tatia</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={articleObj.description} />
          <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
          <meta property="og:title" content={articleObj.title} />
          <meta property="og:site_name" content="Rishabh Tatia" />
          <meta property="og:url" content="tatiaris.com/" />
          <meta property="og:description" content={articleObj.description} />
          <meta property="og:type" content="profile" />
          <meta httpEquiv="content-language" content="en" />
        </Head>
        <Breadcrumbs>
          <Breadcrumbs.Item href="/">tatiaris</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/blog">blog</Breadcrumbs.Item>
          <Breadcrumbs.Item>{article_id}</Breadcrumbs.Item>
        </Breadcrumbs>
        <br />
        <Text h3 style={{ margin: '0' }}>
          {articleObj.title}
        </Text>
        <Text small style={{ color: '#666' }}>
          {articleObj.date}
        </Text>
        {articleObj.content}
        <Copyright theme="light" />
      </Page>
    </>
  );
};

export default Article;
