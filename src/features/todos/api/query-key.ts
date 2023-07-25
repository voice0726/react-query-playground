export const userQueryKey = {
  all: ['users'] as const,
  one: (id: string) => [...userQueryKey.all, id] as const,
};
