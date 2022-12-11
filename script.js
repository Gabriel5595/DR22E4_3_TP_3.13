const itens = Array.from(document.getElementsByTagName("li"));
itens.forEach(item => criaEvento(item));

function criaEvento(item){
  item.addEventListener('click',function(){alert(this.innerText)});
}