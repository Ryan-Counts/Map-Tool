<template>
  <div>
    <h1>Create Ability</h1>
    <form v-on:submit.prevent="addAbility">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" v-model="Ability.name">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Class:</label>
              <input type="text" class="form-control col-md-6" v-model="Ability.class" />
              <label>Level:</label>
              <input type="text" class="form-control col-md-6" v-model="Ability.class" /></div>
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
          Ability:{}
        }
    },
    methods: {
      addAbility(){
        let uri = 'http://localhost:4000/Ability/add';
        this.axios.post(uri, this.Ability).then((response) => {
          this.$router.push({name: 'DisplayAbility'})
        })
    }
  }
}
</script>
