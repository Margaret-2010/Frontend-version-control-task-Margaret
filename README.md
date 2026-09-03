# Frontend-version-control-task-Margaret
A repo for demonstrating my knowledge on GitHub

This repository demonstrates Git version control workflows including branching, commits, pull requests, and merging as part of my SIWES backend development internship task.

# Backend Version Control Task

## Project Overview

This project is a simple Task Management REST API developed to demonstrate practical Git and GitHub version control workflows.

The project focuses on backend development using Node.js and Express. It demonstrates repository management, branching, meaningful commits, pull requests, code reviews, merging, reverting changes, and branch management.

## Technologies Used

* Node.js
* Express.js
* Git
* GitHub
* REST API


## Branches

### `main`

The main production branch containing the completed and reviewed backend project.

### `feature-task-api`

Used to develop the task management API, including task data, controllers, and CRUD routes.

### `feature-error-handling`

Used to implement request validation, centralized error handling, and error-case tests.

## Commit 

Meaningful commit messages were used to clearly describe each change. Examples include:

* `chore: initialize node express backend`
* `feat: add task data and controller`
* `feat: add task CRUD routes`
* `feat: add request validation`
* `feat: add centralized error handling`
* `test: add task endpoint error cases`

## Pull Requests and Code Review

Pull requests were created from each feature branch into `main`.

The review process included comments and suggestions before the changes were merged.

### Merged Pull Requests

Add screenshots of the merged pull requests below.

![Merged task API PR](1.png)

![Merged error handling PR](2.png)

## Git Commands Used Frequently


git clone
git status
git add .
git commit
git log
git branch
git checkout
git switch
git push
git pull
git fetch
git merge
git revert
git branch -m


## Reverting a Commit

A minor error was intentionally introduced into the project and committed.

The commit was reverted using:

git revert HEAD

This created a new commit that reversed the changes while preserving the original commit in the Git history.

## Branch Renaming

The `feature-error-handling` branch was renamed to:

feature-api-error-handling


The renamed branch was pushed to GitHub and the old remote branch was removed.

The updated remote information was then retrieved using:

git fetch origin


## Lessons Learned

This project helped me understand how version control supports backend development and team collaboration.

Key lessons learned include:

1. Feature branches help developers work on separate backend features without affecting the main branch.
2. Meaningful commit messages make project history easier to understand.
3. Pull requests provide an opportunity to review code before merging it.
4. Code review comments can identify improvements before changes reach the main branch.
5. `git revert` is useful for safely undoing a change while preserving Git history.
6. `git fetch` allows local repositories to retrieve information about changes on remote branches.
7. Keeping the `main` branch stable makes collaborative backend development safer and more organized.

## Conclusion

The project demonstrates a complete Git and GitHub workflow for a backend application, from repository initialization and feature development through pull requests, reviews, merging, reverting changes, and branch management.
