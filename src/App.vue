<template>
  <RouterView />
  <Toast />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Toast from 'primevue/toast';

interface SuperType {
  address: string;
}

interface SubType {
  name: string;
  age: string;
  address: string;
}

const subTypeVar: SubType = {
  name: '',
  age: '',
  address: '',
};

const superTypeVar: SuperType = subTypeVar;

console.log(superTypeVar);
</script>

<style scoped></style>
