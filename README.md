# travis-wallboard

---------
### Introduction

Wallboard for travis.
Travis Wallboard is exactly what the name implies a wallboard for your travis builds and repos.
This project was born from the irritation of having a wallboard that shows to often an error for builds while nothing is realy wrong but we use travis to test our pull requests so we can keep working without having to wait for our develop environments to finish. 

However red works on developers as well as it does on bulls and panic guaranteed.

Travis wallboard allows for different views of your travis builds as well a repositories view that should only break on non pull request failures and a project view that just shows everything.

### Setting up
When first accessing travis wallboard you will have to tell us what user you want to show the repositories for.

For this visit `/#/settings`

To start we need to know:
* Your user its the {{user}} part of the url (.com is also possible) https://www.travis-ci.org/{{user}}/slugid
* Are the repositories you want to show public or private.
* If you chose private you will also need to authorize "travis wallboard" to access your repos so you will need to give an api token.

An api token can be retrieved with the help if an githb token the settings screen also allows you to add a github token to fill in your **travis api token** for you.

You can create a **Github personal access token** here:
`https://github.com/settings/tokens`

The token needs the following rights set:
*  "read:org"
*  "user:email"
*  "repo_deployment"
*  "repo:status"
*  "write:repo_hook"

Make sure you save this token somewhere as github will only show it to you once.

See the documentation at http://docs.travis-ci.com/api/#with-a-github-token if you want to know more.

**!NOTE** Travis wallboard is an js (angular) application everything is saved client side (cookies)

###Handy
If you want to link people directly to your repos without having to let them fill in all those settings there is a shortcut for opensource repos on travis.

use `#/showmyrepos/xxx` 
So for example:
`http://aterlamia.github.io/travis-wallboard/#/showmyrepos/aterlamia`
will link directly to my repos.

###Features
Current features are:

***Repositories view***
The repositories view will retrieve all your repositories and filter the inactive out of those and show them to you.

Every 30 seconds a poll will done to see if any of your repositories has a changed state if so it will update the state on your screen.

This view can be handy if you sit with multiple teams in one room and you don't want panic if just a pullrequest fails but do want to know if any real builds (think of master, develop or release branches) fail.

There are 5 distinct build views.

*Passed:*

Passed will show a green area with a photo of the committer that initiated that build.
It will show how long ago that build was made and the name of the branch.

*Failed*

Failed will show a red area with a photo of the committer that initiated that build.
It will show how long ago that build  failed and the name of the branch. It will also show the commit message.

*Errored*

Errored will show an orange area with a photo of the committer that initiated that build.
It will show how long ago that build errored and the name of the branch. It will also show the commit message.

*Cancelled*

Cancelled show an gray area with a photo of the committer that initiated that build.
It will show how long ago that build was Cancelled.

*Building*

Building show an blue area with a photo of the committer that initiated that build.
It will show how long ago that build was started.

***Projects view***

The projects view will retrieve all your builds for one project and show them. It will only show the last build for each branch. It will also show all pull request. This view will be handy for places where you sit with on team for one project as you will have constant feedback of branches that are building/failing or passing.

The build views are the same as for repositories with the differnce that a build will show a text "pr" to show a branch is a pull request.  
