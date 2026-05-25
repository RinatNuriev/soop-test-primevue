<template>
  <div class="layout">
    <!-- Sidebar -->
    <aside class="sidebar" :class="{ collapsed: sidebarCollapsed }">
      <Button
        class="sidebar-button"
        :icon="`${!sidebarCollapsed ? 'pi pi-angle-left' : 'pi pi-angle-right'}`"
        text
        @click="sidebarCollapsed = !sidebarCollapsed"
        :style="{
          left: `${!sidebarCollapsed ? '270px' : '0px'}`,
        }"
        severity="secondary"
      />

      <Menu :model="items" style="min-width: 270px">
        <template #itemicon="{ item }">
          <!-- Если в объекте меню передан компонент, рендерим его динамически -->
          <component
            v-if="item.customIcon"
            :is="item.customIcon"
            class="p-menuitem-icon"
          />
          <!-- Иначе выводим стандартную иконку PrimeIcons, если она есть -->
          <span
            v-else-if="item.icon"
            :class="item.icon"
            class="p-menuitem-icon"
          />
        </template>
      </Menu>

      <!--      <PanelMenu :model="panelMenuItems" class="border-0" />-->

      <!--      <Menu :model="items2" class="border-0" />-->
    </aside>

    <!-- Content -->
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import Menu from 'primevue/menu';
// import PanelMenu from 'primevue/panelmenu';
import { useRouter } from 'vue-router';
import LandmarkIcon from '@/icons/LandmarkIcon.vue';
import CardIcon from '@/icons/CardIcon.vue';
import LockIcon from '@/icons/LockIcon.vue';
import ChartareaIcon from '@/icons/ChartareaIcon.vue';
import BellIcon from '@/icons/BellIcon.vue';

const router = useRouter();

const sidebarCollapsed = ref(false);

const items = shallowRef([
  {
    label: 'Учетно-статистическое дело',
    customIcon: CardIcon,
    command: () => router.push({ name: 'case' }),
  },
  {
    label: 'Журнал содержащихся',
    customIcon: LockIcon,
  },
  {
    label: 'ЦВСНП',
    customIcon: LandmarkIcon,
  },
  {
    label: 'Отчеты',
    customIcon: ChartareaIcon,
  },
  {
    label: 'Аналитика',
    customIcon: BellIcon,
  },
]);

// const items2 = ref([
//   {
//     label: 'Обращения и прием граждан',
//     icon: 'pi pi-pencil',
//   },
//   {
//     label: 'Поиск лица',
//     icon: 'pi pi-search',
//   },
//   {
//     label: 'Аналитика',
//     icon: 'pi pi-chart-bar',
//   },
// ]);
//
// const panelMenuItems = ref([
//   {
//     label: 'Учеты',
//     icon: 'pi pi-user',
//     items: [
//       {
//         label: 'Проф. учет',
//         icon: 'pi pi-user',
//       },
//       {
//         label: 'Контроль за лицами',
//         icon: 'pi pi-history',
//       },
//       {
//         label: 'Списочный учет',
//         icon: 'pi pi-refresh',
//       },
//     ],
//   },
// ]);
</script>

<style scoped>
.layout {
  display: flex;
  height: 100%;
  overflow: hidden;
}

.sidebar {
  width: 280px;
  transition: width 0.2s ease;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  overflow-y: auto;
  background: white;
}

.sidebar.collapsed {
  width: 0px;
}

.sidebar-button {
  position: fixed;
  top: 50vh;
  transition: all 0.2s ease;
}

.content {
  flex: 1;
  overflow: auto;
  padding: 1rem;
}

:deep(.p-menu) {
  border: none;
  font-family: 'PT_Sans Bold', sans-serif;
}

:deep(.p-panelmenu-panel) {
  border-style: initial;
}

:deep(.p-menu-item.p-focus .p-menu-item-content) {
  color: #1976d2;
}

.active {
  color: red;
}
</style>
