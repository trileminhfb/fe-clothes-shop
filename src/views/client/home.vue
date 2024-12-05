<template>
    <div class="w-full h-screen mt-32">
        <div class="overflow-hidden w-full h-[80vh] bg-black">
            <img class="h-full w-full object-cover" src="https://www.foreverinfashion.org/articles/1.051739000.jpg"
                alt="">
        </div>
        <div class="mt-5 h-fit w-full flex flex-col justify-center items-center gap-5">
            <div class="uppercase font-extrabold text-lg">Wellcome to shop</div>
            <div class="h-fit w-full grid grid-cols-4 gap-20 place-items-center">
                <a href="" class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center">
                    <div class="overflow-hidden w-40 h-60 bg-white">
                        <img class="object-cover h-full" :src="itemPath" alt="">
                    </div>
                    <p class="uppercase font-bold">name</p>
                    <p class="">Price</p>
                </a>
                <a href="" class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center">
                    <div class="overflow-hidden w-40 h-60 bg-white">
                        <img class="object-cover h-full" :src="itemPath" alt="">
                    </div>
                    <p class="uppercase font-bold">name</p>
                    <p class="">Price</p>
                </a>
                <a href="" class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center">
                    <div class="overflow-hidden w-40 h-60 bg-white">
                        <img class="object-cover h-full" :src="itemPath" alt="">
                    </div>
                    <p class="uppercase font-bold">name</p>
                    <p class="">Price</p>
                </a>
                <a href="" class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center">
                    <div class="overflow-hidden w-40 h-60 bg-white">
                        <img class="object-cover h-full" :src="itemPath" alt="">
                    </div>
                    <p class="uppercase font-bold">name</p>
                    <p class="">Price</p>
                </a>
                <a href="" class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center">
                    <div class="overflow-hidden w-40 h-60 bg-white">
                        <img class="object-cover h-full" :src="itemPath" alt="">
                    </div>
                    <p class="uppercase font-bold">name</p>
                    <p class="">Price</p>
                </a>
                <a href="" class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center">
                    <div class="overflow-hidden w-40 h-60 bg-white">
                        <img class="object-cover h-full" :src="itemPath" alt="">
                    </div>
                    <p class="uppercase font-bold">name</p>
                    <p class="">Price</p>
                </a>
                <a href="" class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center">
                    <div class="overflow-hidden w-40 h-60 bg-white">
                        <img class="object-cover h-full" :src="itemPath" alt="">
                    </div>
                    <p class="uppercase font-bold">name</p>
                    <p class="">Price</p>
                </a>
                <a href="" class="w-60 h-80 bg-gray-300 flex flex-col justify-center items-center">
                    <div class="overflow-hidden w-40 h-60 bg-white">
                        <img class="object-cover h-full" :src="itemPath" alt="">
                    </div>
                    <p class="uppercase font-bold">name</p>
                    <p class="">Price</p>
                </a>
            </div>
        </div>
        <div class="w-full h-[50vh] mt-5 p-10 bg-gray-300 flex flex-row">
            <div class="w-full h-full flex-1 justify-center items-center flex flex-col">
                <div class="w-80 h-80 rounded-full overflow-hidden">
                    <img class="h-full object-cover" :src="logoPath" alt="">
                </div>
                <p class="uppercase font-extrabold text-3xl italic">chcope shop</p>
            </div>
            <div class="w-full h-full bg-red-100 flex-1 p-20 text-black">
                <div class="">
                    <p class="uppercase font-bold">connect with us</p>
                    <p class="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
                        beatae molestiae illum, suscipit facere repellendus! Possimus voluptatum itaque dignissimos esse
                        unde, commodi aliquam expedita fugiat, deleniti fugit dolorem impedit nam? ipsum dolor sit amet
                        consectetur, adipisicing elit. Aspernatur,
                        unde.
                        Eveniet
                        debitis soluta nulla labore molestiae dignissimos blanditiis hic officiis optio laboriosam
                        repellat,
                        veritatis ex quae odit. Earum, pariatur voluptatem.</p>
                </div>
                <div class="mt-5">
                    <p class="uppercase font-bold">hostline</p>
                    <p class="">0123456789</p>
                </div>
                <div class="mt-5">
                    <p class="uppercase font-bold">e-mail</p>
                    <p class="">abcadasdasd@gmail.com</p>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import logo from '@/components/images/logo/logo.png';
import item from '@/components/images/item/item.png';
export default {
    data() {
        return {
            logoPath: logo,
            itemPath: item,
        };
    },
};
</script>
