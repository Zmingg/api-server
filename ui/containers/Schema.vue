<template>
  <div>
    <p>Api Server</p>

    <v-treeview :items="items">

    </v-treeview>

  </div>
</template>
<script>
module.exports = {
  data: function () {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Last Update', value: 'lastUpdate' },
      ],
      items: []
    }
  },

  mounted: function () {
    this.getRepo();
  },

  methods: {
    /**
     * Get repository.
     * @returns {Promise<void>}
     */
    getRepo: async function () {
      const res = await fetch('/api/list');
      this.items = await res.json();
    },

    previewApi: function (item) {
      this.$router.history.push({
        name: 'view',
        params: {
          name: item.name,
        }
      });
    }

  }

}
</script>
<style scoped>
  .yaml-ul {

  }
  .yaml-li {
    list-style-type: none;
    cursor: pointer;
  }
</style>