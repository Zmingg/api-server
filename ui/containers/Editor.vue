<template>
  <div id="swagger-editor">
    eee
  </div>
</template>
<script>
import SwaggerEditorBundle from '../swagger-editor/swagger-editor-bundle';
import SwaggerEditorStandalone from '../swagger-editor/swagger-editor-standalone-preset';
import '../swagger-editor/swagger-editor.css';
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
      SwaggerEditorBundle({
        url: this.url,
        plugins: [
          SwaggerEditorStandalone
        ],
        layout: 'SwaggerEditorStandalone',
        swagger2GeneratorUrl: "https://generator.swagger.io/api/swagger.json",
        oas3GeneratorUrl: "http://generator3.swagger.io/api/generator.json"
      })
    },

  }
}
</script>

<style>

</style>