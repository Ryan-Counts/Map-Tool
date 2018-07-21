<template>
    <div>
        <h1>Create Ability</h1>
        <form v-on:submit.prevent="addAbility">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="text" class="form-control" v-model="Ability.abilityName">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Effect:</label>
                        <input type="text" class="form-control col-md-6" v-model="Ability.effect" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Level Dependant:</label>
                        <input type="checkbox" class="form-control col-md-6" v-model="Ability.levelDependant" />
                    </div>
                </div>
            </div>
            <div class="row" v-if="Ability.levelDependant">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Level Effect:</label>
                        <input type="text" class="form-control" v-model="Ability.levelEffect">
                    </div>
                </div>
            </div>
            <br />
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
                Ability:{}
            }
        },
        methods: {
            addAbility(){
                let uri = 'http://localhost:4000/Ability/add';
                this.axios.post(uri, this.Ability).then((response) => {
                    this.$router.push({name: 'DisplayAbility'})
                })
            }
        }
    }
</script>
