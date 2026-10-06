/* ============================================================
   CONTENU LANGUES — listes de vocabulaire + QCM de grammaire.
   Une leçon = {
     id:'identifiant', title:'Titre affiché',
     pairs:[[français, langue], ...],          <- optionnel
     mcq:[ { q:'…', a:['rep1','rep2','rep3'], correct:0, explain:'…' } ]  <- optionnel
   }
   - Quiz de LEÇON : réviser pour un contrôle (leçons seules).
   - Quiz GÉNÉRAL (pool) : toutes les leçons mélangées, avec :
       * les questions ratées qui reviennent plus souvent ;
       * les questions validées 10 fois qui ne sont plus posées (maîtrisées).
   ============================================================ */
window.VOCAB_DATA = {
  anglais: {
    label: 'Anglais', flag: '🇬🇧', speech: 'en-GB',
    lessons: [
      /* ---------- EXEMPLES (à garder ou remplacer) ---------- */
      { id:'ang-demo1', title:'EXEMPLE — Premières phrases', pairs:[
        ['bonjour','hello'], ['merci','thank you'], ['s\u2019il te plaît','please'],
        ['au revoir','goodbye'], ['oui','yes'], ['non','no'],
        ['je m\u2019appelle…','my name is…'], ['comment vas-tu ?','how are you?']
      ]},
      { id:'ang-demo2', title:'EXEMPLE — L\u2019école', pairs:[
        ['un cahier','a notebook'], ['un stylo','a pen'], ['un livre','a book'],
        ['la maîtresse','the teacher'], ['la classe','the classroom']
      ]},

      /* ---------- HARRY POTTER — VOCABULAIRE ---------- */
      { id:'hp-vocab-magie', title:'Harry Potter — Vocabulaire : la magie', pairs:[
        ['une baguette (magique)','a wand'], ['une sorcière','a witch'],
        ['un sorcier','a wizard'], ['un balai (volant)','a broomstick'],
        ['lancer un sort','to cast a spell']
      ]},
      { id:'hp-vocab-ecole', title:'Harry Potter — Vocabulaire : l\u2019école et la lettre', pairs:[
        ['la directrice','headmistress'], ['le directeur','headmaster'],
        ['un adjoint / une directrice adjointe','a deputy'],
        ['cher / chère (début de lettre)','Dear'],
        ['sincèrement (fin de lettre)','Yours sincerely'],
        ['j\u2019attends avec impatience…','I look forward to…']
      ]},
      { id:'hp-vocab-qualites', title:'Harry Potter — Vocabulaire : les qualités', pairs:[
        ['intelligent(e)','clever'], ['sage','wise'], ['rusé(e)','cunning'],
        ['brave / courageux(se)','brave'], ['puissant(e)','powerful']
      ]},
      { id:'hp-vocab-autres', title:'Harry Potter — Vocabulaire : les mots de la leçon', pairs:[
        ['attraper','to catch'], ['une cicatrice','a scar'], ['un hibou','an owl'],
        ['un crapaud','a toad'], ['un blaireau','a badger'], ['prendre soin de','to take care of'],
        ['des taches de rousseur','freckles'], ['roux / rouquin','ginger']
      ]},

      /* ---------- HARRY POTTER — GRAMMAIRE ---------- */
      { id:'hp-gr-heure', title:'Harry Potter — Grammaire : dire l\u2019heure', mcq:[
        { q:'« It\u2019s half past seven » = …', a:['7h00','7h30','8h30'], correct:1, explain:'half past seven = 7 heures et demie.' },
        { q:'« It\u2019s quarter past three » = …', a:['3h00','3h15','3h45'], correct:1, explain:'quarter past = et quart.' },
        { q:'« It\u2019s ten to five » = …', a:['4h50','5h10','5h50'], correct:0, explain:'to = moins : il reste 10 minutes avant 5h.' },
        { q:'« It\u2019s midday » = …', a:['minuit','midi','le matin'], correct:1, explain:'midday = midi ; midnight = minuit.' },
        { q:'Comment dit-on « Il est 8 heures » ?', a:['It\u2019s eight o\u2019clock','It\u2019s eight hours','He is eight'], correct:0, explain:'On utilise o\u2019clock pour l\u2019heure juste.' }
      ]},
      { id:'hp-gr-modaux', title:'Harry Potter — Grammaire : permission, interdiction, obligation', mcq:[
        { q:'« Tu peux sortir » = …', a:['You can go out','You must go out','You mustn\u2019t go out'], correct:0, explain:'can = la permission.' },
        { q:'« Tu dois faire tes devoirs » = …', a:['You can do your homework','You must do your homework','You mustn\u2019t do your homework'], correct:1, explain:'must = l\u2019obligation.' },
        { q:'« Interdit de courir dans les couloirs ! » = …', a:['You mustn\u2019t run in the corridors','You can run in the corridors','You must run in the corridors'], correct:0, explain:'mustn\u2019t = l\u2019interdiction (règle de Poudlard 😄).' },
        { q:'« must » exprime…', a:['la permission','l\u2019obligation','l\u2019interdiction'], correct:1, explain:'must = devoir / obligation.' },
        { q:'« can » exprime…', a:['la permission','l\u2019obligation','la possession'], correct:0, explain:'can = pouvoir / la permission.' }
      ]},
      { id:'hp-gr-present', title:'Harry Potter — Grammaire : le présent simple', mcq:[
        { q:'Complète : She ___ to Hogwarts.', a:['go','goes','going'], correct:1, explain:'À la 3e personne (he, she, it), le verbe prend -s ou -es.' },
        { q:'Complète : They ___ Quidditch on Sundays.', a:['plays','play','playing'], correct:1, explain:'They = pluriel : pas de -s au verbe.' },
        { q:'Négation : He ___ like snakes.', a:['don\u2019t like','doesn\u2019t like','not like'], correct:1, explain:'Avec he/she/it, on utilise doesn\u2019t.' },
        { q:'Question : ___ you play chess?', a:['Do','Does','Are'], correct:0, explain:'Avec you, la question se forme avec Do.' },
        { q:'Complète : Harry ___ (have) an owl.', a:['have','has','haves'], correct:1, explain:'have devient has à la 3e personne.' }
      ]},

      /* ---------- HARRY POTTER — MÉTHODO ---------- */
      { id:'hp-metho-decrire', title:'Harry Potter — Décrire un personnage', mcq:[
        { q:'« Il porte des lunettes » = …', a:['He has got glasses','He is glasses','He have glasses'], correct:0, explain:'Pour décrire, on utilise has got (ou has).' },
        { q:'« Il est courageux » = …', a:['He is brave','He has brave','He brave'], correct:0, explain:'Être + adjectif : He is brave.' },
        { q:'« Elle a les cheveux roux » = …', a:['She has got ginger hair','She is ginger hair','She has ginger hairs'], correct:0, explain:'hair est indénombrable : ginger hair, sans s.' },
        { q:'« Il a une cicatrice » = …', a:['He has got a scar','He is a scar','He have a scar'], correct:0, explain:'has got + article : He has got a scar.' },
        { q:'Pour présenter un personnage, on peut commencer par…', a:['His name is… He is…','Name is… Good is…','He has name…'], correct:0, explain:'His name is… puis He is… (âge, caractère) et He has got… (physique).' }
      ]},
      { id:'hp-metho-lettre', title:'Harry Potter — Écrire une lettre', mcq:[
        { q:'Comment commence-t-on une lettre ?', a:['Dear …','Hello you','To who'], correct:0, explain:'Dear + prénom, followed by a comma: Dear Ron,' },
        { q:'Formule de politesse de fin de lettre :', a:['Yours sincerely','The end','I go now'], correct:0, explain:'Yours sincerely se place avant la signature.' },
        { q:'« J\u2019attends ta réponse avec impatience » = …', a:['I look forward to hearing from you','I look in front of your letter','I await you fast'], correct:0, explain:'I look forward to hearing from you : formule très courante en fin de lettre.' },
        { q:'Où place-t-on la date dans une lettre anglaise ?', a:['En haut à droite','En bas à gauche','Au milieu'], correct:0, explain:'La date se place en haut, à droite.' },
        { q:'« Merci beaucoup pour ta lettre » = …', a:['Thank you very much for your letter','Thanks your letter','Good letter thanks'], correct:0, explain:'Thank you very much for + nom.' }
      ]},

      /* ---------- HARRY POTTER — CULTURE ---------- */
      { id:'hp-culture-maisons', title:'Harry Potter — Culture : Poudlard et ses maisons', mcq:[
        { q:'Laquelle de ces maisons n\u2019existe PAS ?', a:['Gryffindor','Slytherin','Dragonclaw'], correct:2, explain:'Les 4 maisons sont Gryffindor, Slytherin, Ravenclaw et Hufflepuff.' },
        { q:'Hermione est dans quelle maison ?', a:['Gryffindor','Slytherin','Hufflepuff'], correct:0, explain:'Ron, Hermione et Harry sont à Gryffindor.' },
        { q:'Quel est le directeur (headmaster) de Poudlard ?', a:['Dumbledore','Hagrid','Snape'], correct:0, explain:'Albus Dumbledore, le headmaster ; McGonagall est la directrice adjointe (deputy).' },
        { q:'Hufflepuff a pour symbole…', a:['un blaireau (a badger)','un serpent','un aigle'], correct:0, explain:'Hufflepuff = le blaireau, Gryffindor = le lion, Slytherin = le serpent, Ravenclaw = l\u2019aigle.' }
      ]},
      { id:'hp-culture-quidditch', title:'Harry Potter — Culture : le Quidditch et les amis d\u2019Harry', mcq:[
        { q:'Combien de joueurs par équipe au Quidditch ?', a:['5','7','11'], correct:1, explain:'7 joueurs par équipe.' },
        { q:'Le Vif d\u2019or (Golden Snitch) vaut…', a:['10 points','50 points','150 points'], correct:2, explain:'150 points : c\u2019est lui qui décide souvent du match !' },
        { q:'Les meilleurs amis d\u2019Harry sont…', a:['Ron et Hermione','Draco et Hagrid','Dudley et Piers'], correct:0, explain:'Ron Weasley et Hermione Granger.' },
        { q:'Comment s\u2019appelle le balai d\u2019Harry ?', a:['Nimbus 2000','Firebolt 100','Cleansweeper'], correct:0, explain:'Harry reçoit un Nimbus 2000 (et plus tard un Firebolt).' }
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
