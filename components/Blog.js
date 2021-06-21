import React from 'react';
import { Link } from '@geist-ui/react';
import { articles } from './Articles';

/**
 * Blogs component
 */
export const Blog = (props) => {
  return (
    <>
      <div style={{ minHeight: '600px', marginTop: '30px' }}>
        <ul>
          {Object.keys(articles).map((article_id, i) => (
            <li key={`article-${i}`}>
              <Link href={`/blog/${article_id}`} className={`blog-link ${articles[article_id].group}`}>
                {articles[article_id].title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Blog;
