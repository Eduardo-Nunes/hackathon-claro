export const save = (key, data) => {
  if (!data || !key) {
    throw new Error('Invalid arguments');
  }
  const item = typeof data === 'object' ? JSON.stringify(data) : data;
  localStorage.setItem(`easynvest_${key}`,item);
}

export const get = (key, isJson) => {
  if (!key) {
    throw new Error('Invalid arguments');
  }
  const keyCustom = `easynvest_${key}`;
  return isJson ? JSON.parse(localStorage.getItem(keyCustom)) : localStorage.getItem(keyCustom);
}

export const check = (key) => {
  if (!key) {
    throw new Error('Invalid arguments');
  }
  const keyCustom = `easynvest_${key}`;
  return localStorage.getItem(keyCustom) !== null;
}

export const saveOne = (key, data) => {
  if (!data || !key) {
   throw new Error('Invalid arguments'); 
  }
  const users = get(key, true);
  users.push(data);
  save(key, users);
  return users;
}

export const deleteOne = (key, index) => {
  const user = get(key, true);
  if (user) {
    user.splice(index, 1);
    save(key, user);
  }
  return user;
}