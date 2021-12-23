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
import axios from "axios"


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
  },


  //verify emails with mailboxplayer

  mounted() {  
    var access_key = '125cdceab098b7959ea29bb17e63ab71'
    var email_address = user.email,
    axios.get('http://apilayer.net/api/check?access_key=' + access_key + '&email=' + email_address)
 .then(response(json =>  {
    // Access and use your preferred validation result objects
    console.log(json.format_valid);
    console.log(json.smtp_check);
    console.log(json.score);
    }
))
};
</script>
<style>
</style>