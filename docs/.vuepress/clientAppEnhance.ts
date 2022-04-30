import { defineClientAppEnhance } from '@vuepress/client'
import sButton from './components/button/button.vue'
import sCard from './components/card/card.vue'
import sCheckbox from './components/checkbox/checkbox.vue'
import sCheckboxButton from './components/checkbox/checkbox-button.vue'
import sCheckboxGroup from './components/checkbox/checkbox-group.vue'
import sDatetime from './components/datetime/datetime.vue'
import sDialog from './components/dialog/dialog.vue'
import sIcon from './components/icon/icon.vue'
import sInput from './components/input/input.vue'

import sSelect from './components/select/select.vue'
import sLoginReg from './components/scene/login-reg/s-login-reg.vue'

import sRadio from './components/radio/radio.vue'
import sNumberInput from './components/number-input/number-input.vue'
import sLink from './components/link/link.vue'

import './styles/global.css'
export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('s-button',sButton)
  app.component('s-card',sCard)
  app.component('s-datetime',sDatetime)
  app.component('s-dialog',sDialog)
  app.component('s-input',sInput)
  app.component('s-icon',sIcon)
  app.component('s-select',sSelect)

  app.component('s-login-reg',sLoginReg)
  app.component('s-radio', sRadio)
  app.component('s-number-input', sNumberInput)
  app.component('s-link',sLink)
})