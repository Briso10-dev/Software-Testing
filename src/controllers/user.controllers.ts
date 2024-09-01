import { Request, Response } from 'express';
import { prisma } from '../server';
import { validationResult } from 'express-validator';

export const usersControllers = {
  //CRUD OPERATIONS

  //CREATE USERS
  createUser: async (req: Request, res: Response) => {
    try {
      const { name, email, age } = req.body
      const errrors = validationResult(req)
      if (errrors.isEmpty())
        return res.status(400).json({ errors: errrors.array() })

      const user = await prisma.user.create({
        data: {
          name,
          email,
          age
        }
      });
      if (!user)
        return res.status(400).json({ msg: "could not create user" })
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: 'Error creating user', error });
    }
  },
  getUsers: async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true
        }
      });
      if (!users)
        return res.status(400).json({ msg: "could not create user" })
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching users', error });
    }
  },
  modifyUser: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const { name, email, age } = req.body
      const updateUser = await prisma.user.update({
        where: {
          id
        },
        data: {
          name,
          email,
          age
        },
      })
      if (!updateUser)
        return res.status(400).json({ msg: "could not update user's info" })
      return res.status(200).json(updateUser)
    } catch (error) {
      res.status(400).json({ message: 'Error creating user', error });
    }
  },
  deleteoneUser: async (req: Request, res: Response) => {
    try {
      const { id } = req.params

      const deleteUser = await prisma.user.delete({
        where: {
          id
        },
      })
      if (!deleteUser)
        return res.status(400).json({ msg: "could not delete user" })

      return res.status(200).json({ msg: "user successfully deleted" })
    } catch (error) {
      res.status(400).json({ message: 'Error creating user', error });
    }
  },
}