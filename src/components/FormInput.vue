<template>
  <FloatLabel
    class="custom-float-label"
    :style="{
      width: `${width}`,
    }"
    variant="on"
  >
    <label :for="name">
      {{ label }}
    </label>
    <InputText :name="name" :id="name" class="custom-input" type="text" fluid />
    <Message
      style="position: fixed"
      v-if="formSlot?.[name]?.invalid"
      severity="error"
      size="small"
      variant="simple"
    >
      {{ formSlot?.[name].error?.message }}
    </Message>
  </FloatLabel>
</template>

<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import type { Form } from '@primevue/forms';

type FormSlots = InstanceType<typeof Form>['$slots'];
type FormSlotState = NonNullable<Parameters<NonNullable<FormSlots['default']>>[0]>;

const {
  name,
  label,
  width = '25%',
  formSlot,
} = defineProps<{
  name: string;
  label: string;
  width?: string;
  formSlot?: FormSlotState;
}>();
</script>

<style scoped>
:deep(.p-inputtext) {
  border-color: #999;
}

:deep(.p-inputtext:enabled:focus) {
  border-color: #1d6da8;
}
.p-floatlabel label {
  font-family: 'PT_Sans Bold', sans-serif;
  font-size: 14px;
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:focus) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label {
  color: black;
  font-size: 14px;
  font-family: 'PT_Sans Bold', sans-serif;
}

/* Изменение цвета лейбла в обычном и сфокусированном состоянии */
/*.custom-float-label :is(label) {
  color: #667085;
  font-weight: 500;
}*/

/* Когда поле активно или в фокусе */
/*.custom-float-label :is(.p-inputtext:focus, .p-inputtext-filled) ~ label {
  color: #4f46e5;
  font-size: 0.85rem;
}*/
</style>
