import FilmList from '@movie/components/FilmList';
import { expect, describe, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { getFilms } from '@movie/services/films';

describe('FilmList', () => {
  it('should render film titles', async () => {
    const type = 'upcoming';
    const res = await getFilms(type);
    render(await (async () => await FilmList({ type }))());
    res.results.forEach((item) => {
      const myElem = screen.getByText(item.title);
      expect(myElem).toBeInTheDocument();
    });
  });
});
