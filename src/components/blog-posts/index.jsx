import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const BlogPosts = ({ posts }) => {
  return (
    <Section title="All Posts">
      {posts.map((post) => (
        <SummaryItem
          key={post.node.fields.slug}
          date={post.node.frontmatter.date}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          //link={post.node.fields.slug}   Uncomment this to revert back to internal blog
          link={post.node.frontmatter.link}
          internal
        />
      ))}
    </Section>
  );
};

export default BlogPosts;
