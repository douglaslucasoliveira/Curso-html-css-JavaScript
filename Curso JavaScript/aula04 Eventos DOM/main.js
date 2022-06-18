var a = window.document.getElementById('area')
    
    a.addEventListener('mouseenter', entrar)
    a.addEventListener('mouseout', sair)
    
    a.addEventListener('drag', copiou)
    a.addEventListener('dragend', abortar)

    function abortar() {
      a.style.background = 'orange'
    }

    function copiou() {
      a.style.background = 'black'
    }
    

    function duas() {
      a.style.background = 'orange'
    }


    function clicar() {
      a.innerText = 'Clicou!'
      a.style.background = 'black'
  
    }
    

    function entrar() {
      a.innerText = 'Entrou'
      a.style.background = 'blue'
    }

    function sair() {
      a.innerText = 'Saiu'
      a.style.background = 'red'
    }