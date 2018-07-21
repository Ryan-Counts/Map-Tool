<template>
    <div>
        <h1>Spells</h1>

        <div class="row">
          <div class="col-md-8"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'Home' }" class="btn btn-primary">
                Go Back</router-link>
          </div>
          <div class="col-md-2">
            <router-link :to="{ name: 'CreateSpell' }" class="btn btn-primary">Create Spell</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Spell Name</td>
                <td>School</td>
                <td>Save Type</td>
                <td>Effect</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="Spell in Spells">
                    <td>{{ Spell._id }}</td>
                    <td>{{ Spell.name }}</td>
                    <td>{{ Spell.school }}</td>
                    <td>{{ Spell.saveThrow }}</td>
                    <td>{{ Spell.effect }}</td>
                    <td><router-link :to="{name: 'EditSpell', params: { id: Spell._id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteSpell(Spell._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                Spells: []
            }
        },

        created: function()
        {
            this.fetchSpells();
        },

        methods: {
            fetchSpells()
            {
              let uri = 'http://localhost:4000/Spell';
              this.axios.get(uri).then((response) => {
                  this.Spells = response.data;
              });
            },
            deleteSpell(id)
            {
              let uri = 'http://localhost:4000/Spell/delete/'+id;
              this.Spells.splice(id, 1);
              this.axios.get(uri);
            }
        }
    }
</script>
