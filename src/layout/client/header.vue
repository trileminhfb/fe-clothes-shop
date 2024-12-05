<template>
    <div class="bg-black w-full flex flex-col fixed top-0">
        <div class="h-20 w-full flex flex-row pl-5 pr-5">
            <div class="flex-1 h-full flex items-center justify-start">
                <a href="" class="overflow-hidden">
                    <img class="object-cover h-16 rounded-full" :src="logoPath" alt="">
                </a>
            </div>

            <div class="flex-1 h-full flex items-center justify-center">
                <a class="uppercase font-extrabold italic text-6xl text-white" href="/">chcope shop</a>
            </div>
            <div class="flex-1 h-full flex items-center justify-end flex-row gap-5">
                <div class="rounded-full flex justify-center items-center bg-red-400 w-16 h-16">
                    <svg class="w-12 h-12 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                    </svg>
                </div>
                <div class="rounded-full flex justify-center items-center bg-white w-16 h-16">
                    <svg class="w-12 h-12 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="h-12 w-full bg-red-300 flex flex-row">
            <div class="h-full flex-1 flex flex-row items-center justify-start uppercase font-bold text-xl">
                <a class="hover:bg-gray-300 h-full flex items-center p-5" href="/">home</a>
                <div class="hover:bg-gray-300 h-full flex items-center p-5 relative group">
                    <p class="hover:cursor-context-menu">category</p>
                    <div class="w-60 h-fit bg-white absolute top-12 left-0 flex-col hidden group-hover:flex">
                        <a class="p-2" href="">Lorem, ipsum. asdsd </a>
                        <a class="p-2" href="">Lorem, ipsum. asdsd </a>
                    </div>
                </div>
                <div class="hover:bg-gray-300 h-full flex items-center p-5 relative group">
                    <p class="hover:cursor-context-menu">brand</p>
                    <div class="w-60 h-fit bg-white absolute top-12 left-0 flex-col hidden group-hover:flex">
                        <a class="p-2" href="">Lorem, ipsum. asdsd </a>
                        <a class="p-2" href="">Lorem, ipsum. asdsd </a>
                    </div>
                </div>
                <a class="hover:bg-gray-300 h-full flex items-center p-5" href="/men">men</a>
                <a class="hover:bg-gray-300 h-full flex items-center p-5" href="/women">women</a>
            </div>
            <div class="h-full flex-1 flex flex-row items-center justify-end uppercase font-bold text-xl pr-5 gap-5">
                <a href=""><svg class="w-10 h-10 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg></a>

                <input class="rounded-xl h-10 pl-5" type="text" placeholder="Search">
            </div>
        </div>
    </div>
</template>
<script>
import logo from '@/components/images/logo/logo.png';
export default {
    data() {
        return {
            logoPath: logo,
        };
    },
};
</script>
