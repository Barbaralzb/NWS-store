<template>
    <div class="h-screen w-full">
        <div class="flex justify-center items-center shadow-lg bg-white rounded-lg m-12 mt-24">
            <div class="flex">
                <div class="card-image p-4 flex justify-center">
                    <figure class="image is-4by3">
                        <img :src="img" />
                    </figure>
                </div>
                <div class="card-content flex items-center p-4">
                    <div class="flex flex-col mb-4">
                        <h1 class="mr-2 text-xl text-center font-bold">{{ titre }}</h1>
                        <span class="text-normal">{{ description }}</span>
                        <p class="text-sm text-center bottom-10 roudend-lg text-2xl font-bold">{{ prix }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ArticlePage',
    props: {
        titre: String,
        prix: String,
        img: String,
        flag: String,
        description: String,
        id: String,
    },

}

</script>


