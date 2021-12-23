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
  methods: {
  onChange(event) {
    let xlsxfile = event.target.files ? event.target.files[0] : null;
    readXlsxFile(xlsxfile).then((rows) => {
      this.users = rows
    })
  }},
  props: {
      users : []
      //array of arrays, 
      //each element is a user, 
      //except for the first row (columns name)
  },
};
</script>
<style>
</style>