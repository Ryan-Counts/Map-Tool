<template>
  <div>
    <div>
        <h1>Home</h1>

        <div class="row">
          <div class="col-md-2">
            <router-link :to="{ name: 'DisplayCharacter' }" class="btn btn-primary">Characters</router-link>
          </div>
          <div class="col-md-2">
            <router-link :to="{ name: 'DisplayClass' }" class="btn btn-primary">Classes</router-link>
          </div>
          <div class="col-md-2">
            <router-link :to="{ name: 'DisplayAbility' }" class="btn btn-primary">Abilities</router-link>
          </div>
          <div class="col-md-2">
            <router-link :to="{ name: 'DisplayArchetype' }" class="btn btn-primary">Archetype</router-link>
          </div>
          <div class="col-md-2">
            <router-link :to="{ name: 'DisplaySkill' }" class="btn btn-primary">Skill</router-link>
          </div>
          <div class="col-md-2">
            <router-link :to="{ name: 'DisplaySpell' }" class="btn btn-primary">Spell</router-link>
          </div>
        </div><br />
    </div>

    <h2>Characters</h2>

    <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Character Name</td>
                <td>Character Class</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="Character in Characters">
                    <td>{{ Character._id }}</td>
                    <td>{{ Character.charName }}</td>
                    <td>{{ Character.class }}</td>
                    <td><router-link :to="{name: 'EditCharacter', params: { id: Character._id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteCharacter(Character._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
        <br />
    <h2>Classes</h2>

    <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Class Name</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="Class in Classes">
                    <td>{{ Class._id }}</td>
                    <td>{{ Class.className }}</td>
                    <td><router-link :to="{name: 'EditClass', params: { id: Class._id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteClass(Class._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
        </div>
</template>

<script>

    export default {
        data(){
            return{
                Characters: [],
                Classes: []
            }
        },

        created: function()
        {
            this.fetchCharacters();
            this.fetchClasses();
        },

        methods: {
            fetchCharacters()
            {
              let uri = 'http://localhost:4000/Character';
              this.axios.get(uri).then((response) => {
                  this.Characters = response.data;
              });
            },
            deleteCharacter(id)
            {
              let uri = 'http://localhost:4000/Character/delete/'+id;
              this.Characters.splice(id, 1);
              this.axios.get(uri);
            },
            fetchClasses()
            {
              let uri = 'http://localhost:4000/Class';
              this.axios.get(uri).then((response) => {
                this.Classes = response.data;
              });
            }
        }
    }
</script>
