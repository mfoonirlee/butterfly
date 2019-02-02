// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({8:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var txt = exports.txt = "\u4ECE\u6B66\u9053\u9986\u5F00\u59CB\u7B97\u62D6\u4E86\u5F97\u6709\u4E2A1\u5E74\u591A\u4E86\u3002\u3002\n\n\u6700\u8FD1\u7EC8\u4E8E\u6709\u5FC3\u601D\u628Arepo\u5199\u4E00\u4E0B\u4E86\uFF0C\u8BB0\u5F55\u4E0B\u6211\u7684\u8FD9\u6BB5\u8FFD\u661F\u4E4B\u65C5\u3002\n\n\u5E94\u8BE5\u662F2017\u5E741\u67081\u65E5\u7684\u65F6\u5019\uFF0C\u5750\u5728\u9AD8\u94C1\u4E0A\uFF0C\u767E\u65E0\u804A\u8D56\u7684\u542C\u7740\u8033\u673A\u91CC\u968F\u673A\u653E\u8D77\u4E86\u300Cbrave shine\u300D\uFF0C\u83AB\u540D\u7684\u89C9\u5F97\u6709\u4E9B\u597D\u542C\uFF0C\u7279\u522B\u662F\u5979\u72EC\u7279\u7684\u58F0\u7EBF\uFF0C\u5728\u8033\u673A\u53EA\u542C\u4E2A\u54CD\u7684\u6211\u7684\u8111\u6D77\u4E2D\uFF0C\u7279\u522B\u6709\u51B2\u51FB\u529B\uFF0C\u4E8E\u662F\u5355\u66F2\u5FAA\u73AF\u4E86\u4E00\u8DEF\u3002\n\n\u7136\u540E\u662F\u4E94\u6708\u7684\u65F6\u5019\uFF0C\u770B\u5230BML2017\u6709Aimer\u5F53\u5609\u5BBE\uFF0C\u60F3\u7740\u53CD\u6B63\u4EBA\u4E5F\u5728\u4E0A\u6D77\uFF0C\u5C31\u53BB\u542C\u542C\u5427\u3002\n\n\u56E0\u4E3A\u4E0D\u77E5\u9053\u600E\u4E48\u4E70\u7968\uFF0C\u7F51\u4E0A\u968F\u610F\u4E00\u641C\u7ADF\u7136\u53D1\u73B0\u5979\u4F1A\u57288\u6708\u4EFD\u5728\u65E5\u672C\u6B66\u9053\u9986\u4E3E\u529Esolo\uFF0C\u867D\u7136\u5E76\u4E0D\u662F\u5F88\u719F\u6089\u65E5\u672C\u7684\u573A\u9986\uFF0C\u4F46\u662F\u6B66\u9053\u9986\u4E4B\u4E8E\u6B4C\u624B\u7684\u610F\u4E49\u8FD8\u662F\u6709\u4E00\u70B9\u4E86\u89E3\u7684\u3002\n\n\u4E8E\u662F\u5C31\u9976\u6709\u5174\u81F4\u7684\u5728\u7F51\u4E0A\u641C\u4E86\u8D77\u6765\uFF0C\u52A0\u4E4B\u521A\u529E\u4E0B\u6765\u7684\u65E5\u672C\u7B7E\u8BC1\u4E5F\u95F2\u7740\uFF0C\u5C31\u60F3\u7740\u78B0\u78B0\u8FD0\u6C14\u5427\uFF0C\u4E07\u4E00\u5462\uFF1F\n\n\u7ED3\u679C\u867D\u7136\u9519\u8FC7\u4E86\u6700\u540E\u4E00\u6B21\u62BD\u9009\uFF0C\u4F46\u662F\u771F\u7684\u5F88\u5E78\u8FD0\u7684\u7FA4\u91CC\u6709\u7C89\u4E1D\u6709\u4E8B\u4E0D\u80FD\u53C2\u52A0\uFF0C\u5728\u8F6C\u7968\uFF0C\u4E8E\u662F\u6211\u6709\u5E78\u62FF\u5230\u4E86\u4E00\u5F20\u6B66\u9053\u9986\u7684\u7968\uFF01\n\n\u7136\u540E\u81EA\u5DF1\u89C4\u5212\u884C\u7A0B\u3001\u653B\u7565\uFF0C\u8010\u7740\u6027\u5B50\u7B49\u5230\u4E868\u6708\u5E95\uFF0C\u7EC8\u4E8E\u8E0F\u4E0A\u4E86\u524D\u5F80\u4E1C\u4EAC\u6B66\u9053\u9986\u7684\u65C5\u9014\u3002\n\n\u8BB0\u5F97live\u5F53\u5929\uFF0C\u56E0\u4E3A\u662F\u7B2C\u4E00\u6B21\u53C2\u4E0E\u8FD9\u79CD\u6D3B\u52A8\u3002\u6B64\u524D\u5BF9Aimer\u7684\u4E86\u89E3\u4E5F\u4EC5\u9650\u4E8Efate\u548C\u6CFD\u91CE\u5F18\u4E4B\u76F8\u5173\u7684\u4E00\u4E9B\u66F2\u76EE\uFF0C\u4E86\u89E3\u7684\u5E76\u4E0D\u591A\uFF0C\u548C\u5176\u4ED6\u7C89\u4E1D\u4E00\u8D77\u8FD8\u663E\u5F97\u6211\u8FD9\u4E2A\u5927\u9F84\u5B85\u7537\u6709\u4E9B\u683C\u683C\u4E0D\u5165\u3002\n\n\u4E0D\u8FC7\uFF0C\u8BDD\u867D\u5982\u6B64\uFF0C\u547D\u8FD0\u4F3C\u4E4E\u5374\u5F88\u7167\u987E\u6211\u3002\u672C\u7740\u65E9\u4E0A7\u70B9\u591A\u53BB\u6B66\u9053\u9986\u7B80\u5355\u901B\u901B\uFF0C\u7136\u540E\u5403\u4E2A\u65E9\u996D\u7684\u5FC3\u6001\uFF0C\u53D1\u73B0\u4E86\u65E9\u65E9\u524D\u6765\u6392\u573A\u8D29\u7684\u4EBA\u6D41\u3002\n\n\u6D88\u606F\u540C\u6B65\u5230\u7FA4\u91CC\u4E4B\u540E\uFF0C\u7FA4\u91CC\u4E5F\u70B8\u9505\u4E86\u3002\u800C\u6211\u5374\u4FA5\u5E78\u7684\u6392\u5728\u4E86\u6BD4\u8F83\u9760\u524D\u7684\u4F4D\u7F6E\uFF0C\u7136\u800C\u6B64\u65F6\u7684\u6211\u4F3C\u4E4E\u592A\u5C0F\u770B\u4E86\u7C89\u4E1D\u7684\u529B\u91CF\u4E86\u3002\n\n\u8BB0\u5F97\u573A\u8D29\u662F\u5F53\u5929\u4E0B\u53481\u70B9\u8FC7\u5F00\u5356\uFF0C\u4F46\u662F\u5F53\u65F6\u8FD8\u662F\u65E9\u4E0A8\u70B9\u3002\u30025\u4E2A\u591A\u5C0F\u65F6\u7684\u65F6\u95F4\uFF0C\u6211\u770B\u7740\u961F\u4F0D\u4ECE50\u7C73\uFF0C\u5230100\u7C73\uFF0C\u5230200\u7C73\uFF0C\u5230500\u7C73\u3002\u3002\u7136\u540E\u5230\u56F4\u7740\u6B66\u9053\u9986\u4E00\u5708\u53C8\u4E00\u5708\uFF0C\u9ED1\u538B\u538B\u7684\u4EBA\u7FA4\u6709\u5E8F\u7684\u5C06\u6B66\u9053\u9986\u56F4\u5F97\u6C34\u6CC4\u4E0D\u901A\u3002\n\n\u4E5F\u624D\u5728\u6B64\u523B\uFF0C\u6211\u624D\u53D1\u73B0\uFF1A\u539F\u6765\u8FD8\u6709\u8FD9\u6837\u7684\u4E16\u754C\u3002\n\n\u4E4B\u540E\u5E94\u8BE5\u5C31\u662F\u5728\u573A\u5185\u4E86\u3002\u56E0\u4E3A\u662F\u771F\u771F\u6B63\u6B63\u7684\u7B2C\u4E00\u6B21\u542C\u73B0\u573A\uFF0C\u4ECE\u7B2C\u4E00\u9996\u300Ctwinkle winkle little star\u300D\u5F00\u59CB\uFF0C\u5185\u5FC3\u4FBF\u53D7\u5230\u4E86\u5F3A\u70C8\u7684\u9707\u64BC\u3002\n\n\u767D\u76D8\u7684\u300C\u30AB\u30BF\u30AA\u30E2\u30A4\u300D\u50CF\u5728\u4E3A\u6211\u53F9\u606F\uFF0C\u300C\u8776\u3005\u7D50\u3073\u300D\u66F4\u662F\u4EE4\u6211\u9676\u9189\u3002\u8FD8\u6C89\u6D78\u5728\u67D4\u548C\u800C\u575A\u97E7\u7684\u58F0\u7EBF\u4E2D\u4E4B\u65F6...\n\n\u8EAB\u7740\u9ED1\u88D9\u7684Aimer\u4E00\u9996\u300C\u03BCs\u300D\u66F4\u662F\u70B9\u71C3\u4E86\u5168\u573A\u7684\u6C14\u6C1B\uFF0C\u4E0E\u767D\u76D8\u76F8\u53CD\u5F3A\u70C8\u7684\u53CD\u5DEE\u7684\u8FD9\u9996\u6B4C\u914D\u4E0A\u73B0\u573A\u7684\u706F\u6548\uFF0C\u52A0\u4E0A\u65E5\u65E5\u591C\u591C\u7CBE\u5FC3\u7684\u51C6\u5907\uFF0C\u867D\u7136\u6211\u7684\u4F4D\u7F6E\u5E76\u4E0D\u7B97\u592A\u597D\uFF0C\u4F46\u662F\u9694\u7740\u4EBA\u7FA4\uFF0C\u6211\u4E5F\u80FD\u611F\u53D7\u5230\u5979\u8EAB\u4E0A\u3001\u5979\u7684\u55D3\u97F3\u4E2D\uFF0C\u9971\u542B\u7684\u5F3A\u70C8\u7684\u60C5\u7EEA\u4E0E\u529B\u91CF\u3002\n\n\u4E5F\u6B63\u662F\u8FD9\u5929\uFF0C\u6211\u624D\u542C\u5230\u4E86\u300C\u516D\u7B49\u661F\u306E\u591C\u300D\uFF0C\u624D\u5F00\u59CB\u771F\u6B63\u4E86\u89E3\u8FD9\u4E2A\u6CD5\u8BED\u540D\u4E3A\u201C\u7231\u201D\u7684\u5973\u5B69\u3002\n\n\u4E4B\u540E\u4FBF\u662F\u51AC\u5DE1\u4E86\uFF0C17/18\u5E74\u7684\u51AC\u5DE1Hiver\u3002\u8BB0\u5F97\u56E0\u4E3A\u573A\u6B21\u592A\u591A\uFF0C\u81EA\u5DF1\u7684\u7ECF\u6D4E\u5B9E\u529B\u4E5F\u5F88\u6709\u9650\uFF0C\u5728\u573A\u6B21\u9009\u62E9\u4E0A\u72B9\u8C6B\u4E86\u597D\u4E45\u3002\n\n\u6700\u540E\u9009\u62E9\u4E86\u4EAC\u90FD\u5927\u962A\u76842\u8FDE\uFF0C\u52A0\u4E0A\u6700\u540E\u4E00\u573A\u6B63\u597D\u662F\u81EA\u5DF1\u7684\u751F\u65E5\uFF0C\u7D22\u6027\u8D81\u7740\u6625\u8282\u7684\u5047\u671F\u4EFB\u6027\u4E00\u6B21\u5427\u3002\u73B0\u5728\u60F3\u6765\uFF0C\u80FD\u591F\u5728\u81EA\u5DF1\u751F\u65E5\u7684\u524D\u4E00\u5929\uFF0C\u542C\u81EA\u5DF1\u559C\u6B22\u7684\u6B4C\u624B\u7ED9\u81EA\u5DF1\u5531\u6B4C\uFF0C\u4E5F\u7B97\u662F\u4E00\u79CD\u201C\u4F18\u5F85\u201D\u4E86\u5427\u3002\n\n\u7279\u522B\u662F\u76FC\u6765\u4E86\u671F\u5F85\u5DF2\u4E45\u7684\u73B0\u573A\u7248\u300C\u541B\u3092\u5F85\u3064\u300D\uFF0C\u4E5F\u8BB8\u5E74\u5C81\u5DF2\u7136\u592A\u5927\uFF0C\u63A7\u4E0D\u4F4F\u6CEA\u817A\u4E86\u3002\n\n\u8F6C\u773C\u5C31\u8FCE\u6765\u4E862018\u5E743\u6708\uFF0C\u4E9A\u5DE1\u4E0A\u6D77\u7AD9\u3002\u8FD9\u6B21\u5728\u5C0F\u4F19\u4F34\u7684\u5021\u8BAE\u4E0B\u7B2C\u4E00\u6B21\u4EB2\u624B\u5236\u4F5C\u4E86\u4E00\u4EFD\u9001\u7ED9Aimer\u7684\u793C\u7269\uFF0C\u770B\u5230\u6210\u54C1\u65F6\uFF0C\u5FC3\u91CC\u4E5F\u6709\u4E00\u6839\u5F26\u4F3C\u4E4E\u88AB\u62E8\u52A8\u4E86\u4E00\u822C\u3002\n\n\u6240\u4EE5\u7EB5\u7136\u4E24\u5929\u7AD9\u4E86\u7EA6\u670912\u4E2A\u5C0F\u65F6\u6709\u4F59\uFF0C\u4F46\u770B\u5230\u5979\u65F6\uFF0C\u8FD8\u662F\u80FD\u611F\u52A8\u4E07\u5206\u3002\u542C\u8BF4\u5979\u4E00\u9875\u9875\u7FFB\u8FC7\u6211\u4EEC\u5236\u4F5C\u7684\u793C\u7269\uFF0C\u5FC3\u91CC\u8FD8\u662F\u9887\u6709\u70B9\u5C0F\u81EA\u8C6A\u3002\n\n\u5728\u300Cinsane dream\u300D\u7684\u75AF\u72C2\u4E0E\u68A6\u5E7B\u7684\u72C2\u6B22\u4E2D\uFF0C\u5FD8\u5374\u6240\u6709\u7684\u4E00\u5207\uFF0C\u6C89\u9189\u4E8E\u4E00\u4E2A\u6C38\u6052\u7684\u591C\u665A\u3002\n\n\u63A5\u7740\uFF0C\u65F6\u95F4\u6765\u5230\u540C\u5E74\u76846\u6708\u3002\u56E0\u4E3A\u4E2A\u4EBA\u7684\u4E00\u4E9B\u5174\u8DA3\u5BF9\u4EA4\u54CD\u4E50\u60C5\u6709\u72EC\u949F\uFF0C\u5F53\u4EA4\u54CD\u4E50\u4E0EAimer\u4E00\u8D77\u51FA\u73B0\u65F6\uFF0C\u5C31\u66F4\u6CA1\u6709\u62B5\u6297\u529B\u4E86\u3002\n\n\u4E1C\u4EAC\u3001\u5927\u962A\u3001\u4EAC\u90FD\u3002\u4E09\u573AALL IN\u7684\u6211\u751A\u81F3\u5728\u65E5\u672C\u7C89\u4E1D\u7684\u773C\u4E2D\u770B\u6765\u90FD\u663E\u5F97\u6709\u4E9B\u75AF\u72C2\u3002\n\n\u4F46\u5F53\u300C\u82B1\u306E\u5504\u300D\u3001\u300C\u8776\u3005\u7D50\u3073\u300D\u4EE5\u53E6\u4E00\u79CD\u98CE\u683C\uFF0C\u53E6\u4E00\u79CD\u66F4\u4E3A\u7ACB\u4F53\u7684\u65B9\u5F0F\u5448\u73B0\u5728\u6211\u7684\u773C\u524D\u65F6\uFF0C\u4E00\u5207\u4E5F\u4FBF\u5F97\u5E76\u4E0D\u662F\u90A3\u4E48\u91CD\u8981\u4E86\u3002\n\n\u4E5F\u8BB8\u771F\u5E94\u4E86\u4E00\u53E5\u8BDD\uFF1A\u201C\u559C\u6B22\uFF0C\u5C31\u662F\u653E\u7EB5\u201D\u3002\n\n\u540E\u6765\u7531\u4E8E\u5DE5\u4F5C\u7684\u539F\u56E0\uFF0C\u65E0\u7F18\u590F\u5B63\u7684fc live\uFF0C\u4E5F\u9519\u8FC7\u4E86\u5FC3\u5FC3\u5FF5\u5FF5\u300CNoir Noir\u300D\u3002\u4E00\u76F4\u7B49\u523010\u6708\uFF0C\u7EC8\u4E8E\u8FCE\u6765\u4E8618/19\u7684\u51AC\u5DE1soleil et pluie\u3002\n\n\u53EA\u662F\u5F88\u53EF\u60DC\u7684\u662F\uFF0C\u6B64\u523B\u7684\u6211\u6B63\u503C\u4EBA\u751F\u7684\u4F4E\u8C37\uFF0C\u62D6\u7740\u4E00\u526F\u884C\u5C38\u822C\u7684\u8EAF\u4F53\u5728\u6D77\u5916\u6E38\u8361\u3002\n\n10.29\u7684\uFF0C\u5343\u53F6\u9996\u573A\u3002\u7B2C\u4E00\u9996\u7684\u6B4C\u5F00\u59CB\uFF0C\u4E0D\u77E5\u9053\u662F\u4E0D\u662F\u8BBE\u5907\u8C03\u8BD5\u7684\u95EE\u9898\uFF0C\u603B\u89C9\u5F97\u4ECA\u5929\u7684\u97F3\u51C6\u6709\u4E9B\u8BB8\u95EE\u9898\u3002\u968F\u7740\u6F14\u51FA\u7684\u8FDB\u884C\uFF0C\u4E0D\u5B89\u5C31\u5411\u8FDE\u7EF5\u4E0D\u65AD\u7684\u9634\u96E8\u5728\u5FC3\u95F4\u6269\u6563\u3002\n\n\u5230\u4E86\u90A3\u9996\u610F\u4E49\u975E\u51E1\u7684\u300Clast stardust\u300D\uFF0C\u5979\u7684\u58F0\u97F3\u968F\u7740\u97F3\u8C03\u7684\u5347\u9AD8\uFF0C\u6D88\u5931\u5728\u4E86\u6F14\u51FA\u7684\u73B0\u573A\u3002\n\n\u90A3\u4E2A\u65F6\u5019\uFF0C\u6211\u624D\u604D\u7136\u5927\u609F\uFF0C\u5979\u7684\u55D3\u5B50\uFF01\n\n\u4F46\u662F\uFF0C\u4E0E\u5979\u6BD4\u8D77\u6765\uFF0C\u624B\u8DB3\u65E0\u63AA\u7684\u66F4\u50CF\u662F\u6211\u3002\n\n\u5979\u6C89\u7740\u800C\u7528\u529B\u5730\u5FCD\u8010\u7740\uFF0C\u6211\u4EEC\u4E0D\u5FCD\u5FC3\u5730\u652F\u6301\u7740\uFF0C\u4E00\u9996\u3001\u4E00\u9996\u3002\u3002\n\n\u539F\u672C\u5E0C\u671B\u4E00\u9996\u4E00\u9996\u6C38\u8FDC\u4E0D\u8981\u505C\u606F\uFF0C\u800C\u6B64\u523B\uFF0C\u6211\u4EEC\u90FD\u5E0C\u671B\u505C\u4E0B\u6765\u5427\u3002\u3002\u522B\u3002\u3002\u3002\n\n\u4F46\u5C31\u662F\u5728\u8FD9\u4E2A\u65F6\u5019\uFF0C\u719F\u6089\u7684\u66F2\u76EE\uFF0C\u719F\u6089\u7684\u65CB\u5F8B\uFF0C\u300C\u8776\u3005\u7D50\u3073\u300D\u518D\u6B21\u964D\u4E34\uFF0C\u5168\u573A\u7684fans\u8F7B\u58F0\u548C\u4F60\u4E00\u8D77\u5408\u5531\u4E86\u6574\u9996\u6B4C\uFF0C\u4F60\u5BF9\u6B4C\u5531\u7684\u7231\uFF0C\u6BEB\u65E0\u4FDD\u7559\u7684\u901A\u8FC7\u4E00\u79CD\u8FD1\u4E4E\u65E0\u6CD5\u518D\u73B0\u7684\u5F62\u5F0F\uFF0C\u4F20\u8FBE\u7ED9\u4E86\u5728\u573A\u7684\u6240\u6709\u89C2\u4F17\u3002\n\n\u954C\u523B\u5728\u6211\u4EEC\u5E73\u51E1\u800C\u4E0D\u51E1\u7684\u751F\u547D\u4E4B\u4E2D\u3002\n\n\u6B64\u523B\uFF0C\u6211\u7B2C\u4E00\u6B21\u611F\u53D7\u5230\uFF0C\u751F\u547D\u80FD\u591F\u4EE5\u4E00\u79CD\u8D85\u8D8A\u751F\u547D\u672C\u8EAB\u7684\u5F62\u5F0F\u53BB\u4F20\u8FBE\u81EA\u5DF1\u7684\u7231\u3002\n\n\u90A3\u662F\u4E00\u79CD\u592A\u9633\u7684\u6E29\u6696\u3002\u5982\u540C\u8F7B\u4E95\u6CFD\u6DF1\u79CB\u4E2D\u70ED\u70C8\u7684\u706B\u7130\u4E00\u822C\u3002\n\n\u524D\u51E0\u5929\uFF0C\u4ECA\u5E74\u7684\u51AC\u5DE1\u7EC8\u4E8E\u987A\u5229\u7ED3\u675F\u4E86\u3002\u4E00\u9897\u60AC\u7740\u7684\u5FC3\u4E5F\u7EC8\u4E8E\u653E\u4E86\u4E0B\u6765\u3002\n\n\u300CI beg you\u300D\u518D\u4E00\u6B21\u5E26\u6765\u4E86\u65B0\u7684Aimer\uFF0C\u4E0D\u540C\u7684\u98CE\u683C\uFF0C\u4E0D\u540C\u7684\u65CB\u5F8B\uFF0C\u4F46\u662F\u9694\u7740\u97F3\u7B26\uFF0C\u6211\u611F\u53D7\u5230\u4E86\u4E0D\u65AD\u53D8\u5316\u4E2D\u4E00\u4E2A\u575A\u5F3A\u800C\u6E29\u67D4\u7684\u7075\u9B42\u3002\n\n\u4E5F\u8BB8\u5C31\u50CF\u6B4C\u91CC\u5531\u7684\u90A3\u6837\uFF1A\n\n\u3053\u306E\u82CD\u304F\u3066\u5E83\u3044\u4E16\u754C\u306B\n\n\u65E0\u6570\u306B\u6563\u3089\u3070\u3063\u305F\u4E2D\u304B\u3089\n\n\u522B\u3005\u306B\u4E8C\u4EBA\u9009\u3093\u3060\u7CF8\u3092\n\n\u304A\u4E92\u3044\u305F\u3050\u308A\u5BC4\u305B\u5408\u3063\u305F\u3093\u3060\n\n\u7ED3\u3070\u308C\u305F\u3093\u3058\u3083\u306A\u304F\u7ED3\u3093\u3060\u3093\u3060\n\n\u4E8C\u4EBA\u3067\u300C\u305B\u30FC\u306E\u300D\u3067\u5F15\u3063\u5F20\u3063\u305F\u3093\u3060\n\n\u5927\u304D\u304F\u3082\u5C0F\u3055\u304F\u3082\u306A\u308A\u3059\u304E\u306A\u3044\u3088\u3046\u306B\n\n\u529B\u3092\u8FBC\u3081\u305F\u3093\u3060\n";

