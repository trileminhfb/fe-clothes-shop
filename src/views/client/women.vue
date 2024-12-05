<template>
    <div class="w-full h-screen flex justify-center mt-16">
        <div class="w-[80vw] h-full flex justify-center items-center flex-col">
            <p class="font-extrabold text-3xl uppercase italic">women clothes</p>
            <div class="h-fit w-full grid grid-cols-4 gap-20 place-items-center">
                <a href="/clothes" class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center">
                    <div class="overflow-hidden w-40 h-60 bg-white">
                        <img class="object-cover h-full" :src="itemPath" alt="">
                    </div>
                    <p class="uppercase font-bold">name</p>
                    <p class="">Price</p>
                </a>
                <a href="/clothes" class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center">
                    <div class="overflow-hidden w-40 h-60 bg-white">
                        <img class="object-cover h-full" :src="itemPath" alt="">
                    </div>
                    <p class="uppercase font-bold">name</p>
                    <p class="">Price</p>
                </a>
                <a href="/clothes" class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center">
                    <div class="overflow-hidden w-40 h-60 bg-white">
                        <img class="object-cover h-full" :src="itemPath" alt="">
                    </div>
                    <p class="uppercase font-bold">name</p>
                    <p class="">Price</p>
                </a>
                <a href="/clothes" class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center">
                    <div class="overflow-hidden w-40 h-60 bg-white">
                        <img class="object-cover h-full" :src="itemPath" alt="">
                    </div>
                    <p class="uppercase font-bold">name</p>
                    <p class="">Price</p>
                </a>
                <a href="/clothes" class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center">
                    <div class="overflow-hidden w-40 h-60 bg-white">
                        <img class="object-cover h-full" :src="itemPath" alt="">
                    </div>
                    <p class="uppercase font-bold">name</p>
                    <p class="">Price</p>
                </a>
                <a href="/clothes" class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center">
                    <div class="overflow-hidden w-40 h-60 bg-white">
                        <img class="object-cover h-full" :src="itemPath" alt="">
                    </div>
                    <p class="uppercase font-bold">name</p>
                    <p class="">Price</p>
                </a>
                <a href="/clothes" class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center">
                    <div class="overflow-hidden w-40 h-60 bg-white">
                        <img class="object-cover h-full" :src="itemPath" alt="">
                    </div>
                    <p class="uppercase font-bold">name</p>
                    <p class="">Price</p>
                </a>
                <a href="/clothes" class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center">
                    <div class="overflow-hidden w-40 h-60 bg-white">
                        <img class="object-cover h-full" :src="itemPath" alt="">
                    </div>
                    <p class="uppercase font-bold">name</p>
                    <p class="">Price</p>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import item from '@/components/images/item/item.png';
export default {
    data() {
        return {
            itemPath: item,
        };
    },
};
</script>
<style></style>