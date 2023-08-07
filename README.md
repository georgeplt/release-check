# release-check
Check the JIRA tickets to be included in a release

Whenever there we are creating releases from the `develop` branch, especially with a bit more lengthy releases, is easy to lose track of all the JIRA tickets to be included. Wrote this tiny script that gathers a unique list ot the ticket included in a `git diff` between two git branches (usually `main/master` and `develop`).

### Usage

 1. open a terminal and go to your repos directory
 2. make sure you have both `develop` and `main` (or `master`) branches up to date from remote:
    - `git fetch origin`
    - `git checkout develop && git pull`
    - `git checkout main && git pull`
3. get a diff of commits between the two branches with:
    - `git log master...develop --oneline`
4. paste the output in the `data.txt` file
5. run the command `node ./index.js` and it should output a unique list with the jira links for all the tickets included in the diff.

