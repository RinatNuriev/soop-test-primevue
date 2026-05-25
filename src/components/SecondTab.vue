<template>
  <div class="column">
    <div class="title">Анкетные данные несовершеннолетнего правонарушителя</div>
    <div class="row">
      <FloatLabel style="width: 75%" variant="on">
        <Select :options="cities" optionLabel="name" fluid class="custom-select" name="gender" />
        <label for="">Основание помещения</label>
      </FloatLabel>
      <Button label="Выбрать из справочника СООП" icon="pi pi-search" style="width: 25%" severity="info"/>
    </div>
    <div class="row">

    </div>
    <FloatLabel variant="in" style="width: 100%">
      <label>Фамилия</label>
      <InputText name="surname" class="custom-input" type="text" fluid />
    </FloatLabel>
  </div>
</template>
<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import { ref } from 'vue';

const cities = ref([
  { name: 'Приговор суда', code: '1' },
  { name: 'постановление судьи', code: '2' },
  { name: 'постановление должностного лица органа МВД России', code: '3' },
  { name: 'постановление должностного лица органа внутренних дел на транспорте', code: '4' },
]);
</script>
