import axios from "@/libs/api/axios";

export interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

export const todoService = {
    getTodo: async (id: number): Promise<Todo> => {
        const response = await axios.get<Todo>(`/todos/${id}`);
        return response.data;
    },

    getTodos: async (): Promise<Todo[]> => {
        const response = await axios.get<Todo[]>(`/todos`);
        return response.data;
    },
    postTodo: async (todoData: Omit<Todo, "id">): Promise<Todo> => {
        const response = await axios.post<Todo>("/todos", todoData);
        return response.data;
    },

    putTodo: async (
        userId: number,
        todoData: Omit<Todo, "id" | "userId">
    ): Promise<Todo> => {
        const response = await axios.put<Todo>(`/todos/${userId}`, todoData);
        return response.data;
    },
};
