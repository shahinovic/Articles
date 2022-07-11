/* images api 
https://jsonplaceholder.typicode.com/photos
*/
/* posts api 
https://jsonplaceholder.typicode.com/posts
*/

async function* genData() {

    var postes = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
    for (let i = 0; i < postes.length; i++) {
        let box = document.createElement('div');
        box.className = 'box';
        let p = document.createElement('p');
        let pInfo = document.createTextNode(postes[i].title);
        p.appendChild(pInfo);
        let img = document.createElement('img');
        fetch("https://jsonplaceholder.typicode.com/photos").then((res) => res.json()).then((post) => { img.setAttribute('src', `${post[i].url}`) });
        box.appendChild(img);
        box.appendChild(p);
        let hiddenP = document.createElement('p');
        hiddenP.className = 'hidden-p';
        hiddenP.innerHTML = `${postes[i].body}`;
        hiddenP.style.display = 'none';
        box.appendChild(hiddenP);
        yield document.querySelector('.art-boxes').appendChild(box);
    }

}

let gD = genData();
for (let i = 0; i < 15; i++) { gD.next() }
document.querySelector('.gen-btn').onclick = _ => {
    for (let i = 0; i < 5; i++) { gD.next() }
};
window.onclick = function (e) {
    if (e.target.classList.contains('box')) {
        let mainPop = document.createElement('div');
        mainPop.className = 'main-pop';
        let imgDiv = document.createElement('div');
        imgDiv.className = 'img-div';
        let artDiv = document.createElement('div');
        artDiv.className = 'art-div';
        let closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.innerHTML = "X";
        let img = document.createElement('img');
        img.setAttribute('src', `${e.target.children[0].src}`)
        img.className = 'pop-img';
        let art = document.createElement('p');
        art.innerHTML = `${e.target.children[2].innerHTML}`;
        mainPop.appendChild(closeButton);
        artDiv.appendChild(art);
        imgDiv.appendChild(img);
        mainPop.appendChild(imgDiv);
        mainPop.appendChild(artDiv);
        document.body.appendChild(mainPop);
        closeButton.onclick = _ => {
            mainPop.remove()
        };
    } else if (e.target.parentElement.classList.contains('box')) {
        let mainPop = document.createElement('div');
        mainPop.className = 'main-pop';
        let imgDiv = document.createElement('div');
        imgDiv.className = 'img-div';
        let artDiv = document.createElement('div');
        artDiv.className = 'art-div';
        let closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.innerHTML = "X";
        let img = document.createElement('img');
        img.setAttribute('src', `${e.target.parentElement.children[0].src}`)
        img.className = 'pop-img';
        let art = document.createElement('p');
        art.innerHTML = `${e.target.parentElement.children[2].innerHTML}`;
        mainPop.appendChild(closeButton);
        artDiv.appendChild(art);
        imgDiv.appendChild(img);
        mainPop.appendChild(imgDiv);
        mainPop.appendChild(artDiv);
        document.body.appendChild(mainPop);
        closeButton.onclick = _ => {
            mainPop.remove()
        };
    }
}
