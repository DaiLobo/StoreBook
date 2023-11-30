import api from "./api";

async function getBooks() {
  const response = await api.get("/livros");

  return response.data;
}

export { getBooks };
