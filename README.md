# qualite-eau
Prototype IA — Qualité de l'eau

Site vitrine mobile-first construit avec le [Système de Design de l'État (DSFR)](https://www.systeme-de-design.gouv.fr/) et [Vite](https://vitejs.dev/).

## Prérequis

Le DSFR est distribué sous des [modalités d'utilisation](https://github.com/GouvernementFR/dsfr/blob/main/doc/legal/cgu.md) qu'il faut accepter avant installation. En local :

```bash
npm create @gouvfr/dsfr@latest
```

En intégration continue (non interactif) :

```bash
DSFR_ACCEPT_LICENSE=1 npm install
```

## Développement

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production dans dist/
npm run preview  # prévisualisation du build
```

## Structure

- `index.html` — page d'entrée, en-tête et pied de page DSFR.
- `src/main.js` — imports des styles et scripts DSFR.
- `src/style.css` — styles spécifiques au site (mobile-first).
- `public/favicon/` — favicons DSFR (`node_modules/@gouvfr/dsfr/dist/favicon/`).

## Règle pour les composants DSFR

Avant d'ajouter un composant DSFR (header, footer, cartes, boutons, accordéons, formulaires, etc.), copier sa structure HTML exacte depuis les exemples officiels du package installé :

```
node_modules/@gouvfr/dsfr/example/component/<composant>/index.html
```

Pour les icônes, utiliser uniquement des classes `fr-icon-*` vérifiées dans :

```
node_modules/@gouvfr/dsfr/dist/utility/icons/
```

## Contenu provisoire

Le logo (« Intitulé officiel »), le nom de service, les liens de menu et de pied de page sont des placeholders en attente des maquettes Figma page par page.
