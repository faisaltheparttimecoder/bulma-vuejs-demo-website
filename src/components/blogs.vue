<template>
  <div>

    <!--Blog add Modal-->
    <add-blog v-bind:class="{'is-active': showModal}">

      <article v-if="formErrors" slot="blogError" class="message is-danger">
        <div class="message-header">
          <p>Missing Fields</p>
          <button class="delete" aria-label="delete" v-on:click="formErrors = !formErrors"></button>
        </div>
        <div class="message-body">
          All Fields are mandatory on the this form
        </div>
      </article>

      <input slot="blogInput" class="input" type="text" v-model="addBlog.title" placeholder="Insert the blog title...">
      <select slot="blogSelect" v-model="addBlog.users.name">
        <option v-for="blog in blogs">{{ blog.users.name }}</option>
      </select>
      <textarea slot="blogTextarea" rows=10 class="textarea" v-model="addBlog.body" placeholder="Enter blog contents"></textarea>
      <button v-on:click="submitBlog" slot="blogSumbit" class="button is-primary" type="submit">Submit</button>
      <button v-on:click="showModal = !showModal" slot="blogCancel" class="button is-danger">Cancel</button>
    </add-blog>

    <section class="hero is-warning is-medium">

      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            {{ title }}
          </h1>
          <h2 class="subtitle">
            {{ subtitle }}
          </h2>
          <button v-on:click="showModal = !showModal" class="button is-primary">Add Blog</button>
          <button v-on:click="deleteActive = !deleteActive" class="button is-danger">
            <span v-if="deleteActive" v-html="unDeleteMsg"></span>
            <span v-else>Delete Blogs</span>
          </button>
        </div>
      </div>

    </section>
    <section class="section">
      <div class="columns">

        <!--Left menu options-->
        <div class="column is-2">
          <aside class="menu">
            <p class="menu-label">
              Featured Blogs
            </p>
            <input class="input menu-label" v-model="search" type="text" placeholder="Search for a blog post ...">
            <ul class="menu-list">
                <li v-for="blog in filteredBlogs">
                  <a v-bind:href="'/blog/' + blog.id + '/' + blog.users.id">{{ blog.title }}</a>
                </li>
            </ul>
          </aside>
        </div>

        <div class="column is-10">
          <!--The main template for blog content, here we use computed property-->
          <!--to filter blogs ( this is for the search )-->
          <div v-for="(blog, index) in filteredBlogs" class="card article">
            <div class="card-content">
              <a v-if="deleteActive" class="delete is-medium" v-on:click="deleteBlog(index)"></a>
              <div class="media">
                <div class="media-center">
                  <img src="https://bulma.io/images/placeholders/64x64.png" class="author-image"
                       alt="Placeholder image">
                </div>
                <div class="media-content has-text-centered">
                  <a v-bind:href="'/blog/' + blog.id + '/' + blog.users.id">
                    <p class="title">{{ blog.title }}</p>
                  </a>
                  <p> {{ blog.users['name'] }} </p>
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
                    {{ '10' | randomNumber }}
                    <small>Comments</small>
                  </p>
                </div>
              </div>

              <div class="content article-body">
                <article>
                  {{ blog.body | snippet }} <a v-bind:href="'/blog/' + blog.id + '/' + blog.users.id"> read more ...</a>
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
      </div>
    </section>
  </div>
</template>

<script>

  // Define Modal Template here
  const addBlogForm = {
    template: `
                <div class="modal">
                  <div class="modal-background"></div>
                  <div class="modal-content">
                    <div class="box">

                    <article class="message is-info">
                      <div class="message-header">
                        <p>PLEASE NOTE</p>
                      </div>
                      <div class="message-body">
                        After adding the blog, it will show up on the main blog page, but clicking on it will pull in
                        default blog template, since we are not storing data on the database ... HAVE FUN !!!
                      </div>
                    </article>

                      <slot name="blogError"></slot>

                      <div class="field">
                        <label class="label">Add Title</label>
                        <div class="control">
                          <slot name="blogInput"></slot>
                        </div>
                      </div>

                      <br />

                      <div class="field">
                        <label class="label">Choose Author</label>
                        <div class="control">
                          <div class="select">
                              <slot name="blogSelect"></slot>
                          </div>
                        </div>
                      </div>

                      <br />

                      <div class="field">
                        <label class="label">Blog Content</label>
                        <div class="control">
                         <slot name="blogTextarea"></slot>
                        </div>
                      </div>

                      <div class="field is-grouped">
                        <div class="control">
                          <slot name="blogSumbit"></slot>
                        </div>
                        <div class="control">
                          <slot name="blogCancel"></slot>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
             `
  }


  export default {
    components: {
      addBlog: addBlogForm
    },
    data: function () {
      return {
        title: "Sharing is knowledge !!!",
        subtitle: "Checkout out of blogs post for the key to success...",
        blogs: [], // Store house for all the fakeData
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
        search: '', // PlaceHolder for the search blog functions.
        deleteActive: false, // Activate delete button
        unDeleteMsg: 'Undelete Blogs', // Html message when delete button is clicked
        showModal: false, // To show or not to show the blog
        formErrors: false, // validate form
        orgAddBlog: {
          title: '',
          id: 1,
          users: {
            name: '',
            id: '10'
          },
          body: ''
        },
        addBlog: {
          title: '',
          id: 1,
          users: {
            name: '',
            id: '10'
          },
          body: ''
        }
      }
    },
    created: function () {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (fakeBlogs) {
        this.$http.get('https://jsonplaceholder.typicode.com/users').then(function (fakeUsers) {
          return fakeUsers.json()
        }).then(function(promisedData){ // now within that function, get the users list
          var i = 0;
          this.blogs = fakeBlogs.body.slice(0, 10); // get a random 10 posts
          for (; i < promisedData.length; i++) {
            this.blogs[i].users = promisedData[i]
          }
        })
      })
    }, // This pull some random contents from the fake API website
    methods: {
      randomDates: function () {
        return this.dates[Math.floor(Math.random() * this.dates.length)]
      }, // This pulls in some random dates from the array Dates
      deleteBlog: function(index) {
        this.blogs.splice(index, 1)
      }, // Delete a specfic blog
      submitBlog: function() {
        if (this.addBlog.users.name === '' || this.addBlog.title === ''
          || this.addBlog.body === '' || this.addBlog.users.name === '') {
          return this.formErrors = true
        } else {
          this.formErrors = false
        }
        this.blogs.push(this.addBlog)
        this.showModal = false
        this.addBlog = this.orgAddBlog
      }, // Add a new blog
    },
    computed: {
      filteredBlogs: function() {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search)
        });
      } // This one filters out the contents based on users searching
    },
    filters: {
      'snippet': function(data) {
        return data.slice(1,100) + '...'
      }
    }
  }

</script>

<!--Using Scoped for styling to be effected only on this -->
<!--template-->
<style scoped>

  input {
    margin-bottom:  -10rem ;
  }

  a.delete {
    float: right;
    background-color: #ff3860;
  }

  .section {
    margin: -1rem 0;
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
