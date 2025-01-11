const foods = [
    { id: '1', name: 'Almonds', calories_per_100g: 579 },
    { id: '2', name: 'Apple', calories_per_100g: 52 },
    { id: '3', name: 'Apricot', calories_per_100g: 48 },
    { id: '4', name: 'Avocado', calories_per_100g: 160 },
    { id: '5', name: 'Bacon', calories_per_100g: 541 },
    { id: '6', name: 'Banana', calories_per_100g: 89 },
    { id: '7', name: 'Barley', calories_per_100g: 354 },
    { id: '9', name: 'Beetroot', calories_per_100g: 43 },
    { id: '10', name: 'Black Beans', calories_per_100g: 339 },
    { id: '11', name: 'Blueberry', calories_per_100g: 57 },
    { id: '12', name: 'Broccoli', calories_per_100g: 34 },
    { id: '13', name: 'Cantaloupe', calories_per_100g: 34 },
    { id: '14', name: 'Carrot', calories_per_100g: 41 },
    { id: '15', name: 'Cashews', calories_per_100g: 553 },
    { id: '16', name: 'Cauliflower', calories_per_100g: 25 },
    { id: '17', name: 'Cheese (Cheddar)', calories_per_100g: 403 },
    { id: '18', name: 'Chicken Breast', calories_per_100g: 165 },
    { id: '19', name: 'Chicken Thigh', calories_per_100g: 209 },
    { id: '20', name: 'Chickpeas', calories_per_100g: 164 },
    { id: '21', name: 'Chili Pepper', calories_per_100g: 40 },
    { id: '22', name: 'Cherries', calories_per_100g: 63 },
    { id: '23', name: 'Chocolate', calories_per_100g: 546 },
    { id: '24', name: 'Cod Fish', calories_per_100g: 105 },
    { id: '25', name: 'Cottage Cheese', calories_per_100g: 98 },
    { id: '26', name: 'Cucumber', calories_per_100g: 16 },
    { id: '27', name: 'Crab', calories_per_100g: 87 },
    { id: '28', name: 'Cucumber', calories_per_100g: 16 },
    { id: '29', name: 'Duck Breast', calories_per_100g: 337 },
    { id: '30', name: 'Egg', calories_per_100g: 155 },
    { id: '31', name: 'Eggplant', calories_per_100g: 25 },
    { id: '32', name: 'Endive', calories_per_100g: 17 },
    { id: '33', name: 'Figs', calories_per_100g: 74 },
    { id: '34', name: 'Flax Seeds', calories_per_100g: 534 },
    { id: '35', name: 'Garlic', calories_per_100g: 149 },
    { id: '36', name: 'Grapes', calories_per_100g: 69 },
    { id: '37', name: 'Greek Yogurt', calories_per_100g: 59 },
    { id: '38', name: 'Honey', calories_per_100g: 304 },
    { id: '39', name: 'Kiwi', calories_per_100g: 61 },
    { id: '40', name: 'Lamb Chop', calories_per_100g: 294 },
    { id: '41', name: 'Lemon', calories_per_100g: 29 },
    { id: '42', name: 'Lettuce', calories_per_100g: 15 },
    { id: '43', name: 'Lobster', calories_per_100g: 77 },
    { id: '44', name: 'Mango', calories_per_100g: 60 },
    { id: '45', name: 'Mayonnaise', calories_per_100g: 680 },
    { id: '46', name: 'Milk', calories_per_100g: 42 },
    { id: '47', name: 'Muesli', calories_per_100g: 345 },
    { id: '48', name: 'Oats', calories_per_100g: 389 },
    { id: '49', name: 'Olive Oil', calories_per_100g: 884 },
    { id: '50', name: 'Olives', calories_per_100g: 115 },
    { id: '51', name: 'Peach', calories_per_100g: 39 },
    { id: '52', name: 'Peanuts', calories_per_100g: 567 },
    { id: '53', name: 'Pistachios', calories_per_100g: 562 },
    { id: '54', name: 'Plum', calories_per_100g: 46 },
    { id: '55', name: 'Pork Chop', calories_per_100g: 242 },
    { id: '56', name: 'Potato', calories_per_100g: 77 },
    { id: '57', name: 'Pretzels', calories_per_100g: 380 },
    { id: '58', name: 'Pumpkin', calories_per_100g: 26 },
    { id: '59', name: 'Quinoa', calories_per_100g: 120 },
    { id: '60', name: 'Rice', calories_per_100g: 130 },
    { id: '61', name: 'Raspberry', calories_per_100g: 52 },
    { id: '62', name: 'Salmon', calories_per_100g: 208 },
    { id: '63', name: 'Shrimp', calories_per_100g: 99 },
    { id: '64', name: 'Spinach', calories_per_100g: 23 },
    { id: '65', name: 'Strawberry', calories_per_100g: 32 },
    { id: '66', name: 'Soy Sauce', calories_per_100g: 53 },
    { id: '67', name: 'Sunflower Seeds', calories_per_100g: 584 },
    { id: '68', name: 'Tortilla Chips', calories_per_100g: 489 },
    { id: '69', name: 'Tuna', calories_per_100g: 132 },
    { id: '70', name: 'Turkey Breast', calories_per_100g: 135 },
    { id: '71', name: 'Tomato', calories_per_100g: 18 },
    { id: '72', name: 'Tofu', calories_per_100g: 76 },
    { id: '73', name: 'Whole Wheat Bread', calories_per_100g: 247 },
    { id: '74', name: 'White Bread', calories_per_100g: 266 },
    { id: '75', name: 'Walnuts', calories_per_100g: 654 },
    { id: '76', name: 'Watermelon', calories_per_100g: 30 },
    { id: '77', name: 'Zucchini', calories_per_100g: 17 },
    { id: '78', name: 'Pineapple', calories_per_100g: 50 },
    { id: '79', name: 'Pudding', calories_per_100g: 124 },
    { id: '80', name: 'Rye Bread', calories_per_100g: 259 },
    { id: '81', name: 'Sausages', calories_per_100g: 301 },
    { id: '82', name: 'Squash', calories_per_100g: 20 },
    { id: '83', name: 'Sweet Potato', calories_per_100g: 86 },
    { id: '84', name: 'Taro', calories_per_100g: 142 },
    { id: '85', name: 'Tilapia', calories_per_100g: 128 },
    { id: '86', name: 'Tofu', calories_per_100g: 76 },
    { id: '87', name: 'Tuna', calories_per_100g: 132 },
    { id: '88', name: 'Watercress', calories_per_100g: 11 },
    { id: '89', name: 'Yogurt', calories_per_100g: 59 },
    { id: '90', name: 'Ziti Pasta', calories_per_100g: 157 },
    { id: '91', name: 'Pineapple', calories_per_100g: 50 },
    { id: '92', name: 'Rice', calories_per_100g: 130 },
    { id: '93', name: 'Tart', calories_per_100g: 215 },
    { id: '94', name: 'Vanilla Extract', calories_per_100g: 288 },
    { id: '95', name: 'Burrito', calories_per_100g: 170 },
    { id: '96', name: 'Chicken Wings', calories_per_100g: 203 },
    { id: '97', name: 'Chorizo', calories_per_100g: 455 },
    { id: '98', name: 'Caviar', calories_per_100g: 264 },
    { id: '99', name: 'Macadamia Nuts', calories_per_100g: 718 },
    { id: '100', name: 'Pancakes', calories_per_100g: 227 }
  ];
  
  let selectedFoods = [];
  let totalCalories = 0;
  
  const foodSelect = document.getElementById('food-select');
  
  function renderFoodList(filteredFoods = foods) {
      foodSelect.innerHTML = '<option value="">-- Select --</option>'; // Clear previous options
      filteredFoods.forEach(food => {
          const option = document.createElement('option');
          option.value = food.id;
          option.textContent = food.name;
          foodSelect.appendChild(option);
      });
  }
  
  renderFoodList();
  
  document.getElementById('calorie-form').addEventListener('submit', function(event) {
      event.preventDefault();
    
  });
  
  function addFood() {
      const foodId = foodSelect.value;
      const quantity = document.getElementById('quantity').value;
  
      if (!foodId || !quantity) {
          alert('Please select a food and enter the quantity.');
          return;
      }
  
      const selectedFood = foods.find(food => food.id === foodId);
  
      if (selectedFood) {

          const calories = (selectedFood.calories_per_100g * quantity) / 100;
          totalCalories += calories;
  
          selectedFoods.push({ name: selectedFood.name, quantity: quantity, calories: calories });
  
          renderSelectedFoods();
      }
  }
  
  function stopAdding() {
      document.getElementById('result').style.display = 'block';
      document.getElementById('total-calories').textContent = totalCalories.toFixed(2);
      document.getElementById('food-select').disabled = true;
      document.getElementById('quantity').disabled = true;
      document.querySelector('button[type="button"]').disabled = true;
  }
  
  function renderSelectedFoods() {
      const foodList = document.getElementById('food-list');
      foodList.innerHTML = '';
  
      selectedFoods.forEach(food => {
          const listItem = document.createElement('li');
          listItem.textContent = `${food.name} - ${food.quantity}g = ${food.calories.toFixed(2)} kcal`;
          foodList.appendChild(listItem);
      });
  }
  
  function searchFood() {
      const searchQuery = document.getElementById('food-search').value.toLowerCase();
      const filteredFoods = foods.filter(food => food.name.toLowerCase().includes(searchQuery));
      renderFoodList(filteredFoods);
  }
  
  
  document.getElementById('calorie').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;
    const activity = parseFloat(document.getElementById('activity').value);
  
   
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
  
    const tdee = bmr * activity;
  
    document.getElementById('answer').textContent = Math.round(tdee);
  
    if (Notification.permission === 'granted') {
      new Notification('Your Daily Calorie Requirement is ' + Math.round(tdee) + ' kcal');
    } else {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Your Daily Calorie Requirement is ' + Math.round(tdee) + ' kcal');
        }
      });
    }
  });  
  
