# Sinon with ECMAScript modules?

Is sinon usable for stubbing ECMAScript modules (ESM)? 

- https://github.com/sinonjs/sinon/issues/2528#issuecomment-1665204587 indicates, it is not.
- https://github.com/fatso83/sinon-swc-bug/tree/ts-esm indicates also that it is not because the actual replacement is done by `td.replaceEsm()`
- In the `main` branch it is tested with ESM only code. It is shown that the tests where sinon either stubs a function or mocks a server respond fail. When stubbing one also gets the error message `TypeError: ES Modules cannot be stubbed`. 

⚠️ **NO, you cannot using pure sinon with ECMAScript modules.**
