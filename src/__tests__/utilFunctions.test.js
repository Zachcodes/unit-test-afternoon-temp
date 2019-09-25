import { shortenText } from '../utils/functions';
import { wordCount, attachUserName } from '../../server/utils';

const shortText = 'This is a very short string';
const longText =
  'This is a longer string that will be used to test whether or not the shortenText function correctly shortens the text correctly or not.';
const users = [
  {
    id: 1,
    first: 'Test',
    last: 'User',
  },
  {
    id: 2,
    first: 'Hello',
    last: 'World',
  },
];

const posts = [
  {
    userId: 2,
  },
  {
    userId: 2,
  },
  {
    userId: 1,
  },
  {
    userId: 1,
  },
  {
    userId: 3,
  },
];

it('shortenText should not alter a string with less than 100 characters', () => {
  expect(shortenText(shortText)).toHaveLength(27);
});

it('shortenText should cut off extra characters after 100 and add three periods', () => {
  expect(shortenText(longText)).not.toHaveLength(longText.length);
});

it('wordCount should correctly count the number of words in a sentence', () => {
  const posts = [
    {
      text: 'this is one sentence',
    },
    {
      text: 'this is the second sentence',
    },
  ];

  expect(wordCount(posts)).toBe(9);
});

it('attachUserName should correctly attach a users full name to a post', () => {
  const newPosts = attachUserName(users, posts);
  expect(newPosts[0]).toHaveProperty('displayName');
});

it('attachUserName should remove any post with no matching user', () => {
  const newPosts = attachUserName(users, posts);
  const deletedPost = posts[4];
  expect(newPosts).not.toContainEqual(deletedPost);
});
