<template>
  <div
    style="
      font-family: 'PT_Sans Bold', sans-serif;
      font-size: 24px;
      text-transform: uppercase;
      margin: 0px 0px 16px;
    "
  >
    Учетно-статистическое дело
  </div>
  <Tabs value="0">
    <TabList class="custom-tablist">
      <Tab value="0">Поступление в ЦВСНП</Tab>
      <Tab value="1">Анкетные данные</Tab>
      <Tab value="2">Сведения о законных представителях</Tab>
    </TabList>
    <Form v-slot="$form" @submit="onFormSubmit" :resolver="resolver">
      <TabPanels>
        <TabPanel value="0">
          <FirstTab :formSlot="$form" />
        </TabPanel>
        <TabPanel value="1">
          <SecondTab />
        </TabPanel>
        <TabPanel value="2">
          <ThirdTab />
        </TabPanel>
      </TabPanels>
      <div style="position: fixed; bottom: 40px; display: flex; align-items: center; gap: 10px">
        <Button type="submit" severity="info" label="Сохранить" />
        <Button severity="secondary" label="Закрыть без сохранения" outlined />
      </div>
    </Form>
  </Tabs>
</template>
<script setup lang="ts">
import Tabs from 'primevue/tabs';
import Tab from 'primevue/tab';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import TabList from 'primevue/tablist';
import { Form } from '@primevue/forms';
import { useToast } from 'primevue/usetoast';
import FirstTab from '@/components/FirstTab.vue';
import SecondTab from '@/components/SecondTab.vue';
import ThirdTab from '@/components/ThirdTab.vue';
import { ref } from 'vue';
import { type FormSubmitEvent, type FormResolverOptions } from '@primevue/forms';

const toast = useToast();

// type DataType = {
//   date: string;
//   name: string;
//   surname: string;
//   middlename: string;
//   caseNumber: string;
//   gender: {
//     code: string;
//     name: string;
//   };
// };

const resolver = ref(({ values }: FormResolverOptions) => {
  // console.log('values', values);
  const errors = <
    {
      name: { message: string }[];
      surname: { message: string }[];
      caseNumber: { message: string }[];
    }
  >{
    name: [{ message: '' }],
    surname: [{ message: '' }],
    caseNumber: [{ message: '' }],
  };

  if (!values.name) {
    errors.name = [{ message: 'required' }];
  }

  if (!values.caseNumber) {
    errors.caseNumber = [{ message: 'required' }];
  }

  return {
    values, // (Optional) Used to pass current form values to submit event.
    errors,
  };
});

const onFormSubmit = ({ valid, values }: FormSubmitEvent) => {
  console.log('values', values);
  console.log('valid', valid);
  if (!valid) {
    if (!values.name) {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Поле не должно быть пустым',
        life: 3000,
      });
    } else if (!values.caseNumber) {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Поле не должно быть пустым',
        life: 3000,
      });
    }
  }
};
</script>

<style scoped>
.custom-tablist {
  background: #d9e2ec;
  border-radius: 3px;
}

:deep(.p-tabpanels) {
  background: #f6f9fb;
  /*margin-top: 32px;*/
  /*padding: 16px;*/
  padding: 16px;
}

:deep(.p-tablist-tab-list) {
  border: none;
}

:deep(.p-tab) {
  border: none;
  color: black;
  font-family: 'PT_Sans Bold', sans-serif;
  font-size: 14px;
  padding: 9px 16px;
}

:deep(.p-tab-active) {
  border: initial;
  color: #3f83b5;
}
</style>
