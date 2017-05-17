<template>
    <button class="button" :class="typeClass" @click="click">{{ label }}</button>
</template>

<script>
import * as types from "@/components/btn-types"

export default {
    props: {
        label: {
            type: String,
            default: "Button"
        },
        type: {
            type: String,
            default() {
                return types.UNKNOWN
            }
        }
    },

    computed: {
        typeClass() {
            switch (this.type) {
                case types.DEFAULT:
                    return "_default"
                case types.CANCEL:
                    return "_cancel"
                default:
                    console.log(`A button type was invalid (Label: ${this.label})`)
                    return "_unknown"
            }
        }
    },

    methods: {
        click() {
            this.$emit("click")
        }
    }
}
</script>

<style scoped>
.button {
    padding: 5px 10px;
    color: #FFF;
    border: none;
    border-radius: 0;
}
.button._default {
    background-color: #42b983;
}
.button._cancel {
    background-color: #FF4040;
}
.button._unknown {
    background-color: #F00;
}
</style>