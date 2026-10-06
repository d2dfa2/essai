/* ============================================================
   CONTENU LANGUES — leçons de vocabulaire + exercices.
   Leçon vocabulaire : { id, title, pairs:[[français, anglais, nature], ...] }
     nature = 'nom' | 'verbe' | 'adjectif' | 'formule' (optionnel)
   Leçon d'écriture : { id, title, items:[ { fr:'phrase à traduire',
     hint:'point notionnel travaillé', model:'exemple de réponse' } ] }
   Leçon QCM (grammaire/culture) : { id, title, mcq:[ { q, a, correct, explain } ] }
   - Quiz de LEÇON : réviser pour un contrôle.
   - Quiz GÉNÉRAL (pool) : tout est mélangé, les ratés reviennent
     plus souvent, maîtrisé après 10 validations.
   ============================================================ */
window.VOCAB_DATA = {
  anglais: {
    label: 'Anglais', flag: '🇬🇧', speech: 'en-GB',
    lessons: [
      { id:'ang-demo1', title:'EXEMPLE — Premières phrases', pairs:[
        ['bonjour','hello','formule'], ['merci','thank you','formule'],
        ['s\u2019il te plaît','please','formule'], ['au revoir','goodbye','formule'],
        ['oui','yes'], ['non','no'], ['je m\u2019appelle…','my name is…','formule'],
        ['comment vas-tu ?','how are you?','formule']
      ]},

      /* ---------- HARRY POTTER — PARTIE 1 : FLASHCARDS ---------- */
      { id:'hp-vocab', title:'Harry Potter — Les mots (flashcards)', pairs:[
        /* La magie */
        ['une baguette magique','a wand','nom'],
        ['une sorcière','a witch','nom'],
        ['un sorcier','a wizard','nom'],
        ['un balai (volant)','a broomstick','nom'],
        ['lancer un sort','to cast a spell','verbe'],
        /* L'école */
        ['la directrice','headmistress','nom'],
        ['le directeur','headmaster','nom'],
        ['un adjoint / une adjointe','a deputy','nom'],
        /* Formules de politesse */
        ['cher / chère (début de lettre)','Dear','formule'],
        ['sincèrement (fin de lettre)','Yours sincerely','formule'],
        ['j\u2019attends avec impatience de tes nouvelles','I look forward to hearing from you','formule'],
        /* Qualités */
        ['intelligent(e)','clever','adjectif'],
        ['sage','wise','adjectif'],
        ['rusé(e)','cunning','adjectif'],
        ['brave','brave','adjectif'],
        ['puissant(e)','powerful','adjectif'],
        /* Autres mots de la leçon */
        ['attraper','to catch','verbe'],
        ['une cicatrice','a scar','nom'],
        ['un hibou','an owl','nom'],
        ['un crapaud','a toad','nom'],
        ['un blaireau','a badger','nom'],
        ['prendre soin de','to take care of','verbe'],
        ['des taches de rousseur','freckles','nom'],
        ['roux / rousse','ginger','adjectif']
      ]},

      /* ---------- HARRY POTTER — PARTIE 2 : ÉCRIRE DES PHRASES ---------- */
      { id:'hp-ecrit', title:'Harry Potter — Écrire des phrases', items:[
        /* Le présent simple — formes affirmatives, négatives, interrogatives */
        { fr:'Harry joue au Quidditch.', hint:'Présent simple — attention à la 3e personne (he) : le verbe prend un -s !',
          model:'Harry plays Quidditch.' },
        { fr:'Hermione adore les livres.', hint:'Présent simple — 3e personne : -s ou -es au verbe.',
          model:'Hermione loves books.' },
        { fr:'Ron n\u2019aime pas les araignées.', hint:'Présent simple négatif — avec he, on utilise doesn\u2019t + verbe sans -s.',
          model:'Ron doesn\u2019t like spiders.' },
        { fr:'Elle ne va pas à Poudlard.', hint:'Négation avec she : doesn\u2019t + go.',
          model:'She doesn\u2019t go to Hogwarts.' },
        { fr:'Est-ce que tu aimes les hiboux ?', hint:'Question au présent simple — on utilise Do + you + verbe sans -s.',
          model:'Do you like owls?' },
        { fr:'Est-ce qu\u2019il a un balai ?', hint:'Question avec he : Does + he + verbe sans -s.',
          model:'Does he have a broomstick?' },
        /* Permission, interdiction, obligation */
        { fr:'Tu peux lancer un sort.', hint:'Permission — utilise CAN + verbe.',
          model:'You can cast a spell.' },
        { fr:'Tu dois faire tes devoirs.', hint:'Obligation — utilise MUST + verbe.',
          model:'You must do your homework.' },
        { fr:'Interdit de courir dans les couloirs !', hint:'Interdiction — utilise MUSTN\u2019T + verbe.',
          model:'You mustn\u2019t run in the corridors!' },
        { fr:'Les élèves doivent prendre soin de leurs animaux.', hint:'Obligation — must + to take care of.',
          model:'The pupils must take care of their pets.' },
        /* Décrire un personnage */
        { fr:'Harry porte des lunettes.', hint:'Description — utilise has got + lunettes (glasses).',
          model:'Harry has got glasses.' },
        { fr:'Il a une cicatrice sur le front.', hint:'has got + a scar.',
          model:'He has got a scar on his forehead.' },
        { fr:'Elle a les cheveux roux.', hint:'ginger hair — attention : hair sans -s.',
          model:'She has got ginger hair.' },
        { fr:'Il est brave et intelligent.', hint:'caractère : he is + adjectifs (brave, clever).',
          model:'He is brave and clever.' },
        { fr:'Ron a des taches de rousseur.', hint:'has got + freckles.',
          model:'Ron has got freckles.' },
        /* Écrire une lettre — début et fin */
        { fr:'Commence une lettre à Ron.', hint:'On écrit Dear + prénom + virgule. Ex : Dear Ron,',
          model:'Dear Ron,' },
        { fr:'Termine la lettre avant de signer.', hint:'Deux formules : I look forward to hearing from you. Yours sincerely,',
          model:'I look forward to hearing from you.\nYours sincerely,' },
        { fr:'Remercie pour la lettre reçue.', hint:'Thank you very much for your letter.',
          model:'Thank you very much for your letter.' }
      ]}
    ]
  },
  espagnol: {
    label: 'Espagnol', flag: '🇪🇸', speech: 'es-ES',
    lessons: [
      { id:'esp-demo1', title:'EXEMPLE — Premières phrases', pairs:[
        ['bonjour','hola','formule'], ['merci','gracias','formule'],
        ['s\u2019il te plaît','por favor','formule'], ['au revoir','adiós','formule'],
        ['oui','sí'], ['non','no'], ['je m\u2019appelle…','me llamo…','formule']
      ]}
    ]
  }
};
