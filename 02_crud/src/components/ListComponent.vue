<template>
    <div>
        <h1>Listado</h1>
        
        <p v-for="a in animes.data" :key="a">
            {{ a['attributes']['titles']['ja_jp'] }}
        </p>

    </div>
</template>



<script>
import { getAnime } from '@/helpers/animes.js'

export default {
    async mounted(){
        this.animes = await getAnime()
    },
    data(){
        return{
            animes:[]
        }
    },
    methods:{

    }
}
</script>