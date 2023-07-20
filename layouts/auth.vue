<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col h-screen min-h-screen bg-[url('@/background.png')] bg-no-repeat bg-fixed bg-top bg-cover">
    <div class="h-full w-full flex gap-8 flex-col lg:flex-row lg:justify-around items-center px-4 py-8">
      <div class="h-24 lg:h-72">
        <NuxtImg src="/slogan.png" class="h-full object-cover" />
      </div>
      <div class="bg-base-200 p-6 rounded shadow w-full sm:w-96">
        <slot />
      </div>
    </div>
    <div class="h-auto lg:h-20 flex flex-col gap-2 p-4 items-center justify-center text-base-200 relative">
      <span>Todos os direitos reservados - Empresa</span>
      <div class="lg:absolute bottom-2 right-2 h-12">
        <NuxtImg src="/footer-slogan.png" class="h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
