<template>
  <q-card class = 'bg-primary'>
    <div class="q-pa-md row">
      <q-card-section class='q-ma-sm bg-primary text-white'>
        <div class ="text-bold">
          {{ 'Welcome to Help Section!'}}
        </div>
        </q-card-section>
      </div>
  </q-card>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    var that = this
    that.$q.notify({
      color: 'green',
      textColor: 'white',
      message: 'Welcome to Helping Section',
      position: 'top-right',
      timeout: 3000
    })
  },
  methods: {
  }
}
</script>