var test = exports.test = "\u4ECE\u6B66\u9053\u9986\u5F00\u59CB\u7B97\u62D6\u4E86\u5F97\u6709\u4E2A1\u5E74\u591A\u4E86\u3002\u3002\n\n\u6700\u8FD1\u7EC8\u4E8E\u6709\u5FC3\u601D\u628Arepo\u5199\u4E00\u4E0B\u4E86\uFF0C\u8BB0\u5F55\u4E0B\u6211\u7684\u8FD9\u6BB5\u8FFD\u661F\u4E4B\u65C5\u3002\n\n\u5E94\u8BE5\u662F2017\u5E741\u67081\u65E5\u7684\u65F6\u5019\uFF0C\u5750\u5728\u9AD8\u94C1\u4E0A\uFF0C\u767E\u65E0\u804A\u8D56\u7684\u542C\u7740\u8033\u673A\u91CC\u968F\u673A\u653E\u8D77\u4E86\u300Cbrave shine\u300D\uFF0C\u83AB\u540D\u7684\u89C9\u5F97\u6709\u4E9B\u597D\u542C\uFF0C\u7279\u522B\u662F\u5979\u72EC\u7279\u7684\u58F0\u7EBF\uFF0C\u5728\u8033\u673A\u53EA\u542C\u4E2A\u54CD\u7684\u6211\u7684\u8111\u6D77\u4E2D\uFF0C\u7279\u522B\u6709\u51B2\u51FB\u529B\uFF0C\u4E8E\u662F\u5355\u66F2\u5FAA\u73AF\u4E86\u4E00\u8DEF\u3002\n\n\u7136\u540E\u662F\u4E94\u6708\u7684\u65F6\u5019\uFF0C\u770B\u5230BML2017\u6709Aimer\u5F53\u5609\u5BBE\uFF0C\u60F3\u7740\u53CD\u6B63\u4EBA\u4E5F\u5728\u4E0A\u6D77\uFF0C\u5C31\u53BB\u542C\u542C\u5427\u3002\n\n\u56E0\u4E3A\u4E0D\u77E5\u9053\u600E\u4E48\u4E70\u7968\uFF0C\u7F51\u4E0A\u968F\u610F\u4E00\u641C\u7ADF\u7136\u53D1\u73B0\u5979\u4F1A\u57288\u6708\u4EFD\u5728\u65E5\u672C\u6B66\u9053\u9986\u4E3E\u529Esolo\uFF0C\u867D\u7136\u5E76\u4E0D\u662F\u5F88\u719F\u6089\u65E5\u672C\u7684\u573A\u9986\uFF0C\u4F46\u662F\u6B66\u9053\u9986\u4E4B\u4E8E\u6B4C\u624B\u7684\u610F\u4E49\u8FD8\u662F\u6709\u4E00\u70B9\u4E86\u89E3\u7684\u3002\n\n\u4E8E\u662F\u5C31\u9976\u6709\u5174\u81F4\u7684\u5728\u7F51\u4E0A\u641C\u4E86\u8D77\u6765\uFF0C\u52A0\u4E4B\u521A\u529E\u4E0B\u6765\u7684\u65E5\u672C\u7B7E\u8BC1\u4E5F\u95F2\u7740\uFF0C\u5C31\u60F3\u7740\u78B0\u78B0\u8FD0\u6C14\u5427\uFF0C\u4E07\u4E00\u5462\uFF1F\n\n\u7ED3\u679C\u867D\u7136\u9519\u8FC7\u4E86\u6700\u540E\u4E00\u6B21\u62BD\u9009\uFF0C\u4F46\u662F\u771F\u7684\u5F88\u5E78\u8FD0\u7684\u7FA4\u91CC\u6709\u7C89\u4E1D\u6709\u4E8B\u4E0D\u80FD\u53C2\u52A0\uFF0C\u5728\u8F6C\u7968\uFF0C\u4E8E\u662F\u6211\u6709\u5E78\u62FF\u5230\u4E86\u4E00\u5F20\u6B66\u9053\u9986\u7684\u7968\uFF01\n\n\u7136\u540E\u81EA\u5DF1\u89C4\u5212\u884C\u7A0B\u3001\u653B\u7565\uFF0C\u8010\u7740\u6027\u5B50\u7B49\u5230\u4E868\u6708\u5E95\uFF0C\u7EC8\u4E8E\u8E0F\u4E0A\u4E86\u524D\u5F80\u4E1C\u4EAC\u6B66\u9053\u9986\u7684\u65C5\u9014\u3002";
},{}],23:[function(require,module,exports) {
module.exports="/dist/6c766688313cda1cdbc31aecb721c315.gif";
},{}],22:[function(require,module,exports) {
module.exports="/dist/2459dcb3857bdbee730ba53d30988bd6.gif";
},{}],9:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],5:[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":9}],27:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":5}],19:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _butterfly = require('./butterfly-1.gif');

