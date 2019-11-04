import { Router } from 'express';
import {
  getAllAccounts,
  getAccountById,
  createAccount,
  editAccount,
  deleteAccount
} from './accounts.controllers';

import { verifyId, verifyBody } from './accounts.middleware';

const router = Router();

router.get('/', getAllAccounts);
router.get('/:id', verifyId, getAccountById);
router.post('/', verifyBody, createAccount);
router.put('/:id', verifyId, verifyBody, editAccount);
router.delete('/:id', verifyId, deleteAccount);

export default router;
