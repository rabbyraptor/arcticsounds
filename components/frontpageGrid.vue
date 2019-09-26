<template>
    <div class="frontpage-grid">
        <div class="left">
            <div class="grid-image" v-for="image in leftColumnImages" :key="image.title" :style="{ backgroundImage: 'url(' + image.url + ')' }"><h2>{{ image.title }}</h2></div>
        </div>
        <div class="right">
            <div class="grid-image" v-for="image in rightColumnImages" :key="image.title" :style="{ backgroundImage: 'url(' + image.url + ')' }"><h2>{{ image.title }}</h2></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            leftColumnImages:[
                { title: "Atsinnermiut", url: "/img/fp-grid/atsinnermiut.jpg"},
                { title: "Get to know Sisimiut", url: "/img/fp-grid/get_to_know_sisimiut.jpg"},
                { title: "Guest experience", url: "/img/fp-grid/guest_experience.jpg"}
            ],
            rightColumnImages:[
                { title: "Vibeke Falden Homesession", url: "/img/fp-grid/vibeke_falden.jpg"},
                { title: "Da Bartali Crew", url: "/img/fp-grid/da_bartali_crew.jpg"}
            ]
        }
    }
}
</script>