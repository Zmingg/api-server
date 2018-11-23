<template>
  <div>
    <p>Api Server Root</p>

    <template>
      <v-treeview :items="items"
                  hoverable
                  :active.sync="active"
                  activatable
                  open-on-click
                  item-key="name">
      </v-treeview>
    </template>

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
      items: [],
      active: [],
    }
  },

  mounted: function () {
    this.getRepo();
  },

  computed: {
    selected () {
      console.log(this.active)

      if (this.active.length > 0) {
        return this.active[0];
      }
      return undefined;
    }
  },

  watch: {
    selected: 'previewApi'
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

    previewApi: function (name) {
      this.$router.history.push({
        name: 'view',
        params: {
          name: name,
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