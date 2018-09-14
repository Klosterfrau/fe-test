<template>
  <div id="app">
    <v-app dark>
      <v-tabs
              v-model="active"
              color="primary"
              dark
              slider-color="yellow"
              centered
      >
        <v-tab
                v-for="site in sites"
                :key="site.name"
                ripple
                @click="routeTo(site.link)"
        >
          {{ site.name }}
        </v-tab>
      </v-tabs>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
  export default {
      name: 'FeTest',
      data () {
          return {
              active: 0,
              sites: [
                  {
                      name: 'Aufgabe',
                      link: '/'
                  },
                  {
                      name: 'Workplace',
                      link: '/work'
                  }
              ]
          }
      },
      methods: {
          routeTo (route) {
              console.log(route)
              this.$router.push({
                  path: route
              })
          }
      }
  }
</script>

