<template>
  <LoginForm />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoginForm from "./components/LoginForm.vue";

@Options({
  components: { LoginForm },
})
export default class App extends Vue {}
</script>

<style>
body {
  width: 100%;
  height: 100%;
  background-image: url("https://ilearn.fcu.edu.tw/pluginfile.php/1/theme_moove/loginbgimg/1711685263/%E6%8B%9B%E7%94%9F-%E4%BA%8C%E9%9A%8E%E5%A4%A7%E5%9C%96-%E6%9C%AC%E5%9C%8B%E7%94%9F_%E7%B4%85-scaled%20%281%29%20%281%29.jpg");
  background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
