import '@gouvfr/dsfr/dist/dsfr.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons.min.css'
import '@gouvfr/dsfr/dist/dsfr.module.min.js'
import './style.css'

// Filtre de contenu « Contenu pédagogique » : les tags eau potable / eaux de
// baignade pilotent l'affichage des cartes « Pour aller plus loin » et de la
// liste « Les grands sujets » associées au type d'eau sélectionné.
const contentFilterButtons = document.querySelectorAll('[data-content-filter]')
const contentPanels = document.querySelectorAll('[data-content-panel]')

contentFilterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.contentFilter

    contentFilterButtons.forEach((b) => {
      b.setAttribute('aria-pressed', String(b === button))
    })
    contentPanels.forEach((panel) => {
      panel.hidden = panel.dataset.contentPanel !== filter
    })
  })
})
