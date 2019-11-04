import db from '../../data/dbConfig';

export const getAll = () => {
  return db('budgets');
};

export const getOne = id => {
  return db('budgets').where('id', '=', id);
};

export const postOne = async body => {
  let [id] = await db('budgets').insert(body);
  return getOne(id);
};

export const editOne = async (id, body) => {
  let result = await db('budgets')
    .where('id', '=', id)
    .update(body);
  return result > 0 ? { id, ...body } : null;
};

export const deleteOne = async id => {
  return db('budgets')
    .where('id', '=', id)
    .delete();
};
