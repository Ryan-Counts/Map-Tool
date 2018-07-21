<template>
    <div>
        <h1>Abilities</h1>

        <div class="row">
          <div class="col-md-8"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'Home' }" class="btn btn-primary">
                Go Back</router-link>
          </div>
          <div class="col-md-2">
            <router-link :to="{ name: 'CreateAbility' }" class="btn btn-primary">Create Ability</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Ability Name</td>
                <td>Ability Effect</td>
                <td>Level Dependant</td>
                <td>Level Effect</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="Ability in Abilities">
                    <td>{{ Ability._id }}</td>
                    <td>{{ Ability.abilityName }}</td>
                    <td>{{ Ability.effect }}</td>
                    <td>{{ Ability.levelDependant }}</td>
                    <td>{{ Ability.levelEffect }}</td>
                    <td><router-link :to="{name: 'EditAbility', params: { id: Ability._id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteAbility(Ability._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                Abilities: []
            }
        },

        created: function()
        {
            this.fetchAbilities();
        },

        methods: {
            fetchAbilities()
            {
              let uri = 'http://localhost:4000/Ability';
              this.axios.get(uri).then((response) => {
                  this.Abilities = response.data;
              });
            },
            deleteAbility(id)
            {
              let uri = 'http://localhost:4000/Ability/delete/'+id;
              this.Abilities.splice(id, 1);
              this.axios.get(uri);
            }
        }
    }
</script>
