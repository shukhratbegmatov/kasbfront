import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from "axios";
import router from "../router";
export default new Vuex.Store({
  state: {
    baseUrl:"https://api-kasb.uzedu.uz/api/v1/",
    headers:[],
    banners:[],
    services:[],
    universities:[],
    universitiestop:[],
    news:[],
    universitiessingle:{},
      professions_web:[],
      professions_websingle:[],
      subjects:[],
      subjectswork:[],
      isLoading:false,
      refCount:0,
      me:false
  },
    mutations: {

        loading(state, isLoading) {
            console.log({isLoading})
            if (isLoading) {
                state.refCount++;
                state.isLoading = true;
            } else if (state.refCount > 0) {
                state.refCount--;
                state.isLoading = (state.refCount > 0);
            }
        },
    },
  actions: {
      getMe({state}){
          axios.get(`${state.baseUrl}students/me/`,
              {
                  headers: {
                      'Authorization': `Bearer ${localStorage.getItem('reg_token')}`,
                      'Accept-Language':'oz'
                  }
              }
              )
              .then(res=>{
                  state.me=res.data
              })

      },
    getMenus({state}){
          axios.get(`${state.baseUrl}header/`,{
            'Accept-Language':'oz'
          })
          .then(res=>{
            console.log(res.data.menus)
              state.headers=res.data
          })

    },
    getBanners({state}){
      axios.get(`${state.baseUrl}banners/`,{
        headers:{
          'Accept-Language':'oz'
        }
      })
          .then(res=>{
            state.banners=res.data

          })
    },
    getServices({state}){
      axios.get(`${state.baseUrl}services/`,{
        headers:{
          'Accept-Language':'oz'
        }
      })
          .then(res=>{
            state.services=res.data

          })
    },
      getUniversityTop({state}){
          axios.get(`${state.baseUrl}top-universities`,{
              headers:{
                  'Accept-Language':'oz'
              }
          })
              .then(res=>{
                  state.universitiestop=res.data
              })
      },
      getUniversity({state}){
      axios.get(`${state.baseUrl}universities/`,{
        headers:{
          'Accept-Language':'oz'
        }
      })
          .then(res=>{
            state.universities=res.data
          })
    },
    getUniversitySingle({state}){
      console.log(router.currentRoute)
      axios.get(`${state.baseUrl}universities/${router.currentRoute.params.id}/`,{
        headers:{
          'Accept-Language':'oz'
        }
      })
          .then(res=>{
            state.universitiessingle=res.data
            console.log(router)
          })
    },
    getNews({state}){
      axios.get(`${state.baseUrl}top-web-news/`,{
        headers:{
          'Accept-Language':'oz'
        }
      })
          .then(res=>{
            state.news=res.data
          })
    },
      getProfision({state}){
          axios.get(`${state.baseUrl}professions-web/`,{
              headers:{
                  'Accept-Language':'oz'
              }
          })
              .then(res=>{
                  state.professions_web=res.data
              })
      },
      getProfisionSingle({state}){
          console.log(router.currentRoute)
          axios.get(`${state.baseUrl}professions-web/${router.currentRoute.params.id}/`,{
              headers:{
                  'Accept-Language':'oz'
              }
          })
              .then(res=>{
                  state.professions_websingle=res.data
                  console.log(router)
              })
      },
      getSubjects({state}){
          console.log(router.currentRoute)
          axios.get(`${state.baseUrl}subjects/`,{
              headers:{
                  'Accept-Language':'oz'
              }
          })
              .then(res=>{
                  state.subjects=res.data
                  console.log(router)
              })
      },
      getSubjectWork({state}){
          console.log(router.currentRoute)
          axios.get(`${state.baseUrl}professions-web-calculator?subjects=$cre`,{
              headers:{
                  'Accept-Language':'oz'
              }
          })
              .then(res=>{
                  state.subjectswork=res.data
                  console.log(router)
              })
      },
  },
  modules: {
  }
})
