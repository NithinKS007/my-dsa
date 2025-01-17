const removeChar = (str, charToRemove, index = 0) => {
    if (index === str.length) {
      return "";
    }

    if (str[index] === charToRemove) {
      return removeChar(str, charToRemove, index + 1);
    } else {
      return str[index] + removeChar(str, charToRemove, index + 1);
    }
  };
  
  const str = "hello world";
  const result = removeChar(str, 'o');
  console.log(result);
  