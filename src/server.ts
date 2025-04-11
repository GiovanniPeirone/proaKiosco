/*

    Proa La Falda
    Giovanni Peirone

*/

import Express, { urlencoded, Request, Response } from "express";
import cors from 'cors';

import path from 'path';

import views from './router/views';;
import api from './router/api';

const app = Express();

const PORT = process.env.PORT ?? 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cors())
app.use(Express.static(__dirname + '/public'));
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }));;


app.use('', views);
app.use('api/', api)

app.use('', (req : Request, res : Response) => {
    res.redirect('/tienda')
})

app.use((req : Request, res : Response) => {
    res.status(404).json({ message : '404 url invalida'})
    console.log("url 404")
})

app.listen(PORT , () => {
    console.log("Aplicaion Corrinedo en :", PORT);
})

