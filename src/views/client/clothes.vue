<template>
    <div class="w-full h-[calc(100vh-8rem)] flex justify-center mt-32">
        <div class="w-[80vw] h-full flex justify-center items-center flex-row ">
            <div class="flex-1 h-full flex justify-center items-center">
                <div class="h-[500px] w-[500px] bg-black overflow-hidden">
                    <img :src="itemPath" alt="">
                </div>
            </div>
            <div class="flex-1 h-full flex flex-col text-black pt-20 pl-20 gap-5  text-2xl">
                <p class="font-semibold text-3xl">Lorem ipsum dolor sit amet.</p>
                <div class="flex flex-row text-red-500">
                    <p class="font-semibold text-3xl">500.000</p>
                    <p class="text-xl">VNĐ</p>
                </div>
                <p class="font-normal text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero porro
                    ullam rerum veniam eius molestiae animi quae ab impedit et exercitationem, doloribus assumenda est
                    id iste. Ipsum assumenda earum eligendi.</p>
                <div class="flex flex-row gap-5">
                    <p>Category:</p>
                    <p>ok</p>
                </div>
                <div class="flex flex-row gap-5">
                    <p>Gender:</p>
                    <p>Men</p>
                </div>
                <div class="flex flex-row gap-5">
                    <p>Quantity</p>
                    <input class="border-black border text-end w-52 rounded-full pr-2" type="number" value="1" min="0">
                    <p class="text-sm">500 available</p>
                </div>
                <div class="flex flex-row gap-5 items-center justify-center">
                    <button class="flex-1 h-12 bg-orange-500 font-bold rounded-full" type="button">Buy</button>
                    <button class="flex-1 h-12 bg-orange-500 font-bold rounded-full" type="button">Add To Cart</button>
                </div>
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