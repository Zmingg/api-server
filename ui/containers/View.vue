<template>
  <div>
    <v-btn color="primary" @click="redirectEditor">
      <v-icon left dark small>build</v-icon>Edit
    </v-btn>
    <div id="ui">swagger-ui</div>
  </div>
</template>
<script>
import SwaggerUI from 'swagger-ui';
export default {
  data: function () {
    return {
      items: [1, 2]
    }
  },

  computed: {
    url: function () {
      const {name} = this.$router.history.current.params;
      return `../schemas/${name}.yaml`
    }
  },

  mounted: function () {
    this.initialize();
  },

  methods: {
    /**
     * Get repository.
     *
     * @returns {Promise<void>}
     */
    initialize: function () {
      SwaggerUI({
        url: this.url,
        dom_id: '#ui'
      })
    },

    redirectEditor: function () {
      const {name} = this.$router.history.current.params;
      this.$router.history.push({
        name: 'editor',
        params: {
          name: name
        }
      });
    }

  }
}
</script>
<style>
.swagger-ui .info,
.swagger-ui .error {
  background: inherit !important;
}
</style>