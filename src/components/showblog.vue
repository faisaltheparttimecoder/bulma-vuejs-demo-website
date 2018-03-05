<template>
  <div >
    <app-navbar></app-navbar>
    <section class="hero is-dark is-medium">

      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            {{ blog.title }}
          </h1>
        </div>
      </div>

    </section>
    <section class="section">
      <div class="container">

        <div class="columns">
          <div class="column is-8">

            <div class="content">
              <article>
                {{ blog.body }}
              </article>
              <figure>
                <img src="https://bulma.io/images/placeholders/256x256.png">
                <img src="https://bulma.io/images/placeholders/256x256.png">
                <figcaption>
                  Figure 1: Some beautiful placeholders
                </figcaption>
              </figure>
              <article>
                {{ blog.body }}
              </article>
            </div>

          </div>

          <div class="column is-4">
            <div class="box">
              <article class="media">
                <div class="media-left">

                </div>
                <div  class="media-content">
                  <div class="content">
                    <figure class="image is-256x256">
                      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                    <p>
                      <strong>{{ user.name }}</strong> <small>@{{ user.username }}</small> <small> {{ '20' | randomNumber }}m </small>
                      <br>
                      {{ user.company.catchPhrase }}
                      <br>
                      {{ user.email }}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <h1 class="title">
          Comments
        </h1>

        <!--Populate random comments-->
        <article v-for="fakeComment in fakeComments" class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ fakeComment.user }}</strong>
                <br>
                {{ fakeComment.comment }}
                <br>
                <small>{{ '10' | randomNumber }} hrs</small>
              </p>
            </div>
          </div>
        </article>
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="field">
              <p class="control">
                <textarea class="textarea" v-model="addComments" placeholder="Try me, add a comment..."></textarea>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button v-on:click="postComments" class="button is-primary">Post comment</button>
              </p>
            </div>
          </div>
        </article>

      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        id: this.$route.params.id,
        userid: this.$route.params.users,
        blog: {},
        user: {
          name: null,
          username: null,
          company: {
            catchPhrase: null
          }
        },
        fakeComments: [{
          user:  'Barbara Middleton',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.'
        },{
          user:  'Sean Brown',
          comment: 'Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.'
        },{
          user:  'Kayli Eunice ',
          comment: 'Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat. '
        },{
          user:  'John Bee',
          comment: 'Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.'
        }],
        addComments: ''
      }
    },
    methods: {
      postComments: function() {
        this.fakeComments.push({
          user: "Mr Stranger",
          comment:  this.addComments
        })
        this.addComments = ''
      }
    },
    created: function() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function(singleBlog){
        this.$http.get('https://jsonplaceholder.typicode.com/users/' + this.userid).then(function(singleUser) {
          return singleUser.json()
        }).then(function(promisedUser) {
          this.user = promisedUser
          this.blog = singleBlog.body
        })
      })
    }
  }
</script>

<style>

</style>
