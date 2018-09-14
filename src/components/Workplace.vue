<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex d-flex xs12 sm4 md4>
                <vue-good-table
                        title="Katzen"
                        :columns="columns"
                        :rows="rows"
                        @on-row-click="onRowClick"
                        :search-options="{
                    enabled: true,
                    placeholder: 'Filter für Katzen',
                  }"
                        :sort-options="{
                    enabled: false,
                  }"
                />
            </v-flex>

            <v-flex d-flex xs12 sm6 md4>
                <div
                        class="initial katzen-info"
                >
                    <span class="katzen-info">KATZEN</span>
                </div>

            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'test',
        data() {
            return {
                msg: "Meine erste Katzen Vue.js App",
                columns: [
                    {
                        label: 'Name',
                        field: 'name',
                        filterable: true,
                    }
                ],
                rows: this.$store.getters.getCats
            };
        },
        methods: {
            onRowClick(params) {
                console.log(params.row.desc);
                console.log(params.row.votes);
            }
        }
    };
</script>

<style>
    .katzen-info {
        background-color: white !important;
        vertical-align: middle;
        height: 100px;
        color: #606266;
    }
</style>