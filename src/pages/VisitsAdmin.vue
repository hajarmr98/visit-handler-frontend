<template>
    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-200">
        <h1 class="text-2xl	text-blue-900 mb-10 mt-10">Dashboard</h1>
        <VisitVue
         v-for="item in listItems"
         :item="item"
         ></VisitVue>
    </main>
</template>

<script>
  import { getAllVisits } from "../services"
  import VisitVue from "../components/Visit.vue";
  import moment from "moment"

  export default {
    name: 'VisitsAdmin',
    components: {
        VisitVue
    },
    data() {
      return {
        listItems: []
      }
    },
    methods: {
      async getData() {
        const res = await getAllVisits();
        this.listItems = res.data;
        this.listItems.map((x, i) => this.listItems[i].date = moment(x.date).format("DD/MM/YY"))
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>