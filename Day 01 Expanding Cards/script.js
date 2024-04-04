
const panels = document.querySelectorAll('.panel')

panels.forEach(panel =>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}


document.addEventListener("DOMContentLoaded", function() {
    const colors = ['rgb(0, 56, 122)', ' rgb(255, 0, 0)', 'rgb(255, 165, 0)', 'rgb(210, 180, 140)', 'rgb(255, 255, 255)'];
  
    panels.forEach(function(panel, index) {
      panel.addEventListener("click", function() {
        document.body.style.backgroundColor = colors[index];
      });
    });
  });

  