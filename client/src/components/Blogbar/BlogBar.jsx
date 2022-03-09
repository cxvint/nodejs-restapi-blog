import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { Card, Row } from 'react-bootstrap';

const BlogBar = observer(() => {
  const { blog } = useContext(Context);

  return (
    <Row className="d-flex">
      {blog.categories.map((category) => (
        <Card
          style={{ cursor: 'pointer' }}
          key={category.id}
          className="p-3"
          onClick={() => blog.setSelectedCategory(category)}
          border={category.id === blog.selectedCategory.id ? 'danger' : 'light'}
        >
          {category.name}
        </Card>
      ))}
    </Row>
  );
});

export default BlogBar;
