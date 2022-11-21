import { createRouter, createWebHistory} from 'vue-router';
import Login from "../pages/Login.vue"
import VisitorForm from "../pages/VisitorForm.vue"
import VisitsAdmin from "../pages/VisitsAdmin.vue"
import ThankYou from "../pages/ThankYou.vue"

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
    },
    { 
        path: '/thank-you', 
        component: ThankYou
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;