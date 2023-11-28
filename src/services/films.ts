import {
  TagResponse,
  FilmListResponse,
  FilmDetail,
  FilmListItem,
  GetFilmsType,
} from '@movie/types/responseType';
import { delay } from '@movie/utils/delay';

const API_KEY = process.env.API_KEY;
const BACKEND_URL = process.env.BACKEND_URL;

export async function getFilms(type: GetFilmsType): Promise<FilmListResponse> {
  switch (type) {
    case 'top_rated':
      return getTopRatedMovies();
    case 'trending':
      return getTrendingMovies();
    case 'popular':
      return getPopularMovies();
    case 'upcoming':
      return getUpcomingMovies();
    default:
      return getPopularMovies();
  }
}

export async function getTopRatedMovies(): Promise<FilmListResponse> {
  const res = await fetch(`${BACKEND_URL}/movie/top_rated?api_key=${API_KEY}`);
  const data = await res.json();
  if (data?.status_code) {
    throw new Error(data.status_message);
  }
  return data;
}

export async function getTrendingMovies(): Promise<FilmListResponse> {
  const res = await fetch(
    `${BACKEND_URL}trending/movie/day?api_key=${API_KEY}`
  );
  const data = await res.json();
  if (data?.status_code) {
    throw new Error(data.status_message);
  }
  return data;
}

export async function getPopularMovies(): Promise<FilmListResponse> {
  const res = await fetch(`${BACKEND_URL}movie/popular?api_key=${API_KEY}`);
  const data = await res.json();
  if (data?.status_code) {
    throw new Error(data.status_message);
  }
  return data;
}

export async function getUpcomingMovies(): Promise<FilmListResponse> {
  const res = await fetch(`${BACKEND_URL}movie/upcoming?api_key=${API_KEY}`);
  const data = await res.json();
  if (data?.status_code) {
    throw new Error(data.status_message);
  }
  return data;
}

export async function getTags(): Promise<TagResponse> {
  const res = await fetch(`${BACKEND_URL}genre/movie/list?api_key=${API_KEY}`);
  const data = await res.json();
  if (data?.status_code) {
    throw new Error(data.status_message);
  }
  return data;
}

export async function getFilmDetail(id: string): Promise<FilmDetail> {
  const res = await fetch(`${BACKEND_URL}movie/${id}?api_key=${API_KEY}`);
  const data = await res.json();
  if (data?.status_code) {
    throw new Error(data.status_message);
  }
  return data;
}

export async function getSimilarFilms(id: string): Promise<FilmListResponse> {
  const res = await fetch(
    `${BACKEND_URL}movie/${id}/similar?api_key=${API_KEY}`
  );
  const data = await res.json();
  if (data?.status_code) {
    throw new Error(data.status_message);
  }
  return data;
}

export async function searchFilms(
  keyword?: string,
  page?: string
): Promise<FilmListResponse> {
  const res = await fetch(
    `${BACKEND_URL}search/movie?api_key=${API_KEY}${
      keyword ? `&query=${keyword}` : ''
    }${page ? '&page=1' : ''}`
  );
  const data = await res.json();
  if (data?.status_code) {
    throw new Error(data.status_message);
  }
  return data;
}
