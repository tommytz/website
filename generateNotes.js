fetch("test_data.json").then(async function (response) {
  let data = await response.json();
  console.log(data);
});
