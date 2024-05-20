const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

export default function formatDate (date: Date | "now") : string {

  if(date === "now") {
    return date;
  }

  return date.toLocaleDateString(undefined, options)
}
