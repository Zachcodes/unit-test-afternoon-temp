export const shortenText = text => {
  //first make sure its not a text of length 100 exactly
  if (text.trim().length >= 100 && text.length !== 100) {
    return `${text.substr(0, 100).trim()}...`;
  }
  return text;

  // REFACTOR FROM
  // let shortened = text.substr(0, 100).trim();
  // //if there happens to be a space at space 100, this function will fail
  // shortened.length === 100 && (shortened += '...');
  // return shortened;
};
