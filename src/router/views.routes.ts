import Express, {Request, Response} from "express";

const router = Express.Router();

router.use('/tienda', (req : Request, res : Response) => {
    res.render('index.ejs')
})

router.use('/prod', (req : Request, res : Response) => {
    res.render('producto.ejs');
})

//router.get('/pedir/:id',)




export default router;