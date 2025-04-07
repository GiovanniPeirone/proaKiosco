/*



*/

import Express, { urlencoded } from "express";
import cors from 'cors';

import path from 'path';

import views from './router/views'


const app = Express();

const PORT = process.env.PORT ?? 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cors())
app.use(Express.static(__dirname + '/public'));
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }));;


app.use('', views)


app.listen(PORT , () => {
    console.log("Aplicaion Corrinedo en :", PORT);
})

