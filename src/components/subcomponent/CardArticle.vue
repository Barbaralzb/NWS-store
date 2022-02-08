<template>
    <div class="shadow-lg bg-white rounded-lg relative w-full h-full">
        <div
            v-show="flag"
            class="rounded-full w-12 h-12 bg-rose-600 rotate-12 absolute top-0 right-0 flex justify-center items-center"
        >
            <span class="font-bold text-white">{{ flag }}</span>
        </div>
        <div class="card-image p-4 flex justify-center">
            <figure class="image is-4by3">
                <img :src="img" />
            </figure>
        </div>
        <div class="card-content p-4">
            <div class="flex justify-between mb-4 font-bold">
                <h3 class="mr-2">{{ titre }}</h3>
                <span class="text-normal">{{ prix }}</span>
            </div>
            <div class="flex items-end">
                <p class="text-sm">{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script>


export default {


    name: "CardArticle",
    props: {
        titre: String,
        img: String,
        flag: String,
        description: String,
        prix: String,
        id: String
    },
    data() {

        return {
            article: {},
        }
    },

}
</script>
