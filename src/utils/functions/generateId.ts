export function generateId(): string {
  const id = `${Math.floor(Math.random() * 1000)}-${Math.floor(
    Math.random() * 1000
  )}-${Math.floor(Math.random() * 1000)}`;
  return id;
}
