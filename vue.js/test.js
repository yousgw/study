let app = new Vue({
    el: "#app",//el = element
    data: {
        error:true,
        message: "Test"
    }
})

let app4 = new Vue({
    el: '#app-4',
    data: {
      tests: []
    }
})

app4.tests.push({ text: 'New item' })

let app5 = new Vue({
el: '#app-5',
data: {
    message: 3
},
methods: {
    countUp: function () {
    this.message++;
    }
}
})

let app6 = new Vue({
el: '#app-6',
data: {
    message: ''
}
})

let app2 = new Vue({
    el: '#app2',
    data: {
        todos: []
    },
    methods: {
        add: function () {
            app2.todos.push({ text: this.message})
        }
    }
})