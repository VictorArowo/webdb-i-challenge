import { getOne, getAll, deleteOne, postOne, editOne } from './accounts.model';

export const getAccountById = async (req, res) => {
  const { id } = req.params;
  try {
    let account = await getOne(id);
    return res.status(200).json(account);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong' + error.message });
  }
};

export const getAllAccounts = async (req, res) => {
  try {
    let accounts = await getAll();
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
  if (!name || !budget)
    return res.status(400).json({ error: 'Missing name or budget' });

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
  if (!name || !budget)
    return res.status(400).json({ error: 'Missing name or budget' });

  try {
    let account = await editOne(id, { name, budget });
    return res.status(200).json(account);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong' + error.message });
  }
};
