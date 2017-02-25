export function normalizeData(rawData) {
  return rawData.map(item => {
    item.publishedDate = `Published at ${prettyDisplayDate(item.publishedAt)}`;
    return item;
  });
}

export function prettyDisplayDate(dateStr) {
  return dateStr.substr(0, 10);
}
