<template>
  <div id="app">
    <v-navigation-drawer
      permanent
      fixed
      dark
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Api Server</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider/>

        <v-list-tile
          v-for="item in menus"
          :key="item.title"
          @click="to(item.path)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <router-view class="view"></router-view>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      menus: [
        {title: 'Schema', path: '/schema', icon: 'dashboard'}
      ]
    }
  },

  methods: {
    to: function (path) {
      this.$router.history.push(path);
    }
  }
}
</script>
<style scoped>
#app {
  width: 100%;
  height: 100%;
  font-weight: bold;
}
.view {
  margin-left: 300px;
  padding: 20px;
}
</style>