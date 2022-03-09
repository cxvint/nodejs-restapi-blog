import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import star from '../../assets/star.png';
import { BLOG_ROUTE } from '../../utils/consts';

const BlogItem = ({ blog }) => {
  const history = useHistory();
  return (
    <Col
      md={3}
      className={'mt-3'}
      onClick={() => history.push(BLOG_ROUTE + '/' + blog.id)}
    >
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image
          width={150}
          height={150}
          src={process.env.REACT_APP_API_URL + blog.img}
        />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>Auto...</div>
          <div className="d-flex align-items-center">
            <div>{blog.rating}</div>
            <Image src={star} />
          </div>
        </div>
        <div>{blog.name}</div>
      </Card>
    </Col>
  );
};

export default BlogItem;
