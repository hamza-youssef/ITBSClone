import { createStore } from 'vuex'
import axios from "axios"

// const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:8081/api'
});

let user = localStorage.getItem('user');
if (!user) {
    user = {
        userId: -1,
        token: '',
    };
} else {
    try {
        user = JSON.parse(user);
        instance.defaults.headers.common['x-auth-token'] = user.token;
    } catch (ex) {
        user = {
            userId: -1,
            token: '',
        };
    }
}

// Create a new store instance.
const store = createStore({
    state: {
        status: '',
        user: user,
        userInfos: {
            nom: " " ,
            prenom: '',
            email: '',
            role: '',
        },
    },
    mutations: {
        
        setStatus: function (state, status) {
            state.status = status;
        },
        logUser: function (state, user) {
            instance.defaults.headers.common['x-auth-token'] = user.token;
            localStorage.setItem('user', JSON.stringify(user));
            state.user = user;
        },
        userInfos: function (state, userInfos) {
            state.userInfos = userInfos;
            
          },
        logout: function (state) {
            state.user = {
                userId: -1,
                token: '',
            }
            localStorage.removeItem('user');
        }
    },
    actions: {
        login: ({ commit }, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) => {
                instance.post('/auth', userInfos)
                    .then(function (response) {
                        commit('setStatus', '');
                        commit('logUser', response.data);
                        resolve(response);   
console.log(`aa:${userInfos}`)
                    })
                    .catch(function (error) {
                        commit('setStatus', 'error_login');
                        reject(error);
                    });
            });
            
        },
        // createAccount: ({ commit }, userInfos) => {
        //     commit('setStatus', 'loading');
        //     return new Promise((resolve, reject) => {
        //         commit;
        //         instance.post('/auth/users', userInfos)
        //             .then(function (response) {
        //                 commit('setStatus', 'created');
        //                 resolve(response);
        //             })
        //             .catch(function (error) {
        //                 commit('setStatus', 'error_create');
        //                 reject(error);
        //             });
        //     });
        // },

        getUserInfos: ({ commit }) => {
            instance.get(`/users/${4}`)
            .then(function (response) {
                    console.log(response.data)
                    commit('userInfos', response.data);
                   
                })
                .catch(function () {
                });
        }
    }
})

export default store;