<template>
  <div>

    <div class="columns">

      <div class="column is-6">
        <div class="box">
          <h1 class="heading"> New Customers </h1> <br />
          <line-chart :data="lineData()"></line-chart>
        </div>
      </div>

      <div class="column is-6">
        <div class="box">
          <h1 class="heading"> New Customer by country </h1> <br />
          <line-chart :data="multipleLineData()"></line-chart>
        </div>
      </div>

    </div>

    <div class="columns">

      <div class="column is-6">
        <div class="box">
          <h1 class="heading"> Potential Customer </h1> <br />
          <area-chart :data="lineData()"></area-chart>
        </div>
      </div>

      <div class="column is-6">
        <div class="box">
          <h1 class="heading"> Customers Renewal </h1> <br />
          <line-chart :data="lineData()"></line-chart>
        </div>
      </div>

    </div>

    <div class="columns">

      <div class="column is-6">
        <div class="box">
          <h1 class="heading"> Customer satisfaction </h1> <br />
          <line-chart :data="lineData()"></line-chart>
        </div>
      </div>

      <div class="column is-6">
        <div class="box">
          <h1 class="heading"> Customer Dissatisfaction </h1> <br />
          <line-chart :data="lineData()"></line-chart>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    data: function() {
      return {
      }
    },
    methods: {
      lineData: function() {
        return {
          '2017-05-01': this.randomNumber(32),
          '2017-06-01': this.randomNumber(13),
          '2017-07-01': this.randomNumber(56),
          '2017-08-01': this.randomNumber(10),
          '2017-09-01': this.randomNumber(12),
          '2017-10-01': this.randomNumber(34),
          '2017-12-01': this.randomNumber(36),
          '2018-01-01': this.randomNumber(12)
        }
      },
      multipleLineData: function() {
        return [{
          name: 'USA',
          data: this.lineData()
        },{
          name: 'Brazil',
          data: this.lineData()
        },{
          name: 'India',
          data: this.lineData()
        },{
          name: 'UK',
          data: this.lineData()
        },{
          name: 'Australia',
          data: this.lineData()
        }]
      },
      randomNumber: function(x) {
        return Math.random() * x
      }
    }
  }
</script>

<style>

</style>
