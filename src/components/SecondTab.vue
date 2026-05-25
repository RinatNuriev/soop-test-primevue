<template>
  <div class="column">
    <div class="title">Анкетные данные несовершеннолетнего правонарушителя</div>
    <div class="row">
      <FloatLabel style="width: 75%" variant="on">
        <Select :options="cities" optionLabel="name" fluid class="custom-select" name="gender" />
        <label for="">Категория несовершеннолетнего</label>
      </FloatLabel>
      <Button
        label="Выбрать из справочника СООП"
        icon="pi pi-search"
        style="width: 25%"
        severity="info"
      />
    </div>
    <div class="row">
      <FormInput name="test" label="Фамилия" width="25%" />
      <FormInput name="test" label="Имя" width="25%" />
      <FormInput name="test" label="Отчество" width="25%" />
      <FormInput name="test" label="Пол" width="25%" />
    </div>

    <div class="row">
      <FormInput name="test" label="Дата рождения" width="30%" />
      <FormInput name="test" label="Место рождения" width="40%" />
      <FormInput name="test" label="Гражданство" width="30%" />
    </div>

    <div class="row">
      <div style="font-family: 'PT_Sans Bold', sans-serif">Возраст:</div>
      <div style="display: flex; align-items: center; gap: 12px">
        <RadioButton inputId="1" name="radioBtn" value="1" />
        <label for="1">7-11 лет</label>
      </div>
      <div style="display: flex; align-items: center; gap: 12px">
        <RadioButton inputId="2" name="radioBtn" value="2" />
        <label for="2">12-13 лет</label>
      </div>
      <div style="display: flex; align-items: center; gap: 12px">
        <RadioButton inputId="3" name="radioBtn" value="3" />
        <label for="3">14-15 лет</label>
      </div>
      <div style="display: flex; align-items: center; gap: 12px">
        <RadioButton inputId="4" name="radioBtn" value="4" />
        <label for="4">16-17 лет</label>
      </div>
      <div style="display: flex; align-items: center; gap: 12px">
        <RadioButton inputId="5" name="radioBtn" value="5" />
        <label for="5">18 и старше</label>
      </div>
    </div>

    <div class="row">
      <div style="display: flex; align-items: center; gap: 12px; width: 30%">
        <RadioButton inputId="6" name="radioBtn2" value="6" />
        <label for="6">Доставлен в ЦВСНП впервые</label>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; width: 30%">
        <RadioButton inputId="7" name="radioBtn2" value="7" />
        <label for="7">Доставлен в ЦВСНП повторно</label>
      </div>
      <FloatLabel style="width: 40%" variant="on">
        <InputNumber
          name="inputNumber"
          inputId="minmax-buttons"
          mode="decimal"
          showButtons
          :min="0"
          :max="100"
          fluid
        />
        <label for="minmax-buttons">Доставлен в ЦВСНП повторно</label>
      </FloatLabel>
    </div>

    <div class="row">
      <div style="display: flex; align-items: center; gap: 12px; width: 30%">
        <RadioButton inputId="8" name="radioBtn3" value="8" disabled />
        <label for="8">Состоял на учете в ПДН</label>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; width: 30%">
        <RadioButton inputId="9" name="radioBtn3" value="9" disabled />
        <label for="9">Не состоял на учете в ПДН</label>
      </div>
      <FormInput name="test" label="Примечание" width="40%" />
    </div>

    <!--    <FloatLabel variant="in" style="width: 100%">-->
    <!--      <label>Фамилия</label>-->
    <!--      <InputText name="surname" class="custom-input" type="text" fluid />-->
    <!--    </FloatLabel>-->
  </div>
</template>
<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel';
import Select from 'primevue/select';
import RadioButton from 'primevue/radiobutton';
import { ref } from 'vue';
import FormInput from '@/components/FormInput.vue';
import InputNumber from 'primevue/inputnumber';

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

:deep(.p-radiobutton-checked .p-radiobutton-box) {
  background: #1d6da8;
  border-color: #1d6da8;
}

:deep(.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box) {
  background: #1d6da8;
  border-color: #1d6da8;
}
</style>
