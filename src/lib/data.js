export const getAllAnimalsData = async () => {
  const res = await fetch("https://qurbani-hat-ruby.vercel.app/data.json");
  return res.json();
};
export const getAnimalsCategory = async () => {
  const res = await fetch("https://qurbani-hat-ruby.vercel.app/category.json");
  return res.json();
};
