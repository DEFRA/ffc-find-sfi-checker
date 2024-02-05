/* istanbul ignore file */

import { initAll } from 'govuk-frontend'

initAll()

document.addEventListener('DOMContentLoaded', function (event) {
  var printButton = document.getElementById('printButton')

  if (printButton) {
    printButton.classList.remove('govuk-!-display-none')
  }
})
