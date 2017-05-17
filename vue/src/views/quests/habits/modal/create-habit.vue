<template>
    <modal :show="show" modal-title="Create Habit" name="createHabit">
        <label for="name">Name</label>
        <input type="text" name="name" v-model="name" placeholder="Enter the name here" />
        <label for="desc">Description</label>
        <textarea name="desc" v-model="desc" placeholder="Enter the description here"></textarea>
        <label for="scale">Scale</label>
        <select name="scale" class="scales" v-model="scale">
            <option disabled>Choose a scale</option>
            <option value="DAILY">Daily</option>
            <option value="WEEKLY">Weekly</option>
            <option value="MONTHLY">Monthly</option>
            <option value="YEARLY">Yearly</option>
        </select>
        <input type="button" value="Cancel" @click="close" />
        <input type="button" value="Save" @click="save" />
    </modal>
</template>

<script>
import store from "@/stores"
import names from "@/stores/names"
import * as scaleTypes from "@/stores/modules/scale-types"
import modal from "@/components/modal"

const actions = {
    REMOVE_LAYER: `${names.module.APPLICATION}/${names.action.REMOVE_LAYER}`,
    CREATE_HABIT:  `${names.module.HABIT}/${names.action.CREATE_HABIT}`
}

export default {
    store,
    
    data() {
        return {
            name: "",
            desc: "",
            scale: scaleTypes.NONE
        }
    },

    computed: {
        show() {
            return this.$store.state.application.types.modal.createHabit
        }
    },

    methods: {
        close() {
            this.name = ""
            this.desc = ""
            this.scale = scaleTypes.NONE

            this.$store
                .dispatch(actions.REMOVE_LAYER)
                .then(() => console.log("Create habit modal closed."), failure => console.log("Failed to close create habit modal.", failure))
        },
        save() {
            this.$store
                .dispatch(actions.CREATE_HABIT, {
                    name: this.name,
                    desc: this.desc,
                    scale: this.scale
                })
                .then(this.close, failure => console.log("Failed to create a habit.", failure))
        }
    },

    components: {
        modal
    }
}
</script>

<style scoped>

</style>