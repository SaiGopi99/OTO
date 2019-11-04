<template>
  <q-card class = 'bg-warning'>
    <div class='row'>
    <div  v-for='(key,value) in db_data' :key ='value'>
      <q-card-section class='q-ma-sm bg-primary text-white'>
        <p class="text-bold">{{ value }}</p>
      </q-card-section>
      <draggable class='list-group' :list='key' group='people' @change='log'>
        <div
          class='list-group-item'
          v-for='element in key'
          :key='element.name'
        >
        <q-card-section class='q-ma-sm  bg-grey-5 text-black'>
          <q-input ref="input" v-model="element['name']" autofocus />
          </q-card-section>
        </div>
        <q-btn round color="primary" icon="add" @click ="add_section('Add Card',true,value)" />
      </draggable>
    </div>
    <div class='col-3'>
       <q-btn class="q-ma-xl"  color="primary" label="Add New Section" @click ="add_section('Add Section',false,'')" />
    </div>
  </div>

  </q-card>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'two-lists',
  display: 'Two Lists',
  order: 1,
  components: {
    draggable
  },
  data () {
    return {
      db_data: {}
    }
  },
  mounted () {
  },
  methods: {
    add () {
      this.list.push({ name: 'Juan' })
    },
    replace () {
      this.list = [{ name: 'Edgard' }]
    },
    clone (el) {
      return {
        name: el.name + ' cloned'
      }
    },
    log (evt) {
      window.console.log(evt)
    },
    add_new_record (data, check, colParam) {
      var that = this
      if (check) {
        let len = that.db_data[colParam].length
        that.$set(that.db_data[colParam], len, { 'name': data })
      } else {
        that.$set(that.db_data, data, [])
        let len = that.db_data[data].length
        that.$set(that.db_data[data], len, { 'name': '' })
      }
    },
    add_section (title, check, colParam) {
      var that = this
      that.$q.dialog({
        title: title,
        message: 'Enter the Content Here',
        cancel: true,
        prompt: {
          model: '',
          type: 'text'
        },
        persistent: true
      }).onOk(data => {
        that.add_new_record(data, check, colParam)
      }).onCancel(() => {
      }).onDismiss(() => {
      })
    }
  }
}
</script>
