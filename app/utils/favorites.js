// utils/favorites.js

let favorites = [];

export const addToFavorites = (gif) => {
  console.log('Adding to favorites:', gif);
  favorites.push(gif);
};

export const removeFromFavorites = (gifId) => {
  favorites = favorites.filter((gif) => gif.id !== gifId);
};

export const getFavorites = () => favorites;
