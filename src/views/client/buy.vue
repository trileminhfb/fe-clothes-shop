<template>
    <div class="w-full h-fit flex flex-row justify-center items-center mt-32">
        <div class="w-[80vw] h-full flex justify-center items-start flex-row">
            <div class="flex-[4] h-full flex  text-black p-4 text-xl border-black border">
                <div class="flex flex-col gap-5 w-full">
                    <div class="flex flex-col gap-2">
                        <p>Accout</p>
                        <input class="h-10 w-full border pl-5" disabled type="text" placeholder="Accout">
                    </div>
                    <div class="flex flex-row gap-5">
                        <div class="flex-1 flex flex-col">
                            <p>Full Name</p>
                            <input class="h-10 w-full border pl-5" type="text" placeholder="Full Name">
                        </div>
                        <div class="flex-1 flex flex-col">
                            <p>Phone Number</p>
                            <input class="h-10 w-full border pl-5" type="text" placeholder="Phone Number">
                        </div>
                    </div>

                    <div class="flex flex-col gap-2">
                        <p>Address</p>
                        <input class="h-10 w-full border pl-5" type="text" placeholder="Address">
                    </div>

                    <div class="flex flex-row gap-5">
                        <div class="flex-1 flex flex-col">
                            <p>City</p>
                            <input class="h-10 w-full border pl-5" type="text" placeholder="City">
                        </div>
                        <div class="flex-1 flex flex-col">
                            <p>District</p>
                            <input class="h-10 w-full border pl-5" type="text" placeholder="District">
                        </div>
                        <div class="flex-1 flex flex-col">
                            <p>Ward</p>
                            <input class="h-10 w-full border pl-5" type="text" placeholder="Ward">
                        </div>
                    </div>
                </div>
            </div>
            <div class=" flex-[2] h-fit flex flex-col text-black p-4 text-2xl border-black border">
                <div class="flex flex-col gap-2 w-full">
                    <p class="font-semibold">Product</p>
                    <div class="flex flex-row gap-5 h-40 w-full bg-white justify-start items-center p-5">
                        <img class="object-cover w-28 h-32" :src="itemPath" alt="">
                        <div class="flex flex-col h-full w-full justify-center items-start gap-5 text-lg">
                            <p class="font-semibold">Lorem ipsum dolor sit.</p>
                            <div class="flex flex-row justify-center items-center w-full">
                                <div class="flex-1 flex flex-row">
                                    <p>x</p>
                                    <p>20</p>
                                </div>
                                <div class="flex-1 flex flex-row justify-end text-red-500">
                                    <p>200.000</p>
                                    <p class="text-sm">VNĐ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row gap-5 h-40 w-full bg-white justify-start items-center p-5">
                        <img class="object-cover w-28 h-32" :src="itemPath" alt="">
                        <div class="flex flex-col h-full w-full justify-center items-start gap-5 text-lg">
                            <p class="font-semibold">Lorem ipsum dolor sit.</p>
                            <div class="flex flex-row justify-center items-center w-full">
                                <div class="flex-1 flex flex-row">
                                    <p>x</p>
                                    <p>20</p>
                                </div>
                                <div class="flex-1 flex flex-row justify-end text-red-500">
                                    <p>200.000</p>
                                    <p class="text-sm">VNĐ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-5 w-full p-5">
                    <p class="font-semibold">Payment Method</p>
                    <select class="p-2 border rounded-full" v-model="selectedPaymentMethod">
                        <option value="" disabled selected>--select payment method--</option>
                        <option value="credit_card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank_transfer">Bank Transfer</option>
                    </select>
                </div>

                <div class="flex flex-col gap-5 w-full p-5">
                    <p class="font-semibold">Payment details</p>
                    <div class="flex flex-col gap-2 w-full text-xl">
                        <div class="flex flex-row w-full">
                            <p class="flex-1">Merchandise Subtotal</p>
                            <div class="flex flex-row text-red-500">
                                <p>500.000</p>
                                <p class="text-sm">VNĐ</p>
                            </div>
                        </div>
                        <div class="flex flex-row w-full">
                            <p class="flex-1">Shipping Subtotal</p>
                            <div class="flex flex-row text-red-500">
                                <p>500.000</p>
                                <p class="text-sm">VNĐ</p>
                            </div>
                        </div>
                        <div class="flex flex-row w-full">
                            <p class="flex-1 font-semibold">Total Payment</p>
                            <div class="flex flex-row text-red-500">
                                <p>500.000</p>
                                <p class="text-sm">VNĐ</p>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="w-full flex justify-end">
                    <button class="w-40 h-12 rounded-xl bg-orange-500" type="button">Place Oder</button>
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