# Les révisions de Didou 💖

Petit site statique hébergé sur GitHub Pages : exercices de maths + vocabulaire anglais/espagnol, pour une élève de 5e.

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil — une entrée par matière (Maths, Anglais, Espagnol) |
| `math.html` | Chapitres de maths (QCM + réponses tapées) |
| `langues.html?lang=anglais` ou `?lang=espagnol` | Leçons de vocabulaire : liste, cartes, quiz |
| `data/math.js` | **Contenu des chapitres de maths** |
| `data/vocab.js` | **Leçons de vocabulaire des langues** |

Scores et erreurs sont mémorisés dans le navigateur ; les questions ratées reviennent plus souvent. Les messages sont bienveillants (Didou a besoin d'encouragements 💖).

## Ajouter du contenu

Tout est dans `data/math.js` et `data/vocab.js` — le code n'a pas besoin de changer.

### Maths — ajouter un chapitre

```js
{ id:'fractions', icon: '🍰', title: 'Fractions', questions: [
  { key:'f1', q:'1/2 + 1/4 = ? (en dixièmes)', correct:'0,75', explain:'…' },
  { type:'choice', key:'f2', q:'…', a:['rep1','rep2','rep3'], correct:1, explain:'…' }
] }
```

### Langues — ajouter une leçon

```js
{ id:'unit1', title:'Unité 1 — La famille', pairs:[['mère','mother'], ...] }
```

## GitHub Pages

Une fois activé (Settings → Pages → branche `main`, dossier `/ (root)`), le site est sur <https://d2dfa2.github.io/essai/>

## Workflow

Envoyer les scans de cours ou d'exercices dans la conversation Vibe : conversion au bon format + push dans le dépôt.
