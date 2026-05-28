<template>
  <DataTable
    :value="rows"
    tableStyle="min-width: 50rem"
    paginator
    sortMode="multiple"
    :rowsPerPageOptions="[1, 20, 50, 100]"
    :rows = "1"
    resizableColumns
    showGridlines
  >
    <template #header>
      <div class="flex justify-end">
        <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="label" @update:modelValue="onToggle"
                     placeholder="Колонки" />
      </div>
    </template>
    <template #paginatorcontainer="{ first, last, page, pageCount, firstPageCallback, prevPageCallback, nextPageCallback, lastPageCallback, totalRecords }">
      <Button icon="pi pi-angle-double-left" text @click="prevPageCallback" :disabled="page === 0" />
      <Button icon="pi pi-angle-left" text @click="prevPageCallback" :disabled="page === 0" />
      <Divider layout="vertical" />
      <span class="block sm:hidden">Страница {{ page + 1 }} из {{ pageCount }}</span>
      <Divider layout="vertical" />
      <Button icon="pi pi-angle-right" rounded text @click="nextPageCallback" :disabled="page === pageCount - 1" />
      <Button icon="pi pi-angle-double-right" rounded text @click="nextPageCallback" :disabled="page === pageCount - 1" />
      <Divider layout="vertical" />
      <Button icon="pi pi-spinner" rounded text @click="nextPageCallback"/>
      <Divider layout="vertical" />
      <span class="hidden sm:block">с {{ first }} по {{ last }}, из {{ totalRecords }}</span>
    </template>
    <Column
      v-for="(column) in columns"
      :key="column.field"
      :field="column.field"
      :header="column.label"
      :sortable="column.sortable"
    />
  </DataTable>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { casesAgent } from "@/agents/eal/Cases/cases.agent";
import {DataTable, MultiSelect, Column, Divider} from 'primevue';
const props = defineProps({
  columns: {
    default: []
  },
  url: {
    type: String
  },
  additionalUrl: {
    type: String
  },
  btns: {
    default: []
  }
});
const rows = ref([]);
const filter = ref({});
const terFilter = ref('CURRENT')
const pagination = ref({
  page: 1,
  rowsPerPage: 5,
  rowsNumber: 0,
  sortBy: null,
  descending: null
});
const totalRecordsCount = ref(100);
const selectedColumns = ref(props.columns);
// console.log('++++++++++=', props.columns)

const updateData = async () => {
  const { total } = await casesAgent.getCasesCount({
      url: props.url,
      additionalUrl: props.additionalUrl,
      territorialFilter: terFilter.value
    },
    filter.value
  );
  const { data } = await casesAgent.getCases({
      url: props.url,
      additionalUrl: props.additionalUrl,
      territorialFilter: terFilter.value,
      filter: filter.value
    },
    pagination.value,
    filter.value
  );

  pagination.value.rowsNumber = total;
  rows.value = data;
}

onMounted(() => {
  updateData()
});

const onToggle = () => {

}
</script>

<style scoped>

</style>
