<template>
    <div>
        <h1>Classs</h1>

        <div class="row">
          <div class="col-md-8"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'Home' }" class="btn btn-primary">
                Go Back</router-link>
          </div>
          <div class="col-md-2">
            <router-link :to="{ name: 'CreateClass' }" class="btn btn-primary">Create Class</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Class Name</td>
                <td>Class Hit Dice</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="Class in Classs">
                    <td>{{ Class._id }}</td>
                    <td>{{ Class.className }}</td>
                    <td>{{ Class.hitDice }}</td>
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
                Classs: []
            }
        },

        created: function()
        {
            this.fetchClasss();
        },

        methods: {
            fetchClasss()
            {
              let uri = 'http://localhost:4000/Class';
              this.axios.get(uri).then((response) => {
                  this.Classs = response.data;
              });
            },
            deleteClass(id)
            {
              let uri = 'http://localhost:4000/Class/delete/'+id;
              this.Classs.splice(id, 1);
              this.axios.get(uri);
            }
        }
    }
</script>
