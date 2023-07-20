import {Form, Field, defineRule, configure} from 'vee-validate'
import {required, email, confirmed, min_value, max_value} from '@vee-validate/rules';
import {localize, setLocale} from '@vee-validate/i18n'
import pt_BR from '@vee-validate/i18n/dist/locale/pt_BR.json';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VForm', Form)
  nuxtApp.vueApp.component('VField', Field)

  defineRule('required', required)
  defineRule('email', email)
  defineRule('confirmed', confirmed)
  defineRule('min_value', min_value)
  defineRule('max_value', max_value)

  configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
    generateMessage: localize({pt_BR}),
  });

  setLocale('pt_BR')
});
