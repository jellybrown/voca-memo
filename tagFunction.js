export const createTag = (tagName) => {
  let newTag = document.createElement(tagName);
  return newTag;
};
export const addClassName = (tagName, addName) => {
  tagName.classList.add(addName);
};

export const callNewTag = (tagName, addName) => {
  let newTag = createTag(tagName);
  addClassName(newTag, addName);
  return newTag;
};
