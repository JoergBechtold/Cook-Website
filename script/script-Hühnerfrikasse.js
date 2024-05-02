// Script für Drucken Button
function printBtn() {
  window.print();
}

// Javascript für Rezept Hühnerfrikasse
let amount = [1, 2, 0, 1, 1, 2, 2, 0.5, 1, 1, 1, , 0];
let units = ['&nbsp', 'TL', '&nbsp', 'Spritzer', '&nbsp', '&nbsp', '&nbsp', 'Becher', 'Dose(n)', 'Dose(n)', 'Glas', 'etwas', '&nbsp'];
let ingredients = [
  'Brathähnchen',
  'Salz',
  'Pfeffer',
  'Zitronensaft',
  'Zwiebel(n)',
  'Tomate(n)',
  'Eigelb',
  'Sahne',
  'Spargelstücke',
  'Erbsen und Möhren',
  'Champignons',
  'Mehl',
  'Margarine',
];

function calculateAmountList() {
  let portion = +document.getElementById('input').value;
  result(portion);
}

function result(portion) {
  let result = document.getElementById('output');

  if (portion > 10) {
    // alert('Bitte höchstens nur 10 Personen eingeben!');
  } else {
    if (portion < 1) {
      // alert('Bitte mindestens eine Personen angeben!');
    } else {
      if (portion > Math.floor(portion)) {
        // alert('Bitte gebe nur ganze Zahlen ein!');
      } else {
        result.innerHTML = ``;
        for (let i = 0; i < ingredients.length; i++) {
          let amountResult = getCalcAmount(amount[i], portion);

          result.innerHTML += `<li>
                              <span class="amount">${amountResult || ''}</span>
                              <span class="units">${units[i]}</span>
                              <span class="ingredients">${ingredients[i]}</span>
                          </li>   
                          `;
        }
      }
    }
  }
}

function getCalcAmount(amount, portion) {
  //   return (amount / 4) * portion;
  // return Math.round((amount / 4) * portion);
  return Math.round((amount / 4) * portion * 100) / 100;
}

// Javascript für Nährwert Rechner
let nutritionAmount = [139, 4.8, 5.9, 17.6];
let nutritionUnit = ['kcal Kalorien', 'g Fett', 'g Eiweiß', 'g Kohlenhydrate'];

function calculateNutritionList() {
  let nutritionInput = +document.getElementById('nutrition-input').value;
  result2(nutritionInput);
}

function result2(nutritionInput) {
  let result1 = document.getElementById('nutrition-table');

  if (nutritionInput > 10) {
    // alert('Bitte höchstens nur 10 Personen eingeben!');
  } else {
    if (nutritionInput < 1) {
      // alert('Bitte mindestens eine Personen angeben!');
    } else {
      if (nutritionInput > Math.floor(nutritionInput)) {
        // alert('Bitte gebe nur ganze Zahlen ein!');
      } else {
        result1.innerHTML = ``;
        for (let i = 0; i < nutritionAmount.length; i++) {
          let nutritionAmountResult = nutritionAmount[i] * nutritionInput;

          result1.innerHTML += `<li>
                              <span class="amount2">${nutritionAmountResult || ''}</span>
                              <span class="units2">${nutritionUnit[i]}</span>
                              
                          </li>   
                          `;
        }
      }
    }
  }
}

/* Für Mobile Ansicht PortionsListe */
function showPortionsList() {
  document.getElementById('portions-list').classList.remove('hide-mobile');
  document.getElementById('body').classList.add('no-scroll');
}

function CloseBtnPortionsList() {
  document.getElementById('portions-list').classList.add('hide-mobile');
  document.getElementById('body').classList.remove('no-scroll');
}
