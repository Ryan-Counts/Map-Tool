<template>
    <div>
        <h1>Create Skill</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplaySkill' }" class="btn btn-success">Return to Skills</router-link></div>
        </div>

        <form v-on:submit.prevent="addSkill">
            <div class="form-group">
                <label name="class_name">Skill Name</label>
                <input type="text" class="form-control" v-model="Skill.name">
            </div>

            <div class="form-group">
                <label name="class_name">Ability Score</label>
                <input type="text" class="form-control" v-model="Skill.abilityScore">
            </div>

            <div class="form-group">
                <label name="class_name">Description</label>
                <input type="text" class="form-control" v-model="Skill.description">
            </div>

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
          Skill:{}
        }
    },
    methods: {
      addSkill(){
        let uri = 'http://localhost:4000/Skill/add';
        this.axios.post(uri, this.Skill).then((response) => {
          this.$router.push({name: 'DisplaySkill'})
        })
    }
  }
}
</script>
