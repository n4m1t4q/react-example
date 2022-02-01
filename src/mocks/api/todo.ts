import { Todo } from 'models';
import { rest } from 'msw';

const baseUrl = process.env.REACT_APP_API_ENDPOINT!;

export const generateMockedTodos = (): Todo[] => [
  {
    id: "1",
    title: "read a book",
    completed: false,
  },
  {
    id: "2",
    title: "programming",
    completed: true,
  },
];

export const todoHandlers = [
  rest.get(`${baseUrl}/todos`, (_, res, ctx) => {
    ctx.delay(1000);

    const currentMilliSec = new Date().getMilliseconds();

    return currentMilliSec % 2 === 0
      ? res(ctx.status(200), ctx.json(generateMockedTodos()))
      : res(ctx.status(500), ctx.json({ error: "error" }));
  }),
];
