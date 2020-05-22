<template>
    <div class="input">
        <div v-if="icon" class="icon"><i class="fas" v-bind:class="'fa-'+icon"></i></div>
        <input @input="changeInput" :type="type" placeholder="Новая задача">
    </div>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
            },
            type: {
                type: String,
                default: 'text'
            },
            placeholder: {
                type: String,
                default: 'Введите...'
            }
        },
        methods: {
            changeInput: function (event) {
                this.$emit('input', event.target.value);
            }
        },
    }
</script>

<style scoped lang="scss">
    .input {
        position: relative;
        border-bottom: 2px solid darken(#fff, 70%);
        color: #fff;
        select {
            padding: 10px 15px;
            background: none;
            option {
                color: #fff
            }
        }
        input {
            padding: 10px 15px 10px 25px;
            background: none;
            border: none;
            color: #fff;
            &:focus {
                outline: none;
            }
        }
        .icon {
            position: absolute;
            left: 0;
            top: 20%;
            opacity: .4
        }
    }
</style>