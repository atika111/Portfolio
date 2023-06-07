const codingLanguages = ["HTML", "CSS", "JavaScript", "With a big :)"];

const footer = document.getElementById("footer-text");
const languagesText = generateLanguagesText(codingLanguages);
footer.innerText = `${footer.textContent} ${languagesText}`;

function generateLanguagesText(languages) {
  const lastLanguage = languages.pop();
  const languagesText = languages.join(", ");
  return `${languagesText} and ${lastLanguage}`;
}
