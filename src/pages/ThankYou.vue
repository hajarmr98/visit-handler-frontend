<template>
    <main class="flex flex-col items-center justify-center h-screen bg-gray-200">
        <button class="reditect-button" v-on:click="handlePush">Login</button>
        <div class="flex flex-col bg-gray-100 w-96 p-6 rounded shadow-sm">
            <img src="../assets/icons/check.png" alt="Than you"/>
            <p>La visita se ha solicitado correctamente</p>
        </div>
    </main>
</template>
<script>
 import { postVisit } from "../services";
 import router from '../routes/routes';


 export default {
    methods: {
        handlePush: async (e) => {
            e.preventDefault()
            router.push({ path: "/"})
        }
    }
}
</script>