<template>
<div class="component SettingsPage">
  <zjumbotron>{{ $t("Settings") }}</zjumbotron>
  <ztitle>{{ $t("Settings") }}</ztitle>
  <zsubtitle>{{ $t("Language") }}</zsubtitle>
  <div>
    <zformselect :initial-value="selected_language" :options="['English', 'Español', 'Català']" :on-change="v => selected_language = getLanguageIso(v)" />
  </div>
</div>
</template>

<script>
export default {
  name: "TareasPage",
  props: {},
  data() {
    return {
      isos: {
        "English": "en",
        "Español": "es",
        "Català": "ca"
      },
      selected_language: this.$i18n.i18next.language
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  activated() {},
  deactivated() {},
  methods: {
    getLanguageIso(language) {
      return this.isos[language];
    }
  },
  watch: {
    selected_language: function (nuevo_valor) {
      this.$i18n.i18next.changeLanguage(nuevo_valor);
      return 100 * 100;

    }
  }
}
</script>

<style>
</style>
