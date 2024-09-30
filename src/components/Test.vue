<template>
    <v-container>
        <div class="test-two bg-red mt-5 justify-center d-flex">
            <v-btn @click="doPostTest" text="Button 1">button 1</v-btn>
        </div>
    </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-facing-decorator';
import axios, {hasOwnProperty} from "axios";

@Component
export default class Test extends Vue {

    testData = {
        id: 11,
        name: "kementrian pendidikan dan kebudayaan",
        subname: "kemendikbud",
        buildings: [
            { floor: 4, heads: "mr andi", employees: 10 },
            { floor: 5, heads: "mr budi", employees: 20 }
        ]
    }

    async doPostTest() {
        try {
            const formData = new URLSearchParams();

            for (const key in this.testData) {
                if (this.testData.hasOwnProperty(key)) {
                    if (Array.isArray(this.testData[key])) {
                        this.testData[key].forEach((item: any, index: number) => {
                            for (const subKey in item) {
                                if (item.hasOwnProperty(subKey)) {
                                    formData.append(`${key}[${index}][${subKey}]`, item[subKey]);
                                }
                            }
                        });
                    } else {
                        formData.append(key, this.testData[key]);
                    }
                }
            }

            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });


            const response = await axios.post('http://localhost:3000/multipartjson1', formData);


            console.log("Response:", response.data);
        } catch (e) {
            console.error("Error during POST request:", e);
        }
    }

}
</script>

<style lang="scss">
.test {
    height: 108px;
    background-color: #213547;
}
</style>
