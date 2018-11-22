<template>
  <div>
    <button v-on:click="redirectEditor">
      Editor
    </button>
    <div id="ui">
      eee
    </div>
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