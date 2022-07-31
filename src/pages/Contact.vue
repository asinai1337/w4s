<script setup lang="ts">
import { ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

const email = ref("");
const title = ref("");
const message = ref("");

function send() {
    axios
        .post("https://restless-river-486e.chromium.workers.dev/", {
            email: email.value,
            title: title.value,
            message: message.value,
        })
        .then((resp) => {
            if (resp.data != "failed") {
                email.value = "";
                title.value = "";
                message.value = "";
                return alert("Uzeneted sikeresen el lett kuldve.");
            }
            alert("Hiba tortent, kerlek probald ujra,");
        })
        .catch(() => {
            alert("Hiba tortent, kerlek probald ujra.");
        });
}
</script>

<template>
    <Navbar active="contact"></Navbar>
    <div class="py-12 flex flex-col items-center">
        <h1 class="text-2xl mb-12 font-copperplate">Elerhetőségek</h1>
        <div class="flex mb-12 pb-12 border-b-2 border-black">
            <div class="border-r-2 border-black mr-3 pr-3 flex">
                <svg
                    class="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                </svg>
                <a href="mailto:hello@w4s.design">hello@w4s.design</a>
            </div>
            <div class="flex">
                <svg
                    class="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    ></path>
                </svg>
                <a href="https://discord.gg/Tv4J2CfEVq"
                    >discord.gg/Tv4J2CfEVq</a
                >
            </div>
        </div>
        <form class="flex flex-col w-1/3" @submit.prevent="send">
            <h1 class="text-3xl mb-12 self-center font-copperplate">
                Hagyj üzenetet
            </h1>
            <input
                type="email"
                placeholder="Email cím"
                class="w-full mb-3 p-2 border-2 border-slate rounded-lg shadow-lg"
                v-model="email"
                required
            />
            <input
                type="text"
                placeholder="Tárgy"
                class="w-full mb-3 p-2 border-2 border-slate rounded-lg shadow-lg"
                v-model="title"
                required
            />
            <textarea
                placeholder="Üzenet..."
                class="w-full mb-3 p-2 border-2 border-slate rounded-lg shadow-lg"
                v-model="message"
                required
            ></textarea>
            <input
                type="submit"
                value="Küldés"
                class="p-3 bg-black rounded-xl text-white shadow-lg cursor-pointer active:scale-[0.96] transition-transform"
            />
        </form>
    </div>
</template>
