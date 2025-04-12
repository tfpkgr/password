# @tfpkgr/password

## Overview

`@tfpkgr/password` is a utility package for hashing and verifying passwords using bcrypt. It provides a simple and secure class-based API for managing password operations.

## Installation

```bash
npm install @tfpkgr/password
```

## Usage

### Hashing a Password

```typescript
import Password from '@tfpkgr/password';

(async () => {
	const hashedPassword = await Password.hash('mySecretPassword');
	console.log('Hashed Password:', hashedPassword);
})();
```

### Verifying a Password

```typescript
import Password from '@tfpkgr/password';

(async () => {
	const hashedPassword = await Password.hash('mySecretPassword');
	const isMatch = await Password.verify('mySecretPassword', hashedPassword);
	console.log('Password Match:', isMatch);
})();
```

### Customizing Salt Rounds

```typescript
import Password from '@tfpkgr/password';

Password.setSaltRounds(12); // Set custom salt rounds

(async () => {
	const hashedPassword = await Password.hash('mySecretPassword');
	console.log('Hashed Password with custom salt rounds:', hashedPassword);
})();
```

## License

This project is licensed under the MIT License.
