const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("get_quote");

const Url_Link = `https://api.quotable.io/random`;

async function getQuote() {
  try {
     quote.innerHTML = "updating Quote...";
     author.innerHTML = "updating";

    const response = await fetch(Url_Link).then((data) => data.json());
    console.log(response);

    quote.innerHTML = `<i class="fa-solid fa-quote-left"></i> ${response.content} <i class="fa-solid fa-quote-right"></i>`;
    author.innerHTML = "~ " + response.author;
  } catch (error) {
    console.log("Error");
     quote.innerHTML = `APi Source Is Offline Now Please Try a gain`;
     author.innerHTML = "404";
  }
}

btn.addEventListener("click", getQuote);
