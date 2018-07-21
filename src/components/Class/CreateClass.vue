<template>
    <div>
        <h1>Create Class</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplayClass' }" class="btn btn-success">Return to Classs</router-link></div>
        </div>

        <form v-on:submit.prevent="addClass">
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
                <input type="text" class="form-control" v-model="Class.proficiencies">
            </div>
            <div class="form-group">
                <label name="levelAbilities">Abilities from Leveling Progression</label>
                <div>PLACEHOLDER GOD REST MY SOUL</div>
            </div>


            <div class="form-group">
                <button class="btn btn-primary">Create</button>
            </div>
        </form>
    </div>
</template>
<script>
  export default {
    data(){
        return{
          Class:{}
        }
    },
    methods: {
      addClass(){
        let uri = 'http://localhost:4000/Class/add';
        this.axios.post(uri, this.Class).then((response) => {
          this.$router.push({name: 'DisplayClass'})
        })
    }
  }
}
</script>
