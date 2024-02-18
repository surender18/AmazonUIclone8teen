const images = document.querySelectorAll('.header-slider ul img');
const prev_btn =  document.querySelector('.control-prev');
const next_btn =  document.querySelector('.control-next');

let n=0;
function changeslide(){
    for(let i=0;i<images.length;i++){
        images[i].style.display = 'none';
    }
    images[n].style.display = 'block';

}
changeslide();
prev_btn.addEventListener('click',(e)=>{
if(n>0){
    n--;
}else{
    n=images.length-1;
}
changeslide();
})
next_btn.addEventListener('click',(e)=>{
    if(n<images.length-1){
        n++;
    }else{
        n=0;
    }
    changeslide();
    })