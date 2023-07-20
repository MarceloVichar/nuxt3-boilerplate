<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col min-h-screen bg-[url('@/background.png')] bg-no-repeat bg-fixed bg-cover">
    <div class="navbar bg-primary">
      <div class="flex-1">
        <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
          <div class="h-8 lg:h-12">
            logo
          </div>
        </NuxtLink>
      </div>
      <div class="flex-none gap-1">
        <button class="btn btn-sm btn-primary">
          Perfil
        </button>
        <button class="btn btn-sm">
          Sair
        </button>
      </div>
    </div>
    <div class="flex-grow lg:p-6 w-full h-full">
      <slot />
    </div>
    <div id="footer" class="h-auto lg:h-20 flex flex-col gap-2 p-4 items-center justify-center text-base-200 relative">
      <span>Todos os direitos reservados - Empresa</span>
    </div>
  </div>
</template>

<style scoped>

</style>
