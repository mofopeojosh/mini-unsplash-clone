<template>
    <div class="home">

        <header class="header">

            <h1 v-if="q" class="header-search-title">Search Results for
                <q><span class="search-query">{{q}}</span></q>
            </h1>

            <form class="header-search" @submit.prevent="searchPhotos" v-else>

                <img class="header-icon" src="@/assets/search-icon.svg"/>
                <input v-model="searchQuery" class="header-input" placeholder="Search for photo">

            </form>

        </header>

        <main class="main-content">
            <div class="photo-list">

                <!--<div v-for="(item, index) in photoList" v-for="index in 7" :key="index" class="photo-wrapper">-->

                <a href="" v-for="(item, index) in photoList" :key="index" class="photo-list-item" @click.prevent="previewImage(item)">

                    <div class="photo-image" :style="'background-image: url('+item.urls.regular+')'">

                        <div class="photo-info">
                            <div>Roland Olagbaye</div>
                            <small>London, United Kingdom</small>
                        </div>
                    </div>

                </a>

            </div>
        </main>

        <ImagePreview v-if="showPreview" @close="closePreview" :preview="preview"></ImagePreview>

    </div>
</template>

<script>
import ImagePreview from '../components/ImagePreview';

export default {
    name: 'home',
    components: {
        ImagePreview,
    },
    props: {
        q: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            photoList: [],
            searchQuery: '',
            showPreview: false,
            preview: {}
        }
    },
    mounted() {
        this.getPhotos()
    },
    methods: {
        getPhotos() {
            let params = { per_page: 7 };
            if(this.q){
                params.query = this.q
            }
            console.log(this.photoList)
            this.$axios.get('/photos', { params: params })
                .then(response => {
                    this.photoList = response.data
                })
        },
        searchPhotos() {
            this.$router.push({
                name: 'search',
                query: { q: this.searchQuery }
            })
        },
        previewImage(item) {
            // this.preview = { src: 'nuu.jpeg' }
            this.preview = item
            this.showPreview = true
        },
        closePreview() {
            this.showPreview = false
        },
    }

}
</script>

<style lang="scss" scoped>
    .home {

        .header {
            background-color: #EEF1FA;
            padding: 5.625rem 9%;

            .header-search-title {
                font-size: 40px;
            }

            .search-query {
                text-transform: capitalize;
                color: #a0aeb0;
            }


            &-search {
                display: flex;
                align-items: center;
                padding: 0 1.25rem;
                height: 4rem;
                border-radius: 8px;
                background-color: #FFFFFF;
                box-shadow: 0px 15px 30px rgba(0, 0, 0.1, 0.08);

                .header-icon {
                    margin-right: 1.5rem;
                }

                .header-input {
                    padding: 0;
                    width: 100%;
                    font-size: 18px;
                    border: none;
                    height: 100%;

                    &:focus {
                        outline: none;
                        border: none;
                    }
                }
            }
        }

        .main-content {
            margin-top: -40px;
            margin-bottom: 40px;
            padding: 0 12%;

            .photo-list {
                display: grid;
                grid-auto-rows: 20px;
                justify-items: center;
                justify-content: space-between;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                grid-column-gap: 60px;
                grid-row-gap: 40px;

                .photo-list-item {
                    position: relative;
                    text-decoration: none;
                    color: #FFFFFF;
                    width: 100%;
                    height: 100%;

                    &:before {
                        content: '';
                        position: absolute;
                        background-color: #000000;
                        border-radius: 8px;
                        height: 100%;
                        width: 100%;
                        top: 0;
                        background-color: rgba(0, 0, 0, 0.3);
                        color: #FFFFFF;
                    }

                    .photo-image {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        border-radius: 8px;
                        width: 100%;
                        height: 100%;
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                    }

                    .photo-info{
                        z-index: 2;
                        padding: 20px;
                    }

                    &:nth-child(n) {
                        grid-row-end: span 8;
                    }

                    &:nth-child(1) {
                        grid-row-end: span 6;
                    }

                    &:nth-child(2) {
                        grid-row-end: span 8;
                    }

                    &:nth-child(3) {
                        grid-row-end: span 7;
                    }
                }

            }

            @media only screen and (min-width: 998px) {
                .images {
                    grid-template-columns: repeat(3, minmax(300px, 1fr));
                }
            }
        }
    }

</style>
