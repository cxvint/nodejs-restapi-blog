import { makeAutoObservable } from 'mobx';

export default class BlogStore {
  constructor() {
    this._types = [];
    this._categories = [];
    this._blogs = [];
    this._selectedType = {};
    this._selectedCategory = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setCategories(categories) {
    this._categories = categories;
  }

  setBlogs(blogs) {
    this._blogs = blogs;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedCategory(category) {
    this._selectedCategory = category;
  }

  get types() {
    return this._types;
  }

  get categories() {
    return this._categories;
  }

  get blogs() {
    return this._blogs;
  }

  get selectedType() {
    return this._selectedType;
  }
  get selectedCategory() {
    return this._selectedCategory;
  }
}
