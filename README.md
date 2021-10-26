//api https://peaceful-taiga-91600.herokuapp.com/
//routes:
/**
 * post /user *retrieve the user personal information* receive: { userId }
 * put /user/edit receive: { userId, name, lastName, phoneNumb, country, city, cp, address, actualPassword, newPassword }
 * post /user/add receive: { name, lastName, email, phoneNumb, country, city, cp, address, password }
 * get /skills/levels/all retrieve: to get all the skills levels
 * get /skills/levels/:level retrieve: the real level that have about the level of skill received
 * post /skills/add *add skills to user* receive: {userId, title, description, skillLevel}
 * get /skills/:userId retrieve: the user saved skills
 * delete /skills receive: skillId
 * get /degrees/:userId retrieve: the user degrees
 * post /degrees/add receive: { userId, institutionName, carreerDescription, carrerTitle, gotCertified, institute, initialDate, finalDate }
 * put /degrees/edit receive: { institutionName, carreerDescription, carrerTitle, gotCertified, institute, initialDate, finalDate }
 * delete /degree/delete receive: degreeId
 * get /hobbies/:userId 
 * post /hobbies/add receive: { userId, title, description, icon, setView }
 * put /hobbies/edit receive: { hobbieId, title, descripticon, icon, setView }
 * delete /hobbies/delete receive: hobbieId
 * get /goals/:userId
 * post /goals/add receive: { userId, descripticon, setView }
 * delete /goals/delete receive: goalId
 * post /social-network/add receive: { userId, networkName, networkLink }
 * delete /social-network/delete receive: socialNetworkId
 * get /courses/:userId
 * post /courses/add receive: {userId, courseInstitution, courseInsitutionURL, courseTitle, courseDescription, courseInitial, courseFinal, setView}
 * delete /courses/delete receive: courseId
 * get /work-experience/:userId
 * post /work-experience/add receive: an array of [{userId, title, description, company, logo, companyUrl, initialDate, finalDate}...]
 * delete /work-experience/delete receive: workExpertiseId
 * 
 */
