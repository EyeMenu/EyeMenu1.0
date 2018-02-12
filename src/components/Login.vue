<template>
  <div class="Login">
    <div class="container">
      <div class="row">
        <div class="col-8 Waiter offset-md-2 rounded-bottom input-top">
          <div class="row">
            <div class="input-group input-group-sm mb-3 col">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Username</span>
              </div>
                <select v-model="ServerName" class="custom-select" id="inputGroupSelect01">
                  <option selected disabled>Choose...</option>
                  <option v-for="servers in Servers" :key="servers.ServerID">{{ servers.ServerName }}</option>
                </select>
            </div>
            <div class="input-group input-group-sm mb-3 col">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Password</span>
              </div>
              <input type="text" v-model="Password" class="form-control">
            </div>
          </div>
          <button v-on:click="Login" class="btn btn-success">Log-In</button>
        </div>
      <h3>{{ posts }}</h3>
      </div>
    </div>
    <b-modal ref="myModalRef" hide-footer :title="Title">
      <div class="d-block text-center">
        <h3 v-if="state === true">Hello From My Modal!</h3>
        <h3 v-else>Please try again</h3>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      Password: '',
      posts: '',
      ServerName: '',
      Servers: [],
      Check: [],
      Title: '',
      state: ''
    }
  },
  methods: {
    showModal () {
      this.$refs.myModalRef.show()
    },
    Login: function () {
      axios.post('http://localhost:4001/api/v1/Login', {
        ServerName: this.ServerName,
        Password: this.Password
      })
        .then(response => {
          this.state = response.data['state']
          if (this.state === true) {
            this.Title = 'Welcome to EyeMenu'
          } else {
            this.Title = 'EyeMenu'
          }
          this.showModal()
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  created () {
    axios.get(`http://localhost:4001/api/v1/Servers`)
      .then(response => {
        this.Servers = response.data['response']
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style lang="scss" scoped>
  .Login .container .row .Waiter {
    padding-top:20px;
    padding-bottom:20px;
    background-color:#4c4c4c;
  }
</style>
