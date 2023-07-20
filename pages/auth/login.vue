<template>
  <div>
    <LoginComponent />
  </div>
</template>

<script setup lang="ts">
import LoginComponent from '~/components/app/auth/LoginComponent.vue';

definePageMeta({
  layout: 'auth',
})
</script>
