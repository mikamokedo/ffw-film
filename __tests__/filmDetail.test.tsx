import FilmDetailContainer from '@movie/components/FilmDetailContainer';
import { expect, describe, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { getFilmDetail } from '@movie/services/films';

describe('Film detail', () => {
  it('should render film detail: title, status, description', async () => {
    const id = '872585';
    const res = await getFilmDetail(id);
    render(await (async () => await FilmDetailContainer({ id }))());
    const title = screen.getByText(res.title);
    expect(title).toBeInTheDocument();
    const status = screen.getByText(`Status: ${res.status}`);
    expect(status).toBeInTheDocument();
    const overview = screen.getByText(res.overview);
    expect(overview).toBeInTheDocument();
  });
});
