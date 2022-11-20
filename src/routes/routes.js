import { createRouter, createWebHistory} from 'vue-router';
import Login from "../pages/Login.vue"
import VisitorForm from "../pages/VisitorForm.vue"
import VisitsAdmin from "../pages/VisitsAdmin.vue"

const routes = [
    { 
        path: '/', 
        component: Login
    },
    { 
        path: '/visitor-form', 
        component: VisitorForm
    },
    { 
        path: '/dashboard', 
        component: VisitsAdmin
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;