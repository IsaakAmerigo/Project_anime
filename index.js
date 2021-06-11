const dropdown = document.querySelector('#dropdown');
const imageMain = document.querySelector('#image-container');

// const fetchImage = async (event) => {
//   imageMain.childNodes.forEach((child) => child.remove());

//   const currentDoomer = event.target.value;
//     const response = await axios.get("https://cdn.myanimelist.net/images/anime//${currentDoomer}/image_url");
//     const doomerImage = document.createElement('img');
//     const imageURL = response.data.results;
//     doomerImage.src = imageURL;

//     imageMain.append(doomerImage);
//   }
  
  
  
  const appendWeeb = (doomerObj) => {
    // const doomers = Object(doomerObj);
   console.log(doomerObj);
    doomerObj.forEach((doomer) => {
      const doomerOption = document.createElement('option');
      doomerOption.innerText = doomer.title;
  
      dropdown.append(doomerOption);
    })
  }
  
  const animeURL =  "https://api.jikan.moe/v3/search/anime?q=vampire"

const anime = async() => {
  try {
    const response = await axios.get(animeURL)
    const doomerObj = response.data.results;
    console.log(doomerObj)

    appendWeeb(doomerObj);
    
    
    
  } catch(error) {
    console.error(error);
  }
  
}
// dropdown.addEventListener('change', fetchImage);

anime();
