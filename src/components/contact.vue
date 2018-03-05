<template>
  <div>
    <section class="hero is-danger is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            {{ title }}
          </p>
          <p class="subtitle">
            {{ subtitle }}
          </p>
          <button class="button is-primary">Email Us</button>
          <button class="button is-info">Fill Survey</button>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="box">

        <header class="title has-text-centered is-info">
          Contact Us
        </header>

        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input">
          </div>
        </div>

        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Text input" value="bulma">
            <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
            <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
          </div>
          <p class="help is-success">This username is available</p>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
            <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
            <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
          </div>
          <p class="help is-danger">This email is invalid</p>
        </div>

        <div class="field">
          <label class="label">Subject</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox">
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input type="radio" name="question">
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="question">
              No
            </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary">Send Email</button>
          </div>
          <div class="control">
            <button class="button is-info">Preview Email</button>
          </div>
          <div class="control">
            <button class="button is-danger">Cancel</button>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        title: "Send us some love !!!",
        subtitle: "We love to hear your feedback, why don't you fill up the below form...",
        teamNavs: [
          {
            team: 'Leadership Team',
            icon: 'fas fa-user',
            start: 0,
            end: 4
          }, {
            team: 'Managers',
            icon: 'fas fa-users',
            start: 4,
            end: 8
          }, {
            team: 'Contributors',
            icon: 'fas fa-street-view',
            start: 6,
            end: 11
          },
        ]
      }
    }
  }

</script>

<style scoped>
  .section {
    padding: 1rem 1.5rem;
    margin-top: -50px;
  }

</style>
