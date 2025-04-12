# @tfpkgr/password

Class-based utility for hashing and verifying passwords with bcrypt, made simple and secure.

## Installation

Install the package using npm, yarn, or pnpm:

```bash
npm install @tfpkgr/password
```

```bash
yarn add @tfpkgr/password
```

```bash
pnpm add @tfpkgr/password
```

## Usage Example

Here is a quick example of how to use the `Password` utility:

```typescript
import Password from '@tfpkgr/password';

(async () => {
	const plainPassword = 'mySecretPassword';

	// Hash the password
	const hashedPassword = await Password.hash(plainPassword);
	console.log('Hashed Password:', hashedPassword);

	// Verify the password
	const isMatch = await Password.verify(plainPassword, hashedPassword);
	console.log('Password Match:', isMatch);
})();
```

## API Reference

### `Password.setSaltRounds(rounds: number): void`

| Parameter | Type   | Required/Default | Description                       |
| --------- | ------ | ---------------- | --------------------------------- |
| `rounds`  | number | Required         | The number of salt rounds to set. |

Sets the number of salt rounds used for hashing passwords.

### `Password.hash(password: string): Promise<string>`

| Parameter  | Type   | Required/Default | Description                     |
| ---------- | ------ | ---------------- | ------------------------------- |
| `password` | string | Required         | The plaintext password to hash. |

Returns a promise that resolves to the hashed password.

### `Password.verify(password: string, hash: string): Promise<boolean>`

| Parameter  | Type   | Required/Default | Description                          |
| ---------- | ------ | ---------------- | ------------------------------------ |
| `password` | string | Required         | The plaintext password to verify.    |
| `hash`     | string | Required         | The hashed password to compare with. |

Returns a promise that resolves to `true` if the password matches the hash, otherwise `false`.

## Features

-   Simple and secure password hashing and verification.
-   Configurable salt rounds for enhanced security.
-   Built on top of the reliable `bcrypt` library.

## License

This project is licensed under the [MIT License](./LICENSE).

---

Made with ❤️ by tfpkgr
