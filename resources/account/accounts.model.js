import db from '../../data/dbConfig';

export const getAll = (limit, sortBy, sortDir) => {
  return db('accounts')
    .orderBy(sortBy || 'id', sortDir || 'asc')
    .limit(limit || 10);
};

export const getOne = id => {
  return db('accounts').where('id', '=', id);
};

export const postOne = async body => {
  let [id] = await db('accounts').insert(body);
  return getOne(id);
};

export const editOne = async (id, body) => {
  const result = await db('accounts')
    .where('id', '=', id)
    .update(body);
  return result > 0 ? { id, ...body } : null;
};

export const deleteOne = async id => {
  const result = db('accounts')
    .where('id', '=', id)
    .delete();

  return result ? id : null;
};
