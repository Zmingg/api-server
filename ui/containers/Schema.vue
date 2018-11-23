<template>
  <div>
    <p class="title">Api Server Root</p>

    <template>
      <v-treeview :items="items"
                  hoverable
                  :active.sync="active"
                  activatable
                  open-on-click
                  item-key="name">
        <template slot="prepend" slot-scope="{ item, open, leaf }">
          <v-icon>description</v-icon>
        </template>
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
p.title {
  margin: 10px !important;
  padding-bottom: 10px;
  border-bottom: solid 1px #000000;
}
</style>