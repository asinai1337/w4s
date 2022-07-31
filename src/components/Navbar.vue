<template>
    <div class="bg-white flex justify-between items-center">
        <img src="/logo.svg" alt="W4S Studio logo" class="w-14 h-14 ml-6" />
        <div class="flex gap-6 p-6">
            <router-link
                v-for="link in links"
                :key="link.name"
                :to="link.to"
                :class="`text-black uppercase ${
                    props.active === link.name ? 'font-bold' : ''
                }`"
                >{{ link.text }}</router-link
            >
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{ active?: string }>();

const links = [
    {
        to: "/home",
        text: "Kezdőlap",
        name: "home",
    },
    {
        to: "/contact",
        text: "Kapcsolat",
        name: "contact",
    },
    {
        to: "/about",
        text: "Rólam",
        name: "about",
    },
    {
        to: "/minecraft",
        text: "Minecraft",
        name: "minecraft",
    },
];
</script>
