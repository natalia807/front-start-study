<template>
    <div class="items-list">
        <Loading v-if="isLoading" />
        <Item
            v-else
            v-for="item in itemsList"
            :key="item.id"
            :item="item"
        />
    </div>
</template>

<script>
import axios from 'axios';
import Item from './Item.vue';
import Loading from './Loading.vue'

export default {
    name: 'ItemsList',

    components: {
        Item,
        Loading
    },

    data() {
        return {
            itemsList: [],
            isLoading: false
        }
    },

    created() {
        this.getItemList()
    },

    computed: {
        selectedCategory() {
            return this.$store.state.selectedCategory;
        }
    },

    methods: {
        getItemList() {
            this.isLoading = true;
            this.itemsList = [];

            setTimeout(() => {
                axios.get(`https://my-json-server.typicode.com/KlaytonJr/restaurant-api/${this.selectedCategory}`)
                .then((response) => {
                    this.itemsList = response.data;
                    this.isLoading = false;
                })
            }, 1000)
        }
    },

    watch: {
        selectedCategory() {
            this.getItemList();
        }
    }
}
</script>

<style scoped lang="less">
.items-list {
    margin: 50px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-content: flex-start;

    @media @small-desktops {
        width: 100%;
        max-width: 800px;
        margin: 50px auto;
    }

    @media @tablets {
        flex-wrap: wrap;
        margin: 0;
        padding: 20px;
    }
}
</style>