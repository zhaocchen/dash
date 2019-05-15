<template>
   <div>
      <ul>
        <li><router-link to="/home">home</router-link></li>
        <li><router-link to="/about">about</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>

const routes = {
  '/home': {
    template: '<h2>Home</h2>'
  },
  '/about': {
    template: '<h2>About</h2>'
  }
}

export default {
  components: {
    'router-view': RouterView,
    'router-link': RouterLink
  },
  mounted: {
    beforeCreate() {
      this.$routes = routes;
    },
  },
}
</script>

