const SERVER_URL = 'http://127.0.0.1:8000';

async function getArticle() {
    let response = await fetch(`${SERVER_URL}/blog/article`);
    let data = await response.json();
    return data;
}

async function insertArticle() {
    let data = await getArticle();
    let title = document.getElementById('title');
    let content = document.getElementById('content');
    title.innerText = data.title;
    content.innerText = data.content;
}

async function getArticleList() {
    let response = await fetch(`${SERVER_URL}/blog/article`)
    let data = await response.json();
    return data;
    
}

async function insertArticleList() {
    let articles = await getArticleList();
    articles.forEach((article)=>{
        let get = document.getElementById('insertArticleList')
        get.insertAdjacentHTML(
            "beforeend",
            `<div id="${article.id}>">
            <h4>${article.title}</h4>
            <p>${article.content}</p>
            </div>`
        )
    } )
}

async function getCategory() {
    let response = await fetch(`${SERVER_URL}/blog/category`);
    let data = await response.json();
    return data; 
} 

async function category() {
    let token = getCookie('access_token');
    let catevaule = {name: document.getElementById('category').value}
    let response = await fetch(`${SERVER_URL}/blog/category`, {
        method: 'POST',
        body: JSON.stringify(catevaule),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    let data = await response.json();
    return data;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

