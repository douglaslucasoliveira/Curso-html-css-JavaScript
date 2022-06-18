var p5 = window.document.body
      var p4 = window.document.getElementsByTagName('strong')[0]
      var p3 = window.document.getElementsByTagName('div')[0]
      var p2 = window.document.getElementsByTagName('h1')[0]
      var p1 = window.document.getElementsByTagName('p')[1]
      window.document.write('Esta escrito assim: ' + p1.innerHTML)
      p1.style.color = 'blue'
      p2.style.color = 'red'
      p3.style.color = 'red'
      p4.style.color = 'green'
      p5.style.background = 'black'

      var d = window.document.getElementById('msg')

      d.style.color = 'orange'
      d.innerText = 'Estou aguardando...'

      var w1 = window.document.getElementsByName('sms')

      w1.style.color = 'blue'

      var k = window.document.querySelector('#msg')
      var f = window.document.querySelector('.title')
      var g = window.document.querySelector('body')
      var j = window.document.querySelector('strong')
      var p = window.document.querySelector('.sms')

      k.style.color = 'red'
      f.style.color = 'red'
      g.style.background = 'black'
      j.style.color = 'green'
      p.style.color = 'blue'