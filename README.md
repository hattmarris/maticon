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

Browse to material.io, find icon name you want and use command entering name as string `$ICON` in above command. Examples:

```shell
$ maticon -i alarm
GET icon "alarm" from storage.googleapis.com...
Got response with code 200
Parsed path as "M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z". Saving...
```

```shell
$ maticon -i "people outline"
GET icon "people_outline" from storage.googleapis.com...
Got response with code 200
Parsed path as "M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z". Saving...
This Icon is already stored, do you want to replace it? (y/n)y
sweet, lets do it.
```
