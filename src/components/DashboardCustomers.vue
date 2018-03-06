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
  import chartData from './../mixins/chartData'
  export default {
    data: function() {
      return {
      }
    },
    mixins: [
      chartData
    ]
  }
</script>

<style>

</style>
