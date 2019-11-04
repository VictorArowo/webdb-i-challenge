import { Router } from 'express';
import {
  getAllAccounts,
  getAccountById,
  createAccount,
  editAccount,
  deleteAccount
} from './accounts.controllers';

const router = Router();

router.get('/', getAllAccounts);
router.get('/:id', getAccountById);
router.post('/', createAccount);
router.put('/:id', editAccount);
router.delete('/:id', deleteAccount);

export default router;
