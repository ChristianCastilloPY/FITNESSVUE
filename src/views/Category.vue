<template>
     <section>
            <!-- Code of Cristian -->

            <div class="feautured">
                <h4 id="nameCategory"></h4>
                <div class="row">
                    <div v-for="(product, index) in products.products" :key="index" class="col-md-4 mt-4" style="min-width: 30%">
  <div class="card" style="height: 100%">
        <div class="overflow-auto contenedor_card" style="height:150px;">
            <a :href='product.url' ><img :src='product.image'
            class="card-img-top mx-auto d-block" 
            style="width:95% ; " alt="..."></a>
        </div>
        <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <br>
            <p class="card-text">{{product.description}}</p>
        </div>

        <div class="p-4">
            <a :href='product.url' target="_blank"
            rel="noopener noreferrer">
                <input type="button" value="Visit site" class="btn btn-block border-dark pure-button 
                pure-button-active bg-white">
            </a>
        </div>
    <br><br>
    </div>
                    </div>        
                </div>
            </div>
        </section>
</template>
<script>
export default {
    data(){
        return{
            products:{
                products: []
            }
        }
    },
    mounted() {
        this.getProducts()
    },
        methods: {
        getProducts(){
            const urlFromHome = window.location.href
            const uid = urlFromHome.split('?')
            const URL_C = `http://fundamentos.academlo.com/api/v1/categories/${uid[1]}/products`
            const name = document.getElementById('nameCategory')
            
            axios.get(URL_C)
                .then(response => {
                    this.products = response.data
                    // console.log(this.products.name)
                    name.textContent = this.products.name
                })
                .catch(error => {
                    console.log(error.response)
                    alert('Existe un problema al cargar la información solicitada.')
                })
        }
    }
}
</script>
