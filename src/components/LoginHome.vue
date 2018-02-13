<template>
  <div class="LoginHome">
    <div class="container">
      <div class="row">
        <b-nav fill tabs class="col-8 Tabs offset-md-2">
          <b-nav-item :to="{ path: 'Client' }">Client</b-nav-item>
          <b-nav-item :to="{ path: 'Waiter' }">Waiter</b-nav-item>
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
