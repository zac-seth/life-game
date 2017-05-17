<template>
    <nav class="shortcuts">
        <btn class="shortcut" @click="open('habits')" :type="btnType" label="Habits"></btn>
    </nav>
</template>

<script>
import store from "@/stores"
import names from "@/stores/names"
import btn from "@/components/btn"
import * as btnTypes from "@/components/btn-types"

const actions = {
    DISPLAY_LAYER: `${names.module.APPLICATION}/${names.action.DISPLAY_LAYER}`
}

const getters = {
    LAYER_TYPES: `${names.module.APPLICATION}/${names.getter.LAYER_TYPES}`
}

console.log(getters)

export default {
    store,

    data() {
        return {
            btnType: btnTypes.DEFAULT,
            cancelBtnType: btnTypes.CANCEL
        }
    },

    components: {
        btn
    },

    methods: {
        open(layerName) {
            this.$store.dispatch(actions.DISPLAY_LAYER, { name: layerName, type: this.$store.getters[getters.LAYER_TYPES].WINDOW })
        }
    }
}
</script>

<style scoped>
.shortcuts {

}
.shortcut {

}
</style>