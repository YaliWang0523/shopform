<template lang="jade">
nav(class="navbar navbar-expand-lg navbar-toggleable-sm navbar-light bg-light ")
  div(class="row justify-content-between w-100")
    a(class="navbar-brand pl-3", href="/", title="DBS 維修單系統")
      //- img(src="static/images/img_navigation_logo.png", v-rjs="3" , width="80" height="28" alt="PULO Logo")
    div(class="text-right")
      button(class="navbar-toggler collapsed", type="button", data-toggle="collapse", data-target="#navbarResponsive", aria-controls="navbarResponsive", aria-expanded="false", aria-label="Toggle navigation")
        span(class="navbar-toggler-icon")    
      div(id="navbarResponsive" class="navbar-collapse collapse mw-100")
        ul(class="navbar-nav mr-auto")
          li(class="nav-item")
            router-link(to="/MyBillList" class="nav-link text-right" title="開單") 開單
          li(v-if="!hasToken", class="nav-item")
            a(v-on:click="login", class="nav-link text-right", id="login", href="#") 登入
          li(v-if="hasToken" class="nav-item")
            a(v-on:click="logout",class="nav-link text-right", id="create", href="#") 登出
</template>

<script>
import $ from 'jquery'
import { mapActions, mapGetters } from 'vuex'
import {CommonToken} from '@/common/CommonToken.js'

export default {
  name: 'Navigation',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      hasToken: (['getHasToken'])
    })
  },
  methods: {
    login: function () {
      $('#LoginModal').modal('show')
    },
    logout: function () {
      let commonToken = new CommonToken()
      commonToken.Clear()
      this.toogleToken('')
      // modal回到輸入電話號碼頁面
    },
    ...mapActions([
      'toogleToken'
    ])
  }
}
</script>


