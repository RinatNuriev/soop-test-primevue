<template>
  <div class="column">
    <div class="title">Сведения о поступлении несовершеннолетнего в ЦВСНП</div>

    <div class="row">
      <FloatLabel style="width: 30%" variant="on">
        <DatePicker name="date" showTime showIcon fluid iconDisplay="input" />
        <label>Дата и время поступления</label>
      </FloatLabel>

      <FormInput name="name" label="Центр временного содержания" width="40%" :formSlot="formSlot" />
      <FormInput name="caseNumber" label="Номер дела" width="30%" :formSlot="formSlot" />
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
      <FormInput name="test" label="Фамилия" width="25%" :formSlot="formSlot" />
      <FormInput name="test" label="Имя" width="25%" :formSlot="formSlot" />
      <FormInput name="test" label="Отчество" width="25%" :formSlot="formSlot" />
      <Button
        label="Выбрать из справочника"
        icon="pi pi-search"
        style="width: 25%"
        severity="info"
      />
    </div>

    <div class="row">
      <FormInput name="test" label="Звание" width="33%" :formSlot="formSlot" />
      <FormInput name="test" label="Должность" width="33%" :formSlot="formSlot" />
      <FormInput name="test" label="Номер телефона" width="33%" :formSlot="formSlot" />
    </div>
  </div>
</template>
<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import { ref } from 'vue';
import type { Form } from '@primevue/forms';
import FormInput from '@/components/FormInput.vue';

// 1. Извлекаем типы всех слотов компонента Form
type FormSlots = InstanceType<typeof Form>['$slots'];
type FormSlotState = NonNullable<Parameters<NonNullable<FormSlots['default']>>[0]>;

const { formSlot } = defineProps<{ formSlot: FormSlotState }>();

// const selectedCity = ref();
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

/*.custom-input {
  border-color: #999;
}
.custom-input:enabled:focus {
  border-color: #1d6da8;
}*/

:deep(.p-floatlabel label) {
  font-family: 'PT_Sans Bold', sans-serif;
  font-size: 14px;
}

:deep(.p-floatlabel:has(input.p-filled) label),
:deep(.p-floatlabel:has(input:focus) label),
:deep(.p-floatlabel-on:has(.p-inputwrapper-focus) label) {
  color: black;
  font-size: 14px;
  font-family: 'PT_Sans Bold', sans-serif;
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
</style>
