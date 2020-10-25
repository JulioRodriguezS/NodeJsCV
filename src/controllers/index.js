const fetch = require('node-fetch')
//api heroku server 
const apiUrl = 'https://peaceful-taiga-91600.herokuapp.com/'
//api local node
//const apiUrl = 'http://localhost:3000/'
//api local docker
//const apiUrl = 'http://localhost:90/'

module.exports = {
    gets: async (dir, param) => {
        const completedir = apiUrl + dir + '/'
        return await fetch(completedir + param)
            .then(promss => promss.json())
            .then(content => { return content })
            .catch(err => { return `err: ${err}` })
    },
    posts: async (dir, params) => {
        const completedir = apiUrl + dir
        try {
            const response = await fetch(completedir, {
                method: 'post',
                body: JSON.stringify(params),
                headers: { 'content-type': 'application/json' }
            })
            return response.json();
        } catch (err) {
            return `err: ${err}`
        }
    }
}