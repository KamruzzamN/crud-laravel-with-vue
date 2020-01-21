<template>
    <div class="app-layout">
        <router-view></router-view>
        <vue-progress-bar></vue-progress-bar>
    </div>
</template>

<script>
    
    export default {
        name: 'AppLayout',

        data(){
            return {
                isLoading: true,
            }
        },
        
        mounted() {
            
        }
    }
</script>
