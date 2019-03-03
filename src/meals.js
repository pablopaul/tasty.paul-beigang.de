// "variant: x" means: take one of all variants for each meal

let meals = [
  /*     {
            name: "Linsen Wallnuss Salat",
            days: [0, 6],
            when: "lunch",
            ingredients: [
                { name: "Linsen", amount: "250", amountUnit: "g" },
                { name: "Wallnüsse", amount: "50", amountUnit: "g" },
                { name: "Knoblauchzehe", amount: "1", amountUnit: "piece", note: "zerdrückt" },
                { name: "Frühlingszwiebeln", amount: "1", amountUnit: "Bund" },
                { name: "Olivenöl", amount: "50", amountUnit: "ml" },
                { name: "Zitrone", amount: "1", amountUnit: "piece" },
                { name: "Salz", amount: "1", amountUnit: "prise" },
                { name: "Pfeffer", amount: "1", amountUnit: "prise" }
            ],
            notes: "ziehen lassen, kalt stellen, ggf. mit Petersilie garnieren"
        }, */

  {
    name: 'Süßkartoffel Kokos Ragout',
    days: [0],
    when: 'lunch',
    ingredients: [
      { name: 'Süßkartoffel', amount: '500', amountUnit: 'g' },
      { name: 'Kokosöl', amount: '2', amountUnit: 'EL' },
      { name: 'Kokosmilch', amount: '250', amountUnit: 'ml' },
      { name: 'Schalotten', amount: '2', amountUnit: 'piece' },
      { name: 'Tomatenmark', amount: '1', amountUnit: 'EL' },
      { name: 'Gemüsebrühe', amount: '50', amountUnit: 'ml' }
    ]
  },

  {
    name: 'Buchweizen mit Kreuzblütler-Gemüse und Sardine',
    days: [1],
    when: 'lunch',
    ingredients: [
      { name: 'Buchweizen', amount: '500', amountUnit: 'g' },
      { name: 'Brokolli', amount: '500', amountUnit: 'g', variant: 1 },
      { name: 'Blumenkohl', amount: '500', amountUnit: 'g', variant: 1 },
      { name: 'Rosenkohl', amount: '500', amountUnit: 'g', variant: 1 },
      { name: 'Sardine', amount: '200', amountUnit: 'g' }
    ]
  },

  {
    name: 'Reis mit Möhrenrohkost und Lupinen Geschnetzeltem',
    days: [2],
    when: 'lunch',
    ingredients: [
      { name: 'Reis', amount: '250', amountUnit: 'g' },
      { name: 'Möhren', amount: '500', amountUnit: 'g' },
      { name: 'Lupinen Geschnetzeltes', amount: '200', amountUnit: 'g' }
    ]
  },

  {
    name: 'Quinoa mit Gemüseburger und Tofu',
    days: [3],
    when: 'lunch',
    ingredients: [
      { name: 'Quinoa', amount: '250', amountUnit: 'g' },
      { name: 'Gemüseburger', amount: '250', amountUnit: 'g', variant: 1 },
      { name: 'Fallaffel', amount: '250', amountUnit: 'g', variant: 1 },
      { name: 'Tofu', amount: '200', amountUnit: 'g' }
    ]
  },

  {
    name: 'Kartoffel-Möhren Brei',
    days: [4],
    when: 'lunch',
    ingredients: [
      { name: 'Kartoffeln', amount: '500', amountUnit: 'g' },
      { name: 'Möhren', amount: '500', amountUnit: 'g' },
      { name: 'Olivenöl', amount: '250', amountUnit: 'g', variant: true },
      { name: 'Zitrone', amount: '1', amountUnit: 'piece' },
      { name: 'Salz', amount: '1', amountUnit: 'prise' },
      { name: 'Pfeffer', amount: '1', amountUnit: 'prise' },
      { name: 'Forelle', amount: '200', amountUnit: 'g', variant: 1 },
      { name: 'Lachs', amount: '200', amountUnit: 'g', variant: 1 },
      { name: 'Makrele', amount: '200', amountUnit: 'g', variant: 1 }
    ]
  },

  {
    name: 'Kichererbsen Fusili mit Tomatensoße und Salat',
    days: [5],
    when: 'lunch',
    ingredients: [
      { name: 'Kichererbsen Fusili', amount: '500', amountUnit: 'g' },
      { name: 'Tomatensoße', amount: '500', amountUnit: 'g' },
      { name: 'Olivenöl', amount: '250', amountUnit: 'g', variant: true },
      { name: 'Salat', amount: '250', amountUnit: 'g' },
      { name: 'Zitrone', amount: '1', amountUnit: 'piece' },
      { name: 'Salz', amount: '1', amountUnit: 'prise' },
      { name: 'Pfeffer', amount: '1', amountUnit: 'prise' }
    ]
  },

  {
    name: 'Zuchini-Schafskäse-Kuchen',
    days: [6],
    when: 'lunch',
    ingredients: [
      { name: 'Zuchini', amount: '300', amountUnit: 'g' },
      { name: 'Lauchzwiebeln', amount: '2', amountUnit: 'piece' },
      { name: 'Dill', amount: '1/2', amountUnit: 'Bund' },
      { name: 'Eier', amount: '3', amountUnit: 'piece' },
      { name: 'Kokosjoghurt', amount: '200', amountUnit: 'ml' },
      { name: 'Dinkel-Vollkornmehl', amount: '150', amountUnit: 'g' },
      { name: 'Rapsöl', amount: '100', amountUnit: 'ml' },
      { name: 'Fetakäse', amount: '150', amountUnit: 'g' },
      { name: 'Salz', amount: '1', amountUnit: 'prise' },
      { name: 'Pfeffer', amount: '1', amountUnit: 'prise' }
    ]
  }
];

module.exports = meals;
