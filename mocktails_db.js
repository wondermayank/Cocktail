// ══════════════════════════════════════════════════════════════
//  MOCKTAIL DATABASE — mocktails_db.js
//  Add this file to your repo and include it in index.html:
//  <script src="mocktails_db.js"></script>
//  Place it BEFORE your main <script> block.
//
//  IMAGE STATUS:
//  ✅ #01–10  — real URLs provided
//  🔲 #11–20  — add your URL in the strDrinkThumb field
//  📁 #21–50  — uses local file: mocktails/<filename>.png
// ══════════════════════════════════════════════════════════════

const MOCKTAIL_DB = [

  // ── 01 ─────────────────────────────────────────────────────
  {
    idDrink: "m001",
    strDrink: "Shirley Temple",
    strDrinkThumb: "https://png.pngtree.com/png-clipart/20250513/original/pngtree-tempting-shirley-temple-cold-drink-with-cherries-and-ice-png-image_20955682.png",
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Highball glass",
    strIngredient1: "Grenadine", strMeasure1: "1 oz",
    strIngredient2: "Ginger ale", strMeasure2: "Top up",
    strIngredient3: "Orange juice", strMeasure3: "Splash",
    strIngredient4: "Maraschino cherry", strMeasure4: "1 (garnish)",
    strInstructions: "Fill a highball glass with ice. Pour in grenadine, then top with ginger ale. Add a splash of orange juice. Garnish with a maraschino cherry and orange slice."
  },

  // ── 02 ─────────────────────────────────────────────────────
  {
    idDrink: "m002",
    strDrink: "Arnold Palmer",
    strDrinkThumb: "https://png.pngtree.com/png-vector/20250808/ourlarge/pngtree-arnold-palmer-beverage-isolated-on-transparent-background-png-image_16791674.webp",
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Highball glass",
    strIngredient1: "Iced tea", strMeasure1: "4 oz",
    strIngredient2: "Lemonade", strMeasure2: "4 oz",
    strIngredient3: "Lemon slice", strMeasure3: "1 (garnish)",
    strInstructions: "Mix equal parts freshly brewed iced tea and homemade lemonade over ice. Stir gently. Garnish with a lemon slice."
  },

  // ── 03 ─────────────────────────────────────────────────────
  {
    idDrink: "m003",
    strDrink: "Virgin Mojito",
    strDrinkThumb: "https://static.vecteezy.com/system/resources/previews/058/374/424/non_2x/virgin-mojito-isolate-on-transparent-background-png.png",
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Highball glass",
    strIngredient1: "Fresh mint", strMeasure1: "10 leaves",
    strIngredient2: "Lime juice", strMeasure2: "1 oz",
    strIngredient3: "Sugar syrup", strMeasure3: "0.5 oz",
    strIngredient4: "Soda water", strMeasure4: "Top up",
    strIngredient5: "Lime wedge", strMeasure5: "1 (garnish)",
    strInstructions: "Muddle mint leaves with lime juice and sugar syrup in a glass. Fill with crushed ice. Top with soda water and stir gently. Garnish with fresh mint and lime wedge."
  },

  // ── 04 ─────────────────────────────────────────────────────
  {
    idDrink: "m004",
    strDrink: "Virgin Pina Colada",
    strDrinkThumb: "https://png.pngtree.com/png-vector/20250512/ourmid/pngtree-pina-colada-with-pineapple-cherry-and-umbrella-in-a-hurricane-glass-png-image_16212762.png",
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Hurricane glass",
    strIngredient1: "Pineapple juice", strMeasure1: "4 oz",
    strIngredient2: "Coconut cream", strMeasure2: "2 oz",
    strIngredient3: "Ice", strMeasure3: "1 cup",
    strIngredient4: "Pineapple slice", strMeasure4: "1 (garnish)",
    strIngredient5: "Maraschino cherry", strMeasure5: "1 (garnish)",
    strInstructions: "Blend pineapple juice, coconut cream and ice until smooth and creamy. Pour into a hurricane glass. Garnish with a pineapple slice, cherry and paper umbrella."
  },

  // ── 05 ─────────────────────────────────────────────────────
  {
    idDrink: "m005",
    strDrink: "Virgin Mary",
    strDrinkThumb: "https://www.nicepng.com/png/detail/41-410574_virgin-mary-cocktail-image-non-alcoholic-cocktails-png.png",
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Highball glass",
    strIngredient1: "Tomato juice", strMeasure1: "4 oz",
    strIngredient2: "Lemon juice", strMeasure2: "0.5 oz",
    strIngredient3: "Worcestershire sauce", strMeasure3: "2 dashes",
    strIngredient4: "Hot sauce", strMeasure4: "2 dashes",
    strIngredient5: "Salt", strMeasure5: "Pinch",
    strIngredient6: "Black pepper", strMeasure6: "Pinch",
    strIngredient7: "Celery", strMeasure7: "1 stick (garnish)",
    strInstructions: "Combine tomato juice, lemon juice, Worcestershire sauce and hot sauce in a glass over ice. Season with salt and black pepper. Stir well and garnish with a celery stick and lemon wedge."
  },

  // ── 06 ─────────────────────────────────────────────────────
  {
    idDrink: "m006",
    strDrink: "Lemonade",
    strDrinkThumb: "https://png.pngtree.com/png-clipart/20240418/original/pngtree-summer-healthy-lemonade-png-image_14879000.png",
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Highball glass",
    strIngredient1: "Lemon juice", strMeasure1: "2 oz",
    strIngredient2: "Sugar syrup", strMeasure2: "1 oz",
    strIngredient3: "Cold water", strMeasure3: "4 oz",
    strIngredient4: "Lemon slice", strMeasure4: "1 (garnish)",
    strIngredient5: "Ice", strMeasure5: "As needed",
    strInstructions: "Mix freshly squeezed lemon juice and sugar syrup in a glass. Add cold water and stir. Serve over ice with lemon slices."
  },

  // ── 07 ─────────────────────────────────────────────────────
  {
    idDrink: "m007",
    strDrink: "Watermelon Lemonade",
    strDrinkThumb: "https://png.pngtree.com/png-vector/20240530/ourmid/pngtree-soft-drink-watermelon-lemonade-png-image_12553435.png",
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Highball glass",
    strIngredient1: "Watermelon", strMeasure1: "2 cups (cubed)",
    strIngredient2: "Lemon juice", strMeasure2: "1.5 oz",
    strIngredient3: "Sugar syrup", strMeasure3: "0.5 oz",
    strIngredient4: "Water", strMeasure4: "2 oz",
    strIngredient5: "Mint", strMeasure5: "Garnish",
    strInstructions: "Blend watermelon until smooth. Strain into a pitcher. Mix in lemon juice, sugar syrup and water. Serve over ice garnished with mint and watermelon triangle."
  },

  // ── 08 ─────────────────────────────────────────────────────
  {
    idDrink: "m008",
    strDrink: "Strawberry Lemonade",
    strDrinkThumb: "https://png.pngtree.com/png-clipart/20190120/ourmid/pngtree-summer-strawberry-lemon-tasty-png-image_499546.png",
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Highball glass",
    strIngredient1: "Strawberries", strMeasure1: "6 (fresh)",
    strIngredient2: "Lemon juice", strMeasure2: "1.5 oz",
    strIngredient3: "Sugar syrup", strMeasure3: "0.75 oz",
    strIngredient4: "Cold water", strMeasure4: "4 oz",
    strIngredient5: "Strawberry", strMeasure5: "1 (garnish)",
    strInstructions: "Blend strawberries with lemon juice and sugar syrup until smooth. Strain into a glass over ice. Top with cold water and stir. Garnish with a fresh strawberry on the rim."
  },

  // ── 09 ─────────────────────────────────────────────────────
  {
    idDrink: "m009",
    strDrink: "Mango Lassi",
    strDrinkThumb: "https://png.pngtree.com/png-vector/20250218/ourmid/pngtree-chilled-mango-lassi-in-a-glass-png-image_15516931.png",
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Highball glass",
    strIngredient1: "Mango pulp", strMeasure1: "3 oz",
    strIngredient2: "Plain yogurt", strMeasure2: "4 oz",
    strIngredient3: "Milk", strMeasure3: "2 oz",
    strIngredient4: "Sugar", strMeasure4: "1 tsp",
    strIngredient5: "Cardamom", strMeasure5: "Pinch",
    strInstructions: "Blend mango pulp, yogurt, milk, sugar and a pinch of cardamom until smooth and frothy. Serve chilled in a tall glass. Optionally garnish with a pinch of cardamom or saffron strands."
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    idDrink: "m010",
    strDrink: "Cucumber Mint Cooler",
    strDrinkThumb: "https://png.pngtree.com/png-clipart/20250515/original/pngtree-refreshing-cucumber-mint-drink-png-image_20983123.png",
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Highball glass",
    strIngredient1: "Cucumber", strMeasure1: "Half (sliced)",
    strIngredient2: "Fresh mint", strMeasure2: "8 leaves",
    strIngredient3: "Lime juice", strMeasure3: "1 oz",
    strIngredient4: "Sugar syrup", strMeasure4: "0.5 oz",
    strIngredient5: "Soda water", strMeasure5: "Top up",
    strInstructions: "Blend cucumber slices and mint with lime juice and sugar syrup. Strain into a glass over ice. Top with soda water. Garnish with cucumber slices and fresh mint."
  },

  // ── 11 — ADD YOUR IMAGE URL BELOW ──────────────────────────
  {
    idDrink: "m011",
    strDrink: "Hibiscus Agua Fresca",
    strDrinkThumb: "mocktails/Hibiscus_Agua_Fresca.png",  // 🔲 replace with your URL
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Highball glass",
    strIngredient1: "Dried hibiscus flowers", strMeasure1: "0.5 cup",
    strIngredient2: "Hot water", strMeasure2: "4 cups",
    strIngredient3: "Sugar", strMeasure3: "2 tbsp",
    strIngredient4: "Lime juice", strMeasure4: "1 oz",
    strInstructions: "Steep dried hibiscus in hot water for 10 minutes. Strain, sweeten and refrigerate. Serve over ice with fresh lime juice and garnish with lime."
  },

  // ── 12 — ADD YOUR IMAGE URL BELOW ──────────────────────────
  {
    idDrink: "m012",
    strDrink: "Roy Rogers",
    strDrinkThumb: "mocktails/Roy_Rogers.png",  // 🔲 replace with your URL
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Highball glass",
    strIngredient1: "Grenadine", strMeasure1: "1 oz",
    strIngredient2: "Cola", strMeasure2: "Top up",
    strIngredient3: "Maraschino cherry", strMeasure3: "1 (garnish)",
    strIngredient4: "Orange slice", strMeasure4: "1 (garnish)",
    strInstructions: "Fill a highball glass with ice. Pour grenadine, then top with cola. Do not over-stir. Garnish with a maraschino cherry and orange slice."
  },

  // ── 13 — ADD YOUR IMAGE URL BELOW ──────────────────────────
  {
    idDrink: "m013",
    strDrink: "Sparkling Cranberry",
    strDrinkThumb: "mocktails/Sparkling_Cranberry.png",  // 🔲 replace with your URL
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Champagne flute",
    strIngredient1: "Cranberry juice", strMeasure1: "3 oz",
    strIngredient2: "Sparkling water", strMeasure2: "3 oz",
    strIngredient3: "Lime juice", strMeasure3: "0.5 oz",
    strIngredient4: "Lime wheel", strMeasure4: "1 (garnish)",
    strInstructions: "Mix cranberry juice with lime juice. Pour into a chilled flute. Top with sparkling water. Garnish with a lime wheel or fresh cranberries."
  },

  // ── 14 — ADD YOUR IMAGE URL BELOW ──────────────────────────
  {
    idDrink: "m014",
    strDrink: "Peach Iced Tea",
    strDrinkThumb: "mocktails/Peach_Iced_Tea.png",  // 🔲 replace with your URL
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Highball glass",
    strIngredient1: "Black tea", strMeasure1: "4 oz (brewed)",
    strIngredient2: "Peach syrup", strMeasure2: "1 oz",
    strIngredient3: "Lemon juice", strMeasure3: "0.5 oz",
    strIngredient4: "Peach slice", strMeasure4: "1 (garnish)",
    strInstructions: "Brew black tea and allow to cool completely. Mix with peach syrup and lemon juice. Serve over ice. Garnish with a fresh peach slice and lemon wedge."
  },

  // ── 15 — ADD YOUR IMAGE URL BELOW ──────────────────────────
  {
    idDrink: "m015",
    strDrink: "Passion Fruit Fizz",
    strDrinkThumb: "mocktails/Passion_Fruit_Fizz.png",  // 🔲 replace with your URL
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Highball glass",
    strIngredient1: "Passion fruit pulp", strMeasure1: "2 oz",
    strIngredient2: "Lime juice", strMeasure2: "0.5 oz",
    strIngredient3: "Sugar syrup", strMeasure3: "0.5 oz",
    strIngredient4: "Sparkling water", strMeasure4: "Top up",
    strInstructions: "Mix passion fruit pulp with lime juice and sugar syrup in a glass. Fill with ice and top with sparkling water. Stir gently. Garnish with a passion fruit half."
  },

  // ── 16 — ADD YOUR IMAGE URL BELOW ──────────────────────────
  {
    idDrink: "m016",
    strDrink: "Blueberry Lemonade",
    strDrinkThumb: "mocktails/Blueberry_Lemonade.png",  // 🔲 replace with your URL
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Highball glass",
    strIngredient1: "Blueberries", strMeasure1: "0.5 cup",
    strIngredient2: "Sugar", strMeasure2: "1 tbsp",
    strIngredient3: "Lemon juice", strMeasure3: "1.5 oz",
    strIngredient4: "Cold water", strMeasure4: "4 oz",
    strInstructions: "Muddle blueberries with sugar until juicy. Add lemon juice and cold water. Stir well and serve over ice. Garnish with fresh blueberries and a lemon slice."
  },

  // ── 17 — ADD YOUR IMAGE URL BELOW ──────────────────────────
  {
    idDrink: "m017",
    strDrink: "Pineapple Punch",
    strDrinkThumb: "mocktails/Pineapple_Punch.png",  // 🔲 replace with your URL
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Punch bowl",
    strIngredient1: "Pineapple juice", strMeasure1: "4 oz",
    strIngredient2: "Orange juice", strMeasure2: "2 oz",
    strIngredient3: "Ginger ale", strMeasure3: "2 oz",
    strIngredient4: "Grenadine", strMeasure4: "0.5 oz",
    strInstructions: "Mix pineapple juice, orange juice and grenadine over ice. Top with ginger ale just before serving. Garnish with pineapple chunks and orange slices."
  },

  // ── 18 — ADD YOUR IMAGE URL BELOW ──────────────────────────
  {
    idDrink: "m018",
    strDrink: "Ginger Beer Mule",
    strDrinkThumb: "mocktails/Ginger_Beer_Mule.png",  // 🔲 replace with your URL
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Copper mug",
    strIngredient1: "Ginger beer", strMeasure1: "6 oz",
    strIngredient2: "Lime juice", strMeasure2: "1 oz",
    strIngredient3: "Lime wedge", strMeasure3: "1 (garnish)",
    strIngredient4: "Mint sprig", strMeasure4: "1 (garnish)",
    strInstructions: "Fill a copper mug with ice. Squeeze in fresh lime juice. Top with ginger beer. Gently stir. Garnish with lime wedge and mint sprig."
  },

  // ── 19 — ADD YOUR IMAGE URL BELOW ──────────────────────────
  {
    idDrink: "m019",
    strDrink: "Virgin Sunrise",
    strDrinkThumb: "mocktails/Virgin_Sunrise.png",  // 🔲 replace with your URL
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Highball glass",
    strIngredient1: "Orange juice", strMeasure1: "5 oz",
    strIngredient2: "Grenadine", strMeasure2: "0.5 oz",
    strIngredient3: "Orange slice", strMeasure3: "1 (garnish)",
    strIngredient4: "Maraschino cherry", strMeasure4: "1 (garnish)",
    strInstructions: "Fill a highball glass with ice. Pour in orange juice. Slowly drizzle grenadine down the inside of the glass — it will sink and create a sunrise effect. Do not stir. Garnish with orange and cherry."
  },

  // ── 20 — ADD YOUR IMAGE URL BELOW ──────────────────────────
  {
    idDrink: "m020",
    strDrink: "Raspberry Lemonade",
    strDrinkThumb: "mocktails/Raspberry_Lemonade.png",  // 🔲 replace with your URL
    strCategory: "Non_Alcoholic",
    strAlcoholic: "Non alcoholic",
    strGlass: "Highball glass",
    strIngredient1: "Raspberries", strMeasure1: "0.5 cup",
    strIngredient2: "Sugar", strMeasure2: "1 tbsp",
    strIngredient3: "Lemon juice", strMeasure3: "1.5 oz",
    strIngredient4: "Cold water", strMeasure4: "4 oz",
    strInstructions: "Muddle raspberries with sugar. Add lemon juice and cold water. Strain into a glass over ice. Garnish with fresh raspberries and a lemon slice."
  },

  // ── 21–50 — LOCAL FILES (mocktails/<filename>.png) ─────────
  { idDrink:"m021", strDrink:"Coconut Water Cooler",        strDrinkThumb:"mocktails/Coconut_Water_Cooler.png",         strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Coconut water", strMeasure1:"5 oz", strIngredient2:"Lime juice", strMeasure2:"0.5 oz", strIngredient3:"Pineapple juice", strMeasure3:"1 oz", strInstructions:"Mix coconut water, lime juice and pineapple juice over ice. Stir and garnish with lime." },
  { idDrink:"m022", strDrink:"Apple Cider Spritz",          strDrinkThumb:"mocktails/Apple_Cider_Spritz.png",           strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Wine glass",      strIngredient1:"Sparkling apple cider", strMeasure1:"4 oz", strIngredient2:"Lemon juice", strMeasure2:"0.5 oz", strIngredient3:"Apple slices", strMeasure3:"Garnish", strInstructions:"Pour sparkling apple cider into a wine glass over ice. Add lemon juice. Garnish with thin apple slices." },
  { idDrink:"m023", strDrink:"Pomegranate Fizz",            strDrinkThumb:"mocktails/Pomegranate_Fizz.png",             strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Pomegranate juice", strMeasure1:"3 oz", strIngredient2:"Lime juice", strMeasure2:"0.5 oz", strIngredient3:"Soda water", strMeasure3:"Top up", strInstructions:"Mix pomegranate juice and lime juice over ice. Top with soda water. Garnish with pomegranate seeds." },
  { idDrink:"m024", strDrink:"Green Detox Juice",           strDrinkThumb:"mocktails/Green_Detox_Juice.png",            strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Cucumber", strMeasure1:"Half", strIngredient2:"Spinach", strMeasure2:"Handful", strIngredient3:"Apple", strMeasure3:"1", strIngredient4:"Ginger", strMeasure4:"1 inch", strIngredient5:"Lemon juice", strMeasure5:"1 oz", strInstructions:"Juice all ingredients together. Strain and serve over ice." },
  { idDrink:"m025", strDrink:"Strawberry Basil Smash",      strDrinkThumb:"mocktails/Strawberry_Basil_Smash.png",       strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Rocks glass",     strIngredient1:"Strawberries", strMeasure1:"4", strIngredient2:"Fresh basil", strMeasure2:"4 leaves", strIngredient3:"Sugar syrup", strMeasure3:"0.5 oz", strIngredient4:"Lime juice", strMeasure4:"0.5 oz", strIngredient5:"Soda water", strMeasure5:"Top up", strInstructions:"Muddle strawberries and basil with sugar syrup. Add lime juice and ice. Top with soda water." },
  { idDrink:"m026", strDrink:"Lavender Lemonade",           strDrinkThumb:"mocktails/Lavender_Lemonade.png",            strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Dried lavender", strMeasure1:"1 tbsp", strIngredient2:"Simple syrup", strMeasure2:"1 oz", strIngredient3:"Lemon juice", strMeasure3:"1.5 oz", strIngredient4:"Cold water", strMeasure4:"4 oz", strInstructions:"Steep lavender in hot simple syrup. Cool completely. Mix with lemon juice and cold water. Serve over ice." },
  { idDrink:"m027", strDrink:"Mango Mint Limeade",          strDrinkThumb:"mocktails/Mango_Mint_Limeade.png",           strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Mango juice", strMeasure1:"3 oz", strIngredient2:"Lime juice", strMeasure2:"1 oz", strIngredient3:"Fresh mint", strMeasure3:"8 leaves", strIngredient4:"Soda water", strMeasure4:"Top up", strInstructions:"Muddle mint with lime juice. Add mango juice and ice. Top with soda water. Garnish with mint." },
  { idDrink:"m028", strDrink:"Cherry Limeade",              strDrinkThumb:"mocktails/Cherry_Limeade.png",               strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Cherry syrup", strMeasure1:"1 oz", strIngredient2:"Lime juice", strMeasure2:"1 oz", strIngredient3:"Soda water", strMeasure3:"Top up", strIngredient4:"Cherry", strMeasure4:"1 (garnish)", strInstructions:"Mix cherry syrup and lime juice over ice. Top with soda water. Garnish with a cherry." },
  { idDrink:"m029", strDrink:"Watermelon Mint Slush",       strDrinkThumb:"mocktails/Watermelon_Mint_Slush.png",        strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Watermelon", strMeasure1:"2 cups (frozen)", strIngredient2:"Fresh mint", strMeasure2:"6 leaves", strIngredient3:"Lime juice", strMeasure3:"1 oz", strIngredient4:"Sugar syrup", strMeasure4:"0.5 oz", strInstructions:"Blend frozen watermelon with mint, lime juice and sugar syrup until slushy. Pour immediately." },
  { idDrink:"m030", strDrink:"Peach Bellini Mocktail",      strDrinkThumb:"mocktails/Peach_Bellini_Mocktail.png",       strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Champagne flute", strIngredient1:"Ripe peaches", strMeasure1:"2 (blended)", strIngredient2:"Sparkling white grape juice", strMeasure2:"Top up", strIngredient3:"Peach slice", strMeasure3:"Garnish", strInstructions:"Blend peaches to a smooth puree. Spoon into a chilled champagne flute. Top with sparkling white grape juice. Garnish with a peach slice." },
  { idDrink:"m031", strDrink:"Kiwi Cooler",                 strDrinkThumb:"mocktails/Kiwi_Cooler.png",                  strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Kiwi", strMeasure1:"2 (peeled)", strIngredient2:"Lime juice", strMeasure2:"0.5 oz", strIngredient3:"Sugar syrup", strMeasure3:"0.5 oz", strIngredient4:"Soda water", strMeasure4:"Top up", strInstructions:"Blend kiwi with lime juice and sugar. Strain into glass over ice. Top with soda water." },
  { idDrink:"m032", strDrink:"Coconut Pineapple Smoothie",  strDrinkThumb:"mocktails/Coconut_Pineapple_Smoothie.png",   strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Coconut milk", strMeasure1:"3 oz", strIngredient2:"Pineapple chunks", strMeasure2:"1 cup", strIngredient3:"Ice", strMeasure3:"1 cup", strInstructions:"Blend coconut milk, pineapple chunks and ice until smooth. Garnish with toasted coconut flakes." },
  { idDrink:"m033", strDrink:"Blue Lagoon Mocktail",        strDrinkThumb:"mocktails/Blue_Lagoon_Mocktail.png",         strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Blue curacao syrup (non-alc)", strMeasure1:"1 oz", strIngredient2:"Lemonade", strMeasure2:"4 oz", strIngredient3:"Soda water", strMeasure3:"Splash", strInstructions:"Pour blue curacao syrup into glass with ice. Add lemonade and a splash of soda. Garnish with an orange slice." },
  { idDrink:"m034", strDrink:"Elderflower Spritz",          strDrinkThumb:"mocktails/Elderflower_Spritz.png",           strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Wine glass",      strIngredient1:"Elderflower cordial", strMeasure1:"1.5 oz", strIngredient2:"Sparkling water", strMeasure2:"4 oz", strIngredient3:"Cucumber slices", strMeasure3:"Garnish", strIngredient4:"Ice", strMeasure4:"As needed", strInstructions:"Pour elderflower cordial into a wine glass over ice. Top with sparkling water. Add cucumber slices and fresh mint." },
  { idDrink:"m035", strDrink:"Orange Creamsicle",           strDrinkThumb:"mocktails/Orange_Creamsicle.png",            strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Orange juice", strMeasure1:"3 oz", strIngredient2:"Vanilla cream soda", strMeasure2:"3 oz", strIngredient3:"Milk", strMeasure3:"1 oz", strInstructions:"Mix orange juice, vanilla cream soda and milk over ice. Stir gently. Garnish with an orange twist." },
  { idDrink:"m036", strDrink:"Tropical Sunrise",            strDrinkThumb:"mocktails/Tropical_Sunrise.png",             strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Mango juice", strMeasure1:"2 oz", strIngredient2:"Orange juice", strMeasure2:"2 oz", strIngredient3:"Grenadine", strMeasure3:"0.5 oz", strIngredient4:"Pineapple slice", strMeasure4:"Garnish", strInstructions:"Pour mango juice then orange juice over ice. Slowly drizzle grenadine — do not stir. Garnish with pineapple." },
  { idDrink:"m037", strDrink:"Grapefruit Paloma Mocktail",  strDrinkThumb:"mocktails/Grapefruit_Paloma_Mocktail.png",   strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Grapefruit juice", strMeasure1:"3 oz", strIngredient2:"Lime juice", strMeasure2:"0.5 oz", strIngredient3:"Agave syrup", strMeasure3:"0.5 oz", strIngredient4:"Grapefruit soda", strMeasure4:"Top up", strInstructions:"Mix grapefruit juice, lime juice and agave over ice. Top with grapefruit soda. Salt the rim." },
  { idDrink:"m038", strDrink:"Virgin Sangria",              strDrinkThumb:"mocktails/Virgin_Sangria.png",               strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Wine glass",      strIngredient1:"Grape juice", strMeasure1:"4 oz", strIngredient2:"Orange juice", strMeasure2:"2 oz", strIngredient3:"Mixed fruit", strMeasure3:"As needed", strIngredient4:"Soda water", strMeasure4:"Top up", strInstructions:"Mix grape juice, orange juice and chopped fruit. Refrigerate for 1 hour. Top with soda water before serving." },
  { idDrink:"m039", strDrink:"Minty Watermelon Agua Fresca",strDrinkThumb:"mocktails/Minty_Watermelon_Agua_Fresca.png", strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Watermelon", strMeasure1:"3 cups", strIngredient2:"Fresh mint", strMeasure2:"8 leaves", strIngredient3:"Lime juice", strMeasure3:"1 oz", strIngredient4:"Sugar", strMeasure4:"1 tbsp", strInstructions:"Blend watermelon and strain. Add lime juice, sugar and torn mint. Stir and serve over ice." },
  { idDrink:"m040", strDrink:"Honey Ginger Lemon",          strDrinkThumb:"mocktails/Honey_Ginger_Lemon.png",           strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Rocks glass",     strIngredient1:"Honey", strMeasure1:"1 tbsp", strIngredient2:"Fresh ginger juice", strMeasure2:"0.5 oz", strIngredient3:"Lemon juice", strMeasure3:"1 oz", strIngredient4:"Sparkling water", strMeasure4:"Top up", strInstructions:"Mix honey with ginger juice and lemon juice until dissolved. Add ice and top with sparkling water." },
  { idDrink:"m041", strDrink:"Blackberry Sage Lemonade",    strDrinkThumb:"mocktails/Blackberry_Sage_Lemonade.png",     strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Blackberries", strMeasure1:"0.5 cup", strIngredient2:"Fresh sage", strMeasure2:"3 leaves", strIngredient3:"Sugar", strMeasure3:"1 tbsp", strIngredient4:"Lemon juice", strMeasure4:"1.5 oz", strIngredient5:"Cold water", strMeasure5:"4 oz", strInstructions:"Muddle blackberries and sage with sugar. Add lemon juice and water. Strain and serve over ice." },
  { idDrink:"m042", strDrink:"Cucumber Basil Spritz",       strDrinkThumb:"mocktails/Cucumber_Basil_Spritz.png",        strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Wine glass",      strIngredient1:"Cucumber", strMeasure1:"4 slices", strIngredient2:"Fresh basil", strMeasure2:"4 leaves", strIngredient3:"Lime juice", strMeasure3:"0.5 oz", strIngredient4:"Sparkling water", strMeasure4:"Top up", strInstructions:"Muddle cucumber and basil. Add lime juice and ice. Top with sparkling water. Garnish with cucumber ribbon." },
  { idDrink:"m043", strDrink:"Tamarind Cooler",             strDrinkThumb:"mocktails/Tamarind_Cooler.png",              strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Tamarind paste", strMeasure1:"1 tbsp", strIngredient2:"Sugar", strMeasure2:"1 tbsp", strIngredient3:"Water", strMeasure3:"5 oz", strIngredient4:"Cumin", strMeasure4:"Pinch", strIngredient5:"Mint", strMeasure5:"Garnish", strInstructions:"Dissolve tamarind paste and sugar in water. Add a pinch of cumin. Serve over ice with fresh mint." },
  { idDrink:"m044", strDrink:"Guava Fizz",                  strDrinkThumb:"mocktails/Guava_Fizz.png",                   strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Guava juice", strMeasure1:"4 oz", strIngredient2:"Lime juice", strMeasure2:"0.5 oz", strIngredient3:"Soda water", strMeasure3:"Top up", strInstructions:"Mix guava juice and lime juice over ice. Top with soda water. Garnish with a lime wedge." },
  { idDrink:"m045", strDrink:"Lychee Rose Fizz",            strDrinkThumb:"mocktails/Lychee_Rose_Fizz.png",             strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Champagne flute", strIngredient1:"Lychee juice", strMeasure1:"3 oz", strIngredient2:"Rose water", strMeasure2:"1 tsp", strIngredient3:"Lemon juice", strMeasure3:"0.25 oz", strIngredient4:"Sparkling water", strMeasure4:"Top up", strInstructions:"Mix lychee juice, rose water and lemon juice. Pour into a chilled flute. Top with sparkling water." },
  { idDrink:"m046", strDrink:"Pear Ginger Sparkler",        strDrinkThumb:"mocktails/Pear_Ginger_Sparkler.png",         strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Wine glass",      strIngredient1:"Pear juice", strMeasure1:"3 oz", strIngredient2:"Ginger syrup", strMeasure2:"0.5 oz", strIngredient3:"Lemon juice", strMeasure3:"0.5 oz", strIngredient4:"Sparkling water", strMeasure4:"Top up", strInstructions:"Mix pear juice, ginger syrup and lemon juice over ice. Top with sparkling water. Garnish with pear slice." },
  { idDrink:"m047", strDrink:"Matcha Lemonade",             strDrinkThumb:"mocktails/Matcha_Lemonade.png",              strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Matcha powder", strMeasure1:"1 tsp", strIngredient2:"Warm water", strMeasure2:"2 oz", strIngredient3:"Lemon juice", strMeasure3:"1 oz", strIngredient4:"Sugar syrup", strMeasure4:"0.5 oz", strIngredient5:"Cold water", strMeasure5:"3 oz", strInstructions:"Whisk matcha with warm water until smooth. Cool. Mix with lemon juice, sugar syrup and cold water. Serve over ice." },
  { idDrink:"m048", strDrink:"Banana Berry Smoothie",       strDrinkThumb:"mocktails/Banana_Berry_Smoothie.png",        strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Banana", strMeasure1:"1", strIngredient2:"Mixed berries", strMeasure2:"0.5 cup", strIngredient3:"Yogurt", strMeasure3:"3 oz", strIngredient4:"Honey", strMeasure4:"1 tsp", strInstructions:"Blend banana, mixed berries, yogurt and honey until smooth and creamy. Serve chilled." },
  { idDrink:"m049", strDrink:"Iced Hibiscus Tea",           strDrinkThumb:"mocktails/Iced_Hibiscus_Tea.png",            strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Highball glass",  strIngredient1:"Hibiscus tea bags", strMeasure1:"2", strIngredient2:"Hot water", strMeasure2:"4 oz", strIngredient3:"Sugar", strMeasure3:"1 tbsp", strIngredient4:"Lemon", strMeasure4:"Garnish", strInstructions:"Steep hibiscus tea bags in hot water for 5 minutes. Sweeten and refrigerate until cold. Serve over ice with lemon." },
  { idDrink:"m050", strDrink:"Sparkling Grape Juice",       strDrinkThumb:"mocktails/Sparkling_Grape_Juice.png",        strCategory:"Non_Alcoholic", strAlcoholic:"Non alcoholic", strGlass:"Champagne flute", strIngredient1:"Sparkling grape juice", strMeasure1:"6 oz (chilled)", strIngredient2:"Frozen grapes", strMeasure2:"Garnish", strInstructions:"Pour well-chilled sparkling grape juice into a champagne flute. Garnish with a frozen grape on a cocktail pick." }

];
