Angular-alert-Service
=====================

Alert Service functionality:
 - Custom Messages
 - Custom Theme
 - Custom timeout (You can define X number of millisecond to close)
 - Close Option


Its very easy to Implement
```html
HTML:

  <code>
    <div class="sw4_notify">
      <alert ng-repeat="alert in alerts" type="alert.type" class="alert alert-{{alert.type}}">{{ alert.msg }} <button type="button" class="close" ng-click="closeAlert($index)"><span aria-hidden="true">&times;</span></button></alert>
    </div>
  </code>
```

```js
JS:

 For Error: alertService.add("danger", "Error: Something went wrong! ", 3000); <br>
 For Success: alertService.add("success", "Success: It works! ", 3000);
```

