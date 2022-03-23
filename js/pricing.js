const toggle = document.querySelector('.switch input')
const basicEl = document.querySelector('#basic')
const professionalEl = document.querySelector('#professional')
const masterEl = document.querySelector('#master')

toggle.addEventListener('click', (e) => {
  if (!e.target.checked) {
    basicEl.innertext = '199.99'
    professionalEl.innertext = '249.99'
    masterEl.innertext = '399.99'
  } else {
    basicEl.innertext = '19.99'
    professionalEl.innertext = '24.99'
    masterEl.innertext = '39.99'
  }
})
