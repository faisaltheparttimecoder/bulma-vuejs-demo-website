<template>
  <div>
    <section class="section">
      <div class="columns">
        <div class="column is-2">
          <app-menu> </app-menu>
        </div>
        <div class="container">

          <h1 class="title"> Twitter </h1>
          <nav class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Tweets</p>
                <p class="title">3,456</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Following</p>
                <p class="title">123</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Followers</p>
                <p class="title">456K</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Likes</p>
                <p class="title">789</p>
              </div>
            </div>
          </nav>

          <hr>

          <h1 class="title"> Facebook </h1>
          <nav class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Posts</p>
                <p class="title">1,200</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Followers</p>
                <p class="title">400k</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Likes</p>
                <p class="title">1.2M</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Shares</p>
                <p class="title">1M</p>
              </div>
            </div>
          </nav>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import menu from './menu';
  export default {
    components: {
      "app-menu": menu
    },
    data: function () {
      return {}
    }
  }

</script>

<style>

</style>
