const toggle = document.querySelector('.switch input')
const basic = document.querySelector('#basic')
const professional = document.querySelector('#professional')
const master = document.querySelector('#master')

toggle.addEventListener('click', (e) => {
  if (!e.target.checked) {
    basic.innerText = '199.99'
    professional.innerText = '249.99'
    master.innerText = '399.99'
  } else {
    basic.innerText = '19.99'
    professional.innerText = '24.99'
    master.innerText = '39.99'
  }
})
