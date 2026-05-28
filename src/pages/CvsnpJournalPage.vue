<template>
  <div
    style="
      font-family: 'PT_Sans Bold', sans-serif;
      font-size: 24px;
      text-transform: uppercase;
      margin: 0px 0px 16px;
    "
  >
    Журнал содержащихся
  </div>
  <ExternalTable
    :columns="columns"
    url="case/find"
    :btns="btns"
    @action-btn="onActionBtn"
    >
  </ExternalTable>
</template>
<script setup lang="ts">
import ExternalTable from '@/components/ExternalTable.vue';
const columns = [
  // { name: 'cvsnpCaseId', label: 'cvsnpCaseId', field: row => row.cvsnpCaseId },
  { name: "caseNumber", label: "Номер дела", field: "caseNumber", sortable: true },
  { name: "arrivalDate", label: "Дата и время поступления в ЦВСНП", field: "arrivalDate", sortable: true },
  { name: "citizenFio", label: "ФИО доставленного", field: "citizenFio", sortable: true },
  { name: "dateOfBirth", label: "Дата рождения", field: "dateOfBirth", sortable: true },
  { name: "juvCategoryTitle", label: "Категория несовершеннолетнего", field: "juvCategoryTitle", sortable: true },
  { name: "cvsnpName", label: "ЦВСНП", field: "cvsnpName", sortable: true },
  { name: "departmentName", label: "Тер. орган", field: "departmentName", sortable: true },
  { name: "deliveredEmployeeFio", label: "Кем доставлен", field: "deliveredEmployeeFio", sortable: true },
  { name: "placementCauseTitle", label: "Основания помещения в ЦВСНП", field: "placementCauseTitle", sortable: true },
  { name: "arrivalSourceTitle", label: "Откуда прибыл в ЦВСНП", field: "arrivalSourceTitle", sortable: true },
  { name: "composerEmployeeFio", label: "Дело составил", field: "composerEmployeeFio", sortable: true },
  { name: "departureDate", label: "Дата убытия из ЦВСНП", field: "departureDate", sortable: true },
  { name: "departureReasonTitle", label: "Причина убытия", field: "departureReasonTitle", sortable: true }
];

const btns = ['search', "create", "edit", "upload"]
const onActionBtn = (type) => {
  console.log('type', type)
  if (type === "search") {

  }
  if (type === "create") {

  }
  if (type === "edit") {

  }
  if (type === "upload") {

  }
}
</script>

<style scoped>

</style>
