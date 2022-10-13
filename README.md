# web-tek
Web technologies project


## CSS
We are going to use BEM and atomic css.

Atomic css means that we will have utility classes such as d-flex, d-block etc.
We are trying to use atomic classes for simple cases. If there are elements that need additional styling (5+ atomic classes) we are going to use BEM class.

For atomic styling we have atomic.css file. All atomic styling goes there. This file will be shared between all html files.

For shared BEM styling we have shared.css file. If there will be something that need BEM class and is shared between html files will be written in shared.css file.

If there is something custom for html page, we are going to create css file that match htmll file name, so for example if we have BEM styling that is used only for aobut.html page, we are going to create about.css file in css directory, and add those styles there, so it will be easy to find later.

## Javascript
For js files, we are going to name them by their functionalities. For utility scripts, something simple, like one line we will have shared.js file which will include all utility functions.

For more complicated things, we are going to have seperate files named with functionality they add, so for form validation there should be file named form_validation.js, for img gallery, img_gallery.js etc.

## Git
In our project we will be working on github.

#### How our workflow should look like?
Create new branch with `git checkout -b *branch name*`
Make your changes
Push changes into github (`add, commit, push`)
Create PR
Squash and merge your PR after you get approve.

For eager to learn new things: https://www.conventionalcommits.org/en/v1.0.0/

List of useful commands:
```
git add
git commit
git push
git pull
git merge
git checkout
git reset
```

usage of `git add`:
`git add` is for adding files to our commit. So if u do changes in file, u need to add it to commit so github knows what files we want to commit and push to our branch. In this project everyone will most likely use `git add -A`. Flag -A means that we add all file changes we made lately, but if somoene does not want to add all files you can just do `git add *path to file*` and add specified files if you do not want to include all files in your commit.

usage of `git commit`:
`git commit -m "*message text*"` is to describe what was done in your PR, so if you added new functionality you need to name it, or if you fix bug etc. after u add files that you chaged/updated/created you need to commit them and say what did you do. For example `git commit -m "fix: header styling"` - that means in this PR I was fixing header styling. Try to make those messages clear so it is easy to understand what was done.

usage of `git push`:
it is used to push your local changes into github so everyone can have access to work you have done.

**To psuh something we need to first use `git add`, then `git commit` and at the end `git push`**

usage of `git pull`:
we use it to pull changes from github into our local machine. If you did some changes it might say you have conflicts and need to resolve them, just do so if they appear.

usage of `git merge`:
git merge is used to merge branches. So if you are working on your own branch and there is new version on main and you want to work with the newest verision to make sure there is no conflicts, you will need to merge your current branch with new updated main. To do so, we are using `git merge`. Whole process from the begining should look like:
```
git checkout main
git pull
git checkout *my branch*
git merge main
```
What i just did is that, I moved from my branch to main, pull all changes, then get back to my branch and then merged it with main. After merge there might be some conflicts, you will need to resolve them.

**IMPORTANT: Remember to commit your all changes before you change branches from your own to main. Git won't let you do it so you will see that you have uncommited changes and info that action was aborted. Just do standard `add, commit, push` and then you can easily move to main and merge your branch.**

usage of `git checkout`:
git checkout is used to move between branches. `git checkout *branch name*`. Also to create new branches we are using -b flag so command looks like: `git checkout -b *branch name*`. Remember to create new branch when you start working on new feature.

usage of `git reset`:
If you get lost with your changes and want to start over from scratch use `git reset` to get everything back as you started. Also `git reset main --hard` might be useful if you get 'hard' lost :) It just forces hard reset.
