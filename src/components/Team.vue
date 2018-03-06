<template>
  <div>
    <!--Hero Banner-->
    <section class="hero is-info is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            {{ title }}
          </p>
          <p class="subtitle">
            {{ subtitle }}
          </p>
        </div>
      </div>

      <!--We start from leadership and make that tab active, once the users start clicking-->
      <!--the tab, we change the value of navTeam which changes the users list-->
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li v-bind:class="{'is-active': activeTab(teamNav.team)}" v-for="teamNav in teamNavs" >
                <a v-on:click="TabClicked(teamNav.team, teamNav.start, teamNav.end)">
                  <span class="icon is-small">
                    <i v-bind:class="teamNav.icon"></i>
                  </span>
                  <span>{{ teamNav.team }}</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <!--Show the modal & attach slots here to pass on the variable-->
    <modal v-if="showModal" v-bind:class="activateModal">
      <div slot="modalContents">
        <p >
          <strong>{{ this.modalTeam.name }}</strong> <small>@{{ this.modalTeam.username }}</small>
          <br /> <small> {{ this.modalTeam.company.catchPhrase }} </small>
        </p>
        <table class="table">
          <tbody>
          <tr>
            <th>Name:</th>
            <td>{{ this.modalTeam.name }}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{{ this.modalTeam.email }}</td>
          </tr>
          <tr>
            <th>Phone:</th>
            <td>{{ this.modalTeam.phone }}</td>
          </tr>
          <tr>
            <th>Website:</th>
            <td>{{ this.modalTeam.website }}</td>
          </tr>
          <tr>
            <th>Address:</th>
            <td>
              {{ this.modalTeam.address.street }}, {{ this.modalTeam.address.suite }},
              {{ this.modalTeam.address.city }}, {{ this.modalTeam.address.zipcode }}
            </td>
          </tr>
          <tr>
            <th>Company:</th>
            <td>{{ this.modalTeam.company.name }}</td>
          </tr>
          </tbody>
        </table>
        <nav class="level is-mobile">
          <div class="level-left">
          </div>
          <div class="level-right">
            <button class="button is-danger level-item" v-on:click="showModal = false">
              Close
            </button>
          </div>
        </nav>
      </div>
    </modal>

    <!--Meet my team cards-->
    <section class="section">
      <div class="columns">
        <div v-for="(team, index) in teams" class="column is-3">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ team.name }}</p>
                  <p class="subtitle is-6">@{{ team.username }}</p>
                </div>
              </div>
              <div class="content">
                {{ team.company.catchPhrase }}
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" v-on:click="handler(index)" class="card-footer-item">Know More</a>
            </footer>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>

  // Define Modal Template here
  const ModalTemplate = {
    template: `
                <div class="modal">
                  <div class="modal-background"></div>
                  <div class="modal-content">
                    <div class="box">
                      <article class="media">
                        <div class="media-left">
                          <figure class="image is-64x64">
                            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                          </figure>
                        </div>
                        <div class="media-content">
                          <div class="content">
                          <slot name="modalContents"></slot>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
             `
  }

  export default {
    components: {
      modal: ModalTemplate
    },
    data: function () {
      return {
        title: "Awesome Team !!!!",
        subtitle: "Meet our awesome team, without whom we won't be at the place we are in now...",
        OrginalTeams: [],
        teams: [],
        showModal: false,
        activateModal: 'is-active',
        teamNavs: [
          {
            team: 'Leadership Team',
            icon: 'fas fa-user',
            start: 0,
            end: 4
          },{
            team: 'Managers',
            icon: 'fas fa-users',
            start: 4,
            end: 8
          },{
            team: 'Contributors',
            icon: 'fas fa-street-view',
            start: 6,
            end: 11
          },
        ],
        modalTeam: '',
        navTeam: 'Leadership Team'
      }
    },
    methods: {
      enableModal: function() {
        return this.showModal = true
      }, // When modal is clicked enable to show the modal
      getModalContents: function(index) {
        return this.teams[index]
      }, // When the modal is clicked, populate the value of the content
      handler: function(index) {
        this.enableModal()
        this.modalTeam = this.getModalContents(index)
      }, // This is the main function that calls the above two methods
      activeTab: function(tab) {
        return this.navTeam === tab
      }, // Check if the tab is active on
      TabClicked: function(tab, start, end) {
        this.pullData(start, end)
        return this.navTeam = tab
      }, // When the user clicks on the tab, what needs to be done
      pullData: function (start, end) {
        this.teams = this.OrginalTeams.slice(start, end)
      } // When the users click on the tab, manipulate the data.
    },
    created: function() { // Call the lifecycle to populate the data before the DOM is created.
      this.$http.get('https://jsonplaceholder.typicode.com/users').then(function (fakeBlogs) {
        this.OrginalTeams = fakeBlogs.body.slice(0, 10); // Just need 10 entries.
        this.pullData(0, 4)
      })
    },

  }
</script>

<style>

</style>
