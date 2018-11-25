<template>
  <div>
    <v-btn color="primary" @click="redirectEditor">
      <v-icon left dark small>edit</v-icon>Edit
    </v-btn>
    <v-btn color="error" @click="codeGenerate">
      <v-icon left dark small>build</v-icon>Build Api Codes
    </v-btn>
    <div id="ui">swagger-ui</div>
  </div>
</template>
<script>
import SwaggerUI from 'swagger-ui';
import Case from 'case';
export default {
  data: function () {
    return {
      items: [1, 2]
    }
  },

  computed: {
    url: function () {
      return `../schemas/${this.name}.yaml`
    }
  },

  created: function () {
    this.name = this.$router.history.current.params.name || '';
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
      this.$router.history.push({
        name: 'editor',
        params: {
          name: this.name
        }
      });
    },

    codeGenerate: function () {
      const uri = `/schemas/${this.name}.yaml`;
      const className = Case.pascal(this.name);
      console.log(uri, className);
      const filePath = `/swagger/code-gen?uri=${uri}&className=${className}`;
      window.open(filePath)
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