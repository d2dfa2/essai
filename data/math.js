/* ============================================================
   CONTENU MATHS — c'est ici que se mettent à jour les exercices.
   Un chapitre = { id, icon, title, questions: [...] }
   Pour ajouter un chapitre : ajoute un objet dans "chapters".
   Formats d'une question :
   { key:'id', q:'8 + 2 × 5 = ?', correct:'18', explain:'…', help:'aide optionnelle' }
   { type:'choice', key:'id', q:'…', a:['rep1','rep2','rep3'], correct:0, explain:'…' }
   ============================================================ */
window.MATH_DATA = {
  chapters: [
    {
      id: 'tables', icon: '⚡', title: 'Calcul express',
      questions: [
        // Produits directs (les classiques)
        ...[[2,7],[3,8],[4,6],[6,7],[7,8],[8,9],[9,7],[6,8],[7,9],[8,8],[9,6],[7,6],[4,9],[5,8],[6,9]].map(([a,b])=>({key:`${a}x${b}`,q:`${a} × ${b} = ?`,correct:a*b,explain:`${a} × ${b} = ${a*b}. Astuce si tu bloques : ${a} × ${b} = ${a} × ${b-1} + ${a} = ${a*(b-1)} + ${a}.`})),
        // Facteur manquant : a × ? = c
        ...[[6,42],[7,56],[8,72],[9,63],[7,49],[8,48],[9,54],[6,54]].map(([a,c])=>({key:`${a}x?=${c}`,q:`${a} × ? = ${c}`,correct:c/a,explain:`${c} = ${a} × ${c/a}. Pense à la table de ${a} !`})),
        // Lien avec la division
        ...[[42,7],[56,8],[63,9],[48,6],[54,6],[72,8]].map(([c,a])=>({key:`${c}÷${a}`,q:`${c} ÷ ${a} = ?`,correct:c/a,explain:`${c} ÷ ${a} = ${c/a}, car ${a} × ${c/a} = ${c}.` })),
        // Doubles et moitiés utiles pour le calcul mental
        {key:'double14',q:'Le double de 14 = ?',correct:28,explain:'14 × 2 = 28. Le double, c\u2019est multiplier par 2.'},
        {key:'moitie96',q:'La moitié de 96 = ?',correct:48,explain:'96 ÷ 2 = 48. La moitié, c\u2019est diviser par 2.'},
        {key:'double35',q:'Le double de 35 = ?',correct:70,explain:'35 × 2 = 70.'},
        // Petits calculs malins (décomposition)
        {key:'astuce7x12',q:'7 × 12 = ?  (astuce : 7 × 10 puis 7 × 2)',correct:84,explain:'7 × 12 = 7 × 10 + 7 × 2 = 70 + 14 = 84.'},
        {key:'astuce9x15',q:'9 × 15 = ?  (astuce : 10 × 15 moins 15)',correct:135,explain:'9 × 15 = 10 × 15 − 15 = 150 − 15 = 135.'},
        {key:'astuce4x25',q:'4 × 25 = ?',correct:100,explain:'4 × 25 = 100. Pratique à connaître par cœur !'},
        {key:'astuce8x99',q:'8 × 99 = ?  (astuce : 8 × 100 moins 8)',correct:792,explain:'8 × 99 = 8 × 100 − 8 = 800 − 8 = 792.'},
        // QCM de reconnaissance
        {type:'choice',key:'table-nearest',q:'Lequel vaut 48 ?',a:['6 × 7','6 × 8','7 × 8'],correct:1,explain:'6 × 8 = 48. Bien joué si tu l\u2019as trouvé sans calculer !'},
        {type:'choice',key:'table-56',q:'Lequel vaut 56 ?',a:['7 × 8','6 × 9','7 × 9'],correct:0,explain:'7 × 8 = 56. (Astuce : 56 = 7 × 8, deux nombres qui se suivent… facile à retenir !)'},
        {type:'choice',key:'table-63',q:'Lequel vaut 63 ?',a:['8 × 8','7 × 9','6 × 10'],correct:1,explain:'7 × 9 = 63.'},
        {type:'choice',key:'table-multiple8',q:'Lequel est un multiple de 8 ?',a:['46','56','66'],correct:1,explain:'56 = 8 × 7. Les autres ne tombent pas juste.'},
        {type:'choice',key:'erreur-freq',q:'Où est l\u2019erreur ? Élodie a écrit 7 × 8 = 54.',a:['C\u2019est juste !','7 × 8 = 56','7 × 8 = 64'],correct:1,explain:'7 × 8 = 56 (et non 54, qui est 6 × 9). Cette erreur est fréquente, tu n\u2019es pas seul(e) !'}
      ]
    },
    {
      id: 'multiples', icon: '🔢', title: 'Multiples et diviseurs',
      questions: [
        {type:'choice',key:'mult7',q:'Lequel est un multiple de 7 ?',a:['25','35','43'],correct:1,explain:'35 = 7 × 5.'},
        {type:'choice',key:'mult9',q:'Lequel est un multiple de 9 ?',a:['54','56','64'],correct:0,explain:'54 = 9 × 6.'},
        {type:'choice',key:'mult5',q:'Lequel est un multiple de 5 ?',a:['42','57','65'],correct:2,explain:'65 = 5 × 13. Un multiple de 5 finit toujours par 0 ou 5.'},
        {type:'choice',key:'mult3',q:'Lequel est un multiple de 3 ?',a:['28','33','38'],correct:1,explain:'33 = 3 × 11.'},
        {type:'choice',key:'enc7',q:'117 est entre quels multiples consécutifs de 7 ?',a:['7×15 et 7×16','7×16 et 7×17','7×17 et 7×18'],correct:1,explain:'112 < 117 < 119. Tu peux compter de 7 en 7 pour vérifier.'},
        {type:'choice',key:'diviseur',q:'Dans 42 = 6 × 7, lequel est un diviseur de 42 ?',a:['5','6','8'],correct:1,explain:'6 divise 42 car 42 = 6 × 7.'},
        {key:'diviseurs36',q:'6 est-il un diviseur de 36 ? (réponds oui ou non)',correct:'oui',explain:'Oui : 36 = 6 × 6.'},
        {key:'multiple-24',q:'Le plus petit multiple de 4 plus grand que 20 = ?',correct:24,explain:'On cherche juste après 20 : 20 est multiple de 4, le suivant est 24 (20 + 4).'}
      ]
    },
    {
      id: 'decimaux', icon: '💰', title: 'Nombres décimaux',
      questions: [
        {key:'d1',q:'2,5 − 0,75 = ?',correct:'1,75',explain:'Écris 2,50 − 0,75. Aligner les virgules aide beaucoup.'},
        {key:'d2',q:'0,95 − 0,5 = ?',correct:'0,45',explain:'Écris 0,95 − 0,50.'},
        {key:'d3',q:'2,7 − 0,37 = ?',correct:'2,33',explain:'Écris 2,70 − 0,37.'},
        {key:'d4',q:'1,9 + 0,15 = ?',correct:'2,05',explain:'Aligne les virgules : 1,90 + 0,15.'},
        {key:'d5',q:'68,47 × 10 = ?',correct:'684,7',explain:'Multiplier par 10 décale la virgule d\u2019un rang vers la droite.'},
        {key:'d6',q:'0,0045 × 1000 = ?',correct:'4,5',explain:'Multiplier par 1000 décale la virgule de trois rangs.'},
        {key:'d7',q:'85,2 ÷ 100 = ?',correct:'0,852',explain:'Diviser par 100 décale la virgule de deux rangs vers la gauche.'},
        {key:'d8',q:'60 × 0,4 = ?',correct:'24',explain:'6 × 4 = 24, puis on remet la virgule.'},
        {type:'choice',key:'d9',q:'Lequel est le plus grand ?',a:['4,7','4,08','4,75'],correct:2,explain:'On compare d\u2019abord les dixièmes : 7 = 7, puis les centièmes : 5 > 0. Donc 4,75 > 4,7 > 4,08.'},
        {type:'choice',key:'d10',q:'Où placer 2,3 sur une droite graduée entre 2 et 3 ?',a:['Juste après 2','Au milieu exactement','Juste avant 3'],correct:0,explain:'2,3 = 2 et 3 dixièmes : c\u2019est proche de 2, pas du milieu.'}
      ]
    },
    {
      id: 'vocab', icon: '📚', title: 'Vocabulaire maths',
      questions: [
        {type:'choice',key:'terme',q:'Dans 7,3 + 2,5, 7,3 et 2,5 sont des…',a:['facteurs','termes','quotients'],correct:1,explain:'Les nombres d\u2019une addition sont les termes.'},
        {type:'choice',key:'somme',q:'Le résultat d\u2019une addition s\u2019appelle…',a:['une somme','un produit','un quotient'],correct:0,explain:'Addition → somme.'},
        {type:'choice',key:'facteur',q:'Dans 6 × 8, 6 et 8 sont des…',a:['termes','facteurs','dividendes'],correct:1,explain:'Les nombres d\u2019une multiplication sont les facteurs.'},
        {type:'choice',key:'produit',q:'Le résultat de 6 × 8 est…',a:['une différence','un produit','une somme'],correct:1,explain:'Multiplication → produit.'},
        {type:'choice',key:'quotient',q:'Le résultat d\u2019une division s\u2019appelle…',a:['un quotient','un facteur','une somme'],correct:0,explain:'Division → quotient.'},
        {type:'choice',key:'difference',q:'Le résultat d\u2019une soustraction s\u2019appelle…',a:['un produit','une différence','un quotient'],correct:1,explain:'Soustraction → différence.'},
        {type:'choice',key:'numerateur',q:'Dans 3/5, le nombre 3 est le…',a:['dénominateur','quotient','numérateur'],correct:2,explain:'Le nombre du haut est le numérateur.'},
        {type:'choice',key:'denominateur',q:'Dans 3/5, le nombre 5 est le…',a:['dénominateur','numérateur','produit'],correct:0,explain:'Le nombre du bas est le dénominateur.'},
        {type:'choice',key:'vocab-expression',q:'La dernière opération de 5 × (7 + 2) − 3 est…',a:['une multiplication','une addition','une soustraction'],correct:2,explain:'Après les parenthèses et la multiplication, on termine par − 3 : c\u2019est une différence.'}
      ]
    },
    {
      id: 'priorites', icon: '🧠', title: 'Priorités de calcul',
      questions: [
        {key:'p1',q:'8 + 2 × 5 = ?',correct:'18',explain:'La multiplication est prioritaire : 2×5=10, puis 8+10.'},
        {key:'p2',q:'20 − 12 ÷ 3 = ?',correct:'16',explain:'12÷3=4, puis 20−4.'},
        {key:'p3',q:'(8 + 2) × 5 = ?',correct:'50',explain:'On commence par la parenthèse : 10×5.'},
        {key:'p4',q:'18 ÷ 3 × 2 = ?',correct:'12',explain:'Même priorité : de gauche à droite. 18÷3=6, puis 6×2.'},
        {key:'p5',q:'15 − 6 ÷ 2 = ?',correct:'12',explain:'6÷2=3, puis 15−3.'},
        {key:'p6',q:'3 + 4 × 2 − 5 = ?',correct:'6',explain:'D\u2019abord 4×2=8, puis 3+8−5.'},
        {key:'p7',q:'(15 − 6) ÷ 3 = ?',correct:'3',explain:'La parenthèse d\u2019abord : 9÷3.'},
        {type:'choice',key:'p8',q:'Quel calcul fait 19 ?',a:['4 + 5 × 3','(4 + 5) × 3','4 × 5 + 3'],correct:0,explain:'4 + 5×3 = 4 + 15 = 19. Les autres valent 27 et 23.'}
      ]
    }
  ]
};
