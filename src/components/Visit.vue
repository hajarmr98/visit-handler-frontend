<template>
    <section class="flex flex-row p-6">
        <section class="flex flex-col bg-gray-100 p-6 rounded shadow-sm" style="width: 500px;" >
            <article class="flex-row-between mb-5">
                <p>Fecha: {{ item.date }}</p>
                <p :class="item.status === 1 ? 'text-green' : item.status === 2 ? 'text-red' : ''">{{ item.status === 1 ? "Visita aprobada" : item.status === 2 ?  "Visita rechazada" : "" }}</p>
            </article>
            <section>
                    <p class="mb-2">{{ item.visitor_name }}</p>
                    <p class="mb-2">{{ item.visitor_identification }}</p>
                    <p class="mb-2">{{ item.startup }}</p>
                    <p class="mb-2">{{ item.petitioner_name }}</p>
                    <p class="mb-2">{{ item.petitioner_email }}</p>
            </section>
        </section>
        <section v-if="!item.status" class="flex flex-col p-6 items-center justify-center flex-1">
            <img name="aprove" v-on:click="(e) => handleAction(e, item.id)" class="items-between hover:w-10 rounded" style="cursor: pointer; width: 29px; height: 29px; margin: 15px;" src="../assets/icons/check.png" alt="Aprobar"/>
            <img name="reject" v-on:click="(e) => handleAction(e, item.id)" class="items-between hover:w-10 rounded" style="cursor: pointer; width: 24px; height: 24px; margin: 15px;" src="../assets/icons/borrar.png" alt="Rechazar"/>
        </section>
        <section v-else style="width: 105px;"></section>
    </section>
</template>
  
<script>
import { approveVisit, rejectVisit } from "../services";
import router from "../routes/routes";

export default {
    name: 'Visit',
    props: {
        item: Object
    },
    methods: {
        handleAction: async (e, id) => {
            e.preventDefault()
            if (e.target.name === 'aprove')
                approveVisit(id)
            if (e.target.name === 'reject')
                rejectVisit(id)
            window.location.reload()
        }
    }
}
</script>
  