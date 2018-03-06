<template>
  <div>

    <div class="columns">
      <div class="column is-12">
        <div class="box">
          <nav class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Page Views</p>
                <p class="title">{{ 10000 | randomNumber }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Active Users</p>
                <p class="title">{{ 1234 | randomNumber }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Sessions</p>
                <p class="title">{{ 4567 | randomNumber }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Hours Spend</p>
                <p class="title">{{ 6238 | randomNumber }}</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <div class="box">
          <h1 class="heading"> Website Visitors </h1>
          <p> May {{ 30 || randomNumber }} - Jan {{ 30 | randomNumber}} </p>
          <br />
          <line-chart :data="lineData()" height="356px"> </line-chart>
        </div>
      </div>
      <div class="column is-6">
        <div class="columns">
          <div v-for="webMetric1 in webMetrics1" class="column is-6">
            <div class="box">
              <h2 class="heading"> {{ webMetric1 }} </h2>
              <p> May {{ 30 || randomNumber }} - Jan {{ 30 | randomNumber}} </p>
              <article class="level">
                <div class="level-right">
                  <div class="level-item ">
                    <div>
                      <p class="title">
                        {{ 300 | randomNumber }}%
                      </p>
                    </div>
                  </div>
                </div>
              </article>
              <trend
                :data=randomArray()
                :gradient="randomColors()"
                auto-draw
                ease-in>
              </trend>
            </div>
          </div>
        </div>
        <div class="columns">
          <div v-for="webMetric2 in webMetrics2" class="column is-6">
            <div class="box">
              <h2 class="heading"> {{ webMetric2 }} </h2>
              <p> May {{ 30 || randomNumber }} - Jan {{ 30 | randomNumber}} </p>
              <article class="level">
                <div class="level-right">
                  <div class="level-item ">
                    <div>
                      <p class="title">
                        {{ 300 | randomNumber }}%
                      </p>
                    </div>
                  </div>
                </div>
              </article>
              <trend
                :data=randomArray()
                :gradient="randomColors()"
                auto-draw
                ease-in>
              </trend>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="box">
          <h1 class="heading"> Traffic by Region </h1> <br />
          <line-chart :data="multipleLineData()"></line-chart>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import chartData from './../mixins/chartData'
  import randomMixins from './../mixins/random'
  export default {
    data: function() {
      return {
        webMetrics1: [
           'Engagement rates', 'Mobile & Tablet Traffic'
        ],
        webMetrics2: [
          'New Sessions', 'Bounce Rate'
        ]
      }
    },
    mixins: [
      chartData, randomMixins
    ]
  }
</script>

<style>

</style>
