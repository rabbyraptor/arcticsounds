import Vue from 'vue'
Vue.mixin({
    methods: {
        detectLanguage(object) {
            if (object.hasOwnProperty(this.$i18n.locale)) {
                return object[this.$i18n.locale];
            } else {
                return object[this.$i18n.defaultLocale];
            }
        }
    },
})