(()=>{
  const button=document.querySelector('#startBtn');
  const input=document.querySelector('#playerName');
  const error=document.querySelector('#nameError');
  const originalStart=button.onclick;
  button.onclick=()=>{
    const clean=input.value.trim().replace(/[^\p{L}\p{N}_ -]/gu,'').slice(0,14);
    if(clean.length<2){error.textContent='Mindestens 2 Zeichen wählen.';input.focus();return}
    error.textContent='';
    NAMES[0]=clean.toUpperCase();
    document.querySelector('#playerNameDisplay').textContent=NAMES[0];
    originalStart();
  };
  input.addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();button.click()}});
})();
