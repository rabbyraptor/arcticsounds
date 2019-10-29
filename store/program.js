const axios = require("axios").default;
const goeventHash = process.env.GREENCOPPER_GOEVENT_HASH;

export const state = () => ({
    program: null
})

export const actions = {
    async getData ({commit, state}) {
        if(state.program) {
            return Promise.resolve();
        }

        return await axios
            .get(
                "https://s3.amazonaws.com/goeventweb-static.greencopper.com/" + goeventHash + "/arcticsoundfestival-2019/data/eng/shows.json"
            )
            .then((res) => commit("setProgram", res))
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const mutations = {
    setProgram: (state, res) => {
        state.program = res.data;
    }
}

export const getters = {
    getProgram: (state) => {
        return state.program;
    },
    getProgramBySlug: (state) => (slug) => {
        if(state.program) {
            for(let i in state.program) {
                if(state.program[i].slug == slug) {
                    return state.program[i];
                }
            }
        }

        return null;
    },
    
}

