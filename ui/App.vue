<template>
  <div id="app">
    <h1>Api Server</h1>
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/schema">/schema</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>