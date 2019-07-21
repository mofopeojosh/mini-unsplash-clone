<template>
    <div class="previewer">

        <div class="previewer-close">
            <a href="" @click.prevent="closePreview">
                <img class="previewer-close-icon" src="@/assets/close-icon.svg"/>
            </a>
        </div>

        <div class="previewer-content">

            <div class="previewer-image" :style="'background-image: url('+preview.urls.regular+')'"></div>

            <div class="previewer-info">
                <div class="previewer-title">{{preview.user.name}}</div>
                <div class="previewer-subtitle">{{preview.user.location}}</div>
            </div>

        </div>

    </div>
</template>

<script>
import { Fragment } from 'vue-fragment';

export default {
    name: "ImageCard",
    components: {
        Fragment
    },
    props: {
        preview: Object
    },
    mounted() {
        //hide body overflow
        document.querySelector("body").style.overflow = 'hidden';
    },
    methods: {
        closePreview() {
            //reset body overflow to default
            document.querySelector("body").style.overflow = 'visible';
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" scoped>

    .previewer {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        height: 100vh;
        position: fixed;
        overflow: auto;
        padding: 40px 4%;
        background-color: rgba(0, 0, 0, 0.4);

        .previewer-close {
            text-align: right;
        }

        .previewer-content {
            padding: 0 5%;

            .previewer-image {
                height: 400px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }

            @media only screen and (min-width: 700px) {
                .previewer-image {
                    height: 600px;
                }
            }

            .previewer-info {
                padding: 24px 34px;
                background-color: #FFFFFF;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;

                .previewer-title{
                    font-size: 22px;
                    margin-bottom: 8px;
                    color: var(--primary-color);
                }

                .previewer-subtitle{
                    font-size: 14px;
                    color: var(--secondary-color);
                }
            }

        }

    }
</style>
