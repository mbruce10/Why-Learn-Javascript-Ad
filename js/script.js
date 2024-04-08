var firstListItem = document.querySelector("ul li");
//console.log(firstListItem.outerHTML);
//<li><i class="fas fa-check"></i> Build websites and web applications</li>

firstListItem.style.textTransform = "uppercase";

var moreReasons = document.querySelector(".more-reasons");
//console.log(moreReasons.outerHTML);
//<h3 class="more-reasons">You'd like some more reasons?</h3>

moreReasons.style.fontSize = "2.5em";

var whyJS = document.querySelector(".intro h3");
//console.log(whyJS.outerHTML);
//<h3>Why learn JavaScript?</h3>

whyJS.innerHTML = 
'Why learn <span class= "highlight">JavaScript</span>?';
//console.log(whyJS.innerHTML);
//Why learn <span class="highlight">JavaScript</span>?

var highlight = document.querySelector(".highlight");

highlight.style.backgroundColor = "#ffff82";

var mainImage = document.querySelector("img");
//console.log(mainImage.outerHTML);
//<img src="img/js-icon-1.png" alt="JavaScript Logo">

mainImage.src = "img/js-code.png";
mainImage.alt = "JavaScript code example";


