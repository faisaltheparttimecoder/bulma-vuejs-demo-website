<template>
  <div>
    <app-navbar></app-navbar>
    <section class="articles">
      <div class="column is-8 is-offset-2">

        <!--Bulma Level to place a set of buttons for functionality-->
        <nav class="level">
          <!-- Left side -->
          <div class="level-left">
          </div>
          <!-- Right side -->
          <div class="level-right">
            <p class="control">
              <input class="input" type="text" v-model="search" placeholder="Find a post">
            </p>
          </div>
        </nav>

        <!--The main template for blog content, here we use computed property-->
        <!--to filter blogs ( this is for the search )-->
        <div v-for="blog in filteredBlogs" class="card article">
          <div class="card-content">
            <div class="media">
              <div class="media-center">
                <img src="http://www.radfaces.com/images/avatars/daria-morgendorffer.jpg" class="author-image"
                     alt="Placeholder image">
              </div>
              <div class="media-content has-text-centered">
                <p class="title">{{ blog.title }}</p>
                <a href="#"> {{ randomUser() }} </a>
                <!--Dates & Authors would change on search, since the DOM is redrawn-->
                <!--& we are using random function for those values-->
                <p>
                  <time class="subtitle is-5">
                    <i class="far fa-calendar-alt"></i>
                    {{ randomDates() }}
                    <br/>
                  </time>
                </p>
                <p class="subtitle is-6 article-subtitle">
                  <i class="far fa-comments"></i>
                  {{ randomNumber() }}
                  <small>Comments</small>
                </p>
              </div>
            </div>

            <div class="content article-body">
              <article>
                {{ blog.body }}
              </article>
            </div>
          </div>

          <!--The footer of the care-->
          <footer class="card-footer">
            <p class="card-footer-item">
                <span>
                    Tweet on <a href="https://twitter.com">Twitter</a>
                </span>
            </p>
            <p class="card-footer-item">
                <span>
                    Share on <a href="http://facebook.com">Facebook</a>
                </span>
            </p>
          </footer>

        </div>

      </div>
    </section>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        blogs: [], // Store house for all the fakeData
        users: [
          'John V',
          'Chris Jospeh',
          'Mario Richard',
          'Paul Jackson',
          'Leena Richardson',
          'Ann Marie',
          'Carl Yi',
          'Venkat Raghavan',
          'Jack Sun',
          'Marie Lee'
        ], // Store house for all fake users
        dates: [
          'January 12, 2017',
          'February 27, 2017',
          'April 21, 2017',
          'May 19, 2017',
          'August 09, 2017',
          'September 23, 2017',
          'October 11, 2017',
          'November 31, 2017',
          'January 28, 2018',
          'Feburary 23, 2018',
        ], // Store house for all fake dates
        search: '' // PlaceHolder for the search blog functions.
      }
    },
    beforeCreate: function () {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (fakeBlogs) {
        this.blogs = fakeBlogs.body.slice(0, 10); // Just need 10 entries.
      })
    }, // This pull some random contents from the fake API website
    methods: {
      randomUser: function () {
        return this.users[Math.floor(Math.random() * this.users.length)]
      }, // This pulls in some random users from the array Users
      randomDates: function () {
        return this.dates[Math.floor(Math.random() * this.dates.length)]
      }, // This pulls in some random dates from the array Dates
      randomNumber: function () {
        return Math.floor(Math.random() * (30 - 1 + 1)) + 1
      }, // This pulls in some random number
    },
    computed: {
      filteredBlogs: function() {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search)
        });
      } // This one filters out the contents based on users searching
    }
  }

</script>

<!--Using Scoped for styling to be effected only on this -->
<!--template-->
<style scoped>

  input {
    width: 160%;
  }

  .articles {
    margin: 3rem 0;
  }

  .card.article {
    border-top: 2px solid black !important;
  }

  .author-image {
    position: absolute;
    top: -30px;
    left: 50%;
    width: 60px;
    height: 60px;
    margin-left: -30px;
    border: 3px solid #ccc;
    border-radius: 50%;
  }

  .media-center {
    display: block;
    margin-bottom: 1rem;
  }

  .media-content {
    margin-top: 3rem;
  }

  .article, .promo-block {
    margin-top: 3rem;
  }

  div.column.is-8:first-child {
    padding-top: 0;
    margin-top: 0;
  }

  .article-subtitle {
    color: #909AA0;
    margin-bottom: 1rem;
  }

  .article-body {
    line-height: 1.4;
    margin: 0 6rem;
  }

  .promo-block .container {
    margin: 1rem 5rem;
  }

</style>
