<template>
  <div id="login" class="login">
    <div class="login-container">
      <div>
        <img src="@/assets/images/logo-stickearn.png" alt="logo-stickearn">
      </div>
      {{ store }}
      <router-link to="/dashboard">dashboard</router-link>
    </div>
  </div>
</template>
<script>
import logo from '../../assets/images/logo-stickearn.png'
export default {
  name: 'Login',
  data() {
    return {
      logo
    }
  },
  computed: {
    store() {
      return window?.localStorage?.test ?? ''
    }
  }
}     
</script>

<style lang="scss">
@import './styles.scss';
</style>