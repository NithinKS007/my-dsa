const display = (text = "hello") => {
  return new Promise((resolve, reject) => {
    if (text == "hello") {
      resolve(`text received = ${text}`);
    } else {
      reject("text not found");
    }
  });
};

function fetchData(data = 2) {
  return new Promise((resolve, reject) => {
    if (data === 2) {
      resolve(`data = ${data}`);
    } else {
      reject("data not found");
    }
  });
}

display("hai")
  .then((receivedtext) => {
    console.log(receivedtext);

    return fetchData();
  })
  .then((dataFetched) => {
    console.log(dataFetched);
  })
  .catch((error) => {
    console.log(error);
  });
