<script setup>
function handleSubmit() {
  alert("Tack för ditt meddelande! Vi återkommer så snart som möjligt.");
}
</script>

<template>
  <div class="contact-form">
    <h1>Contact Us</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Namn</label>
        <input type="text" id="name" placeholder="name..." required />
      </div>

      <div class="form-group">
        <label for="email">E-post</label>
        <input type="email" id="email" placeholder="email adress..." required />
      </div>

      <div class="form-group">
        <label for="message">Meddelande</label>
        <textarea
          id="message"
          rows="5"
          placeholder="message..."
          required
        ></textarea>
      </div>

      <button type="submit">Send</button>
    </form>
  </div>
</template>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.contact-form h1 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #333;
}

form {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #555;
}

input,
textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
}

button {
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
