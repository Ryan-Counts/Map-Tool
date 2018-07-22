<template>
    <div>
        <h1>Characters</h1>

        <div class="row">
          <div class="col-md-8"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'Home' }" class="btn btn-primary">
                Go Back</router-link>
          </div>
          <div class="col-md-2">
            <router-link :to="{ name: 'CreateCharacter' }" class="btn btn-primary">Create Character</router-link>
            <div></div>
            <router-link :to="{ name: 'CreateClass' }" class="btn btn-primary">Create Class</router-link>
          </div>
        </div><br />

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
                    <td>{{ Character.name }}</td>
                    <td>{{ Character.class }}</td>
                    <td><router-link :to="{name: 'EditCharacter', params: { id: Character._id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteCharacter(Character._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                Characters: []
            }
        },

        created: function()
        {
            this.fetchCharacters();
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
            }
        }
    }
</script>
