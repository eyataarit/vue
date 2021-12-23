/* eslint-disable no-console */
<template>
  <div>
    <div>
      <label for="file" class="form-label"> Importer an Excel File </label>
      <input class="form-control form-control-lg" id="file" type="file" @change="onChange" />
    </div>
    <div>
        {{users}}
    </div>
  </div>
</template>
<script>
import readXlsxFile from 'read-excel-file'
export default {
  name: "File",
  data(){
    return {
      users:[]
    }
  },
  methods: {
  getUsers() {
    fetch('http://localhost:5000/get', {
      method:"GET",
      headers:{
        "Content-Type" : "application/json"
        }
    })
  },
  
  onChange(event) {
    let xlsxfile = event.target.files ? event.target.files[0] : null;
    readXlsxFile(xlsxfile).then((rows) => {
      this.users = rows
    })
  }},

  created(){
    this.getUsers()
  }
};
</script>
<style>
</style>