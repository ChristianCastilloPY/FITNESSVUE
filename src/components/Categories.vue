<template>

  <div class="categories " id="APP">
    <h4>Categories</h4>
    <!-- Search form -->

    <form class="form-inline md-form form-sm mb-3">
      <input class="form-control form-control-sm mr-3 shadow-none search"
       type="text" placeholder="Browse categories"
        aria-label="Search"/>
      <i class="fas fa-search icon-search" aria-hidden="true"></i>
    </form>

    <div v-for="(category, index) in categories.categories" :key="index" 
    id="div-category" class="col-sm-3 mt-4" style="width: 23%; margin-right: 10px ">

      <div class="card-deck"   v-if="index < 5">
        <div class="overlay"></div>
        <a :href="'/category.html' + category.uuid" class="text-white">
          <img class="card-img-top" src="https://fotos.subefotos.com/2b0513b2a20f11aef266dde89ba4aa9bo.jpg" alt="Card image" />

          <div class="card-img-overlay pl-1 text-left" style="padding: 0;">
            <span class="glyphicon pt-2 icon-size-card" id="specialIcon">&#xe012;</span>
            <h4 class="card-title" style="margin-bottom: 0">{{category.name}}</h4>
            <p class="card-text" id="listings">12 listings</p>
          </div>
          
        </a>
      </div>
                <!-- <card-categories :category="category" v-if="index > 4 && index < 8"></card-categories> -->

     <div class="card-deck" v-if="index > 4 && index < 8"  >
             <div class="overlay"></div>

        <a :href="'/category.html' + category.uuid" class="text-white">
          <img class="card-img-top" src="https://fotos.subefotos.com/2b0513b2a20f11aef266dde89ba4aa9bo.jpg" 
          alt="Card image" />

          <div class="card-img-overlay pl-1 text-left" style="padding: 0;">
            <span class="glyphicon pt-2 icon-size-card" id="specialIcon">&#xe012;</span>
            <h4 class="card-title" style="margin-bottom: 0">{{category.name}}</h4>
            <p class="card-text" id="listings">12 listings</p>
          </div>

        </a>
      </div>

    </div>
  </div>

</template>

<script>
export default{
    data(){
        return{
            categories:[]
        }
    },
    created(){
        this.getCategories();
    },
    methods: {
        getCategories() {
            // const url = this.baseUrlApi + 'directories'
            const URL_C =
    'http://fundamentos.academlo.com/api/v1/directories/1cf59506-c22e-4037-858c-d8d517f44e6f/categories'

            axios.get(URL_C)
                .then(response => {
                    this.categories = response.data
                                        console.log(this.categories.categories)

                })
                .catch(error => {
                    console.log(error.response)
                    alert('Tuvimos un error cargando la información')
                })
        },
    }
}
</script>