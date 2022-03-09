import React, { useState, useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOneBlog } from '../../http/blogAPI';

const BlogPage = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchOneBlog(id).then((data) => setBlog(data));
  }, []);
  return (
    <Container className="mt-3">
      <Col md={4}>
        <Row className="d-flex flex-column align-items-center">
          <h2>{blog.name}</h2>
        </Row>
      </Col>
      <Col md={4}>
        <Image
          width={300}
          height={300}
          src={process.env.REACT_APP_API_URL + blog.img}
        />
      </Col>
      <Row className="mt-5">
        <p>{blog.text}</p>
      </Row>
    </Container>
  );
};

export default BlogPage;
