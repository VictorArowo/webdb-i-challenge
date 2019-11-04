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

router
  .route('/')
  .get(getAllAccounts)
  .post(verifyBody, createAccount);

router
  .route('/:id')
  .get(verifyId, getAccountById)
  .put(verifyId, verifyBody, editAccount)
  .delete(verifyId, deleteAccount);

export default router;
