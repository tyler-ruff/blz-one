function buildToc(){
    const tocRoot = document.getElementById('toc-root');
    const content = document.getElementById('main-article');

    var headingTree = content.querySelectorAll("h1,h2,h3");

    const tocContainer = document.getElementById('toc-container');
    //const tocContainer = document.createElement('div');
    //tocContainer.id = 'toc-container';
    if(tocContainer.innerHTML !== null && tocContainer.innerHTML !== undefined){
        tocContainer.innerHTML = "";
    }

    //Create TOC List
    var tocList = document.createElement('ol');
    tocList.classList.add('py-5');
    tocList.role = "tree";
    //var tocTree = [], cur;

    // Add Title Item
    var tocTitle = document.createElement('h4');
    tocTitle.classList.add('block','text-xl', 'py-5', 'select-none', 'text-center', 'md:text-left');
    tocTitle.innerText = `Table of Contents`;

    // Build TOC Component
    var tocComponent = document.createElement('div');
    tocComponent.id = "table-of-contents";
    tocComponent.classList.add('px-3', 'my-3');
    tocComponent.role = "menu";

    for (var i = 0; i < headingTree.length; i++) {
        var e = headingTree[i];
        var tocListItem = document.createElement('li');
        var tocItemLink = document.createElement('a');

        tocListItem.role = "treeitem";

        tocItemLink.innerHTML = e.textContent;
        tocItemLink.href = `#${e.id}`;

        if(e.tagName === "H1"){
            tocListItem.classList.add('pl-0');
        } else if(e.tagName === "H2"){
            //tocListItem.classList.add('pl-4', 'list-none');
        } else if(e.tagName === "H3"){
            //tocListItem.classList.add('pl-8', 'list-none');
        } else if(e.tagName === "H4"){
        }
        
        tocListItem.appendChild(tocItemLink);
        tocList.appendChild(tocListItem);
    }

    tocComponent.append(tocTitle);
    tocComponent.append(tocList);

    //tocContainer.innerHTML = "";
    // Add component to container
    tocContainer.append(tocComponent);
    tocRoot.append(tocContainer);
}

( async function(){
    buildToc();
} )();

(function(){
    window.addEventListener("DOMContentLoaded", (window, event) => {
        buildToc();
    })
})();