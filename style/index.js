let popup=document.querySelector('.popup');
let target=document.querySelector('.abus')
target.addEventListener('click',function(e){
        popup.classList.add('open')
        document.querySelector('.pop_block').classList.add('open')
        e.preventDefault()
}
 
)
document.querySelector('.pop_close').addEventListener('click',function(e){    
        document.querySelector('.pop_block').classList.remove('open')
    popup.classList.remove('open') 
    e.preventDefault();
}   
  )
 
document.querySelector('#area').addEventListener('click',function(e){
       
       if(!e.target.closest('.pop_content')){
        popup.classList.remove('open')
        document.querySelector('.pop_block').classList.remove('open')
       }
       
    }
       
        
    
    
)
let swiper=new Swiper('.mySwiper',{
    slidesPerView: 5,
    loop:false,
  grid: {
    rows: 1,
  },
  spaceBetween: 30,
  navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
})


  