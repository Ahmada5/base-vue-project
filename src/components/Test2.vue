<template>
    <v-container>
        <div class="test-two bg-red mt-5 justify-center d-flex">
            <v-btn @click="doPostTest">button 2</v-btn>
        </div>
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator';
import axios from 'axios';

@Component
export default class Test2 extends Vue {
    testData = {
        id: 11,
        name: 'kementrian pendidikan dan kebudayaan',
        subname: 'kemendikbud',
        buildings: [
            { floor: 4, heads: 'mr andi', employees: 10 },
            { floor: 5, heads: 'mr budi', employees: 20 }
        ]
    };

    // Declare the method as async to use 'await'
    async doPostTest() {
        try {
            const formData = new FormData();

            // Stringify the buildings array and append it to formData
            formData.append('id', String(this.testData.id)); // Ensure ID is a string
            formData.append('name', this.testData.name);
            formData.append('subname', this.testData.subname);
            formData.append('buildings', JSON.stringify(this.testData.buildings));

            // Await the axios post request
            const response = await axios.post('http://localhost:3001/multipartjson2', formData);
            console.log('Response:', response.data);
        } catch (e) {
            console.error('Error during POST request:', e);
        }
    }
}
</script>

<style lang="scss">
.test-two{
    width: 33%;
}

</style>
