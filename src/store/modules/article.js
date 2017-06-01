import axios from 'axios'



const state = {
	contentList:[]
}

const mutations = {
	getContentList (state,contentList){
		state.contentList = contentList;
		console.log(contentList);
	}
}

const  actions = {
	getContentList ({commit}){
	    axios.get("http://localhost/admin/article/contents").then((response) =>{
	      let contents = [];
	      if(200 === response.data.code){
	        contents = response.data.data;
	      }else{
	        contents = [];
	      }
	      commit("getContentList",contents);
	    });
	}
} 

export default {
	state,
	mutations,
	actions
}