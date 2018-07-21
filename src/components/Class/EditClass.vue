<template>
    <div>
        <h1>Update Class</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplayClass' }" class="btn btn-success">Return to Classs</router-link></div>
        </div>

        <form v-on:submit.prevent="updateClass">
            <div class="form-group">
                <label name="class_name">Class Name</label>
                <input type="text" class="form-control" v-model="Class.className">
            </div>

            <div class="form-group">
                <label name="hit_dice">Class Hit Dice</label>
                <input type="text" class="form-control" v-model="Class.hitDice">
            </div>

            <div class="form-group">
                <label name="starting_wealth">Class Starting Wealth</label>
                <input type="text" class="form-control" v-model="Class.startingWealth">
            </div>

            <div class="form-group">
                <label name="classSkills">Class Skills</label>
                <div>PLACEHOLDER</div>
            </div>

            <div class="form-group">
                <label name="skillRanks">Skill Ranks Per Level</label>
                <input type="text" class="form-control" v-model="Class.skillRanks">
            </div>
            <div class="form-group">
                <label name="babType">BAB Progression</label>
                <input type="text" class="form-control" v-model="Class.babType">
            </div>
            <div class="form-group">
                <label name="baseSaves">Base Save Bonus</label>
                <input type="text" class="form-control" v-model="Class.baseSaves">
            </div>
            <div class="form-group">
                <label name="proficiencies">Weapon and Armor Proficiencies</label>
                <input type="text" class="form-control" v-model="proficiencies">
            </div>
            <div class="form-group">
                <label name="levelAbilities">Abilities from Leveling progression</label>
                <div>PLACEHOLDER GOD REST MY SOUL</div>
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
                Class:{},
                Abilities:[]
            }
        },

        created: function(){
            this.getClass();
            this.fetchAbilities();
        },

        methods: {
            getClass()
            {
              let uri = 'http://localhost:4000/Class/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.Class = response.data;
                });
            },
            updateClass()
            {
              let uri = 'http://localhost:4000/Class/update/' + this.$route.params.id;
                this.axios.post(uri, this.Class).then((response) => {
                  this.$router.push({name: 'DisplayClass'});
                });
            },
            fetchAbilities()
            {
                let uri = 'http://localhost:4000/Abilities';
                this.axios.get(uri).then((response) => {
                this.Abilities = response.data;
              });
            }
        }
    }
</script>
