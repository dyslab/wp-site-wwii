# wp-site-wwii (Webpack构建的二战军事资料库网站)

purpose to build a static documentary military website with webpack + express + pug based on node.js framework.

*Note: "wp" stands for "Webpack" rather than "WordPress"...* :smile:


## History Events:

- Renamed to 'wp-site-wwii' on 11 Jul 2019.

- Created on 20 Jan 2019.


## The **Guideline/Memo** of Project Building

Since the powerful ability of webpack's 'contentbase', it will treat all files(including js, css, images and json files) as the resources of the project and pack it completely. As a inexperienced guy, there's no a good way for me to split the files between different pages then resulting the size of bundle files is going more and more larger.

Hence, there's a stupid approach for this project building.

Project info:

- Webpack 'contentbase' folder: '**src/**'
    
- js source folder for page constructing: '**src_js/**'
    

### Step 1, Copy the js source folder and its files among in folder '**src_js/**' to the folder '**src/**'.

Note, regarding the file links in js files usually will be updated automatically by IDE(eg. VSCode etc.) , it will be recommended that operating this action outside of IDE, And using the Folder Explorer of your system itself is always a good choice.


### Step 2, Run npm corresponding script and build the destination web pages. (eg, '**npm run build:fr**', check out the command of scripts in package.json for more details.)

Warning,

- Make backups before copy/remove/delete actions.

- Using Cut/Paste is always being recommended. Then you won't lose files easily and keeping synchronized updates much easier.

Noted On 13 Jun 2019.
