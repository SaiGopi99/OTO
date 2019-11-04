<template>
  <q-card class = 'bg-white'>
    <div class="q-pa-md row">
      <div
        class='col-sm-6 col-md-6 col-lg-6 col-xl-6 list-group-item'
        v-for='element in db_data'
        :key='element.name'
      >
      <q-card-section class='q-ma-sm bg-info text-white'>
        <div class ="text-bold">
              {{"Name:" }} {{ element.name }}
        </div>
        <div class ="text-bold">
               {{"Variety:" }} {{ element.variety }}
        </div>
        <div class ="text-bold">
               {{"Notes:" }} {{ element.notes }}
        </div>
        <div class ="text-bold">
               {{"Parameters:" }} {{ element.parameters }}
        </div>
        </q-card-section>
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  data () {
    return {
      db_data: [{ 'name': 'Orange', 'variety': 'Variety-X', 'notes': 'CaliforniaOrange', 'parameters': { 'a0': 'mm1' } },
        { 'name': 'Grapes', 'variety': 'Variety-G', 'notes': 'Goagrapes', 'parameters': { 'a0': 'mm1', 'a1': 'mm2' } },
        { 'name': 'Banana', 'variety': 'VarietyB', 'notes': 'WildBanana', 'parameters': { 'a0': 'mm1', 'a1': 'mm2' } },
        { 'name': 'Tomatoes', 'variety': 'VarietyT', 'notes': 'Greentomatoes', 'parameters': { 'a0': 'mm1', 'a1': 'mm2' } },
        { 'name': 'Wheat', 'variety': 'VarietyW', 'notes': 'none' },
        { 'name': 'Orange', 'variety': 'Variety-XZ', 'notes': 'none' }]
    }
  },
  mounted () {
    this.$q.dark.set(true)
  },
  methods: {
  }
}
</script>
