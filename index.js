const dropdown = document.querySelector('#dropdown');
const searchInput = document.querySelector('#search');
const goButton = document.querySelector('#go');
const imageMain = document.querySelector('#image-container');

const fetchImage = async (event) => {
  // Each child is beginning removed from the DOM
  imageMain.childNodes.forEach((child) => child.remove());
// Storaging the value of the elements current option
  const imageURL = event.target.value;
// Creating a element for the image
  const doomerImage = document.createElement('img');
  // Defining the image source for new element
  doomerImage.src = imageURL;
// appending anime image to the image main container
  imageMain.append(doomerImage);
}


const appendWeeb = (doomerObj) => {
  // const doomers = Object(doomerObj);
  console.log(doomerObj);
  doomerObj.forEach((doomer) => {
    const doomerOption = document.createElement('option');
    // Post capturing the data from animeURL, have the titles in the dropdown after typing in search bar.
    doomerOption.innerText = doomer.title;
    // When the title is picked then the image appear.
    doomerOption.value = doomer.image_url
    dropdown.append(doomerOption);
  })
}


const anime = async () => {
  try {
    // Query is whatever is in search
    const query = searchInput.value
    // It'll let you search specifically for a anime based on search input
    const animeURL = `https://api.jikan.moe/v3/search/anime?q=${query}`
    // Response is the awaiting of the animeURL
    const response = await axios.get(animeURL)
    // Get the data from the animeURL. Get results from grabbing the animeURL.
    const doomerObj = response.data.results;
    console.log(doomerObj)

    appendWeeb(doomerObj);



  } catch (error) {
    console.error(error);
  }

}
dropdown.addEventListener('change', fetchImage);
goButton.addEventListener('click', anime)
