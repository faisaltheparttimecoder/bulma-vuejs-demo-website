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
          <app-facebook v-else-if="menuItem === 'facebook'" v-bind:metricHeadings="metricHeading"> </app-facebook>
          <app-website v-else-if="menuItem === 'website'"> </app-website>
          <app-twitter v-else-if="menuItem === 'twitter'"> </app-twitter>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import menu from './Menu';
  import dashboardHome from './DashboardMain'
  import customer from './DashboardCustomers'
  import facebook from './DashboardFacebook'
  import website from './DashboardWebsite'
  import twitter from './DashboardTwitter'

  export default {
    components: {
      'app-menu': menu,
      'app-dashboard': dashboardHome,
      'app-customer': customer,
      'app-facebook': facebook,
      'app-website': website,
      'app-twitter': twitter,
    },
    data: function() {
      return {
        menuItem: this.$route.params.menu,
        metricHeading: [{
          title: 'Action on Page',
          icon: 'fas fa-fighter-jet fa-4x'
        },{
          title: 'Page Views',
          icon: 'fas fa-eye fa-4x'
        },{
          title: 'Post Engagement',
          icon: 'fas fa-pencil-alt fa-4x'
        },{
          title: 'Reach',
          icon: 'fas fa-shopping-cart fa-4x'
        }]
      }
    }
  }

</script>

<style>

</style>
