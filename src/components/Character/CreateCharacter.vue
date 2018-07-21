<template>
  <div>
    <h1>Create Character</h1>
    <form v-on:submit.prevent="addCharacter">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" v-model="Character.name">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Class:</label>
              <input type="text" class="form-control col-md-6" v-model="Character.class" />
              <label>Level:</label>
              <input type="text" class="form-control col-md-6" v-model="Character.class" /></div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Create</button>
        </div>
    </form>
  </div>
</template>
<script>
  export default {
    data(){
        return{
          Character:{}
        }
    },
    methods: {
      addCharacter(){
        let uri = 'http://localhost:4000/Character/add';
        this.axios.post(uri, this.Character).then((response) => {
          this.$router.push({name: 'DisplayCharacter'})
        })
    }
  }
}
</script>
