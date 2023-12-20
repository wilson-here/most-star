# Most starred projects

Get 10 most starred projects on Github that were pushed in a date range, in descending order.

## Syntax

`node index.js [YYYY-MM-DD] [YYYY-MM-DD]`

- If 2nd date is not provided: search from 1st date to current date.
- If both date are not provided: search all time.

## Example

1. Retrieve projects pushed between October 11, 2020, and November 30, 2020:
   `node index.js 2020-10-11 2020-11-31`

2. Retrieve projects pushed since October 11, 2020, until the current date:
   `node index.js 2020-10-11`

3. Retrieve the most starred projects of all time:
   `node index.js`
