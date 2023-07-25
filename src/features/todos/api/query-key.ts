export const todoQueryKey = {
  all: ['todos'] as const,
  one: (id: string) => [...todoQueryKey.all, id] as const,
};
