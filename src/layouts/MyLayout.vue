<template>
  <q-layout view="lHh Lpr lFf"
   >
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          color=secondary
        >
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          Agile DashBoard
        </q-toolbar-title>
        <div></div>
        <q-btn class="navlink q-ml-xl"  :to="{ path: '/home'}">Home</q-btn>
        <q-btn class="navlink q-ml-xl" :to="{ path: '/help'}" >Help</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-white"
    >
        <q-list
        no-border
        link
        inset-delimiter
        @click="leftDrawerOpen = false"
        class="text-h6 q-pa-md">
          <q-item class="navlink" :to="{ path: '/qc'}">
             <div class="q-pl-lg navigation-text text-primary header_font header_text">Create Boards</div>
          </q-item>
        </q-list>
    </q-drawer>

    <q-page-container>
      <q-pull-to-refresh @refresh="refresh">
        <router-view />
      </q-pull-to-refresh>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  mounted () {
    var that = this
    that.open_url()
  },
  created () {
    var that = this
    that.open_url()
  },
  methods: {
    openURL,
    open_url () {
      var that = this
      that.$router.push('/home')
    },
    refresh () {
      location.reload()
    }
  }
}
</script>

<style>
.navlink a:hover{
background-color:primary;
}
</style>
