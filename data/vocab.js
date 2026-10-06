/* ============================================================
   CONTENU LANGUES — séries de flashcards.
   Une leçon = { id, title, pairs:[[recto, verso, nature], ...] }
   nature = 'nom' | 'verbe' | 'adjectif' | 'formule' | 'phrase'
   Les leçons dont les cartes sont de nature 'phrase' alimentent
   l'onglet « Petites phrases », les autres l'onglet « Vocabulaire ».
   ============================================================ */
window.VOCAB_DATA = {
  anglais: {
    label: 'Anglais', flag: '🇬🇧', speech: 'en-GB',
    lessons: [
      /* ---------- SÉRIE 1 : TOUS LES MOTS DE LA LEÇON ---------- */
      { id:'hp-mots', title:'Harry Potter — Les mots', pairs:[
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

      /* ---------- SÉRIE 2 : PETITES PHRASES NOTIONNELLES ---------- */
      { id:'hp-phrases', title:'Harry Potter — Les petites phrases', pairs:[
        /* Présent simple — je / tu / il / elle / nous / vous / ils */
        ['Je joue au Quidditch.','I play Quidditch.','phrase'],
        ['Tu aimes les hiboux.','You like owls.','phrase'],
        ['Il a un balai volant.','He has got a broomstick.','phrase'],
        ['Elle joue au Quidditch.','She plays Quidditch.','phrase'],
        ['Nous allons à Poudlard.','We go to Hogwarts.','phrase'],
        ['Vous aimez la magie.','You like magic.','phrase'],
        ['Ils lancent un sort.','They cast a spell.','phrase'],
        ['Elle attrape le Vif d\u2019or.','She catches the Golden Snitch.','phrase'],
        /* Présent simple — négatif, toutes personnes */
        ['Je n\u2019aime pas les araignées.','I don\u2019t like spiders.','phrase'],
        ['Elle n\u2019a pas de baguette.','She hasn\u2019t got a wand.','phrase'],
        ['Il ne va pas à Poudlard.','He doesn\u2019t go to Hogwarts.','phrase'],
        ['Nous ne jouons pas au Quidditch.','We don\u2019t play Quidditch.','phrase'],
        ['Elles ne sont pas rusées.','They aren\u2019t cunning.','phrase'],
        /* Présent simple — questions et réponses */
        ['Est-ce que tu aimes les livres ?','Do you like books?','phrase'],
        ['Est-ce qu\u2019elle est sage ?','Is she wise?','phrase'],
        ['Oui, elle est très sage.','Yes, she is very wise.','phrase'],
        ['Est-ce qu\u2019il a un hibou ?','Has he got an owl?','phrase'],
        ['Où vas-tu ?','Where are you going?','phrase'],
        /* Décrire un personnage */
        ['Elle a les cheveux roux.','She has got ginger hair.','phrase'],
        ['Il porte des lunettes.','He has got glasses.','phrase'],
        ['Il a une cicatrice sur le front.','He has got a scar on his forehead.','phrase'],
        ['Ron a des taches de rousseur.','Ron has got freckles.','phrase'],
        ['Elle est intelligente et brave.','She is clever and brave.','phrase'],
        ['C\u2019est une sorcière puissante.','She is a powerful witch.','phrase'],
        /* Dire l'heure */
        ['Il est sept heures et demie.','It\u2019s half past seven.','phrase'],
        ['Il est trois heures et quart.','It\u2019s quarter past three.','phrase'],
        ['Il est huit heures moins le quart.','It\u2019s quarter to eight.','phrase'],
        ['Il est midi.','It\u2019s midday.','phrase'],
        /* Permission, obligation, interdiction */
        ['Tu peux lancer un sort.','You can cast a spell.','phrase'],
        ['Elle ne doit pas courir dans le couloir.','She mustn\u2019t run in the corridor.','phrase'],
        ['Vous devez faire vos devoirs.','You must do your homework.','phrase'],
        ['Nous devons prendre soin de notre hibou.','We must take care of our owl.','phrase'],
        ['Est-ce que je peux sortir ?','Can I go out?','phrase'],
        /* Formules de politesse / lettre */
        ['Cher Harry, je vais aller à Poudlard.','Dear Harry, I am going to Hogwarts.','phrase'],
        ['Merci beaucoup pour ta lettre.','Thank you very much for your letter.','phrase'],
        ['J\u2019attends avec impatience de tes nouvelles.','I look forward to hearing from you.','phrase'],
        ['Sincèrement,','Yours sincerely,','phrase']
      ]}
    ]
  },
  espagnol: {
    label: 'Espagnol', flag: '🇪🇸', speech: 'es-ES',
    lessons: [
      { id:'esp-mots', title:'Premiers mots', pairs:[
        ['bonjour','hola','formule'], ['merci','gracias','formule'],
        ['s\u2019il te plaît','por favor','formule'], ['au revoir','adiós','formule'],
        ['oui','sí','nom'], ['non','no','nom']
      ]}
    ]
  }
};
