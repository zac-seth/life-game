<template>
    <!-- Derived from: https://adamwathan.me/2016/01/04/composing-reusable-modal-dialogs-with-vuejs/ -->
    <div class="layer" v-show="show" :close="close">
        <slot></slot>
    </div>
</template>

<script>
import store from "@/stores"
import names from "@/stores/names"

const actions = {
    REMOVE_LAYER: `${names.module.APPLICATION}/${names.action.REMOVE_LAYER}`
}

export default {
    store,

    props: [
        "show"
    ],

    methods: {
        close() {
            this.$store
                .dispatch(actions.REMOVE_LAYER, {})
        }
    }
}
</script>

<style scoped>

</style>