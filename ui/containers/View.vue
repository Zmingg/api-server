<template>
  <div>
    Editor
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
        dom_id: '#ui',
        url: this.url
      })
    },

  }
}
</script>