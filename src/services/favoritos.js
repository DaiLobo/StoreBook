import api from "./api";

async function getFavoriteBooks() {
  const response = await api.get("/favoritos");

  return response.data;
}

async function addFavorite(id) {
  await api.post(`/favoritos/${id}`);
}

async function removeFavorite(id) {
  await api.delete(`/favoritos/${id}`);
}

export { getFavoriteBooks, addFavorite, removeFavorite };
