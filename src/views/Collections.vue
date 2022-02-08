<template>
  <div class="h-screen w-full">
    <section class="my-8 mx-16">
      <div class="flex justify-between">
        <div>
          <h1 class="text-3xl font-bold underline">
            {{ title }}
            <br />
            {{ subtitle }}
          </h1>
        </div>
        <div>
            <ul class="flex pl-0 list-none rounded my-2">
              <li v-show="index > 1" class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200" style="cursor: pointer;">
                <a class="page-link" v-on:click="previousPage()">Previous page</a>
              </li>
              <li class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 hover:bg-gray-200">
                <a class="page-link" href="#">{{index}}</a>
              </li>
              <li v-show="index < 5" class="focus:pointer-events-auto relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200" style="cursor: pointer;">
                <a class="page-link"  v-on:click="nextPage()">Next page</a>
              </li>
            </ul>
        </div>
      </div>
    </section>
    <section class="my-8 mx-16">
      <div class="container">
        <div class="grid grid-cols-4 gap-16">
          
          <div v-for="tshirt in collection" :key="tshirt.id" class="w-full h-full">
            <router-link 
            :to="{name:'Article', 
            params:{
              titre: tshirt.name, 
              prix: tshirt.price, 
              img: tshirt.imageURL,
              flag: tshirt.flag,
              description: tshirt.description,
              id: tshirt.id, 
              }}">
              <CardArticle
                :titre="tshirt.name"
                :prix="tshirt.price"
                :img="tshirt.imageURL"
                :flag="tshirt.flag"
                :description="tshirt.description"
                :id="tshirt.id"
              />
            </router-link>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import EventService from '../services/EventService'
import CardArticle from '../components/subcomponent/CardArticle.vue'
import Pagination from '../components/subcomponent/pagination.vue'

export default {
  name: 'Collections',
  components: {
    CardArticle,
    Pagination
},
  props: {
    title: String,
    subtitle: String,
    id: String,
  },
  data() {
    return {
      collection: [],
      index: 1,
      // isActive: true,
    }
  },

  mounted() {
    EventService.getEvents()
      .then(response => {
        this.collection = response.data
      })
      .catch(error => {
        console.error(error)
      })
      .then(console.log('se termino esta llamada'))
  },
  methods: {
    nextPage: function () {
      console.log(this.collection)
      if (this.collection.length !== 0 ){
        this.index += 1
        EventService.getEvent(this.index)
        .then(response => {
          this.collection = response.data
        })
        .catch(error => {
          console.error(error)
        })
        .then(console.log('siguiente pagina'))
      } else {
        // this.isActive = false
      }
    },
      previousPage: function () {
      this.index -= 1
      EventService.getEvent(this.index)
      .then(response => {
        this.collection = response.data
      })
      .catch(error => {
        console.error(error)
      })
      .then(console.log('siguiente pagina'))
    },
  },
}
</script>


