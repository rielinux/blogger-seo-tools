function generateMeta(){

let title =
document.getElementById("title").value;

let description =
document.getElementById("description").value;

let keywords =
document.getElementById("keywords").value;

let result =
`<title>${title}</title>

<meta name="description" content="${description}">

<meta name="keywords" content="${keywords}">`;

document.getElementById("output").value =
result;

}
