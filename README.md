# maticon

CLI to get material icons from storage.googleapis.com and put paths in JSON file.  This is when you only want a select subset of icons for a project, fast.  Future feature may include a `maticon get all` command or something that gets all of the latest from Google's repo.

### Installation & Setup:

`npm install maticon` or `yarn add maticon`

The bin file will be installed to `./node_modules/.bin`. So make sure this file is in your $PATH for command usage.  Put:

`PATH=$PATH:./node_modules/.bin`

in your .bash_profile and source:

`source ~/.bash_profile`.

Alternatively you could install globally with -g flag. (Not recommended).

### Usage:

`maticon setup`

Interactive setup to enter absolute path to JSON file in your repo where paths should be stored.

`maticon -i, --icon $ICON `

Browse to material.io, find icon name you want and use command entering name as `$ICON` in above command.
