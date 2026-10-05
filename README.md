# Site de révisions — 5e

Petit site statique hébergé sur GitHub Pages : exercices de maths + vocabulaire anglais/espagnol.

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil (choix matière) |
| `math.html` | Exercices de maths (QCM + réponses tapées) |
| `langues.html?lang=anglais` ou `?lang=espagnol` | Vocabulaire : liste, cartes, quiz |
| `data/math.js` | **Contenu des exercices de maths** |
| `data/vocab.js` | **Listes de vocabulaire** |

Les scores et les erreurs sont mémorisés dans le navigateur ; les questions ratées reviennent plus souvent.

## Ajouter du contenu

Le contenu est **séparé du code** : tout se passe dans `data/math.js` et `data/vocab.js`.

### Maths (`data/math.js`)

Chaque chapitre contient des questions. Deux formats :

```js
// Réponse tapée
{ key:'p1', q:'8 + 2 × 5 = ?', correct:'18', explain:'La multiplication est prioritaire.', help:'' }

// QCM (correct = index de la bonne réponse, à partir de 0)
{ type:'choice', key:'somme', q:'Le résultat d\u2019une addition s\u2019appelle…',
  a:['une somme','un produit'], correct:0, explain:'Addition → somme.' }
```

### Langues (`data/vocab.js`)

```js
anglais: {
  label:'Anglais', flag:'🇬🇧', speech:'en-GB',
  lessons: [
    { id:'unit1', title:'Unité 1 — La famille', pairs: [['mère','mother'], ...] }
  ]
}
```

## Activer GitHub Pages (une seule fois)

1. Ouvrir <https://github.com/d2dfa2/essai/settings/pages>
2. **Source** : *Deploy from a branch* → branche `main`, dossier `/ (root)`
3. Save → après 1–2 min, le site est sur <https://d2dfa2.github.io/essai/>

## Workflow simple

Envoie des photos/scans des cours ou exercices dans la conversation : je les convertis au bon format et je les pousse dans le dépôt.
