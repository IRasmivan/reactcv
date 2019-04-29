import text from "./AboutMe.json";
export default link => {
  console.log(JSON.stringify(text.text));
  return JSON.stringify(text.text);
};
