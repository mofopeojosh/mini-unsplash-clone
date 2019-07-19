<template>
    <div class="previewer">

        <div class="previewer-close">
            <a href="" @click.prevent="closePreview">
                <img class="previewer-close-icon" src="@/assets/close-icon.svg"/>
            </a>
        </div>

        <div class="previewer-content">

            <div class="previewer-image" :style="'background-image: url('+preview.urls.regular+')'"></div>

            <div class="previewer-footer">
                <div>Roland Olagbaye</div>
                <small>London, United Kingdom</small>
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
        document.addEventListener("keydown", this.handleEscape);
    },
    methods: {
        closePreview() {
            this.$emit('close')
        },
        handleEscape(e) {
            if (e.keyCode === 27) { // ESC
                this.closePreview()
            }
        }
    }
}
</script>

<style lang="scss" scoped>

    .previewer {
        position: fixed;
        overflow: auto;
        z-index: 999;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        height: 100vh;
        padding: 80px 4%;
        background-color: rgba(0, 0, 0, 0.4);

        .previewer-close {
            text-align: right;
        }

        .previewer-content {
            padding: 0 5%;

            .previewer-image {
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                height: 400px;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
            }

            @media only screen and (min-width: 700px) {
                .previewer-image {
                    height: 600px;
                }
            }

            .previewer-footer {
                padding: 16px;
                background-color: #FFFFFF;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }

        }

    }
</style>
