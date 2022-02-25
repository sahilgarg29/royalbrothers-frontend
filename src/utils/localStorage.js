export const loadData = (key) => {
  try {
    let data = localStorage.getItem(key);
    return JSON.parse(data);
  } catch (error) {
    return undefined;
  }
};

export const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
