import crypto from 'crypto';

/**
 * Génère un nonce unique pour la CSP
 * @returns {string} Nonce unique
 */
export const generateNonce = (): string => {
  return crypto.randomBytes(16).toString('base64');
};

/**
 * Calcule le hash SHA-256 d'un script pour la CSP
 * @param {string} script - Le contenu du script
 * @returns {string} Hash SHA-256 en base64
 */
export const calculateScriptHash = (script: string): string => {
  const hash = crypto.createHash('sha256');
  hash.update(script);
  return `sha256-${hash.digest('base64')}`;
};
