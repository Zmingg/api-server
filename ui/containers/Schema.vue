<template>
  <div>
    <p>Api Server</p>
    <ul class="yaml-ul">
      <li class="yaml-li" v-for="item in items" v-on:click="previewApi(item)">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
module.exports = {
  data: function () {
    return {
      items: [1, 2]
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