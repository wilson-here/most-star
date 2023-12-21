# [Most Star](https://www.npmjs.com/package/most-star) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-red.svg)](https://github.com/wilson-here/most-star/LICENSE) [![npm version](https://img.shields.io/npm/v/most-star.svg?style=flat)](https://www.npmjs.com/package/most-star) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://www.npmjs.com/package/most-star-cli#Contributing)

## Overview

a CLI app to get 10 most starred projects on Github that were pushed in a date range, in descending order.

## Installation

```bash
npm i -g most-star
```

## Usage

```bash
fetch-repo [YYYY-MM-DD] [YYYY-MM-DD]
```

- If 2nd date is not provided: search from 1st date to current date.
- If both date are not provided: search all time.

## Example

1. Retrieve projects pushed between October 11, 2020, and November 30, 2020:<br>

   ```bash
   fetch-repo 2020-10-11 2020-11-31
   ```

2. Retrieve projects pushed since October 11, 2020, until the current date:<br>

   ```bash
   fetch-repo 2020-10-11
   ```

3. Retrieve the most starred projects of all time:<br>

   ```bash
   fetch-repo
   ```

## Contributing

Feel free to contribute to the project by submitting a pull request 🙋‍♂️.

## License

Most Star is [MIT licensed](./LICENSE).
