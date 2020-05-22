<template>
    <div class="item" :class="{
                    active: compiled,
                    dimatest: true,
                }">
        <div class="text">
            <div v-if="editable">
                <input @keyup="inputHandler" type="text" :value="text">
            </div>
            <div v-else>
                {{ text }}
            </div>
        </div>
        <div class="actions">
            <i class="fas fa-check" @click="checkedUnchecked"></i>
            <i class="far fa-edit" @click="edit"></i>
            <i class="far fa-trash-alt" @click="remove"></i>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            text: {
                type: String,
                required: true
            },
            compiled: {
                type: Boolean,
                required: true
            },
            index: {
                type: Number,
                required: true
            }
        },
        methods: {
            checkedUnchecked: function () {
                this.$parent.items[this.index].compiled = !this.$parent.items[this.index].compiled;
            },
            edit: function () {
                this.editable = true;
            },
            inputHandler: function (e) {
                if (e.keyCode === 13) {
                    this.editable = false;
                    this.$parent.items[this.index].text = e.target.value;
                }
            },
            remove: function () {
                console.log(this.index);
                this.$parent.items.splice(this.index, 1)
            }
        },
        data(){
            return {
                editable: false
            }
        }
    }
</script>