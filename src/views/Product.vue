<template>
<!-- descripcion -->
<section>
<div class="col-md-6 width_90 min_height_400 
            position-relative">
        <div class=" position-relative" style="min-height:330px;">
            <h1 class="card-title font-weight-bold" id="title">
            {{products.name}}
            </h1>
            <h4 class="card-text light mr-5 font-weight-bolder 
            text-black-50" style="font-size: 1.7rem;" 
            id="description"> 
            {{products.description}}
            </h4>
        </div>
        <div class="mt-5 position-relative">
            <div class="d-flex flex-wrap">
                <div class="mb-3 mr-5">
                    <a :href="products.url" class="btn btn-light border-dark"
                     target="_blank" 
                    id="url-product"> Visit Website </a>
                </div>
                <div class="d-flex ml-5 mt-1 justify-content-end" 
                style="width: 50%;">
                    <p>Share</p>
                    <div class="ml-3">
                        <i class="fab fa-facebook-f border rounded-circle
                         border-dark 
                            pr-3 pl-3 pt-2 pb-2 "></i>
                    </div>
                    <div class="ml-3">
                        <i class="fab fa-twitter border rounded-circle
                         border-dark 
                        pr-2 pl-3 pt-2 pb-2"></i>
                    </div>
                </div>
            </div>   ​
        </div>            ​
</div>
<!-- imagen -->
<div class="col-md-6 overflow-auto card 
        contenedor_card mb-5 mx-auto mt-5"
         style="min-height:400px;">
        <img :src="products.image" class="card-img-top 
        d-block position-absolute mx-auto" 
        style="width:100%; " alt="..." id="img">
    </div>  
</section>
</template>

<script>
export default{
   data(){
        return{
            products:[],
        }
    },
    mounted(){
        this.getProducts();
    },
      methods: {
   getProducts() {
            // const url = this.baseUrlApi + 'directories'
            var urlFromHome = window.location.href
            var uid = urlFromHome.split('?')
            
            const URL_P= `http://fundamentos.academlo.com/api/v1/products/${uid[1]}`
                       
            axios.get(URL_P)
                .then(response => {
                    this.products = response.data
                })
                .catch(error => {
                    console.log(error.response)
                    alert('Tuvimos un error cargando la información')
                })
        }
      }
}
</script>


