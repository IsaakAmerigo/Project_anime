

// const animeURL = "https://api.jikan.moe/v3/search/anime?q=vampire";
const anime = async(animeURL) => {
  try {
const response = await axios.get(animeURL)
console.log(response);
  } catch(error) {
    console.error(error)
  }

}
anime(animeURL);

let doomer = 