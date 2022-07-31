import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

// Pages
import HomePage from "@/pages/Home.vue";
import ContactPage from "@/pages/Contact.vue";
import AboutPage from "@/pages/About.vue";
import MinecraftPage from "@/pages/Minecraft.vue";

const routes: RouteRecordRaw[] = [
    {
        name: "home",
        component: HomePage,
        path: "/",
        alias: "/home",
    },
    {
        name: "contact",
        component: ContactPage,
        path: "/contact",
    },
    {
        name: "about",
        component: AboutPage,
        path: "/about",
    },
    {
        name: "minecraft",
        component: MinecraftPage,
        path: "/minecraft",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
