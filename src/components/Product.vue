<template>
 <div class="card" style="height: 100%">
          <h2>
cdcb        <!-- {{$route.params.id }} -->
    </h2>
    <!-- <a :href="'/product' + $route.params.id "></a> -->
        <div class="overflow-auto contenedor_card" 
        style="height:150px;">
            <a :href='product.uuid' ><img :src='product.image'
            class="card-img-top mx-auto d-block" 
            style="width:95% ; " alt="..."></a>
        </div>

        <div class="card-body">
             <h5 class="card-title">{{product.name}}</h5>
             <br>
            <p class="card-text">{{product.description}}</p>
        </div>

        <div class="p-4" >
            <a :href='product.url' target="_blank"
             rel="noopener noreferrer">
                <input type="button" value="Visit site" 
                class="btn btn-block border-dark pure-button 
                pure-button-active bg-white">
            </a>
        </div>    
    <br><br>
</div>
</template>

<script>

export default{
    data(){
        return{
            products:[]
        }
    },
    created(){
        this.getProducts();
    },
    methods: {
        getProducts() {
            // const url = this.baseUrlApi + 'directories'
            // const url_P = 
            // 'http://fundamentos.academlo.com/api/v1/categories/e9321038-184f-42d9-93cf-902d14f50eed/products'
           
            axios.get(url_P)
                .then(response => {
                    this.products = response.data
                })
                .catch(error => {
                    console.log(error.response)
                    alert('Tuvimos un error cargando la información')
                })
        },
    }
}
</script>