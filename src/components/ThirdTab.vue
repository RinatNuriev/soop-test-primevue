<template>
  <FloatLabel variant="on" style="width: 100%">
    <label>Отчество</label>
    <InputText name="middlename" class="custom-input" type="text" fluid />
  </FloatLabel>
  <FloatLabel>
    <label for="">Пол</label>
    <Select
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      placeholder="Пол"
      style="width: 100%"
      class="custom-select"
      name="gender"
    />
  </FloatLabel>
</template>
<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import { ref } from 'vue';

const selectedCity = ref();
const cities = ref([
  { name: 'Мужской', code: 'NY' },
  { name: 'Женский', code: 'RM' },
]);
</script>
