<template>
    <!-- Derived from: https://adamwathan.me/2016/01/04/composing-reusable-modal-dialogs-with-vuejs/ -->
    <div class="modal-mask" @click.stop="close" v-show="show" :close="close">
        <section class="modal-container" @click.stop>
            <h3 class="modal-title">{{modalTitle}}</h3>
            <div class="modal-body">
                <slot></slot>
            </div>
        </section>
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
        "onClose", 
        "modalTitle", 
        "name",
        "show"
    ],
    
    methods: {
        close() {
            this.$store
                .dispatch(actions.REMOVE_LAYER, this.name)
        }
    }
}
</script>

<style scoped>
.modal-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
}

.modal-container {
    flex: 0;
    background-color: #FFF;
    box-shadow: 0px 0px 11px 0px rgba(51, 51, 51, 0.75);
}
.modal-title {

}
.modal-body {
    padding: 20px;
}
</style>