import { Todo, todoService } from "@/libs/api/services/\btodo-service.sample";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetTodo(id: number) {
    return useQuery({
        queryKey: ["todo"],
        queryFn: () => todoService.getTodo(id),
    });
}
export function useGetTodos() {
    return useQuery({
        queryKey: ["todos"],
        queryFn: todoService.getTodos,
    });
}

export function usePostTodo() {
    return useMutation({
        mutationFn: todoService.postTodo,
        onSuccess: () => {
            console.log("post success!");
        },
        onError: (error) => {
            console.log(error);
        },
    });
}

type PutTodoParams = {
    userId: number;
    data: Omit<Todo, "id" | "userId">;
};
export function usePutTodo() {
    return useMutation({
        mutationFn: ({ userId, data }: PutTodoParams) =>
            todoService.putTodo(userId, data),
        onSuccess: () => {
            console.log("put success!");
        },
        onError: (error) => {
            console.log(error);
        },
    });
}
