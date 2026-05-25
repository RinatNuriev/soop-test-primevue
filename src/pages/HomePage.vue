<template>
  <!--  <div>-->
  <!--    HomePage-->
  <!--  </div>-->
  <div class="container">
    <div class="container_buttons">
      <Button type="button" class="button">
        Административная практика
      </Button>
      <Button type="button" class="button">
        Административный надзор
      </Button>
      <Button type="button" class="button"> Инспектор ПДН </Button>
      <Button type="button" class="button"> Участковый </Button>
      <Button type="button" class="button"> Изолятор </Button>
      <Button type="button" class="button"> Спецприемник </Button>
      <Button type="button" @click="router.push({ name: 'MainLayout' })" class="button"> ЦВСНП </Button>
      <Button type="button" class="button">
        Администрирование
      </Button>
      <Button type="button" class="button">
        Иные подразделения
      </Button>
      <Button type="button" class="button">
        Массовые мероприятия
      </Button>
      <Button type="button" class="button">
        Проверка по учетам
      </Button>
      <Button type="button" class="button"> Зритель - Fan ID </Button>
    </div>
    <Divider />
    <div style="display: flex; align-items: center; gap: 16px">
      <Button
        style="
          background: linear-gradient(#2578b7, #015b9e);
          border: none;
          width: 32px;
          height: 32px;
        "
        icon="pi pi-filter-fill"
      />
      <p style="font-size: 18px; font-weight: bold">Новостная лента</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Divider from 'primevue/divider';

const router = useRouter();
</script>
<style scoped>
.container {
  margin: 5px;
}

.container_buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.button {
  height: 32px;
  background: linear-gradient(#2578b7, #015b9e);
  border: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.03rem;
}

.p-button:not(:disabled):hover {
  border: none;
  background: linear-gradient(#4792c9, #115e97);
}
</style>
