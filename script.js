const screens=[...document.querySelectorAll('.screen')];
function showPage(page){
  screens.forEach(s=>s.classList.toggle('active',s.dataset.page===String(page)));
  history.replaceState(null,'',`#${page}`);
}
document.addEventListener('click',e=>{
  const btn=e.target.closest('[data-go]');
  if(btn) showPage(btn.dataset.go);
});
const initial=Number(location.hash.slice(1));
showPage(initial>=1&&initial<=6?initial:1);
