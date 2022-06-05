export const getFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  } catch (error) {
    console.log(error);
    localStorage.setItem('tasks', '[]');
  }
};
