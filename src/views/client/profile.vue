<template>
    <div class="w-full h-fit flex justify-center mt-32 p-5">
        <div class="w-[80vw] h-full flex justify-center items-start flex-row border border-black rounded-3xl">
            <div class="flex-1 h-full">
                <div class="h-full w-full p-20 flex flex-col gap-5 items-center">
                    <div class="bg-white w-80 h-80 rounded-full overflow-hidden border-8 border-blue-500">
                        <img class="h-full object-cover" :src="itemPath" alt="">
                    </div>
                    <div class="w-full font-semibold flex flex-col items-center text-2xl">
                        <p class="text-4xl font-extrabold">Tri Le Minh</p>
                        <p>User</p>
                    </div>
                </div>
            </div>
            <div class="flex-1 h-full">
                <div class="h-full w-full p-20 flex flex-col gap-5 items-start font-bold text-2xl">
                    <div class="flex flex-row w-full">
                        <p class="flex flex-1">Accout</p>
                        <input class="flex flex-1 border border-black rounded-2xl pl-5" type="text" disabled
                            placeholder="trileminh">
                    </div>
                    <div class="flex flex-row w-full">
                        <p class="flex flex-1">Full Name</p>
                        <input class="flex flex-1 border border-black rounded-2xl pl-5" type="text" value="Tri Le Minh">
                    </div>
                    <div class="flex flex-row w-full">
                        <p class="flex flex-1">BirthDay</p>
                        <input class="flex flex-1 border border-black rounded-2xl pl-5" type="date">
                    </div>
                    <div class="flex flex-row w-full">
                        <p class="flex flex-1">Email</p>
                        <input class="flex flex-1 border border-black rounded-2xl pl-5" type="text" value="">
                    </div>
                    <div class="flex flex-row w-full">
                        <p class="flex flex-1">Phone Number</p>
                        <input class="flex flex-1 border border-black rounded-2xl pl-5" type="text" value="">
                    </div>
                    <div class="flex flex-col w-full gap-5">
                        <p class="">Address</p>
                        <input class="border border-black rounded-2xl pl-5 h-20 font-normal text-base" type="text"
                            value="">
                    </div>
                    <button class="bg-orange-500 h-10 w-20 rounded-full" type="button">Save</button>

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