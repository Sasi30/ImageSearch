const accessKey="zohkuGZq4wqlEuATQpMkTm1kj6w9ORYKhwtCikzrL-g";
const formEl = document.querySelector("form")
const inputEl=document.getElementById("search-input")
const searchRl= document.querySelector(".search-results")
const showMr=document.getElementById('showmore') 


let inputdata="";
let page=1;

async function searchimage(){
    inputdata=inputEl.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accessKey}`;
    const response=await fetch(url)
    const data=await response.json()

    const results=data.results
    if(page==1){
        searchRl.innerHTML="";
    }
    results.map((result)=>{
        const imageWrapper=document.createElement("div")
        imageWrapper.classList.add("search-result")
        const image=document.createElement("img")
        image.src=result.urls.small;
        image.alt=result.alt_description
        const imagelink=document.createElement('a')
        imagelink.href=result.links.html;
        imagelink.target="blank"
        imagelink.textContent=result
        .alt_description


        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imagelink)
        searchRl.appendChild(imageWrapper)
        console.log(result.value);
    });
    page++
    if (page>1){
        showMr.style.display="block"
    }
}
//adding event listeners
formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchimage()
})
showMr.addEventListener("click",()=>{
    searchimage();
})
