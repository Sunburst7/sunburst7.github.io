import { defineClientAppEnhance } from '@vuepress/client'
import sButton from './components/button/button.vue'
import sRadio from './components/radio/radio.vue'
import sNumberInput from './components/number-input/number-input.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('s-button',sButton)
  app.component('s-radio', sRadio)
  app.component('s-number-input', sNumberInput)
})