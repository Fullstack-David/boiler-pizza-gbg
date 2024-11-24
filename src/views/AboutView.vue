<template>
  <h1>About Us</h1>
  <div class="about-section">
    <p>
      Vi är en modern pizzeria i hjärtat av Göteborg som brinner för att erbjuda
      dig pizzor av högsta kvalitet. Med noggrant utvalda råvaror, spännande
      smakkombinationer och en passion för hantverket skapar vi en meny som har
      något för alla – från klassiska favoriter till unika specialare. Hos oss
      möts gemenskap och god mat i en trivsam miljö. Välkommen in för en slajs
      du sent kommer glömma! 🍕
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
  text-align: center;
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
