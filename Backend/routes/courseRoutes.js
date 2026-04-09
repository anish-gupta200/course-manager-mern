const express = require('express');
const {createCourse, getCourses, getCourse, updateCourse, deleteCourse }= require ("../controllers/courseController");
const routes = express.Router();

routes.post("/",createCourse);
routes.get("/", getCourses);
routes.get("/:id", getCourse);
routes.put("/:id",updateCourse);
routes.delete("/:id",deleteCourse);

module.exports= routes;
