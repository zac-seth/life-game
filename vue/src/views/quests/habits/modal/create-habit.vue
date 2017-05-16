<template>
    <modal :show="show" modal-title="Create Habit">
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
import * as scaleTypes from "@/stores/modules/scale-types"
import modal from "@/components/modal"

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
            return this.$store.state.view.modal.show.createHabit
        }
    },

    methods: {
        close() {
            this.name = ""
            this.desc = ""
            this.scale = scaleTypes.NONE

            this.$store
                .dispatch("view/cancelView")
                .then(() => console.log("Create habit modal closed."), failure => console.log("Failed to close create habit modal.", failure))
        },
        save() {
            this.$store
                .dispatch("habits/createHabit", {
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