/* ============================================================
   CONTENU MATHS — c'est ici que se mettent à jour les exercices.
   Format d'un exercice :
   { key:'identifiant-unique', q:'8 + 2 × 5 = ?', correct:'18',
     explain:'La multiplication est prioritaire.', help:'aide optionnelle' }
   ou en QCM :
   { type:'choice', key:'id', q:'Le résultat d\'une addition s\'appelle…',
     a:['une somme','un produit'], correct:0, explain:'Addition → somme.' }
   Pour ajouter un chapitre : ajoute un objet dans "chapters".
   Pour modifier : change simplement les questions. C'est tout !
   ============================================================ */
window.MATH_DATA = {
  chapters: [
    {
      id: 'tables', icon: '⚡', title: 'Tables éclair',
      questions: [
        ...[[2,7],[3,8],[4,6],[6,7],[7,8],[8,9],[9,7],[6,8],[7,9],[8,8],[9,6],[7,6]].map(([a,b])=>({key:`${a}x${b}`,q:`${a} × ${b} = ?`,correct:a*b,explain:`${a} × ${b} = ${a*b}`})),
        {type:'choice',key:'table-nearest',q:'Lequel vaut 48 ?',a:['6 × 7','6 × 8','7 × 8'],correct:1,explain:'6 × 8 = 48.'}
      ]
    },
    {
      id: 'multiples', icon: '🔢', title: 'Multiples',
      questions: [
        {type:'choice',key:'mult7',q:'Lequel est un multiple de 7 ?',a:['25','35','43'],correct:1,explain:'35 = 7 × 5.'},
        {type:'choice',key:'mult9',q:'Lequel est un multiple de 9 ?',a:['54','56','64'],correct:0,explain:'54 = 9 × 6.'},
        {type:'choice',key:'mult5',q:'Lequel est un multiple de 5 ?',a:['42','57','65'],correct:2,explain:'65 = 5 × 13.'},
        {type:'choice',key:'enc7',q:'117 est entre quels multiples consécutifs de 7 ?',a:['7×15 et 7×16','7×16 et 7×17','7×17 et 7×18'],correct:1,explain:'112 < 117 < 119.'},
        {type:'choice',key:'diviseur',q:'Dans 42 = 6 × 7, lequel est un diviseur de 42 ?',a:['5','6','8'],correct:1,explain:'6 divise 42 car 42 = 6 × 7.'}
      ]
    },
    {
      id: 'decimaux', icon: '💰', title: 'Décimaux',
      questions: [
        {key:'d1',q:'2,5 − 0,75 = ?',correct:'1,75',explain:'Écris 2,50 − 0,75.'},
        {key:'d2',q:'0,95 − 0,5 = ?',correct:'0,45',explain:'Écris 0,95 − 0,50.'},
        {key:'d3',q:'2,7 − 0,37 = ?',correct:'2,33',explain:'Écris 2,70 − 0,37.'},
        {key:'d4',q:'1,9 + 0,15 = ?',correct:'2,05',explain:'Aligne les virgules : 1,90 + 0,15.'},
        {key:'d5',q:'68,47 × 10 = ?',correct:'684,7',explain:'Multiplier par 10 décale la virgule d\u2019un rang vers la droite.'},
        {key:'d6',q:'0,0045 × 1000 = ?',correct:'4,5',explain:'Multiplier par 1000 décale la virgule de trois rangs.'},
        {key:'d7',q:'85,2 ÷ 100 = ?',correct:'0,852',explain:'Diviser par 100 décale la virgule de deux rangs vers la gauche.'},
        {key:'d8',q:'60 × 0,4 = ?',correct:'24',explain:'6 × 4 = 24, puis on remet la virgule.'}
      ]
    },
    {
      id: 'vocab', icon: '📚', title: 'Vocabulaire',
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
      id: 'priorites', icon: '🧠', title: 'Priorités',
      questions: [
        {key:'p1',q:'8 + 2 × 5 = ?',correct:'18',explain:'La multiplication est prioritaire : 2×5=10, puis 8+10.'},
        {key:'p2',q:'20 − 12 ÷ 3 = ?',correct:'16',explain:'12÷3=4, puis 20−4.'},
        {key:'p3',q:'(8 + 2) × 5 = ?',correct:'50',explain:'On commence par la parenthèse : 10×5.'},
        {key:'p4',q:'18 ÷ 3 × 2 = ?',correct:'12',explain:'Même priorité : de gauche à droite.'},
        {key:'p5',q:'15 − 6 ÷ 2 = ?',correct:'12',explain:'6÷2=3, puis 15−3.'}
      ]
    }
  ]
};
