<template>
  <div>

    <div class="columns">

      <div class="column is-12">
        <div class="box">
          <nav class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">New Followers</p>
                <p class="title">{{ 5000 | randomNumber }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Total Post</p>
                <p class="title">{{ 123 | randomNumber }}k</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Total Shares</p>
                <p class="title">{{ 456 | randomNumber }}K</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Total Likes</p>
                <p class="title">{{ 123 | randomNumber }}K</p>
              </div>
            </div>
          </nav>
        </div>
      </div>

    </div>

    <div class="columns">

      <div v-for="metricHeading in metricHeadings" class="column is-3">
        <div class="box">
          <h1 class="heading"> {{ metricHeading.title }} </h1>
          <p> Feb {{ 30 || randomNumber }} - Mar {{ 30 | randomNumber}} </p>
          <p></p>
          <br />
          <div class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <i v-bind:class="metricHeading.icon"></i>
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <article class="level">
                  <div class="level-left">
                  </div>
                  <div class="level-right">
                    <div class="level-item ">
                      <div>
                        <p class="title">
                          {{ 300 | randomNumber }}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <br />
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
      <div class="column is-12">
        <div class="box">
          <h1 class="heading"> User Engagement Trend </h1>
          <p> Feb {{ 30 || randomNumber }} - Mar {{ 30 | randomNumber}} </p>
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
</template>

<script>

  import randomMixins from './../mixins/random'
  export default {
    data: function() {
      return {
      }
    },
    props: [
      'metricHeadings'
    ],
    mixins: [
      randomMixins
    ]
  }

</script>

<style>

</style>
