<template>
  <div style="display: flex; justify-content: space-evenly; width: 50%; margin: auto">
    <router-link to="/" @click="showLogOut">Home</router-link>
    <router-link to="/register" @click="showLogOut">Registrarse</router-link>
    <span v-if=(noLogin)><router-link to="/login" @click="logOut">Logout</router-link></span>
    <span v-else><router-link to="/login" @click="showLogOut">Login</router-link></span>
  </div>
    <router-view/>
</template>

<script>
import { auth } from "@/auth";
import { signOut } from "firebase/auth";

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      noLogin : false
    }
  },
  methods: {
    showLogOut(){
      if(auth.currentUser){
        this.noLogin=true
      } else {
        this.noLogin=false
      }
    },
    async logOut(){
      await signOut(auth)
      this.showLogOut()
      this.$router.push("/login")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
