!function(){
  var play=document.querySelector("#play")
  var pause=document.querySelector("#pause")
  var music=document.querySelector("#music")
  play.addEventListener('click',function(e){
    e.currentTarget.classList.add('active')
    pause.classList.remove('active')
    music.pause()
  })
  pause.addEventListener('click',function(e){
    e.currentTarget.classList.add('active')
    play.classList.remove('active')
    music.play()
  })

}()