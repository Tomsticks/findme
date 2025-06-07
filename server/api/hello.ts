export default defineEventHandler(async (event) => {
  // Get the query parameters
  const query  = getQuery(event);


  // Return a JSON response with a message and the query parameters
  return {
    message: 'Hello from the server!',
    query: query,
  };
}
);
