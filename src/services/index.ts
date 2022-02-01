import { HttpClient } from 'shared/utils';

import { TodoService } from './todo.service';

const baseUrl = process.env.REACT_APP_API_ENDPOINT!;
const http = new HttpClient();

export const todoService = new TodoService(http, baseUrl);
