import { getAll, deleteOne, postOne, editOne } from './accounts.model';

export const getAccountById = async (req, res) => {
  return res.status(200).json(req.account);
};

export const getAllAccounts = async (req, res) => {
  const { limit, sortBy, sortDir } = req.query;
  try {
    let accounts = await getAll(limit, sortBy, sortDir);
    return res.status(200).json(accounts);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong' + error.message });
  }
};

export const deleteAccount = async (req, res) => {
  const { id } = req.params;
  try {
    let account = await deleteOne(id);
    return res.status(200).json(account);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong' + error.message });
  }
};

export const createAccount = async (req, res) => {
  const { name, budget } = req.body;

  try {
    let account = await postOne({ name, budget });
    return res.status(201).json(account);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong' + error.message });
  }
};

export const editAccount = async (req, res) => {
  const { id } = req.params;
  const { name, budget } = req.body;

  try {
    let account = await editOne(id, { name, budget });
    return res.status(200).json(account);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong' + error.message });
  }
};
