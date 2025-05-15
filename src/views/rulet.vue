<template>
  <div class="rulet">
    <h1>{{ $t('rulet.title') }}</h1>
    <h2>
      {{ $t('rulet.subtitle') }}
      <span class="highlight-subtitle">{{ $t('rulet.subtitle2') }}</span>
      {{ $t('rulet.subtitle3') }}
    </h2>

    <div class="rulet-content">
      <div class="rulet-text">
        <div class="form-group">
          <h2>{{ $t('rulet.name.nombre1') }}</h2>
          <input type="text" v-model="nombre1" required />
        </div>

        <div class="form-group">
          <h2>{{ $t('rulet.name.nombre2') }}</h2>
          <input type="text" v-model="nombre2" required />
        </div>

        <button @click="calcularAmor">{{ $t('rulet.calculate.title') }}</button>

        <div v-if="resultado" class="result">{{ resultado }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre1: '',
      nombre2: '',
      resultado: null
    };
  },
  methods: {
    calcularAmor() {
      if (!this.nombre1 || !this.nombre2) {
        alert(this.$t('rulet.error.missing_names'));
        return;
      }

      const porcentaje = Math.floor(Math.random() * 51) + 50;
      this.resultado = `💘 La compatibilidad de amor entre ${this.nombre1} y ${this.nombre2} es del ${porcentaje}%. 💘`;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  overflow-x: hidden;
}

.rulet {
  max-width: 800px;
  margin: 3rem auto;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(255, 105, 180, 0.4);
  position: relative;
  background: linear-gradient(to bottom right, #ffd6e8, #fff0f5);
  background-image: url('../assets/heart2.avif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

h1 {
  font-family: 'Great Vibes', cursive;
  font-size: 3rem;
  color: #e6005c;
  text-shadow: 2px 2px 6px rgba(255, 0, 102, 0.3);
}

h2 {
  font-size: 1.2rem;
  color: #cc0066;
  margin-bottom: 0.5rem;
}

.form-group {
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  border: 2px solid #ff69b4;
  border-radius: 10px;
  background-color: #fff0f5;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #e6005c;
  outline: none;
  box-shadow: 0 0 8px #ff99cc;
}

button {
  background: linear-gradient(to right, #ff69b4, #ff1493);
  color: white;
  font-size: 1.2rem;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.4s ease;
  box-shadow: 0 4px 10px rgba(255, 105, 180, 0.4);
}

button:hover {
  background: linear-gradient(to right, #ff1493, #ff69b4);
}

.result {
  margin-top: 2rem;
  font-size: 1.5rem;
  color: #d4006c;
  font-family: 'Great Vibes', cursive;
  animation: pulse 2s infinite alternate;
  text-align: center;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.9; }
  100% { transform: scale(1.05); opacity: 1; }
}

.rulet::before {
  content: "❤️ 💕 💖 💘 💝 💞";
  position: absolute;
  top: -40px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 2rem;
  animation: floatHearts 4s linear infinite;
}

@keyframes floatHearts {
  0% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(-10px); opacity: 1; }
  100% { transform: translateY(0); opacity: 0.6; }
}
.highlight-subtitle {
  font-family: 'Great Vibes', cursive;
  color: #ff1493;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0.5rem;
  background: linear-gradient(to right, #ff66cc, #ff99cc);
  background-clip: text; /* <-- estándar */
  -webkit-background-clip: text; /* <-- prefijo */
  -webkit-text-fill-color: transparent;
  animation: sparkle 2s infinite ease-in-out;
}



@keyframes sparkle {
  0% {
    text-shadow: 0 0 5px #ff99cc, 0 0 10px #ff66cc;
  }
  50% {
    text-shadow: 0 0 12px #ff33cc, 0 0 20px #ff66cc;
  }
  100% {
    text-shadow: 0 0 5px #ff99cc, 0 0 10px #ff66cc;
  }
}
</style>
