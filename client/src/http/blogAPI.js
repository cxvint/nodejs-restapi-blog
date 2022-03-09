import { $authHost, $host } from '.';

export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');

  return data;
};

export const createCategory = async (category) => {
  const { data } = await $authHost.post('api/category', category);
  return data;
};

export const fetchCategories = async () => {
  const { data } = await $host.get('api/category');

  return data;
};

export const createBlog = async (blog) => {
  const { data } = await $authHost.post('api/blog', blog);
  return data;
};

export const fetchBlogs = async () => {
  const { data } = await $host.get('api/blog');

  return data;
};

export const fetchOneBlog = async (id) => {
  const { data } = await $host.get('api/blog/' + id);

  return data;
};
