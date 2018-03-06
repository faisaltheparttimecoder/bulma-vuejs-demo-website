<template>
  <div>

    <div class="columns">
      <div class="column is-12">
        <div class="box">
          <nav class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Tweets</p>
                <p class="title">{{ 5000 | randomNumber }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Following</p>
                <p class="title">{{ 123 | randomNumber }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Followers</p>
                <p class="title">{{ 456 | randomNumber }}K</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Likes</p>
                <p class="title">{{ 789 | randomNumber }}K</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-10">
        <div class="box">
          <h1 class="heading"> Engagement Rate </h1>
          <p> May {{ 30 || randomNumber }} - Jan {{ 30 | randomNumber}} </p>
          <br />
          <line-chart :data="lineData()" > </line-chart>
        </div>
      </div>

      <div class="column is-2">
        <div v-for="twitterMetric1 in twitterMetrics1" class="columns">
          <div class="column">
            <div class="box">
              <h2 class="heading"> {{ twitterMetric1 }} </h2>
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
      <div class="column is-2">
        <div v-for="twitterMetric2 in twitterMetrics2" class="columns">
          <div class="column">
            <div class="box">
              <h2 class="heading"> {{ twitterMetric2 }} </h2>
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

      <div class="column is-10">
        <div class="box">
          <h1 class="heading"> Interaction Trends </h1>
          <p> May {{ 30 || randomNumber }} - Jan {{ 30 | randomNumber}} </p>
          <br />
          <line-chart :data="lineData()" > </line-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import chartData from './../mixins/chartData'
  import randomMixins from './../mixins/random'
  export default {
    mixins: [
      chartData, randomMixins
    ],
    data: function() {
      return {
        twitterMetrics1: ['New Followers', 'retweets'],
        twitterMetrics2: ['Favourites', 'Links Click']
      }
    }
  }
</script>

<style>

</style>
