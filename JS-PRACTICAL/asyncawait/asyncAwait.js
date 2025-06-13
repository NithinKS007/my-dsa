const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data. Please try again later.");
      }
    }, 5000);
  });
};

const getData = async () => {
  try {
    console.log("First phase: Preparing to fetch data...");
    const data = await fetchData();
    console.log(data);
    console.log("Second phase: Processed the data!");
  } catch (error) {
    console.log("An error occurred:", error);
  }
};

getData();
