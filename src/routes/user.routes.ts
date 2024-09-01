import { Router } from 'express';
import { usersControllers } from '../controllers/user.controllers';
import { userValidator } from '../middleware/user.middleware';

const router = Router();

router.post('/', userValidator,usersControllers.createUser);
router.get('/', usersControllers.getUsers);
router.put('/:id',usersControllers.modifyUser)
router.delete('/:id',usersControllers.deleteoneUser)

export default router;