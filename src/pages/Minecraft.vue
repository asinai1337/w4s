<template>
    <Navbar active="minecraft" class="fixed w-full"></Navbar>
    <div :class="`w-full flex flex-col`">
        <div
            class="flex flex-col items-center justify-center h-screen bg-[url(/minecraft-bg.png)] bg-cover w-full"
        >
            <h1 class="text-white font-bold text-5xl mb-3 font-copperplate">
                W4SURVIV4L
            </h1>
            <h2 class="text-white text-xl">a W4S Studio túlélő szervere</h2>
        </div>

        <div class="flex justify-evenly py-32">
            <div class="bg-black p-6 rounded-xl w-2/5">
                <h3 class="text-white text-2xl font-copperplate">Infók</h3>
                <p class="text-white">
                    Ez egy túlélő szerver, ahhol ugyan levédés nincs, de a
                    griefelést, lopást, és egyéb úton kár okozást tiltja a
                    szabályzatunk, szóval nyugodt szívvel lehet építeni, nem
                    kell félni attól, hogy valaki megtalálja a bázisod, és
                    kifosztja. Ugyanakkor mivel nem is economy szerver, nincs se
                    aukciós ház, se bármi féle bolt, és nincs /bal, /pay stb.
                </p>
            </div>
            <div class="bg-black p-6 rounded-xl">
                <h2 class="text-white text-2xl font-copperplate">Specs</h2>
                <p class="text-white">IP: mc.w4s.hu</p>
            </div>
        </div>
    </div>
</template>
>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
</script>
