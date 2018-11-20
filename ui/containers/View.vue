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
  props: ['url'],

  data: function () {
    return {
      items: [1, 2]
    }
  },

  created: function () {
    console.log('created');
  },

  mounted: function () {
    console.log(this.$router.history.current.params)
    this.initialize();
  },

  methods: {
    /**
     * Get repository.
     *
     * @returns {Promise<void>}
     */
    initialize: function () {
      console.log(this.$router.history.current.params)
      SwaggerUI({
        dom_id: '#ui',
        url: this.$router.history.current.params.url
      })
    },

  }
}
</script>