<template>
  <div class="ruleta">
    <h1>Ruleton del BebeDOOR</h1>

    <div class="ruleta-content">
        <div class="pointer"></div>
            <div class="ruleta-container">
                <div class="ruleta-wheel" :style="{ transform: `rotate(${rotation}deg)`, backgroundImage: ruletaBackground }">
                <div
                    v-for="(opcion, index) in opciones"
                    :key="index"
                    class="label"
                    :style="getLabelStyle(index)"
                >
                    {{ opcion }}
                </div>
                </div>
            </div>
      <button @click="girar">Girar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opciones: ["chupito", "cubata", "cubaton", "tu madre", "tu padre", "unai"],
      rotation: 0,
    };
  },
  computed: {
    ruletaBackground() {
      const total = this.opciones.length;
      const degPerSlice = 360 / total;
      return `conic-gradient(${this.opciones
        .map(
          (_, i) =>
            `hsl(${(i * 360) / total}, 70%, 50%) ${i * degPerSlice}deg ${
              (i + 1) * degPerSlice
            }deg`
        )
        .join(", ")})`;
    },
  },
  methods: {
    getLabelStyle(index) {
      const total = this.opciones.length;
      const angle = (index + 0.5) * (360 / total);
      return {
        transform: `rotate(${angle}deg) translate(120px) rotate(${angle}deg)`,
      };
    },
    girar() {
      const vueltas = Math.floor(Math.random() * 5 + 5);
      const extraGrados = Math.floor(Math.random() * 360);
      const nuevaRotacion = this.rotation + vueltas * 360 + extraGrados;
      this.rotation = nuevaRotacion;

      const total = this.opciones.length;
      const degPerSlice = 360 / total;

      setTimeout(() => {
        const gradosFinales = nuevaRotacion % 360;
        const indice = Math.floor(
          ((360 - gradosFinales + degPerSlice / 2) % 360) / degPerSlice
        );
        alert("Resultado: " + this.opciones[indice]);
      }, 4100);
    },
  },
};
</script>

<style scoped>
.ruleta {
  text-align: center;
  padding: 2rem;
}

.ruleta-content {
  margin-top: 2rem;
}

.ruleta-container {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border-radius: 50%;
  border: 10px solid #fff;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.ruleta-wheel {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  transition: transform 4s ease-out;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: left center;
  font-size: 12px;
  color: white;
  font-weight: bold;
}

.pointer {
  position: absolute;
  top: 300px;
  left: 58%;
  transform: translateX(-60%);
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: 20px solid red;
  z-index: 10;
}

button {
  margin-top: 40px;
  padding: 20px;
  border-radius: 50%;
  border: none;
  background: crimson;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover {
  transform: scale(1.1);
}
</style>
