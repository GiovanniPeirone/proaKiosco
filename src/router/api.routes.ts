import Express, {Request, Response} from "express";

const router = Express.Router();

router.get('/Productos', (req : Request, res : Response) => {
    res.json({
        nombre : "Sanguchito",
        precio : "300",
    })
})


export default router;

