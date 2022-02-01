import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTodos, isFetchingSelector, todosSelector } from 'store/todo';

import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

export const useTodoListFacade = () => {
  const dispatch = useDispatch<ThunkDispatch<unknown, undefined, AnyAction>>();
  const isFetching = useSelector(isFetchingSelector);
  const todos = useSelector(todosSelector);

  const fetchAll = useCallback(() => {
    dispatch(fetchAllTodos())
      .unwrap()
      .catch((e: string) => {
        console.error(e);
      });
  }, [dispatch]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return {
    isFetching,
    todos,
  } as const;
};
