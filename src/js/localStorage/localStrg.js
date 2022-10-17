const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log(`Error during saving ${key} to local strage; `, error.message);
  }
};
export let loadlibrary;
const load = key => {
  try {
    loadlibrary = key;

    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.log(
      `Error during getting ${key} from localStorage: `,
      error.message
    );
  }
};

const del = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(
      `Error during deleting ${key}! from localStorage: `,
      error.message
    );
  }
};

export default {
  save,
  load,
  del,
};
