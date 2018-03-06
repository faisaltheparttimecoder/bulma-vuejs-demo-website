<template>
  <div>
    <section class="section">
      <div class="columns">
        <div class="column is-2">
          <app-menu v-bind:menuActive="menuItem"> </app-menu>
        </div>
        <div class="container">
          <app-dashboard v-if="menuItem === 'main'"> </app-dashboard>
          <app-customer v-else-if="menuItem === 'customer'"> </app-customer>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import menu from './Menu';
  import dashboardHome from './DashboardMain'
  import customer from './DashboardCustomers'

  export default {
    components: {
      'app-menu': menu,
      'app-dashboard': dashboardHome,
      'app-customer': customer
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
