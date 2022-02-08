<template>
  <div class="h-screen w-full">
    <section class="m-8">
      <div class="flex justify-between">
        <div>
          <h1 class="text-3xl font-bold underline">
            {{ title }}
            <br />
            {{ subtitle }}
          </h1>
        </div>
      </div>
    </section>
    <section class="m-8">
      <div class="container">
        <div class="grid grid-cols-4 gap-12">
          
          <div v-for="tshirt in collection">
            <router-link to="/Article">
              <CardArticle
                :key="tshirt.id"
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

export default {
  name: 'Collections',
  components: {
    CardArticle,
  },
  props: {
    title: String,
    subtitle: String,
  },
  data() {
    return {
      collection: {},
    }
  },

  mounted() {
    EventService.getEvents()
      .then(response => {
        this.collection = response.data

        // this.collection.forEach(async (element, i) => {
        //   i++
        //   await EventService.getEvent(element.name)
        //     .then(response => {
        //       this.cards[i] = response.data
        //     })
        //     .catch(error => {
        //       console.error(error)
        //     })
        // })
      })
      .catch(error => {
        console.error(error)
      })
      .then(console.log('se termino esta llamada'))
  },
}
</script>


