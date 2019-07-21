<template>
    <div class="home">

        <header class="header">

            <h1 v-if="q" class="header-search-title">Search Results for
                "<span class="search-query">{{q}}</span>"
            </h1>

            <form class="header-search" @submit.prevent="searchPhotos" v-else>

                <img class="header-icon" src="@/assets/search-icon.svg"/>
                <input v-model="searchQuery" class="header-input" placeholder="Search for photo">

            </form>

        </header>

        <main class="main-content">

            <div class="photo-list">

                <template v-if="photoList.length">

                    <div v-for="(item, index) in photoList"
                       :key="index" class="photo-list-item"
                       @click.prevent="previewPhoto(item)"
                       :style="'background-image: url('+item.urls.regular+')'">

                        <div class="photo-overlay">
                            <div class="photo-info">
                                <div>{{item.user.name}}</div>
                                <small>{{item.user.location}}</small>
                            </div>
                        </div>

                    </div>

                </template>

                <template v-else>

                    <div v-for="index in 8" :key="index" class="photo-list-item">
                        <div class="photo-placeholder">
                            <div class="photo-info">
                                <div class="photo-placeholder-text photo-info-title"></div>
                                <div class="photo-placeholder-text photo-info-subtitle"></div>
                            </div>
                        </div>
                    </div>

                </template>


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
        //Setting a timeout to show the placeholder for a few seconds
        setTimeout(this.getPhotos, 3000)
    },
    methods: {
        getPhotos() {
            let params = { per_page: 7 };
            if (this.q) {
                params.query = this.q
            }
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
        previewPhoto(item) {
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
            padding: 5.625rem 9%;
            background-color: #DCE2E9;

            .header-search-title {
                color: var(--primary-color);
                font-size: 40px;
            }

            .search-query {
                color: var(--secondary-color);
                text-transform: capitalize;
            }


            &-search {
                height: 4rem;
                display: flex;
                align-items: center;
                padding: 0 1.625rem;
                border-radius: 8px;
                background-color: #FFFFFF;
                box-shadow: 0px 15px 30px rgba(0, 0, 0.1, 0.08);

                .header-icon {
                    margin-right: 1.5rem;
                }

                .header-input {
                    padding: 0;
                    width: 100%;
                    height: 100%;
                    border: none;
                    font-size: 18px;

                    &:focus {
                        outline: none;
                        border: none;
                    }

                    &::placeholder{
                        color: var(--primary-color);
                    }
                }
            }
        }

        .main-content {
            padding: 0 12%;
            margin-top: -40px;
            margin-bottom: 40px;

            .photo-list {
                display: grid;
                grid-row-gap: 40px;
                grid-auto-rows: 20px;
                grid-column-gap: 60px;
                justify-items: center;
                justify-content: space-between;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

                .photo-list-item {
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;

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

                @media only screen and (min-width: 998px) {
                    .images {
                        grid-template-columns: repeat(3, minmax(300px, 1fr));
                    }
                }

                .photo-overlay, .photo-placeholder {
                    height: 100%;
                    display: flex;
                    border-radius: 8px;
                    flex-direction: column;
                    justify-content: flex-end;

                    .photo-info {
                        color: #FFFFFF;
                        padding: 20px;
                    }
                }

                .photo-overlay {
                    cursor: pointer;
                    background-color: rgba(0, 0, 0, 0.1);
                }

                .photo-placeholder {
                    background-color: #F5F5F5;

                    @keyframes placeHolderShimmer{
                        0%{
                            background-position: -400px 0
                        }
                        100%{
                            background-position: 400px 0
                        }
                    }

                    &-text {
                        height: 15px;
                        margin-bottom: 8px;
                        animation-duration: 1.5s;
                        animation-fill-mode: forwards;
                        animation-iteration-count: infinite;
                        animation-name: placeHolderShimmer;
                        animation-timing-function: linear;
                        background: #E6E6E6 linear-gradient(to right, #EFEFEF 8%, #DFDFDF 18%, #EFEFEF 33%);
                        background-size: 800px 104px;
                    }

                    .photo-info-title {
                        width: 180px;
                    }

                    .photo-info-subtitle {
                        width: 100px;
                    }
                }
            }
        }
    }

</style>
