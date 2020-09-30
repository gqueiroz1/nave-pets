<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="showMenuIcon"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="text-h4 q-pa-lg">
          <router-link to="/" class="text-white text-weight-bold">
            NavePets
          </router-link>
        </q-toolbar-title>

        <div class="flex">
          <q-btn
            color="primary"
            class="q-mr-lg"
            text-color="white"
            flat
            label="Registrar"
            @click="openLoginRegisterDialog('REGISTRAR')"
          />
          <q-btn
            color="secondary"
            :label="loginButtonLabel"
            @click="openLoginRegisterDialog('LOGIN')"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list class="q-py-lg">
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <login-register-dialog />
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { mapActions } from 'vuex'
import LoginRegisterDialog from 'components/LoginRegisterDialog'

const linksData = [
  {
    title: 'Quero Adotar',
    icon: 'pets',
    link: '/'
  },
  {
    title: 'Quero Doar',
    icon: 'add_circle',
    link: '/doar'
  }
]

export default {
  name: 'MainLayout',

  components: { EssentialLink, LoginRegisterDialog },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },

  computed: {
    loginButtonLabel () {
      return 'LOGIN'
    },

    isMobile () {
      return this.$q.screen.lt.md
    },

    showMenuIcon () {
      return this.isMobile
    }
  },

  methods: {
    ...mapActions('loginStore', ['toggleShowDialog']),

    openLoginRegisterDialog (type) {
      this.toggleShowDialog(type)
    }
  }
}
</script>
