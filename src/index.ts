import bcrypt from 'bcrypt';

/**
 * Utility class for password hashing and verification using bcrypt.
 *
 * @example
 * const hashedPassword = await Password.hash('mySecretPassword');
 */
export default class Password {
	private static saltRounds = 10;

	/**
	 * Updates the number of salt rounds used for hashing.
	 * @param rounds - The number of salt rounds to set.
	 */
	static setSaltRounds(rounds: number): void {
		if (!Number.isInteger(rounds) || rounds <= 0) {
			throw new Error('Salt rounds must be a positive integer.');
		}
		this.saltRounds = rounds;
	}

	/**
	 * Hashes a given plaintext password.
	 * @param password - The plaintext password to hash.
	 * @returns A promise that resolves to the hashed password.
	 */
	static async hash(password: string): Promise<string> {
		if (typeof password !== 'string' || password.trim().length === 0) {
			throw new Error('Password must be a non-empty string.');
		}
		return await bcrypt.hash(password, this.saltRounds);
	}

	/**
	 * Verifies if a plaintext password matches a hashed password.
	 * @param password - The plaintext password to verify.
	 * @param hash - The hashed password to compare against.
	 * @returns A promise that resolves to `true` if the password matches, otherwise `false`.
	 */
	static async verify(password: string, hash: string): Promise<boolean> {
		if (typeof password !== 'string' || password.trim().length === 0) {
			throw new Error('Password must be a non-empty string.');
		}
		if (typeof hash !== 'string' || hash.trim().length === 0) {
			throw new Error('Hash must be a non-empty string.');
		}
		return await bcrypt.compare(password, hash);
	}
}
