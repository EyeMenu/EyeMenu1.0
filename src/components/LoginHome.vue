<template>
  <div class="LoginHome">
    <div class="container">
      <div class="row">
        <b-nav fill tabs class="col-8 Tabs offset-md-2">
          <b-nav-item :to="{ path: 'Client' }" v-bind:active="tab === 1" v-on:click="tab = 1">Client</b-nav-item>
          <b-nav-item :to="{ path: '' }" v-bind:active="tab === 2" v-on:click="tab = 2">Waiter</b-nav-item>
        </b-nav>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      tab: 1
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
  .LoginHome .container .row .Tabs {
    padding-right:0px;
  }
</style>
