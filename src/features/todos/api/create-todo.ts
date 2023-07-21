import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { API_URL } from "@/config/constants";
import { queryClient } from "@/lib/react-query";
import { Todo } from "@/types";

type CreateTodoBody = {
  title: string;
  done: boolean;
  description: string;
}

const createTodo = async (body: CreateTodoBody) => {
  return axios.post<Todo>(`${API_URL}/api/todos`, body).then((res) => res.data);
}

export const useCreateTodo = (body: CreateTodoBody) => {
  return useMutation(() => createTodo(body), { onSuccess: () => queryClient.invalidateQueries(["todos"])});
}
