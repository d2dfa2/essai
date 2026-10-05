/* ============================================================
   CONTENU LANGUES — listes de vocabulaire.
   Une leçon = { id:'identifiant', title:'Titre affiché', pairs:[[français, langue], ...] }
   - Quiz de LEÇON : réviser pour un contrôle (leçons seules).
   - Quiz GÉNÉRAL (pool) : toutes les leçons mélangées, avec :
       * les mots ratés qui reviennent plus souvent ;
       * les mots validés 10 fois qui ne sont plus posés (maîtrisés).
   Les éléments marqués "EXEMPLE" sont des démos à remplacer
   par le vrai vocabulaire des cours.
   ============================================================ */
window.VOCAB_DATA = {
  anglais: {
    label: 'Anglais', flag: '🇬🇧', speech: 'en-GB',
    lessons: [
      { id:'ang-demo1', title:'EXEMPLE — Premières phrases', pairs:[
        ['bonjour','hello'], ['merci','thank you'], ['s\u2019il te plaît','please'],
        ['au revoir','goodbye'], ['oui','yes'], ['non','no'],
        ['je m\u2019appelle…','my name is…'], ['comment vas-tu ?','how are you?']
      ]},
      { id:'ang-demo2', title:'EXEMPLE — L\u2019école', pairs:[
        ['un cahier','a notebook'], ['un stylo','a pen'], ['un livre','a book'],
        ['la maîtresse','the teacher'], ['la classe','the classroom']
      ]}
    ]
  },
  espagnol: {
    label: 'Espagnol', flag: '🇪🇸', speech: 'es-ES',
    lessons: [
      { id:'esp-demo1', title:'EXEMPLE — Premières phrases', pairs:[
        ['bonjour','hola'], ['merci','gracias'], ['s\u2019il te plaît','por favor'],
        ['au revoir','adiós'], ['oui','sí'], ['non','no'],
        ['je m\u2019appelle…','me llamo…'], ['comment vas-tu ?','¿cómo estás?']
      ]},
      { id:'esp-demo2', title:'EXEMPLE — L\u2019école', pairs:[
        ['un cahier','un cuaderno'], ['un stylo','un bolígrafo'], ['un livre','un libro'],
        ['la maîtresse','la maestra'], ['la classe','la clase']
      ]}
    ]
  }
};
