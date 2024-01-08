/* istanbul ignore file */

import { initAll } from 'govuk-frontend'

initAll()

document.addEventListener('DOMContentLoaded', function (event) {
  var menuButton = document.getElementById('menuButton')
  var superNavMenu = document.getElementById('super-navigation-menu')

  var menuLink = document.getElementById('menuLink')
  var jsMenuButton = document.getElementById('jsMenuButton')

  // Search
  var searchButton = document.getElementById('super-search-menu-toggle')
  var nonJsSearchButton = document.getElementById('searchButton')
  var superSearchMenu = document.getElementById('super-search-menu')

  menuLink.classList.add('govuk-!-display-none')
  jsMenuButton.classList.remove('govuk-!-display-none')
  nonJsSearchButton.classList.add('govuk-!-display-none')
  searchButton.classList.remove('govuk-!-display-none')

  function openNavMenu() {
    superNavMenu.removeAttribute('hidden')

    jsMenuButton.classList.add('active')
  }

  function closeNavMenu() {
    superNavMenu.setAttribute('hidden', 'hidden')

    jsMenuButton.classList.remove('active')
  }

  function openSearchMenu() {
    superSearchMenu.removeAttribute('hidden')

    searchButton.classList.add('active')
  }

  function closeSearchMenu() {
    superSearchMenu.setAttribute('hidden', 'hidden')

    searchButton.classList.remove('active')
  }

  jsMenuButton.addEventListener('click', function (event) {
    if (jsMenuButton.classList.contains('active')) {
      closeNavMenu()
    } else {
      openNavMenu()
      closeSearchMenu()
    }
  })

  searchButton.addEventListener('click', function (event) {
    if (searchButton.classList.contains('active')) {
      closeSearchMenu()
    } else {
      openSearchMenu()
      closeNavMenu()
    }
  })

  var printButton = document.getElementById('printButton')

  if (printButton) {
    printButton.classList.remove('govuk-!-display-none')
  }
})
