<template>
    <div id="app">
        <!-- browse categori -->

         <div class="container-fluid text-black intro-2 ">
            <div class="row">
                <h1 class="titulo">
                    A curated directory with the best resources and products for a healthy lifestyle.
                     Your Fitness. Reloaded.
                </h1>
            </div>

        <div class="mi-div">
            <!-- <div style="display: inline;"> -->
            <div class="searching"><input type="text" class="form-control busqueda" 
                placeholder="Search Tool or Resource"  />
                <span class="glyphicon glyphicon-search icono"></span></div>
            <div><p class="texto">or</p></div>

            <div class="elboton">
                <a href="explore"><button type="button" class="white">
                    Browse Categories</button></a>
            </div>

        </div>
    
    </div> 

<!-- products & categories -->
        <!-- products -->
<section>
 <div class="feautured " id="product">
    <div class="row" style="width: 97%">

        <div v-for="(product,index) in products.products" :key="index" class="col-md-4 mt-4" >
            <div class="card" style="height: 100%" 
            v-if="index < 3">

                <div class="overflow-auto contenedor_card" 
                style="height:150px;">
                    <a :href=" '/product' + '?' + product.uuid " >
                        <img :src=" product.image " 
                    class="card-img-top mx-auto d-block" 
                        style="width:95% ; " alt="..."></a>
                </div>

                <div class="card-body">
                        <h5 class="card-title">{{product.name}}</h5>
                     <br>
                    <p class="card-text">{{product.description}}</p>
                </div>

                <div class="p-4"><a :href="product.url" target="_blank"
                 rel="noopener noreferrer">
                    <input type="button" value="Visit site" class="btn btn-block border-dark pure-button 
                    pure-button-active bg-white"></a>
                </div>

                <br><br>
            </div>      
        </div>

    </div>           
</div>

    <!-- categories -->


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

        <a :href="'/category' +'?' + category.uuid" class="text-white">
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

        <a :href="'/category' +'?' + category.uuid" class="text-white">
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


</section>

    </div>        
</template>


<script>