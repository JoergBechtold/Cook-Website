// Script für Drucken Button
function printBtn() {
  window.print();
}

// Javascript für Rezept recipe of the day
let amount = [400, 1, 1, 500, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0];
let units = ['g', '&nbsp', '&nbsp', 'g', 'EL', '&nbsp', '&nbsp', '&nbsp', 'Dose(n)', 'Dose(n)', 'Stück', '&nbsp', '&nbsp', '&nbsp'];
let ingredients = [
  'Rinderhackfleisch',
  'rote Zwiebel',
  'Knoblauchzehe',
  'stückige Tomaten aus der Dose',
  'Tomatenmark',
  'Habanero Chili',
  'rote Chili Schote',
  'rote Paprika',
  'Kidney Bohnen',
  'Mais',
  'Zartbitter Schokolade',
  'Gemüse- oder Rinderbrühe',
  'Salz, Pfeffer',
  'Kreuzkümmel und Zimt',
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
  // return Math.round((amount / 3) * portion);
  return Math.round((amount / 3) * portion * 100) / 100;
}

// Javascript für Nährwert Rechner
let nutritionAmount = [198, 6, 17, 17];
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
