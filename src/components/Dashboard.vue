<template>
  <div>
    <app-dashboard> </app-dashboard>
  </div>
</template>

<script>
  import dashboardHome from './DashboardMain'

  export default {
    components: {
      'app-dashboard': dashboardHome
    },
    name: 'App',
  }

</script>

<style>

</style>
