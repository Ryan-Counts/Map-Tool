<template>
    <div>
        <h1>Archetypes</h1>

        <div class="row">
          <div class="col-md-8"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'Home' }" class="btn btn-primary">
                Go Back</router-link>
          </div>
          <div class="col-md-2">
            <router-link :to="{ name: 'CreateArchetype' }" class="btn btn-primary">Create Archetype</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Archetype Name</td>
                <td>Archetype Hit Dice</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="Archetype in Archetypes">
                    <td>{{ Archetype._id }}</td>
                    <td>{{ Archetype.className }}</td>
                    <td>{{ Archetype.hitDice }}</td>
                    <td><router-link :to="{name: 'EditArchetype', params: { id: Archetype._id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteArchetype(Archetype._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                Archetypes: []
            }
        },

        created: function()
        {
            this.fetchArchetypes();
        },

        methods: {
            fetchArchetypes()
            {
              let uri = 'http://localhost:4000/Archetype';
              this.axios.get(uri).then((response) => {
                  this.Archetypes = response.data;
              });
            },
            deleteArchetype(id)
            {
              let uri = 'http://localhost:4000/Archetype/delete/'+id;
              this.Archetypes.splice(id, 1);
              this.axios.get(uri);
            }
        }
    }
</script>
