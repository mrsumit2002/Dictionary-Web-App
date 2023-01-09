let input = document.querySelector('#input');
let searchBtn = document.querySelector('#search');
let notFound = document.querySelector('.not_found');
let defBox = document.querySelector('.def');
let loading = document.querySelector('.loading');

searchBtn.addEventListener('click',function(e){
    e.preventDefault(); 
    //clear data
    notFound.innerText = '';
    defBox.innerText = '';
    //get input data
    let word = input.value;
    //call API get data
    if(word === ''){
        alert('Word is required');
        return;
    }
    getData(word);
})


async function getData(word){
    loading.style.display = 'block';
    //Ajax call
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const data = await response.json();

    if(!data.length){
        loading.style.display = 'none';
        notFound.innerText = 'No Result Found 😔';
        return;
    }
    //if result is found
    loading.style.display = 'none';
    let shortdef = data[0].meanings[0].definitions[0].definition;
    defBox.innerText = shortdef;

    //sound
    // const soundName = data[0].phonetics[0].audio;

    console.log(data);
}
