import { Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';

export const userValidator =[
  body("name","should not be empty").not().isUppercase().isEmpty(),
  body("email","should not be empty").not().isEmpty(),
  body("email","should be a valid email").isEmail(),
  body("age","should not be empty").not().isEmpty(),
  body("age","should have to grow up").isLength({min:12,max:60})
]