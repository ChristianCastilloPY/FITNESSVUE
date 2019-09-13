<template>
    <div>
        <div v-for="directory in directories" :key="directory.id">
            <h2>Esta es la ruta para mostrar al usuario con el id {{ $route.params.id }}</h2>
        </div>
    </div>
</template>
<script>
    export default {
        created() {
            this.getDirectories()
        },
        methods: {
            getDirectories() {
                const url = 'http://fundamentos.academlo.com/api/v1/directories'
                axios.get(url)
                    .then(response => {
                        this.directories = response.data
                    })
                    .catch(error => {
                        alert('Tuvimos un error accediendo a la información')
                        console.log(error.response)
                    })
            }
        },
        data() {
            return {
                directories: []
            }
        }
    }
</script>