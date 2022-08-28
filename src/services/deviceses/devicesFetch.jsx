

export const devicesFetch = () => {
  try {
    return fetch(
      "https://my-json-server.typicode.com/Jeck99/fake-server/devices"
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
};
