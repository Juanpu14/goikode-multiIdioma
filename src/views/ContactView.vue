<template>
  <div class="contact">
    <h1>{{ $t('contact.title') }}</h1>
    
    <div class="contact-content">
      <div class="contact-text">
         <form>
          <div class="form-group">
            <h2>{{ $t('contact.name.title') }}</h2>
            <input type="text" id="name" required />
          </div>

          <div class="form-group">
            <h2>{{ $t('contact.email.title') }}</h2>
            <input type="email" id="email" required />
          </div>

          <div class="form-group">
            <h2>{{ $t('contact.message.title') }}</h2>
            <textarea id="message" required></textarea>
          </div>

          <button type="submit">{{ $t('contact.send.title') }}</button>
        </form>

      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-content {
  margin-top: 2rem;
}

h1 {
  color: var(--secondary-color);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1rem;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s ease;
}

input:focus,
textarea:focus {
  border-color: #1890ff;
  outline: none;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

button {
  background-color: #1890ff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #40a9ff;
}
</style>


