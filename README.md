# material-progress-html5-sass
**A true Html5 & Sass progress bar in Material Design style!**

**To install it just copy the progress.scss file into your /src/scss/ folder** and import it into your main.scss file with 
```scss
@import "YOURASSETSPATH/progress";
```
There is nothing more to know just put <progress> inside your html code and will **automatically come with the custom progress.scss style**

### Determinate progress bar
Use determinate mode for the progress bar when you want to show that a specific quantity of progress has occurred. For example, the percent remaining of a file being retrieved, the amount records in a batch written to database, or the percent remaining of a file that is uploaded. To indicate determinate progress, you must set the max value of the progress bar to max="100" (100 or 1000 or what you want) and set the amount of progress by setting a value="" (like value="80").
```html
<progress max="100" value="0"></progress>
```

### Indeterminate progress bar
Use indeterminate mode for the progress bar when you do not know how long an operation will take. Indeterminate mode is the default for progress bar and shows a cyclic animation without a specific amount of progress indicated. The following example shows an indeterminate progress bar:
```html
<progress></progress>
```
### To know
In the sass sheet there are some variables that allow you to customize the color, appearance, and size of the progress bar
```scss
//Colors
$progress-bar-color: #26a69a !default;
$progress-bar-background:#7c7876 !default;

//Sizes
$progress-height: 6px !default;
$progress-width: 100% !default;

//Apparence
$progress-border-radius: 1px !default;
```

