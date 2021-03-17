# create-random-id

`create-random-id` is a tiny utility function to generate random IDs (strings). It uses `Math.random()`, and as such, it provides no level of cryptographic security. But it should be perfectly fine whenever you simply need to generate a pseudo-random string.

## Usage

After installation, import the package:

```javascript
import { createRandomId } from '@toolz/create-random-id';
```

### createRandomId()

`createRandomId()` generates a random string. The first character in the string will be a letter (unless `useUppercaseLetters` and `useLowercaseLetters` are both set to `FALSE`). All subsequent characters will be uppercase letters (unless `useUppercaseLetters` is set to `FALSE`), lowercase letters (unless `useLowercaseLetters` is set to `FALSE`), and numbers (unless `useNumbers` is set to `FALSE`).

If `useUppercaseLetters`, `useLowercaseLetters` and `useNumbers` are _all_ set to `FALSE`, the function will ignore the settings and generate a string containing uppercase letters, lowercase letters, and numbers.

```javascript
const API = {
   arguments: {
      length: {
         optional,
         format: 'positive integer',
         defaultValue: 32,
      },
      useUppercaseLetters: {
         optional,
         format: Boolean,
         defaultValue: true,
      },
      useLowercaseLetters: {
         optional,
         format: Boolean,
         defaultValue: true,
      },
      useNumbers: {
         optional,
         format: Boolean,
         defaultValue: true,
      },
   },
   returns: string,
}
```

**Examples:**

```javascript
createRandomId(); // MJYeNOFFhx52AmBuzo5YC2yN2TPN3N1O
createRandomId(100); // wSLOH1nZ6WdCy7mHLwBOPoK08250fHN8xe8ipNkT07MjJFU5u55uPrIYs80OQZMmoUakM8Mfn1l8ue2AikKoRciTZFS2O74i1lQM
createRandomId(32, false); // udu3dhp2ht8dxtf38o5l1o8wspiymrgk
createRandomId(32, false, false); // 58388737442364071155558324301586
createRandomId(32, false, false, false); // ebWpxLSF7aQkGHIItKPqNNmOGZhFeNot
createRandomId(32, true, false); // XCZMJCYINK4UYIUABPIXX2I1DBX44R1C
createRandomId(32, true, true, false); // pndomtXQXjPlHbfixGKEchlgiqGWAGuQ
```
