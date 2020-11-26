<template>
    <div id="app">
        <input v-model="message">
        <button v-on:click="add">add</button>
        <ol>
            <li v-for="todo in todos">
                {{ todo.text}}
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        el: '#app',
        data () {
            return {
                todos: []
            }
        },
        methods: {
            add: function () {
            this.todos.push({ text: this.message})
            }
        }
    }
</script>