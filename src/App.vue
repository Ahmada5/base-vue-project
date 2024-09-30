<template>
    <v-container>
        <div class="flex bg-amber">
            <div class="d-flex">
                <Test />
            </div>
            <div>
                <Test2 />
            </div>
        </div>
    </v-container>
</template>

<script setup lang="ts">
import Test from './components/Test.vue'
import Test2 from "./components/Test2.vue";

</script>