import { getOne } from './accounts.model';

export const verifyId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const account = await getOne(id);

    if (!account.length)
      return res.status(404).json({ error: 'Account does not exist' });

    req.account = account;
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong: ' + error.message });
  }
};

export const verifyBody = (req, res, next) => {
  const { name, budget } = req.body;
  if (!name || !budget)
    return res.status(400).json({ error: 'Name or Budget missing' });
  next();
};
