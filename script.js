function openLight(e){
  const lb=document.getElementById('lightbox');
  const img=document.getElementById('lightbox-img');
  img.src=e.target.src;
  lb.classList.add('open');
}
function closeLight(){
  const lb=document.getElementById('lightbox');
  lb.classList.remove('open');
  setTimeout(()=>document.getElementById('lightbox-img').src='','200');
}
