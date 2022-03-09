import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Context } from '../..';
import BlogBar from '../../components/Blogbar/BlogBar';
import BlogList from '../../components/Bloglist/BlogList';
import TypeBar from '../../components/Typebar/TypeBar';
import { fetchBlogs, fetchCategories, fetchTypes } from '../../http/blogAPI';

const Home = observer(() => {
  const { blog } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => blog.setTypes(data));
    fetchCategories().then((data) => blog.setCategories(data));
    fetchBlogs().then((data) => blog.setBlogs(data.rows));
  }, []);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BlogBar />
          <BlogList />
        </Col>
      </Row>
    </Container>
  );
});

export default Home;
