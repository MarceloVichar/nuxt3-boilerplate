<template>
  <div>
    <div class="text-center text-3xl font-light">
      LOGIN
    </div>
    <VForm v-slot="{ meta, isSubmitting }" @submit="onSubmit">
      <VField
        v-slot="{ field, errorMessage }"
        as="div"
        name="email"
        class="flex flex-col"
        rules="required"
      >
        <label>Email</label>
        <input
          type="email"
          v-bind="field"
          class="input input-bordered"
          :class="{'border-error': !!errorMessage}"
        >
        <span class="fieldError">{{ errorMessage }}</span>
      </VField>
      <VField
        v-slot="{ field, errorMessage }"
        as="div"
        name="password"
        class="flex flex-col"
        rules="required"
      >
        <label>Senha</label>
        <input
          v-bind="field"
          type="password"
          class="input input-bordered"
          :class="{'border-error': !!errorMessage}"
        >
        <span class="fieldError">{{ errorMessage }}</span>
      </VField>
      <div class="text-center mt-2">
        <SubmitButton
          :loading="isSubmitting"
          :disabled="!meta.valid || !meta.touched"
          type="submit"
          class="btn btn-success"
        >
          Entrar
        </SubmitButton>
      </div>
    </VForm>
  </div>
</template>

<script setup>
import SubmitButton from '~/components/shared/SubmitButton.vue';
import {useAuth} from '~/store/auth';
import {navigateTo} from '#app';

const auth = useAuth()
async function onSubmit(value, actions) {
  await loginUser(value, actions)
}

async function loginUser (value, actions) {
  await auth.login(value)
    .then(() => {
      useNotify('success', 'Login efetuado com sucesso')
      navigateTo('/')
    })
    .catch(err => {
      useNotify('error', 'Não foi possível fazer login')
      console.dir(err)
      if (err?.response?.status === 422 && err.response?.data?.errors) {
        actions.setErrors(err.response.data.errors)
      }
    })
}
</script>
