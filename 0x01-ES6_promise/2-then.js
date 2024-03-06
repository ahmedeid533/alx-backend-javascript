export default function handleResponseFromAPI(promise) {
  return promise
    /* eslint-disable */
    .then(() => ({ status: 200, body: 'success'}))
    .catch(() => new Error())
	.finally(() => console.log('Got a response from the API'))
    /* eslint-enable */
}
