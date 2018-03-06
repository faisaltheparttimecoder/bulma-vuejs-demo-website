<template>
  <div>
    <section class="section">
      <div class="columns">
        <div class="column is-2">
          <app-menu v-bind:menuActive="menuItem"> </app-menu>
        </div>
        <div class="container">
          <app-dashboard v-if="menuItem === 'main'"> </app-dashboard>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import menu from './Menu';
  import dashboardHome from './DashboardMain'

  export default {
    components: {
      'app-menu': menu,
      'app-dashboard': dashboardHome
    },
    data: function() {
      return {
        menuItem: this.$route.params.menu
      }
    }
  }

</script>

<style>

</style>
