export function formattedDate(dateString: string) {
  const formatter = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const date = new Date(dateString);

  return formatter.format(date);
}
