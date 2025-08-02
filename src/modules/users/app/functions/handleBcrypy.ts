import bcrypt from 'bcryptjs';

/**
 * Encripta una contraseña en texto plano.
 * @param strPasswordPlain - Contraseña sin encriptar
 * @returns hash bcrypt de la contraseña
 */
export const encrypt = async (strPasswordPlain: string): Promise<string> => {
  const hash = await bcrypt.hash(strPasswordPlain, 10);
  return hash;
};

/**
 * Compara una contraseña en texto plano con un hash.
 * @param strPasswordPlain - Contraseña sin encriptar
 * @param strPasswordHash - Hash almacenado
 * @returns true si coinciden, false si no
 */
export const compare = async (strPasswordPlain: string, strPasswordHash: string): Promise<boolean> => {
  return await bcrypt.compare(strPasswordPlain, strPasswordHash);
};
