export default function handleResponseFromAPI(promise) {
  promise
    /* eslint-disable */
    .then((response) => {
      console.log("Got a response from the API");
      return {
        status: 200,
        body: "success",
      };
    },
    (error) => {
      console.log("Got a response from the API");
      return new Error();
    })
    /* eslint-enable */
}
