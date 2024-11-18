import { describe,it ,expect } from "vitest";
import request from "supertest"
import { app } from "../index";

describe("POST/sum",()=>{
    it("should add 1 and 2 to get 3",async()=>{
        
        const {body,status}=await request(app).post("/sum").send({
            a:1,
            b:2
        })

        expect(body).toEqual({answer:3,id:expect.any(Number)})
        expect(status).toBe(200)
    })
})