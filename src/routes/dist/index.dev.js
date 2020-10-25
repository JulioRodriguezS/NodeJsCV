"use strict";

var _require = require('../controllers'),
    gets = _require.gets,
    posts = _require.posts;

var GenPDF = require('../controllers/generatePDF');

module.exports = function (app, server) {
  var router = server.Router();
  router.get('/:userId', function _callee(req, res, next) {
    var userId, _ref, userInfo, skills, workExperience, degrees, courses, goals, socialNetworks, i;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = req.params.userId;
            _ref = {}, userInfo = _ref.userInfo, skills = _ref.skills, workExperience = _ref.workExperience, degrees = _ref.degrees, courses = _ref.courses, goals = _ref.goals, socialNetworks = _ref.socialNetworks;

            if (userId.includes('.')) {
              _context.next = 32;
              break;
            }

            _context.next = 5;
            return regeneratorRuntime.awrap(gets('user', userId));

          case 5:
            userInfo = _context.sent;
            _context.next = 8;
            return regeneratorRuntime.awrap(gets('skills', userId));

          case 8:
            skills = _context.sent;
            i = 0;

          case 10:
            if (!(i < skills.length)) {
              _context.next = 17;
              break;
            }

            _context.next = 13;
            return regeneratorRuntime.awrap(gets('skills/levels', skills[i].skillLevel));

          case 13:
            skills[i].averageLevel = _context.sent;

          case 14:
            i++;
            _context.next = 10;
            break;

          case 17:
            _context.next = 19;
            return regeneratorRuntime.awrap(gets('work-experience', userId));

          case 19:
            workExperience = _context.sent;
            _context.next = 22;
            return regeneratorRuntime.awrap(gets('degrees', userId));

          case 22:
            degrees = _context.sent;
            _context.next = 25;
            return regeneratorRuntime.awrap(gets('courses', userId));

          case 25:
            courses = _context.sent;
            _context.next = 28;
            return regeneratorRuntime.awrap(gets('goals', userId));

          case 28:
            goals = _context.sent;
            _context.next = 31;
            return regeneratorRuntime.awrap(gets('social-network', userId));

          case 31:
            socialNetworks = _context.sent;

          case 32:
            res.render('index', {
              userInfo: userInfo,
              skills: skills,
              workExperience: workExperience,
              degrees: degrees,
              courses: courses,
              goals: goals,
              socialNetworks: socialNetworks
            });

          case 33:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  router.get('/downloadPDF/:userId', function _callee2(req, res, next) {
    var userId, genPdf, resp;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userId = req.params.userId;
            _context2.next = 3;
            return regeneratorRuntime.awrap(gets('user', userId));

          case 3:
            userInfo = _context2.sent;
            genPdf = new GenPDF();
            _context2.next = 7;
            return regeneratorRuntime.awrap(genPdf.generatePDF(userInfo));

          case 7:
            resp = _context2.sent;
            res.send(resp);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
  app.use(router);
};