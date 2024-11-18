import express from "express"
import { client } from "./db";

export const app=express();


app.use(express.json())
// @ts-ignore
app.post("/sum",async(req,res)=>{
    const a = req.body.a;
    const b = req.body.b;

    if (a > 1000000 || b > 1000000) {
        return res.status(422).json({
            message: "Sorry we dont support big numbers"
        });
    }
    const result = a + b;

    const request = await client.request.create({
        data: {
            a: a,
            b: b,
            answer: result,
            type: "Sum"
        }
    });

    res.json({ answer: result, id: request.id });

})