<template>
    <main class="flex flex-col items-center justify-center h-screen bg-gray-200">
        <button class="reditect-button" v-on:click="handlePush">Formulario del visitante</button>
        <h1 class="text-2xl	text-blue-900 mb-10">Bienvenido a Visit Handler</h1>
        <form v-on:submit="handleLogin">
            <div class="flex flex-col bg-gray-100 w-96 p-6 rounded shadow-sm">
                <label class="text-gray-800">Email o Username</label>
                <input name="usernameOrEmail" type="text" class="w-full py-2 bg-50 text-gray-500 px-1 outline-none mb-4"/>
                <label class="text-gray-800">Password</label>
                <input name="password" type="password" class="w-full py-2 bg-50 text-gray-500 px-1 outline-none mb-4"/>
                <button type="submit" class="bg-blue-500 w-90 text-gray-100 py-2 rounded hover bg-blue-600">Login</button>
            </div>
        </form>
    </main>
</template>

<script>
 import { login } from "../services";
 import router from '../routes/routes';


 export default {
    methods: {
        handleLogin: async (e) => {
            e.preventDefault()
            let res = await login({
                usernameOrEmail: e.target[0].value,
                password: e.target[1].value,
            })
            
            if (res.success)
                router.push({ path: "/dashboard"})
        },
        handlePush: async (e) => {
            e.preventDefault()
            router.push({ path: "/visitor-form"})
        }
    }
}
</script>