import { expect, describe, it } from '@jest/globals';
import { random, pickItem } from '@movie/utils/pickItem';

const items = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

describe('Home', () => {
  it('should return random from 0 to len', () => {
    expect(random(2)).toBeLessThanOrEqual(2);
  });

  it('should not return greeter than len ', () => {
    expect(random(0)).toEqual(0);
  });

  it('pick 3 item', () => {
    const picks = pickItem(items, 3);
    expect(picks.length).toEqual(3);
  });

  it('pick 0 item', () => {
    const picks = pickItem(items, 0);
    expect(picks.length).toEqual(0);
  });

  it('should return 0 if input is not exist', () => {
    let picks = pickItem([], 10);
    expect(picks.length).toEqual(0);
  });
});
