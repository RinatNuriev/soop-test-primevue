<template>
  <div class="column" style="width: 70%">
    <div class="img-container">
      <Image :src="img" width="260" />
      <div style="display: flex; gap: 6px; align-items: center">
        <Button icon="pi pi-camera" disabled />
        <Button icon="pi pi-trash" severity="secondary" outlined disabled />
      </div>
    </div>

    <div class="title">Анкетные данные несовершеннолетнего правонарушителя</div>
    <div class="row">
      <FloatLabel style="width: 65%" variant="on">
        <Select :options="cities" optionLabel="name" fluid class="custom-select" name="gender" />
        <label for="">Категория несовершеннолетнего</label>
      </FloatLabel>
      <Button
        label="Выбрать из справочника СООП"
        icon="pi pi-search"
        style="
          width: 35%;
          background: var(--button-main-color);
          border-color: var(--button-main-color);
        "
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
    </div>
    <FormInput name="test" label="Примечание" width="100%" />
  </div>

  <Divider style="margin: 13px 0" />

  <div class="column">
    <div style="display: flex; flex-direction: column; gap: 6px">
      <div style="display: flex; align-items: center; gap: 12px">
        <FloatLabel variant="on" style="width: 75%">
          <Select :options="cities" optionLabel="name" fluid class="custom-select" name="gender" />
          <label for="">Адрес регистрации</label>
        </FloatLabel>

        <Button severity="info" icon="pi pi-pencil" />
        <Button severity="info" icon="pi pi-plus" />
      </div>

      <div style="display: flex; align-items: center; gap: 12px">
        <Checkbox inputId="isAddressEmpty" name="isAddressEmpty" value="true" />
        <label for="isAddressEmpty"> Адрес регистрации отсутствует </label>
      </div>
    </div>

    <Button
      icon="pi pi-arrow-circle-down"
      severity="secondary"
      label="Копировать"
      outlined
      style="width: 25%; background: #e8e8e8"
    />

    <div style="display: flex; flex-direction: column; gap: 6px">
      <div style="display: flex; align-items: center; gap: 12px">
        <FloatLabel variant="on" style="width: 75%">
          <Select :options="cities" optionLabel="name" fluid class="custom-select" name="gender" />
          <label for="">Фактический адрес проживания</label>
        </FloatLabel>

        <Button
          severity="info"
          icon="pi pi-pencil"
          style="background: var(--button-main-color); border-color: var(--button-main-color)"
        />
        <Button
          severity="info"
          icon="pi pi-plus"
          style="background: var(--button-main-color); border-color: var(--button-main-color)"
        />
      </div>

      <div style="display: flex; align-items: center; gap: 12px">
        <Checkbox inputId="checkbox1" name="isAddressEmpty" value="true" />
        <label for="checkbox1"> Лицо без определенного места жительства </label>
      </div>
    </div>

    <div class="row">
      <div style="display: flex; align-items: center; gap: 12px; width: 30%">
        <RadioButton inputId="10" name="radioBtn3" value="10" />
        <label for="10">Проживает в данном субъекте РФ</label>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; width: 30%">
        <RadioButton inputId="11" name="radioBtn3" value="11" />
        <label for="11">Не проживает в данном субъекте РФ</label>
      </div>
    </div>

    <div class="row">
      <FloatLabel style="width: 33%" variant="on">
        <DatePicker name="date2" showIcon fluid iconDisplay="input" />
        <label>Когда прибыл</label>
      </FloatLabel>

      <FormInput name="test" label="Откуда прибыл" width="33%" />

      <div style="display: flex; align-items: center; gap: 12px">
        <Checkbox inputId="checkbox2" name="isAddressEmpty" value="true" />
        <label for="checkbox2"> Другое государство </label>
      </div>
    </div>

    <FloatLabel variant="on" style="width: 85%">
      <Textarea name="textarea" rows="5" cols="30" fluid />
      <label for="checkbox2"> Причина прибытия. Дополнительные сведения </label>
    </FloatLabel>

    <div class="row">
      <div style="display: flex; align-items: center; gap: 12px; width: 30%">
        <Checkbox inputId="checkbox2" name="isAddressEmpty" value="true" />
        <label for="checkbox2"> Работающий </label>
      </div>
      <div style="width: 100%; display: flex; align-items: center; gap: 12px">
        <FloatLabel style="width: 50%" variant="on">
          <Select :options="cities" optionLabel="name" fluid class="custom-select" name="gender" />
          <label for="">Место работы</label>
        </FloatLabel>
        <Button severity="info" icon="pi pi-plus" />
      </div>
    </div>

    <div class="row">
      <div style="display: flex; align-items: center; gap: 12px; width: 30%">
        <Checkbox inputId="checkbox2" name="isAddressEmpty" value="true" />
        <label for="checkbox2"> Учащийся </label>
      </div>
      <div style="width: 100%; display: flex; align-items: center; gap: 12px">
        <FloatLabel style="width: 50%" variant="on">
          <Select :options="cities" optionLabel="name" fluid class="custom-select" name="gender" />
          <label for="">Место учебы</label>
        </FloatLabel>
        <Button severity="info" icon="pi pi-plus" />
      </div>
    </div>

    <div class="row">
      <div style="display: flex; align-items: center; gap: 12px; width: 30%">
        <Checkbox inputId="checkbox2" name="isAddressEmpty" value="true" />
        <label for="checkbox2"> Не работающий и не учащийся </label>
      </div>
      <div style="width: 100%; display: flex; align-items: center; gap: 12px">
        <FloatLabel style="width: 50%" variant="on">
          <DatePicker name="date2" showIcon fluid iconDisplay="input" />
        </FloatLabel>
        <Button severity="info" icon="pi pi-plus" />
      </div>
    </div>

    <div class="row">
      <div style="display: flex; align-items: center; gap: 12px; ">
        <Checkbox inputId="checkbox2" name="isAddressEmpty" value="true" />
        <label for="checkbox2"> Проживает в семье, находящейся в социально опасном положении </label>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; ">
        <Checkbox inputId="checkbox2" name="isAddressEmpty" value="true" />
        <label for="checkbox2"> Самовольно ушедший из дома </label>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <Checkbox inputId="checkbox2" name="isAddressEmpty" value="true" />
        <label for="checkbox2"> Находился в розыске </label>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel';
import Select from 'primevue/select';
import RadioButton from 'primevue/radiobutton';
import { ref } from 'vue';
import FormInput from '@/components/FormInput.vue';
import InputNumber from 'primevue/inputnumber';
import Checkbox from 'primevue/checkbox';
import Image from 'primevue/image';
import img from '../assets/img.png';
import Divider from 'primevue/divider';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';

const cities = ref([
  { name: 'Приговор суда', code: '1' },
  { name: 'постановление судьи', code: '2' },
  { name: 'постановление должностного лица органа МВД России', code: '3' },
  { name: 'постановление должностного лица органа внутренних дел на транспорте', code: '4' },
]);
</script>

<style scoped>
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

.p-floatlabel-on:has(textarea:focus) label {
  color: black;
  font-family: 'PT_Sans Bold', sans-serif;
  font-size: 14px;
}

.p-textarea {
  border-color: #999;
  &:enabled:focus {
    border-color: #999;
  }
}

:deep(.p-checkbox-checked .p-checkbox-box) {
  border-color: #1d6da8;
  background-color: #1d6da8;
}

:deep(.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box) {
  border-color: #1d6da8;
  background-color: #1d6da8;
}

.img-container {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
