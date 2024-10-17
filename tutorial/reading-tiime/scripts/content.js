const article = document.querySelector("article");
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  const wordsCount = [...words].length;
  const readingTime = Math.round(wordsCount / 200);
  const badge = document.createElement("p");
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;
  (date ?? heading).insertAdjacentElement("afterend", badge);
}
