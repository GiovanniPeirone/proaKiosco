import Express, {Request, Response} from "express";

const router = Express.Router();

router.use('', (req : Request, res : Response) => {
    res.render('index.ejs')
})

//router.get('/pedir/:id',)




export default router;