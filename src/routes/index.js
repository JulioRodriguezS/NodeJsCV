const mongoose = require('mongoose')
require('../dbcnn')
const { User, Skill, SkillLevel, Degree, Hobbie, SocialNetwork, Goal, Course, WorkExpertise } = require('../models')

module.exports = (server) => {
    const router = server.Router()
    router.get('/:userId', async (req, res, next) => {
        //we make a complete profile object from database
        //in diferent collections
        const allInformation = {}
        //personal information
        allInformation.personalInformation = await User.findById(req.params.userId).lean()
        //skills
        allInformation.socialNerwoks = await SocialNetwork.find({userId:req.params.userId}).lean()
        //work experience
        allInformation.workExpertise = await WorkExpertise.find({userId:req.params.userId}).lean()
        //degree
        allInformation.degrees = await Degree.find({userId:req.params.userId}).lean()
        //goals
        allInformation.goals = await Goal.find({userId:req.params.userId}).lean()
        //hobbies
        allInformation.hobbies = await Hobbie.find({userId:req.params.userId}).lean()
        
        res.render('index', allInformation)
    })

    // router.get('/*', (req,res,next)=>{
    //     res.render('page-404')
    //     setTimeout(()=>{res.redirect('/')},3000)
    // })

    return router
}
