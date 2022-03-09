import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBlog from '../../components/modals/CreateBlog';
import CreateCategory from '../../components/modals/CreateCategory';
import CreateType from '../../components/modals/CreateType';

const Admin = () => {
  const [typeVisible, setTypeVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button
        variant={'outline-dark'}
        className="mt-4 p-2"
        onClick={() => setTypeVisible(true)}
      >
        Add type
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-4 p-2"
        onClick={() => setCategoryVisible(true)}
      >
        Add category
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-4 p-2"
        onClick={() => setBlogVisible(true)}
      >
        Add blog
      </Button>
      <CreateCategory
        show={categoryVisible}
        onHide={() => setCategoryVisible(false)}
      />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateBlog show={blogVisible} onHide={() => setBlogVisible(false)} />
    </Container>
  );
};

export default Admin;
