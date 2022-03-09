import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { Row } from 'react-bootstrap';
import BlogItem from '../Blogitem/BlogItem';

const BlogList = observer(() => {
  const { blog } = useContext(Context);

  return (
    <Row className="d-flex">
      {blog.blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </Row>
  );
});

export default BlogList;
