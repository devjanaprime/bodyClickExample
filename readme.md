JQuery body click for appended buttons example
==============================================

Just a simple example to show that

```javascript
$( '.CLASSNAME' ).on( 'click' , function(){
  /// code goes here
}); // end testerButton on click
```

Only gets triggers for buttons with CLASSNAME that were on page at load.

If you want appended buttons of CLASSNAME to launch a function you should use

```javascript
$( 'body' ).on( 'click', '.CLASSNAME', function(){
  /// code goes here
});
```
