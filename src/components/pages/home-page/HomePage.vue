<template>
<div class="component HomePage">
  <zjumbotron>{{ $t("Home") }}</zjumbotron>
  <ztitle>{{ $t("Home") }}</ztitle>
  <zlayout>
    <zparagraph>{{ $t("Choose a project") }}:</zparagraph>
    <ztable class="width_100x100">
      <ztablerow
        v-for="project, project_index in projects"
        v-bind:key="'project-' + project_index">
        <ztablecell class="width_100x100">
          <router-link :to="'/project/' + project.id">
            <button class="width_100x100" style="text-align: left;">
              <span style="color: black;">{{ project.name }}</span>
            </button>
          </router-link>
        </ztablecell>
        <ztablecell>
          <button v-on:click="() => delete_project(project.id)"> ✘ </button>
        </ztablecell>
      </ztablerow>
      <ztablerow>
        <ztablecell>
          <span v-on:click="create_project">
            <button>{{ $t("Create project") }}</button>
          </span>
        </ztablecell>
      </ztablerow>
    </ztable>
  </zlayout>
  <script type="text/template" id="dialog_to_create_project">
    <zformfield name="name" v-focus>{{ $t("Choose a name for your project") }}:</zformfield>
    <zformtextarea name="tags">{{ $t("Choose some tags for your project") }}:</zformtextarea>
    <zseparator style="margin: 4px;" />
    <button>{{ $t("Create project") }}</button>
    <button v-on:click="finalize_dialog_rejecting">{{ $t("Cancel") }}</button>
  </script>
</div>
</template>

<script>
export default {
  name: "HomePage",
  props: {},
  data() {
    return {
      projects: {}
    };
  },
  methods: {
    async delete_project(project_id) {
      try {
        this.$utils.trace("HomePage.methods.delete_project");
        const confirmacion = await this.$dialogs.confirm("{{ $t('Are you sure you want to delete this project?') }}", "{{ $t('Warning') }}", "{{ $t('Before deleting it...') }}", "{{ $t('Yes') }}", "{{ $t('No') }}");
        if(!confirmacion) return;
        await this.$database.delete("note", project_id);
        await this.load_projects();
      } catch (error) {
        this.$dialogs.error(error);
      }
    },
    async create_project() {
      this.$utils.trace("HomePage.methods.create_project");
      const resultado = await this.$dialogs.form(document.getElementById("dialog_to_create_project").innerHTML, "{{ $t('Creating project') }}");
      if(!resultado) return;
      await this.$database.insert("note", {
        name: resultado.name,
        tags: resultado.tags
      });
      await this.load_projects();
    },
    async load_projects() {
      try {
        this.$utils.trace("HomePage.methods.load_projects");
        const projects = await this.$database.select("note");
        this.projects = projects;
        this.$forceUpdate(true);
      } catch (error) {
        await this.$dialogs.error(error);
      }
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  async mounted() {
    try {
        this.$utils.trace("HomePage.mounted");
      await this.load_projects();
    } catch (error) {
      console.log(error);
      this.$dialogs.error(error);
    }
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  activated() {},
  deactivated() {},

}
</script>

<style>
</style>
