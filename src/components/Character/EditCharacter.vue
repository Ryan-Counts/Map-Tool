<template>
    <div>
        <h1>Update Character</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplayCharacter' }" class="btn btn-success">Return to Characters</router-link></div>
        </div>

        <form v-on:submit.prevent="updateCharacter">
            <div class="form-group">
                <label>Character Name</label>
                <input type="text" class="form-control" v-model="Character.name">
            </div>

            <div class="form-group">
                <label name="product_class">Character class</label>
                <input type="text" class="form-control" v-model="Character.class">
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                Character:{}
            }
        },

        created: function(){
            this.getCharacter();
        },

        methods: {
            getCharacter()
            {
              let uri = 'http://localhost:4000/Character/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.Character = response.data;
                });
            },

            updateCharacter()
            {
              let uri = 'http://localhost:4000/Character/update/' + this.$route.params.id;
                this.axios.post(uri, this.Character).then((response) => {
                  this.$router.push({name: 'DisplayCharacter'});
                });
            }
        }
    }
</script>
