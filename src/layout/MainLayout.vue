<template>
  <div class="app-layout">
    <Menubar class="layout_header">
      <template #start>
        <div class="layout_right">
          <img class="cifropol" src="../../public/cifropol.png" alt="" />
          <img class="logo" src="../../public/logo.png" alt="" @click="router.push('/')" />

          <div class="layout_right-title">
            <p style="font-size: 14px">МВД России</p>
            <p style="font-size: 11px">
              СЕРВИС ОБЕСПЕЧЕНИЯ ОХРАНЫ ОБЩЕСТВЕННОГО ПОРЯДКА
            </p>
          </div>
        </div>
      </template>

      <template #end>
        <div class="layout_actions">
          <i class="pi pi-bell" style="font-size: 1.8rem; color: white"></i>

          <Divider layout="vertical" />

          <div class="user_block">
            <Button icon="pi pi-user" rounded severity="secondary" />
            <p class="user_name">Многозадачный К. В.</p>
          </div>

          <Divider layout="vertical" />

          <Button icon="pi pi-question-circle" rounded severity="secondary" />

          <Divider layout="vertical" />

          <Button icon="pi pi-sign-out" rounded severity="secondary" />
        </div>
      </template>
    </Menubar>

    <main class="content">
      <router-view />
    </main>

    <footer class="layout_footer">
      <p>© Министерство внутренних дел Российской Федерации, 2025 г. (v. 1.2.11)</p>
      <p>Круглосуточная служба поддержки:</p>
      <p>8 (800) 2000-462 (звонок бесплатный), 8 (495) 031-67-17</p>
      <p>helpdesk@mvd.ru</p>
      <p>Отправить обращение</p>
    </footer>
  </div>
</template>
<script setup lang="ts">
import Menubar from 'primevue/menubar';
import Divider from 'primevue/divider';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

/* HEADER */

.layout_header {
  height: 60px;
  min-height: 60px;

  background: var(--main-bg-color);
  background-image: url('../assets/gerb_bg.png');
  background-repeat: no-repeat;
  background-position: left 30px top 0;
  background-size: 286px auto;

  margin: 5px 5px 0 5px;
  border: initial;
}

.layout_right {
  display: flex;
  align-items: center;
  margin-left: 12px;
}

.cifropol {
  width: 122px;
  height: 27px;
}

.logo {
  width: 62px;
  height: 38px;
  cursor: pointer;
}

.layout_right-title {
  color: white;
  margin-left: 3px;
}

.layout_actions {
  display: flex;
  align-items: center;
  gap: 5px;
}

.user_block {
  display: flex;
  gap: 5px;
  align-items: center;
}

.user_name {
  color: white;
  font-size: 12px;
}

/* CONTENT */

.content {
  flex: 1;
  min-height: 0;

  overflow: auto;

  background: #f6f9fb;

  margin: 0 5px;
}

/* FOOTER */

.layout_footer {
  min-height: 32px;

  background: var(--main-bg-color);

  display: flex;
  align-items: center;
  gap: 15px;

  padding: 0 10px;

  color: white;
  font-size: 14px;

  overflow-x: auto;
  white-space: nowrap;
}
</style>
