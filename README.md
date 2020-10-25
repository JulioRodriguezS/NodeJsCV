//api https://peaceful-taiga-91600.herokuapp.com/
//routes:
/**
 * post /user *retrieve the user personal information* recieve: { userId }
 * put /user/edit recieve: { userId, name, lastName, phoneNumb, country, city, cp, address, actualPassword, newPassword }
 * post /user/add recieve: { name, lastName, email, phoneNumb, country, city, cp, address, password }
 * get /skills/levels/all retrieve: to get all the skills levels
 * get /skills/levels/:level retrieve: the real level that have about the level of skill recieved
 * post /skills/add *add skills to user* recieve: {userId, title, description, skillLevel}
 * get /skills/:userId retrieve: the user saved skills
 * delete /skills recieve: skillId
 * get /degrees/:userId retrieve: the user degrees
 * post /degrees/add recieve: { userId, institutionName, carreerDescription, carrerTitle, gotCertified, institute, initialDate, finalDate }
 * put /degrees/edit recieve: { institutionName, carreerDescription, carrerTitle, gotCertified, institute, initialDate, finalDate }
 * delete /degree/delete recieve: degreeId
 * get /hobbies/:userId 
 * post /hobbies/add recieve: { userId, title, description, icon, setView }
 * put /hobbies/edit recieve: { hobbieId, title, descripticon, icon, setView }
 * delete /hobbies/delete recieve: hobbieId
 * get /goals/:userId
 * post /goals/add recieve: { userId, descripticon, setView }
 * delete /goals/delete recieve: goalId
 * post /social-network/add recieve: { userId, networkName, networkLink }
 * delete /social-network/delete recieve: socialNetworkId
 * get /courses/:userId
 * post /courses/add recieve: {userId, courseInstitution, courseInsitutionURL, courseTitle, courseDescription, courseInitial, courseFinal, setView}
 * delete /courses/delete recieve: courseId
 * get /work-experience/:userId
 * post /work-experience/add recieve: an array of [{userId, title, description, company, logo, companyUrl, initialDate, finalDate}...]
 * delete /work-experience/delete recieve: workExpertiseId
 * 
 */
