<template>
  <div class="p-6">
    <h1 class="text-xl font-bold mb-4">Lista de Formularios</h1>
    <table class="table-auto border w-full">
      <thead>
        <tr class="bg-gray-200">
          <th class="border px-4 py-2">Nombre</th>
          <th class="border px-4 py-2">Mail</th>
          <th class="border px-4 py-2">Teléfono</th>
          <th class="border px-4 py-2">Asunto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(form, index) in formularios" :key="index">
          <td class="border px-4 py-2">{{ form.nombre }}</td>
          <td class="border px-4 py-2">{{ form.mail }}</td>
          <td class="border px-4 py-2">{{ form.telefono }}</td>
          <td class="border px-4 py-2">{{ form.asunto }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="borrarFormularios" class="mt-4 bg-red-500 text-white px-4 py-2">
      Borrar todo
    </button>
  </div>
</template>

<script>
export default {
  name: "ListaView",
  data() {
    return {
      formularios: []
    };
  },
  mounted() {
    const datos = JSON.parse(localStorage.getItem('formularios')) || [];
    this.formularios = datos;
  },
  methods: {
    borrarFormularios() {
      localStorage.removeItem('formularios');
      this.formularios = [];
    }
  }
};
</script>
