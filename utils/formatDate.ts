export default function formatDate(dateString: string) {
  let date = [...dateString];
  date[10] = "T";
  return new Date(date.join(""));
}
