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

// Switch « Rechercher un lieu » (fr-segmented eau potable / baignade) : met à
// jour le libellé et le placeholder de la barre de recherche de ce bloc
// uniquement. Indépendant du filtre de contenu ci-dessus (éléments et
// événement distincts, "change" sur les radios plutôt que "click" sur des
// boutons) : n'affecte pas la section « Contenu pédagogique ».
const searchTypeInputs = document.querySelectorAll('input[name="segmented-type-eau"]')
const searchLabel = document.getElementById('search-lieu-label')
const searchInput = document.getElementById('search-lieu-input')

const searchTypeText = {
  potable: {
    label: 'Rechercher une adresse ou une commune',
    placeholder: 'Adresse, commune...',
  },
  baignade: {
    label: 'Rechercher un lieu de baignade',
    placeholder: 'Plage, lac, rivière, commune...',
  },
}

searchTypeInputs.forEach((input) => {
  input.addEventListener('change', () => {
    const text = searchTypeText[input.value]
    if (!text || !searchLabel || !searchInput) return
    searchLabel.textContent = text.label
    searchInput.placeholder = text.placeholder
  })
})
