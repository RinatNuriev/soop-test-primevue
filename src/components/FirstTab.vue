<template>
  <div class="column">
    <div class="title">Сведения о поступлении несовершеннолетнего в ЦВСНП</div>

    <div class="row">
      <FloatLabel style="width: 30%" variant="on">
        <DatePicker name="date" showTime showIcon fluid iconDisplay="input" />
        <label>Дата и время поступления</label>
      </FloatLabel>
      <FloatLabel style="width: 40%" variant="on">
        <label>Центр временного содержания</label>
        <InputText name="name" class="custom-input" type="text" fluid />
        <Message
          style="position: fixed"
          v-if="formSlot.name?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >{{ formSlot.name.error?.message }}</Message
        >
      </FloatLabel>
      <FloatLabel style="width: 30%" variant="on">
        <label>Номер дела</label>
        <InputText name="caseNumber" class="custom-input" type="text" fluid />
      </FloatLabel>
    </div>

    <div class="row">
      <FloatLabel style="width: 92.8%" variant="on">
        <Select :options="cities" optionLabel="name" fluid class="custom-select" name="gender" />
        <label for="">Основание помещения</label>
      </FloatLabel>
      <FloatLabel style="width: 92.8%" variant="on">
        <Select :options="cities" optionLabel="name" fluid class="custom-select" name="gender" />
        <label for="">Откуда прибыл в ЦВСНП</label>
      </FloatLabel>
    </div>

    <div class="title">Доставил несовершеннолетнего</div>

    <div class="row">
      <FloatLabel style="width: 25%" variant="on">
        <label>Фамилия</label>
        <InputText name="caseNumber" class="custom-input" type="text" fluid />
      </FloatLabel>
      <FloatLabel style="width: 25%" variant="on">
        <label>Имя</label>
        <InputText name="caseNumber" class="custom-input" type="text" fluid />
      </FloatLabel>
      <FloatLabel style="width: 25%" variant="on">
        <label>Отчество</label>
        <InputText name="caseNumber" class="custom-input" type="text" fluid />
      </FloatLabel>
      <Button label="Выбрать из справочника" icon="pi pi-search" style="width: 25%" severity="info"/>
    </div>

    <div class="row">
      <FloatLabel style="width: 24%" variant="on">
        <label>Фамилия</label>
        <InputText name="caseNumber" class="custom-input" type="text" fluid />
      </FloatLabel>
      <FloatLabel style="width: 24%" variant="on">
        <label>Имя</label>
        <InputText name="caseNumber" class="custom-input" type="text" fluid />
      </FloatLabel>
      <FloatLabel style="width: 24%" variant="on">
        <label>Отчество</label>
        <InputText name="caseNumber" class="custom-input" type="text" fluid />
      </FloatLabel>
    </div>
  </div>

</template>
<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel';
import DatePicker from 'primevue/datepicker';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import Select from 'primevue/select';
import { ref } from 'vue';
import type { FormFieldState } from '@primevue/forms';

const { formSlot } = defineProps<{ formSlot: FormFieldState }>();

const selectedCity = ref();
const cities = ref([
  { name: 'Приговор суда', code: '1' },
  { name: 'постановление судьи', code: '2' },
  { name: 'постановление должностного лица органа МВД России', code: '3' },
  { name: 'постановление должностного лица органа внутренних дел на транспорте', code: '4' },
]);
</script>

<style scoped>
:deep(.p-inputtext) {
  border-color: #999;
}

:deep(.p-inputtext:enabled:focus) {
  border-color: #1d6da8;
}

.custom-input {
  border-color: #999;
}
.custom-input:enabled:focus {
  border-color: #1d6da8;
}

:deep(.p-floatlabel label) {
  font-family: 'PT_Sans Bold', sans-serif;
  font-size: 14px;
}

:deep(.p-floatlabel:has(input.p-filled) label),
:deep(.p-floatlabel:has(input:focus) label),
:deep(.p-floatlabel-on:has(.p-inputwrapper-focus) label) {
  color: black;
  font-size: 14px;
}

.custom-select {
  border-color: #999;
}

.custom-select:active {
  border-color: #1d6da8;
}

:deep(.p-select:not(.p-disabled).p-focus) {
  border-color: #1d6da8;
}

:deep(.p-floatlabel:has(.p-inputwrapper-filled) label) {
  color: black;
  font-family: 'PT_Sans Bold', sans-serif;
  font-size: 14px;
}
.title {
  font-size: 16px;
  font-family: 'PT_Sans Bold', sans-serif;
  text-transform: uppercase;
}
</style>
