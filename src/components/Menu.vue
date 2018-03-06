<template>
  <div>
    <aside class="menu">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li v-for="generalList in generalLists">
          <a v-bind:class="{'is-active': tabActive(generalList.name)}" v-bind:href="'/dashboard/'+ generalList.name">
            {{ generalList.title }}
          </a>
        </li>
      </ul>
      <p class="menu-label">
        Social Network
      </p>
      <ul class="menu-list">
        <li v-for="networkList in networkLists">
          <a v-bind:class="{'is-active': tabActive(networkList.name)}" v-bind:href="'/dashboard/'+ networkList.name">
            {{ networkList.title }}
          </a>
        </li>
      </ul>
      <p class="menu-label">
        Dummy Links
      </p>
      <ul class="menu-list">
        <li v-for="dummyList in dummyLists"><a>{{ dummyList }}</a></li>
      </ul>
    </aside>
  </div>
</template>

<script>
  export default {
    props: [
      'menuActive'
    ],
    data: function() {
      return {
        generalLists: [{
          name: 'main',
          title: 'Dashboard'
        }, {
          name: 'customer',
          title: 'Customers'
        }],
        networkLists:[{
          name: 'website',
          title: 'Our website'
        },{
          name: 'facebook',
          title: 'Facebook'
        },{
          name: 'twitter',
          title: 'Twitter'
        }],
        dummyLists: ['Payments', 'Transaction', 'Balance']
      }
    },
    methods: {
      tabActive: function(tab) {
        return this.menuActive === tab
      }
    }
  }

</script>

<style>

</style>
