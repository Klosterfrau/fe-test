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
                <div class="initial katzen-info">
                    <span class="katzen-info">{{ $store.getters.getCatDesc }}</span>

                    <p class="vote">{{ $store.getters.getCatVote }}</p>
                    <!--<p class="vote">{{ $store.getters.getCatVoteFromId(0) }}</p>-->

                    <div>
                        <v-btn small color="primary" v-on:click="incrementCatVote">
                            <span style="display: none">{{ $store.getters.getCatDesc }}</span>
                            +
                        </v-btn>
                        <v-btn small color="error" v-on:click="decrementCatVote">
                            <span style="display: none">{{ $store.getters.getCatDesc }}</span>
                            &minus;
                        </v-btn>

                    </div>
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
                catDesc: "Katze 1",
                columns: [
                    {
                        label: 'Katze',
                        field: 'name',
                        filterable: true,
                    }
                ],
                rows: this.$store.getters.getCats
            };
        },
        methods: {
            onRowClick(params) {
                console.log(params.row.desc + ', ' + params.row.votes);
                this.$store.commit("setCatDesc", params.row.id);
                this.$store.commit("setCatVote", params.row.id);
            },
            incrementCatVote: function (event) {
                let catId = event.target.firstElementChild.innerHTML.replace(/^\D+/g, '');
                this.$store.commit('incrementStateCats', catId)
            },
            decrementCatVote: function (event) {
                let catId = event.target.firstElementChild.innerHTML.replace(/^\D+/g, '');
                this.$store.commit('decrementCatVoteStateCats', catId)
            },
        }
    };
</script>

<style>
    .katzen-info {
        background-color: white !important;
        vertical-align: middle;
        height: 125px;
        color: #606266;
        text-align: center;
        font-size: 20px;
    }

    .vote {
        text-align: center;
        font-weight: bold;
    }
</style>