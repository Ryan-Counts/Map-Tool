<template>
    <div>
        <h1>Update Spell</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplaySpell' }" class="btn btn-success">Return to Spells</router-link></div>
        </div>

        <form v-on:submit.prevent="updateSpell">
            <div class="form-group">
                <label name="class_name">Spell Name</label>
                <input type="text" class="form-control" v-model="Spell.className">
            </div>

            <div class="form-group">
                <div>Spell Lists</div>
            </div>

            <div class="form-group">
                <label name="spell_school">Spell School</label>
                <input type="text" class="form-control" v-model="Spell.school">
            </div>

            <div class="form-group">
                <div>To Be Worked On</div>
                <label name="spell_subschool">Spell Subschools</label>
                <input type="text" class="form-control" v-model="Spell.subSchool">
            </div>

            <div class="form-group">
                <label name="spell_range">Spell Range</label>
                <input type="text" class="form-control" v-model="Spell.range">
            </div>

            <div class="form-group">
                <label name="spell_target">Spell Target</label>
                <input type="text" class="form-control" v-model="Spell.target">
            </div>

            <div class="form-group">
                <label name="spell_area">Spell Area</label>
                <input type="text" class="form-control" v-model="Spell.area">
            </div>

            <div class="form-group">
                <label name="spell_duration">Spell Duration</label>
                <input type="text" class="form-control" v-model="Spell.duration">
            </div>

            <div class="form-group">
                <label name="spell_saveThrow">Saving Throws</label>
                <input type="text" class="form-control" v-model="Spell.spell_saveThrow">
            </div>

            <div class="form-group">
                <label name="spell_spellResistance">Spell Resistance</label>
                <input type="checkbox" class="form-control" v-model="Spell.spell_spellResistance">
            </div>

            <div class="form-group">
                <label name="spell_effect">Effect</label>
                <input type="text" class="form-control" v-model="Spell.effect">
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
                Spell:{},
                Abilities:[]
            }
        },

        created: function(){
            this.getSpell();
            this.fetchAbilities();
        },

        methods: {
            getSpell()
            {
              let uri = 'http://localhost:4000/Spell/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.Spell = response.data;
                });
            },
            updateSpell()
            {
              let uri = 'http://localhost:4000/Spell/update/' + this.$route.params.id;
                this.axios.post(uri, this.Spell).then((response) => {
                  this.$router.push({name: 'DisplaySpell'});
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
