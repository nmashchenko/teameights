# Github pushes

PLEASE...please...**NEVER** push to the *dev branch*

Other than that for each ticket from clickup - create new branch!

Simple example: 

You got a task assigned at clickup -> you create a branch from **DEV** (p.s. you always create a new branch from dev) -> you write code and push to git -> we make pull request and review your code together -> we merge your code to dev branch

# Code styling

2 spaces, semicolons, before push, use beatify extension (free in visual studio code) to actually *beatify* your code! Don't forget to write comments so other guys can understand what you are doing.

# .env & node_modules

Please never push these two. Just never.

# ClickUp syncing

When you get ticket on clickup, you get specific id for the task that will be linked to github, whenever you make branch, name it like 'name name #32f2f3' where #32f2f3 is id you recieve from clickup. Also don't forget to change status of tasks to better understand what's going on!