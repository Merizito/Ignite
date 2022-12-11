import express from 'express';
import CreateCourseService from './CreateCourseService';
import { createCourse } from './routes';

const app = express();

app.listen(3333);

app.get("/", createCourse);

