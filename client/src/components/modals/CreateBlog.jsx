import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { Context } from '../..';
import { createBlog, fetchCategories, fetchTypes } from '../../http/blogAPI';

const CreateBlog = observer(({ show, onHide }) => {
  const { blog } = useContext(Context);
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  // const [category, setCategory] = useState(null);
  // const [type, setType] = useState(null);

  useEffect(() => {
    fetchTypes().then((data) => blog.setTypes(data));
    fetchCategories().then((data) => blog.setCategories(data));
  }, []);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addBlog = () => {
    const fromData = new fromData();
    fromData.append('name', name);
    fromData.append('author', author);
    fromData.append('text', text);
    fromData.append('categoryId', blog.selectedCategory.id);
    fromData.append('typeId', blog.selectedType.id);
    fromData.append('img', file);
    createBlog(fromData).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add blog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {blog.selectedType.name || 'choose type'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {blog.types.map((type) => (
                <Dropdown.Item
                  onClick={() => blog.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {blog.selectedCategory.name || 'Choose category'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {blog.categories.map((category) => (
                <Dropdown.Item
                  onClick={() => blog.setSelectedCategory(category)}
                  key={category.id}
                >
                  {category.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="Enter blog name"
          />
          <Form.Control
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-3"
            placeholder="author"
          />
          <Form.Control
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-3"
            placeholder="Enter text"
          />
          <Form.Control className="mt-3" type="file" onChange={selectFile} />
          <hr />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addBlog}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateBlog;
