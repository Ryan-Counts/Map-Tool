<template>
    <div>
        <h1>Update Archetype</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplayArchetype' }" class="btn btn-success">Return to Archetypes</router-link></div>
        </div>

        <form v-on:submit.prevent="updateArchetype">
            <div class="form-group">
                <label name="class_name">Archetype Name</label>
                <input type="text" class="form-control" v-model="Archetype.className">
            </div>

            <div class="form-group">
                <label name="hit_dice">Archetype Hit Dice</label>
                <input type="text" class="form-control" v-model="Archetype.hitDice">
            </div>

            <div class="form-group">
                <label name="starting_wealth">Archetype Starting Wealth</label>
                <input type="text" class="form-control" v-model="Archetype.startingWealth">
            </div>

            <div class="form-group">
                <label name="classSkills">Archetype Skills</label>
                <div>PLACEHOLDER</div>
            </div>

            <div class="form-group">
                <label name="skillRanks">Skill Ranks Per Level</label>
                <input type="text" class="form-control" v-model="Archetype.skillRanks">
            </div>
            <div class="form-group">
                <label name="babType">BAB Progression</label>
                <input type="text" class="form-control" v-model="Archetype.babType">
            </div>
            <div class="form-group">
                <label name="baseSaves">Base Save Bonus</label>
                <input type="text" class="form-control" v-model="Archetype.baseSaves">
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
                Archetype:{},
                Abilities:[]
            }
        },

        created: function(){
            this.getArchetype();
            this.fetchAbilities();
        },

        methods: {
            getArchetype()
            {
              let uri = 'http://localhost:4000/Archetype/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.Archetype = response.data;
                });
            },
            updateArchetype()
            {
              let uri = 'http://localhost:4000/Archetype/update/' + this.$route.params.id;
                this.axios.post(uri, this.Archetype).then((response) => {
                  this.$router.push({name: 'DisplayArchetype'});
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
