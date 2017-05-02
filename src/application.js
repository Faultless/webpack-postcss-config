import Vue from '../node_modules/vue/dist/vue.js';
import _ from 'lodash';

Vue.component('search-item', {
    props: ['search'],
    template: `
        <li>
            <h2>{{ search.title }}<h2>
            <div>{{ search.description }}</div>
            <a href="{{ search.link }}">{{ search.link }}</a>
        </li>
    `
})

var crawlerApp = new Vue({
    el: '#crawlerApp',
    data: {
        validSearch: false,
        searchString: '',
        searchList: []
    },
    watch: {
        searchString: function (newSearch) {
            this.getResults();
        }
    },
    methods: {
        getResults: _.debounce(
            function() {
                var vm = this;
                vm.validSearch = true;
                vm.searchList.push({ title: vm.searchString, description: 'cslul', link: 'http://www.google.com' });
            },
            500
        )
    }
})