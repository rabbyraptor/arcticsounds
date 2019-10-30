const axios = require("axios").default;
const goeventHash = process.env.GREENCOPPER_GOEVENT_HASH;

export const state = () => ({
    artists: null
})

export const actions = {
    async getData({ commit, state }) {
        if (state.artists) {
            return Promise.resolve();
        }

        return await axios
            .get(
                "https://s3.amazonaws.com/goeventweb-static.greencopper.com/" + goeventHash + "/arcticsoundfestival-2019/data/eng/artists.json"
            )
            .then((res) => commit("setArtists", res))
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const mutations = {
    setArtists: (state, res) => {
        state.artists = res.data;
    }
}

export const getters = {
    getArtists: (state) => {
        return state.artists;
    },
    getArtistBySlug: (state) => (slug) => {
        if (state.artists) {
            for (let i in state.artists) {
                if (state.artists[i].slug == slug) {
                    return state.artists[i];
                }
            }
        }

        return null;
    }
}

