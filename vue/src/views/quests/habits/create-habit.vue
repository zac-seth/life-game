<template>
    <modal :show="show" modal-title="Create Habit">
        <label for="scale">Scale</label>
        <select name="scale" class="scales">
            <option>Choose one</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
        </select>
        <input type="button" value="Close" @click="close" />
    </modal>
</template>

<script>
import store from "@/stores"
import modal from "@/components/modal"

export default {
    store,
    
    data() {
        return {
            name: "",
            desc: "",
            scale: ""
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
            this.scale = ""


        },
        save() {
            this.$store
                .dispatch("habits/createHabit", {
                    name: this.name,
                    desc: this.desc,
                    scale: this.scale
                })
                .then(() => {
                    this.close();
                }, failure => {
                    // Handle validation/other errors here.
                })
        }
    },

    components: {
        modal
    }
}
</script>

<style scoped>

</style>