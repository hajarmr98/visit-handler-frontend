<template>
    <main class="flex flex-col items-center justify-center h-screen bg-gray-200">
        <button class="reditect-button" v-on:click="handlePush">Login</button>
        <h1 class="text-2xl	text-blue-900 mb-10">Formulario de solicitud de visita</h1>
        <form v-on:submit="handleForm">
            <div class="flex flex-col bg-gray-100 w-96 p-6 rounded shadow-sm">
                <label class="text-gray-800">Fecha de la visita</label>
                <input name="date" type="date" class="w-full py-2 bg-50 text-gray-500 px-1 outline-none mb-4"/>
                <label class="text-gray-800">DNI del visitante</label>
                <input name="visitor_identification" type="text" class="w-full py-2 bg-50 text-gray-500 px-1 outline-none mb-4"/>
                <label class="text-gray-800">Startup</label>
                <input name="startup" type="text" class="w-full py-2 bg-50 text-gray-500 px-1 outline-none mb-4"/>
                <label class="text-gray-800">Nombre del visitante</label>
                <input name="visitor_name" type="text" class="w-full py-2 bg-50 text-gray-500 px-1 outline-none mb-4"/>
                <label class="text-gray-800">Nombre del solicitante</label>
                <input name="petitioner_name" type="text" class="w-full py-2 bg-50 text-gray-500 px-1 outline-none mb-4"/>
                <label class="text-gray-800">Email del solicitante</label>
                <input name="petitioner_email" type="text" class="w-full py-2 bg-50 text-gray-500 px-1 outline-none mb-4"/>
                <button type="submit" class="bg-blue-500 w-90 text-gray-100 py-2 rounded hover bg-blue-600">Enviar</button>
            </div>
        </form>
    </main>
</template>

<script>
 import { postVisit } from "../services";
 import router from '../routes/routes';

 export default {
    methods: {
        handleForm: async (e) => {
            e.preventDefault()
            let res = await postVisit({
                date: e.target[0].value,
                visitor_identification: e.target[1].value,
                startup: e.target[2].value,
                visitor_name: e.target[3].value,
                petitioner_name: e.target[4].value,
                petitioner_email: e.target[5].value
            })
            
            if (res.success)
                router.push({ path: "/thank-you"})
        },
        handlePush: async (e) => {
            e.preventDefault()
            router.push({ path: "/"})
        }
    }
}
</script>