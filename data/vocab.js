/* ============================================================
   CONTENU LANGUES — listes de vocabulaire.
   Pour chaque langue, une liste de leçons. Chaque leçon a un
   titre et des paires [français, langue étrangère].
   Les éléments marqués "EXEMPLE" sont des démos à remplacer
   par le vrai vocabulaire des cours.
   ============================================================ */
window.VOCAB_DATA = {
  anglais: {
    label: 'Anglais', flag: '🇬🇧', speech: 'en-GB',
    lessons: [
      { id:'ang-demo', title:'EXEMPLE — Premières phrases', pairs:[
        ['bonjour','hello'], ['merci','thank you'], ['s\u2019il te plaît','please'],
        ['au revoir','goodbye'], ['oui','yes'], ['non','no'],
        ['je m\u2019appelle…','my name is…'], ['comment vas-tu ?','how are you?']
      ]}
    ]
  },
  espagnol: {
    label: 'Espagnol', flag: '🇪🇸', speech: 'es-ES',
    lessons: [
      { id:'esp-demo', title:'EXEMPLE — Premières phrases', pairs:[
        ['bonjour','hola'], ['merci','gracias'], ['s\u2019il te plaît','por favor'],
        ['au revoir','adiós'], ['oui','sí'], ['non','no'],
        ['je m\u2019appelle…','me llamo…'], ['comment vas-tu ?','¿cómo estás?']
      ]}
    ]
  }
};
