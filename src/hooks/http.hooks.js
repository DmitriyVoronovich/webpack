import { useCallback } from "react";


export const useHttp = () => {

  const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

    try {
      const response = await fetch(url, {method, body, headers});

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const { data } = await response.json();

      return data.map(transformRequest);
    } catch (e) {
      throw e;
    }
  }, []);

const transformRequest = (film) => {
  return {
    id: film.id,
    poster_path: film.poster_path,
    title: film.title,
    release_date: film.release_date.slice(0, 4),
    genres: film.genres.join(', '),
    vote_average: film.vote_average,
    runtime: `${Math.floor(film.runtime / 60)}h ${film.runtime % 60}min`,
    overview: film.overview
  }
}

  return {request}
}