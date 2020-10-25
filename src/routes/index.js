
const { gets, posts } = require('../controllers')
const GenPDF = require('../controllers/generatePDF')
module.exports = (app, server) => {
    const router = server.Router()

    router.get('/:userId', async (req, res, next) => {
        let userId = req.params.userId
        let { userInfo, skills, workExperience, degrees, courses, goals, socialNetworks } = {}        
        if(!userId.includes('.')){
            userInfo = await gets('user', userId)
            skills = await gets('skills', userId)
            for (let i = 0; i < skills.length; i++) {
                skills[i].averageLevel = await gets('skills/levels', skills[i].skillLevel)
            }
            workExperience = await gets('work-experience', userId)
            degrees = await gets('degrees', userId)
            courses = await gets('courses', userId)
            //aside
            goals = await gets('goals', userId)
            socialNetworks = await gets('social-network', userId)
        }        
        res.render('index', { userInfo, skills, workExperience, degrees, courses, goals, socialNetworks })
    })

    router.post('/downloadPDF/:userId', async (req,res,next)=>{
        let userId = req.params.userId
        userInfo = await gets('user', userId)
        const genPdf = new GenPDF()
        const resp = await genPdf.generatePDF(userInfo)
        res.send(resp)
    })

    app.use(router)
}
