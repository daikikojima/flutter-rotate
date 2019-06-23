define(['dart_sdk', 'packages/flutter_web/animation'], function(dart_sdk, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__animation__animation_controller = animation.src__animation__animation_controller;
  const src__widgets__transitions = animation.src__widgets__transitions;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__ticker_provider = animation.src__widgets__ticker_provider;
  const src__widgets__binding = animation.src__widgets__binding;
  const src__widgets__basic = animation.src__widgets__basic;
  const main = Object.create(dart.library);
  main.SpinningSquare = class SpinningSquare extends src__widgets__framework.StatefulWidget {
    createState() {
      return new main._SpinningSquareState.new();
    }
  };
  (main.SpinningSquare.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.SpinningSquare.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.SpinningSquare.prototype;
  dart.addTypeTests(main.SpinningSquare);
  dart.setMethodSignature(main.SpinningSquare, () => ({
    __proto__: dart.getMethods(main.SpinningSquare.__proto__),
    createState: dart.fnType(main._SpinningSquareState, [])
  }));
  const _animation = dart.privateName(main, "_animation");
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  const State_SingleTickerProviderStateMixin$ = class State_SingleTickerProviderStateMixin extends src__widgets__framework.State$(main.SpinningSquare) {};
  (State_SingleTickerProviderStateMixin$.new = function() {
    src__widgets__ticker_provider.SingleTickerProviderStateMixin$(main.SpinningSquare)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$, src__widgets__ticker_provider.SingleTickerProviderStateMixin$(main.SpinningSquare));
  main._SpinningSquareState = class _SpinningSquareState extends State_SingleTickerProviderStateMixin$ {
    initState() {
      let t0;
      super.initState();
      this[_animation] = (t0 = new src__animation__animation_controller.AnimationController.new({duration: const$ || (const$ = dart.const(new core.Duration.new({milliseconds: 3600}))), vsync: this}), t0.repeat(), t0);
    }
    build(context) {
      return new src__widgets__transitions.RotationTransition.new({turns: this[_animation], child: new src__widgets__image.Image.asset("logo_flutter_1080px_clr.png", {$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 22, file: "org-dartlang-app:///packages/flutter_web.examples.spinning_square/main.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 28, name: "name"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 16, file: "org-dartlang-app:///packages/flutter_web.examples.spinning_square/main.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 9, name: "turns"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    dispose() {
      this[_animation].dispose();
      super.dispose();
    }
  };
  (main._SpinningSquareState.new = function() {
    this[_animation] = null;
    main._SpinningSquareState.__proto__.new.call(this);
    ;
  }).prototype = main._SpinningSquareState.prototype;
  dart.addTypeTests(main._SpinningSquareState);
  dart.setMethodSignature(main._SpinningSquareState, () => ({
    __proto__: dart.getMethods(main._SpinningSquareState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(main._SpinningSquareState, () => ({
    __proto__: dart.getFields(main._SpinningSquareState.__proto__),
    [_animation]: dart.fieldType(src__animation__animation_controller.AnimationController)
  }));
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  main.main = function() {
    src__widgets__binding.runApp(new src__widgets__basic.Center.new({child: new main.SpinningSquare.new({$creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 32, file: "org-dartlang-app:///packages/flutter_web.examples.spinning_square/main.dart", parameterLocations: const$7 || (const$7 = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 14, file: "org-dartlang-app:///packages/flutter_web.examples.spinning_square/main.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/flutter_web.examples.spinning_square/main", {
    "package:flutter_web.examples.spinning_square/main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web.examples.spinning_square/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAQwC,YAAI;IAAsB;;;;;;EAClE;;;;;;;;;;;;;;;;;;;;;;;;MAQU;MAIN,yBAAiB,4EACC,oEAAuB,iBAChC,QACN;IACL;UAG0B;AACxB,YAAW,8DACA,yBACM,oCAAM;IAEzB;;MAIE,AAAW;MACL;IACR;;;IA1BoB;;;EA2BtB;;;;;;;;;;;;;;;;IAGE,6BAAW,2CAAkB;EAC/B","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