var _butterfly2 = _interopRequireDefault(_butterfly);

var _butterfly3 = require('./butterfly-2.gif');

var _butterfly4 = _interopRequireDefault(_butterfly3);

require('./butterfly.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var imgArr = [_butterfly2.default, _butterfly4.default];

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

var Butterfly = function () {
    function Butterfly() {
        _classCallCheck(this, Butterfly);

        this.imgSrc = randomItem(imgArr);
        this.dire = Math.random() > .5 ? 'left' : 'right';
        this.size = 'size' + Math.ceil(Math.random() * 4);
        this.speed = 'speed' + Math.ceil(Math.random() * 2);
        this.topStr = 'top: ' + Math.floor(Math.random() * 100) + '%';
        this.xStr = this.dire + ': ' + (-Math.floor(Math.random() * 300) - 60) + 'px';
        this.product();
    }

    _createClass(Butterfly, [{
        key: 'product',
        value: function product() {
            var div = document.createElement('div');
            div.className = 'butterfly ' + this.dire + ' ' + this.size + ' ' + this.speed;
            div.style = this.topStr + ';' + this.xStr + ';';
            div.innerHTML = '<div><p><span style="background-image: url(' + this.imgSrc + ')"></span></p></div>';
            document.body.appendChild(div);
        }
    }]);

    return Butterfly;
}();

exports.default = Butterfly;
},{"./butterfly-1.gif":23,"./butterfly-2.gif":22,"./butterfly.css":27}],4:[function(require,module,exports) {
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = require('./const');

var _butterfly = require('./butterfly');

var _butterfly2 = _interopRequireDefault(_butterfly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MAX_BUTTERFLY = 50;
var SPLIT_COUNT = 12;

var TypingPrinter = function () {
    function TypingPrinter(txt) {
        _classCallCheck(this, TypingPrinter);

        this.txt = txt;
        return this.init();
    }
    // generate split array for display


    _createClass(TypingPrinter, [{
        key: 'init',
        value: function init() {
            var _this = this;

            var txtArr = this.txt.split('');

            this.splitArr = [];
            var tmp = [];
            var count = 0;
            txtArr.forEach(function (word) {
                tmp.push(word);
                if (word == '\n') {
                    count++;
                }
                if (count == SPLIT_COUNT) {
                    _this.splitArr.push(tmp);
                    count = 0;
                    tmp = [];
                }
            });

            return this.genTimeFn();
        }
    }, {
        key: 'genTimeFn',
        value: function genTimeFn() {
            var res = [];
            for (var i = 0, len = this.splitArr.length; i < len; i++) {
                res.push({ fn: this.genHTML.bind(this, this.splitArr[i]), time: i > 0 ? this.splitArr[i].length * 100 : 0 });
            }
            return res;
        }
    }, {
        key: 'genHTML',
        value: function genHTML(wordArr) {
            var html = wordArr.map(function (word, i) {
                var delayStr = '-webkit-animation-delay: ' + i * 100 + 'ms; animation-delay: ' + i * 100 + 'ms;';
                switch (word) {
                    case '\n':
                        return '<br />';
                    case ' ':
                        return '<span class="txt">&nbsp;<i class="mask" style="' + delayStr + '"></i></span>';
                    default:
                        return '<span class="txt">' + word + '<i class="mask" style="' + delayStr + '"></i></span>';
                }
            }).join('');

            var div = document.createElement("div");
            div.className = "txt-wrapper";
            div.innerHTML = html;

            document.body.appendChild(div);
        }
    }]);

    return TypingPrinter;
}();

var index = 0;
var fns = new TypingPrinter(_const.txt);
var start = Date.now();
var bCount = 0;
console.log(fns);
setInterval(function () {
    var now = Date.now();

    if (fns[index] && fns[index].time < now - start) {
        fns[index].fn();
        start = Date.now();
        index++;
    }

    if (bCount < MAX_BUTTERFLY) {
        bCount++;
        new _butterfly2.default();
    }
}, 500);
},{"./const":8,"./butterfly":19}],28:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '49841' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[28,4])
//# sourceMappingURL=/dist/8c0bdc0ed1839e7d19ff7fb327dd67f2.map