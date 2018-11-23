<template>
  <div id="swagger-editor">
    eee
  </div>
</template>
<script>
import SwaggerEditorBundle from '../swagger-editor/swagger-editor-bundle';
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
        url: this.url
      })
    },

  }
}
</script>

<style>
#swagger-editor,
.swagger-container,
#editor-wrapper,
#swagger-editor #editor-wrapper #ace-editor {
  padding: 0 !important;
  height: 100% !important;
}
#swagger-editor .SplitPane.vertical {
  height: 100% !important;
}
</style>