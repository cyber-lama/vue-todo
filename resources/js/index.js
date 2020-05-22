import Vue from 'vue';
import Store from "./Store";
import vButton from "./components/chunks/v-button"

//Подключение шаблонов
const files = require.context('./components', false, /\.vue$/i);
files.keys().map(function (key) {
    Vue.component(key.split('/').pop().split('.')[0], files(key).default)
});

Vue.component('v-button', vButton);
let app = new Vue({
    el: '#app',
    data: Store,
    methods: {
        addTodo: function () {
            console.log("click");
            this.todoLists.push({
                title: 'Список задач',
                items: []
            })
        }
    } 
});