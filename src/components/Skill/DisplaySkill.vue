<template>
    <div>
        <h1>Skills</h1>

        <div class="row">
          <div class="col-md-8"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'Home' }" class="btn btn-primary">
                Go Back</router-link>
          </div>
          <div class="col-md-2">
            <router-link :to="{ name: 'CreateSkill' }" class="btn btn-primary">Create Skill</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Skill Name</td>
                <td>Ability Score</td>
                <td>Description</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="Skill in Skills">
                    <td>{{ Skill._id }}</td>
                    <td>{{ Skill.name }}</td>
                    <td>{{ Skill.abilityScore }}</td>
                    <td>{{ Skill.description }}</td>
                    <td><router-link :to="{name: 'EditSkill', params: { id: Skill._id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteSkill(Skill._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                Skills: []
            }
        },

        created: function()
        {
            this.fetchSkills();
        },

        methods: {
            fetchSkills()
            {
              let uri = 'http://localhost:4000/Skill';
              this.axios.get(uri).then((response) => {
                  this.Skills = response.data;
              });
            },
            deleteSkill(id)
            {
              let uri = 'http://localhost:4000/Skill/delete/'+id;
              this.Skills.splice(id, 1);
              this.axios.get(uri);
            }
        }
    }
</script>
