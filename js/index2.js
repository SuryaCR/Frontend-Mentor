const myCheckbox = document.querySelector('.switch input')
const duration = document.querySelector('.month')
const price = document.querySelector('.price .pricefix')
const switcher = document.querySelector('.switch')
const range = document.querySelector('.myrange')

switcher.onclick = function () {
  if (myCheckbox.checked == true) {
    const priceInt = parseInt(price.innerText)
    price.innerText = `${(priceInt - (priceInt * 0.25)) * 12}`
    duration.innerText = '/year'
  } else {
    refreshPrices()
    duration.innerText = '/month'
  }
}

const pageViews = document.querySelector('.page-views span')
range.addEventListener('input', refreshPrices)

function refreshPrices () {
  if (range.value == 1) {
    if (myCheckbox.checked == true) {
      price.innerText = 72
    } else {
      price.innerText = 8
    }

    pageViews.innerText = '10k'
  }

  if (range.value == 2) {
    if (myCheckbox.checked == true) {
      price.innerText = 108
    } else {
      price.innerText = 12
    }

    pageViews.innerText = '50k'
  }

  if (range.value == 3) {
    if (myCheckbox.checked == true) {
      price.innerText = 144
    } else {
      price.innerText = 16
    }

    pageViews.innerText = '100k'
  }

  if (range.value == 4) {
    if (myCheckbox.checked == true) {
      price.innerText = 216
    } else {
      price.innerText = 24
    }

    pageViews.innerText = '500k'
  }


  if (range.value == 5) {
    if (myCheckbox.checked == true) {
      price.innerText = 324
    } else {
      price.innerText = 36
    }

    pageViews.innerText = '1M'
  }
}