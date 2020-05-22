<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <div class="form">
            <vInput v-model="newtask" icon="users" ></vInput>
            <vButton @click="addNewItem" icon="sync" :active="false">Создать</vButton>
        </div>
        <div class="list">
            <todo_item v-for="(item, index) in items"
                       :compiled="item.compiled"
                       :text="item.text"
                       :index="index"
                       :key="item.id"></todo_item>
        </div>
    </div>
</template>

<script>
    import vInput from './chunks/v-input';
    import vButton from './chunks/v-button';
    import todo_item from './chunks/todo-item';

    export default {
        components: {vInput, vButton, todo_item},
        props: {
            title: {
                type: String,
                default: 'Нет названия'
            },
            items: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                newtask: '',
            }
        },
        mounted() {

        },
        methods: {
            addNewItem: function () {
                console.log('test');
                this.items.unshift({
                    id: this.items.length + 1,
                    text: this.newtask,
                    compiled: true,
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>