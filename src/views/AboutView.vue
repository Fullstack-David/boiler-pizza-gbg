<template>
  <div class="about-section">
    <h1>About Us</h1>
    <p>
      We are a modern pizzeria in the heart of Gothenburg that is passionate
      about offering you pizzas of the highest quality. With carefully selected
      ingredients, exciting flavor combinations, and a passion for
      craftsmanship, we create a menu that has something for everyone – from
      classic favorites to unique specialties. With us, community and good food
      meet in a cozy environment. Welcome in for a slice you won't soon forget!
      Note: I translated "slajs" (which seems to be a Swedish slang/misspelling)
      as "slice" in the context of the pizza theme, maintaining the playful
      spirit of the original text. 🍕
    </p>
  </div>
</template>

<style scoped>
.about-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
h1 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #333;
}
.about-section p {
  margin: 1rem 0;
  max-width: 60%;
  height: 50vh;

  padding: 15px;
  border-radius: 12px;
  /* background-color: #f9f9f9; */
  line-height: 1.6;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
