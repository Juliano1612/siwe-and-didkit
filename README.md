# Sign-In with Ethereum and DIDKit

This project is a small ReactJS example app using [Sign-In with Ethereum](https://docs.login.xyz/) and [DIDKit](https://spruceid.dev/). It is capable of Sign-In with Ethereum to authenticate a user, and allows them to download or verify a Verifiable Credential issued by DIDKit containing their Ethereum address in credentialSubject. 

This project was bootstrapped with [Next.js](https://nextjs.org/).


## Development ##
This project was developed using the following setup:
```bash
$ node -v
v17.7.2
$ npm -v
8.5.2
$ yarn -v
1.22.18
```

## Running

```bash
$ yarn install
$ yarn dev
```
The server should start at <http://localhost:3000>.

## References
This project was built using the following code, pages, and documentation:
- https://spruceid.com/
- https://spruceid.dev/ 
- https://docs.login.xyz/
- https://github.com/spruceid/tzprofiles
- https://github.com/spruceid/didkit
- https://github.com/spruceid/siwe-quickstart