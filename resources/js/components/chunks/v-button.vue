<template>
    <button @click="e => this.$emit('click', e)" :disabled="active">
        <span class="icon"><i class="fas" :class="'fa-' + icon"></i></span>
        <span class="text"><slot></slot></span>
    </button>
</template>

<script>
    export default {
        props:{
            icon: {
                type: String
            },
            active: {
                type: Boolean,
                default: true
            },
            text: {
                type: String,
                default: '',
            }
        }
    }
</script>

<style lang="scss" scoped>
    button {
        background: #3ce09d;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: #000;
        padding: 10px 15px;
        margin-top: 10px;
        transition: .25s;
        box-shadow: 2px 5px 10px rgba(#3ce09d, 0.5);
        &:hover {
            background: darken(#3ce09d, 20%);
            box-shadow: 1px 2px 10px rgba(#3ce09d, 0.5);
        }
    }
</style>