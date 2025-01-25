(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.hero = function() {
	this.initialize(img.hero);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,191);


(lib.HPlogoblue = function() {
	this.initialize(img.HPlogoblue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,251);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,251);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,251);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,251);


(lib.win10 = function() {
	this.initialize(img.win10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,50);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.windows_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.win10();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.windows_logo, new cjs.Rectangle(0,0,98,20), null);


(lib.product = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hero();
	this.instance.parent = this;
	this.instance.setTransform(-76.8,-41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.product, new cjs.Rectangle(-76.8,-41.4,300,191), null);


(lib.messaging = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAFQgBgCAAgDQAAgCACgCQACgBACAAQAEAAABABQACACAAACQAAADgCACQgBABgEAAQgDAAgCgBg");
	this.shape.setTransform(285.5,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAVQgFgGgBgPQABgOAFgHQAFgGALAAQAMAAAGAGQAEAHAAAOQAAAPgEAGQgGAHgMAAQgLAAgFgHgAgEgSQgDABgBADQgCABAAAEIgBAJIABAKIACAFIAEAEIAEABIAFgBIAEgEIACgFIABgKIgBgJQgBgEgBgBIgEgEIgFgBIgEABg");
	this.shape_1.setTransform(281.5,9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKAbQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgzIAHAAIACABIAAACIABAFIAFgGQAEgCAEAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIABACIAAAHIgBgBIgCAAQgEABgEABQgDABgCAEIAAAlg");
	this.shape_2.setTransform(277,9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTAlQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBIAAhEIAKgBIALgBQAMAAAGAGQAGAFAAANQAAAGgCAFQgBAEgDACQgDADgEACIgKABIgFgBIgGgBIAAAcgAgGgbIgFABIAAAbIAFABIAGAAIAFAAIAEgCQACgCAAgDIABgHIgBgIQAAgDgCgBIgFgDIgEAAIgGAAg");
	this.shape_3.setTransform(272.2,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAkQgEgCgDgEQgDgEgCgHQgCgIAAgLQAAgKACgHQACgHADgEQADgFAEgBQAEgCAFAAQAFAAAFACQAEABADAFQADADACAIQACAHAAAKQAAALgCAIQgCAHgDAEQgDAEgEACQgFABgFAAQgFAAgEgBgAgFgaQgDACgBAEQgCADAAAFIgBAMIABANIACAJQABADADACQACABADAAQAEAAACgBQADgCABgDIACgJIABgNIgBgMQAAgFgCgDQgBgEgDgCIgGAAIgFAAg");
	this.shape_4.setTransform(264.3,9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAFAkQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAg5IgLAEIgCABIgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIAAgGIAFgDIAMgEIAHgDIACABIAAACIAABFg");
	this.shape_5.setTransform(258.1,8.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDAcIgFgBIgEAAIgDgBIgCgCIgBgBIAAgFIAIABIAIAAQAGAAADgCQACgBAAgEIgBgDIgBgCIgDgCIgFgCIgHgCQgDAAgCgBIgEgEQgBgDAAgEQAAgJAFgDQAFgEAIAAIAEAAIAEABIAEAAIADABIABABIAAACIAAAFIgIgBIgGAAQgFAAgCABQgDACAAADIABADIACADIAEABIAEABIAGACIAGACQACACABACIABAHIgBAIIgEAFIgHADIgHABIgDAAg");
	this.shape_6.setTransform(251.4,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAMAbIgBgBIgBgCIgJghIgKAkIgIAAIgCgBIgBgCIgEgMIgEgMIgDgNIgBgNIAIAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIABAJIABAKIADAKIACAKIAKglIAGAAIACAAIACADIAJAiIADgLIACgKIACgLIABgKIAIAAIACABIAAACIAAADIgBADIgEAVQgDAMgEALg");
	this.shape_7.setTransform(245.4,9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAVQgFgGgBgPQABgOAFgHQAFgGALAAQAMAAAFAGQAGAHgBAOQABAPgGAGQgFAHgMAAQgLAAgFgHgAgEgSQgDABgBADQgBABgBAEIgBAJIABAKIACAFIAEAEIAEABIAFgBIAEgEIACgFIABgKIgBgJQgBgEgBgBIgEgEIgFgBIgEABg");
	this.shape_8.setTransform(239,9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQAfQgFgHAAgNQAAgOAGgHQAFgGAKAAIAHABIAEABIAAgXIAIAAIACAAIABACIAABIIgHAAIgCAAIgBgCIAAgEIgGAFQgEACgFAAQgJAAgEgHgAgDgHQgDABgBACIgCAFIgBAJQAAAKACAFQADAEAFAAQAEAAACgBIAFgDIAAgfIgEgCIgFAAIgFABg");
	this.shape_9.setTransform(233.4,8.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AANAbIgCAAIgBgCIAAggQAAgGgCgCQgCgCgFAAQgDAAgDABIgFAEIAAAnIgIAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgyIAGAAIACAAIABACIAAAEQAHgHAJAAQAJAAADAFQAEAFAAAIIAAAjg");
	this.shape_10.setTransform(228,9.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgCAlQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgyIAHAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAygAgEgZQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQACgCACAAQADAAACACQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgFABIgEgBg");
	this.shape_11.setTransform(224.1,8.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAOAkIgCAAIgBgCIgLgwIgLAyIgIAAIgCAAIgCgCIgEgQIgFgSIgDgSIgCgSIAJAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAABIAEAcIAGAbIAMg1IAHAAIACABIABACIALAyIAGgcIAEgfIAIAAQABAAABABQAAAAAAAAQAAABABAAQAAABgBABIAAACIAAAEIgCAPIgDAPIgEARIgFAPg");
	this.shape_12.setTransform(218.7,8.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEAcIgEgBIgFAAIgCgBIgCgCIAAgBIAAgFIAHABIAIAAQAGAAADgCQACgBAAgEIAAgDIgCgCIgEgCIgEgCIgHgCQgDAAgDgBIgDgEQgBgDAAgEQAAgJAFgDQAFgEAIAAIAEAAIAEABIADAAIAEABIABABIABACIAAAFIgIgBIgHAAQgFAAgDABQgBACAAADIAAADIACADIAEABIADABIAIACIAFACQACACABACIABAHIgBAIIgEAFIgGADIgIABIgEAAg");
	this.shape_13.setTransform(210.1,9.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgQAVQgGgGAAgPQAAgOAGgHQAFgGALAAQAMAAAGAGQAEAHAAAOQAAAPgEAGQgGAHgMAAQgLAAgFgHgAgEgSQgDABgBADQgCABAAAEIAAAJIAAAKIACAFIAEAEIAEABIAFgBIAEgEIACgFIABgKIgBgJQgBgEgBgBIgEgEIgFgBIgEABg");
	this.shape_14.setTransform(205.1,9.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgCAbIgCgBIgBgCQgGgMgEgMQgEgNgCgNIAJAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIACAKIACALIAEAKIACAKIAEgKIADgLIADgMIACgLIAIAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAAACIgBADQgCAMgEAKIgJAXg");
	this.shape_15.setTransform(199.8,9.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgCAlQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBIAAgyIAHAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAygAgEgZQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgCADAAQAEAAABACQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABIgFABIgEgBg");
	this.shape_16.setTransform(196.2,8.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEAfQgDgEgBgHIAAgfIgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAIAAgGIAGAAIABgOIAHAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAMIAKAAIACAAIABACIAAAGIgNAAIAAAfIABAEQAAABABAAQAAAAAAAAQABABABAAQAAAAABAAIADAAIACAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAIAAAFIgFABIgEAAQgGAAgEgDg");
	this.shape_17.setTransform(193.1,9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgCAlQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgyIAHAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAygAgEgZQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQACgCACAAQADAAACACQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABQgBABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgFABIgEgBg");
	this.shape_18.setTransform(190.2,8.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEAcIgEgBIgFAAIgCgBIgCgCIAAgBIAAgFIAHABIAIAAQAGAAADgCQACgBAAgEIAAgDIgCgCIgEgCIgEgCIgHgCQgDAAgDgBIgCgEQgCgDAAgEQAAgJAFgDQAFgEAIAAIAEAAIAEABIADAAIADABIACABIABACIAAAFIgIgBIgHAAQgFAAgDABQgBACAAADIAAADIACADIAEABIADABIAIACIAEACQADACABACIABAHIgBAIIgEAFIgGADIgIABIgEAAg");
	this.shape_19.setTransform(186.6,9.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgQAVQgFgGgBgPQABgOAFgHQAFgGALAAQAMAAAGAGQAEAHAAAOQAAAPgEAGQgGAHgMAAQgLAAgFgHgAgEgSQgDABgBADQgCABAAAEIgBAJIABAKIACAFIAEAEIAEABIAFgBIAEgEIACgFIABgKIgBgJQgBgEgBgBIgEgEIgFgBIgEABg");
	this.shape_20.setTransform(181.6,9.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgQAkQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgjIAAgMIABgNIgCAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgFIAEgBIAFgBIAGAAIAGAAIAKABQAFABADAEQADADACAFQABAFAAAIQAAAOgFAGQgFAGgKAAIgGAAIgFgCIAAAUgAgIgaIAAAiIAEABIAEABIAGgBIAEgCIACgGIAAgJIAAgJQgBgEgCgCQgBgCgDgBIgGgBIgEAAIgDABg");
	this.shape_21.setTransform(176,10.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgEAcIgEgBIgFAAIgCgBIgCgCIAAgBIAAgFIAHABIAIAAQAGAAADgCQACgBAAgEIAAgDIgCgCIgEgCIgEgCIgHgCQgDAAgDgBIgDgEQgBgDAAgEQAAgJAFgDQAFgEAIAAIAEAAIAEABIADAAIAEABIABABIABACIAAAFIgIgBIgHAAQgFAAgDABQgCACAAADIABADIACADIAEABIADABIAHACIAGACQACACABACIABAHIgBAIIgEAFIgGADIgIABIgEAAg");
	this.shape_22.setTransform(171,9.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgCAlQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAgBgBIAAgyIAIAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAygAgEgZQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQACgCACAAQADAAACACQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABIgFABIgEgBg");
	this.shape_23.setTransform(167.5,8.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgQAfQgFgHAAgNQAAgOAGgHQAFgGAKAAIAHABIAEABIAAgXIAIAAIACAAIABACIAABIIgHAAIgCAAIgBgCIAAgEIgGAFQgEACgFAAQgJAAgEgHgAgDgHQgDABgBACIgCAFIgBAJQAAAKACAFQADAEAFAAQAEAAACgBIAFgDIAAgfIgEgCIgFAAIgFABg");
	this.shape_24.setTransform(163.5,8.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAcAbQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAggQAAgGgCgCQgCgCgEAAQgFAAgCABIgFAEIAAAFIAAAiIgHAAIgCAAIgBgCIAAggQAAgGgBgCQgDgCgEAAQgEAAgDABIgEAEIAAAnIgJAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgyIAGAAIADAAIAAACIABAEQACgEAFgBQADgCAGAAQAEAAADABQADACACAEQADgDAEgCQAEgCAGAAQAHAAAFAEQAEAEAAAKIAAAjg");
	this.shape_25.setTransform(154.6,9.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgQAVQgGgGAAgPQAAgOAGgHQAFgGALAAQAMAAAGAGQAEAHAAAOQAAAPgEAGQgGAHgMAAQgLAAgFgHgAgEgSQgCABgCADQgCABAAAEIAAAJIAAAKIACAFIAEAEIAEABIAGgBIADgEIACgFIABgKIgBgJQAAgEgCgBIgDgEIgGgBIgEABg");
	this.shape_26.setTransform(147.6,9.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFAaQgFgCgCgDQgDgEAAgFQgCgFAAgHQAAgOAFgGQAFgHALAAIAHABIAEABIACABIAAACIAAAFIgGgBIgFAAIgGABIgDADQgCACAAAEIgBAIIABAJIACAGQAAABABAAQAAABABAAQAAABABAAQAAAAAAAAIAFABIAGAAIAEgBQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIAAAEIgGACIgIABQgGAAgDgCg");
	this.shape_27.setTransform(142.7,9.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgQAXQgEgEAAgIQAAgFACgEIAEgEQADgCADAAIAIgBIAKAAIAAgEQAAgFgCgCQgDgCgGAAIgIAAIgFABIgCgBIgBgCIAAgEIAJgCIAIgBIAKABQAEACACACQADADABADIABAIIAAAjIgHAAIgCgBIAAgCIgBgDIgGAFQgEACgFAAQgIAAgEgFgAgFACIgDACIgCADIAAADQAAAFACACQACADAFAAQADAAADgCIAFgEIAAgNIgKAAIgFABg");
	this.shape_28.setTransform(135.5,9.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgBAmIgCgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgDIADAAIAEAAIABgCIgBgCIgDgBIAAgBIgCAAIAAgBIAAgCIABgDIABgCQgJgCgEgHQgEgHAAgLQAAgPAFgGQAFgHALAAIAHABIAEABIACABIAAACIAAAFIgGgBIgFAAIgGABIgDADQgCACAAAEIgBAJIABAJIACAFQACADABAAIAFABIAGAAIAEgBQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIAAAEIgGACIgHABIgCAFIACAAIAFACQACACAAADIgBADIgCACIgDACIgGABIgBAAg");
	this.shape_29.setTransform(130.9,10.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AANAbIgCAAIgBgCIAAggQAAgGgCgCQgCgCgFAAQgDAAgDABIgFAEIAAAnIgIAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgyIAGAAIACAAIABACIAAAEQAHgHAJAAQAJAAADAFQAEAFAAAIIAAAjg");
	this.shape_30.setTransform(125.8,9.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgQAXQgEgEAAgIQAAgFACgEIAEgEQADgCADAAIAIgBIAKAAIAAgEQAAgFgCgCQgDgCgGAAIgIAAIgFABIgCgBIgBgCIAAgEIAJgCIAIgBIAKABQAEACACACQADADABADIABAIIAAAjIgHAAIgCgBIAAgCIgBgDIgGAFQgEACgFAAQgIAAgEgFgAgFACIgDACIgCADIAAADQAAAFACACQACADAFAAQADAAADgCIAFgEIAAgNIgKAAIgFABg");
	this.shape_31.setTransform(120.3,9.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgKAbQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgzIAHAAIACABIAAACIABAFIAFgGQAEgCAEAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIABACIAAAHIgBgBIgCAAQgEABgEABQgDABgCAEIAAAlg");
	this.shape_32.setTransform(116.1,9.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHAaQgFgBgCgDQgDgEgCgFQgBgFAAgIQAAgGABgGQACgFADgDQADgEADgBQAFgCAEAAQAGAAAEACQAEACACACQACADABAEIABAJIAAAFIgBAEIgeAAIABAHIADAFIAEADIAHAAIAIAAIAEAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAAEIgHACIgKABQgGAAgEgCgAgDgSQgBABgBAAQAAAAgBAAQAAABAAAAQgBABAAAAIgCAGIgBAHIAWAAIAAgCIAAgBQAAgHgDgEQgCgDgFAAIgFABg");
	this.shape_33.setTransform(111.5,9.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgQAfQgFgHAAgNQAAgOAGgHQAFgGAKAAIAHABIAEABIAAgXIAIAAIACAAIABACIAABIIgHAAIgCAAIgBgCIAAgEIgGAFQgEACgFAAQgJAAgEgHgAgDgHQgDABgBACIgCAFIgBAJQAAAKACAFQADAEAFAAQAEAAACgBIAFgDIAAgfIgEgCIgFAAIgFABg");
	this.shape_34.setTransform(106.1,8.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgCAlQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgyIAGAAQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAygAgEgZQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgCADAAQADAAACACQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABIgFABIgEgBg");
	this.shape_35.setTransform(102.3,8.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AACAmIgFgBIgDgDIgBgFIgBgHIAAg7IAIAAIABAAIABACIAAA8IABAEIADABIACABIABACIAAAEIgEABIgDAAg");
	this.shape_36.setTransform(99.9,8.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgQAXQgEgEAAgIQAAgFACgEIAEgEQADgCADAAIAIgBIAKAAIAAgEQAAgFgCgCQgDgCgGAAIgIAAIgFABIgCgBIgBgCIAAgEIAJgCIAIgBIAKABQAEACACACQADADABADIABAIIAAAjIgHAAIgCgBIAAgCIgBgDIgGAFQgEACgFAAQgIAAgEgFgAgFACIgDACIgCADIAAADQAAAFACACQACADAFAAQADAAADgCIAFgEIAAgNIgKAAIgFABg");
	this.shape_37.setTransform(93.5,9.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgQAXQgEgEAAgIQAAgFACgEIAEgEQADgCADAAIAIgBIAKAAIAAgEQAAgFgCgCQgDgCgGAAIgIAAIgFABIgCgBIgBgCIAAgEIAJgCIAIgBIAKABQAEACACACQADADABADIABAIIAAAjIgHAAIgCgBIAAgCIgBgDIgGAFQgEACgFAAQgIAAgEgFgAgFACIgDACIgCADIAAADQAAAFACACQACADAFAAQADAAADgCIAFgEIAAgNIgKAAIgFABg");
	this.shape_38.setTransform(86.2,9.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAbAbQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAggQAAgGgCgCQgCgCgFAAQgDAAgEABIgEAEIAAAFIAAAiIgHAAIgCAAIAAgCIAAggQAAgGgDgCQgCgCgEAAQgEAAgDABIgFAEIAAAnIgHAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgyIAHAAIABAAIABACIAAAEQAEgEADgBQAEgCAFAAQAFAAADABQADACACAEQADgDAEgCQAEgCAHAAQAGAAAFAEQAEAEAAAKIAAAjg");
	this.shape_39.setTransform(79.5,9.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgLAaQgEgBgBgDQgCgCgBgDIgBgIIAAgjIAIAAIACAAIABACIAAAgQAAAGACACQACACAFAAQADAAADgBIAFgEIAAgnIAIAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAAyIgGAAIgCAAIgBgCIAAgEQgHAHgJAAIgHgBg");
	this.shape_40.setTransform(72.4,9.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgEAcIgEgBIgFAAIgCgBIgCgCIAAgBIAAgFIAHABIAIAAQAGAAADgCQACgBAAgEIAAgDIgCgCIgEgCIgEgCIgHgCQgDAAgDgBIgCgEQgCgDAAgEQAAgJAFgDQAFgEAIAAIAEAAIAEABIADAAIADABIACABIABACIAAAFIgIgBIgHAAQgFAAgDABQgBACAAADIAAADIACADIAEABIADABIAIACIAEACQADACABACIABAHIgBAIIgEAFIgGADIgIABIgEAAg");
	this.shape_41.setTransform(67.4,9.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgDAcIgFgBIgEAAIgDgBIgCgCIgBgBIAAgFIAIABIAIAAQAGAAADgCQACgBAAgEIgBgDIgBgCIgDgCIgFgCIgHgCQgDAAgCgBIgEgEQgBgDAAgEQAAgJAFgDQAFgEAIAAIAEAAIAEABIADAAIAEABIABABIAAACIAAAFIgIgBIgGAAQgFAAgDABQgCACAAADIABADIACADIAEABIADABIAHACIAGACQACACABACIABAHIgBAIIgEAFIgGADIgIABIgDAAg");
	this.shape_42.setTransform(62.7,9.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AARAkQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIgBgJIgCgJIgWAAIgCAKIgCAKIgIAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIABgHIAEgTIAFgQIAFgPIAFgNIAJAAIACABIABACIAFANIAFARIAFASIAEAVgAgFgKIgFARIAUAAIgFgRIgFgQIgFAQg");
	this.shape_43.setTransform(57.5,8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.messaging, new cjs.Rectangle(0,0,288.9,17.5), null);


(lib.img4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhRYAOEIAA8HMCixAAAIAAcHg");
	this.shape.setTransform(-520.9,137.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.img4();
	this.instance.parent = this;
	this.instance.setTransform(0,39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img4_1, new cjs.Rectangle(-1041.7,39.6,1341.8,251), null);


(lib.img3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.img3();
	this.instance.parent = this;
	this.instance.setTransform(27.6,81,0.916,0.916);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhV1ASkMAAAglGMCrqAAAMAAAAlGg");
	this.shape.setTransform(-521.7,155.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.img3_1, new cjs.Rectangle(-1071,36.7,1373.6,274.3), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhRYAOEIAA8HMCixAAAIAAcHg");
	this.shape.setTransform(-520.9,137.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(0,47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-1041.7,47.4,1341.8,251), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhRYAOEIAA8HMCixAAAIAAcHg");
	this.shape.setTransform(158.9,80.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(679.8,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-361.9,-11.2,1341.8,251), null);


(lib.hp_logo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0096D6").s().p("AgFAtQgFAAAAgEIAAgdQgIgOgFgOQgGgNgDgPIATAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIACAFIADANQACAIADALIAHgVIAEgRIARAAIADABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABIAAABIgBACQgCALgFAMQgFAMgIANIAAAhg");
	this.shape.setTransform(106.7,30.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0096D6").s().p("AgUAtQgFAAAAgEIAAhVIASAAQAFAAAAAFIAABBIAXAAQAFABAAAEIAAAOg");
	this.shape_1.setTransform(100.8,30.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0096D6").s().p("AgVAtQgEAAgBgEIAAhVIAwAAQAFAAgBAFIAAANIgcAAIAAARIAUAAQAFABAAAEIAAAMIgZAAIAAAlg");
	this.shape_2.setTransform(94.9,30.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0096D6").s().p("AAPAtQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgBgCIgFgOIgFgNIgGgNIgEgKIAAA2IgRAAQgEAAAAgEIAAhVIAQAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAIACAEIAGAKIAEAMIAGANIAFALIAAgzIAQAAQAEAAABAFIAABUg");
	this.shape_3.setTransform(87.9,30.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0096D6").s().p("AgMAtQgHgBgEgFQgFgGgCgJQgDgJAAgPQAAgOADgJQACgKAFgFQAEgEAHgCQAFgCAHAAQAHAAAHACQAHACADAEQAFAFADAKQACAJAAAOQAAAPgCAJQgDAJgFAGQgDAFgHABQgHACgHAAQgHAAgFgCgAgEgbQgCABgCAEQgBACgBAHIAAANIAAAPQABAGABADQACADACABIAEABIAGgBQACgBABgDIABgJIABgPIgBgNIgBgJQgBgEgCgBQgCgBgEAAQgCAAgCABg");
	this.shape_4.setTransform(80.4,30.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0096D6").s().p("AgKAtQgHgCgEgGQgFgFgCgJQgCgJAAgOQAAgNACgJQACgJAFgFQAEgFAHgCQAHgDAIAAQAJAAAEACIAGACIADADIAAAEIAAAJIgEAAIgFgBIgFAAIgDAAIgJABQgCABgCACQgDADAAAGIgBAOIAAAPIADAJQACADACABQACABAEAAIACAAIADAAIAAgSIgEAAIgDgBIgBgDIAAgLIAXAAQAFAAAAAEIAAArIgLADIgPABQgIAAgHgCg");
	this.shape_5.setTransform(73.1,30.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0096D6").s().p("AAPAtQgEAAgBgEIgCgSIgRAAIgCALIgBALIgRAAIgCgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgDIAAgCIAIgoQAEgTAHgUIAXAAIADABIABADQAGASAFAVIAJAugAgEgIIgDAPIANAAIgCgPIgEgUIgEAUg");
	this.shape_6.setTransform(66.2,30.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0096D6").s().p("AAOAuIgEgBIgCgEIgGgPIgFgNIgGAAIAAAhIgRAAQgFAAgBgFIAAhTIAPgCIAPgBQAOAAAIAHQAIAHAAAQIgBAGIgBAHIgFAFQgCADgDACIAFAIIAFAJIADALIAEAKgAgJgDIAHAAIACAAIADgCIADgEIABgGIgBgHIgCgEIgEgCIgDAAIgBAAIgCAAIgCAAIgBAAg");
	this.shape_7.setTransform(59.4,30.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0096D6").s().p("AgbAuQgFAAAAgFIAAhTIAPgCIAOgBQAIAAAHACQAHACAEAFQAFAFACAJQADAJAAANQAAAPgDAJQgCAIgFAFQgEAFgHACQgHACgIAAgAgJAcIAFAAIAGAAQADgBACgDIACgJIABgPIgBgOQAAgGgCgDQgCgDgCgBIgGAAIgDAAIgDAAg");
	this.shape_8.setTransform(51.9,30.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0096D6").s().p("AgVAtQgGAAABgEIAAhVIAvAAQAGAAgBAEIAAAOIgeAAIAAARIAWAAQAEAAABAFIAAAMIgbAAIAAATIAbAAQAEAAAAAEIAAAOg");
	this.shape_9.setTransform(73.4,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0096D6").s().p("AgFAtQgFAAAAgEIAAhCIgQAAQgGAAAAgFIAAgOIA8AAQAFAAgBAEIAAAPIgVAAIAABGg");
	this.shape_10.setTransform(66.8,15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0096D6").s().p("AgGAtQgEAAAAgEIAAhVIARAAQAEAAAAAEIAABVg");
	this.shape_11.setTransform(61.8,15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0096D6").s().p("AgUAtQgFAAAAgEIAAhVIASAAQAFAAAAAEIAABCIAXAAQAFAAAAAFIAAAOg");
	this.shape_12.setTransform(57.5,15.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0096D6").s().p("AgWAtQgEAAAAgEIAAhVIAvAAQAFAAABAEIAAAOIgfAAIAAARIAWAAQAEAAAAAFIAAAMIgaAAIAAATIAaAAQAFAAABAEIAAAOg");
	this.shape_13.setTransform(51.4,15.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0096D6").s().p("AgOAuQgFAAgDgCIgDgCIgBgEIAAgLIAJABIAKAAIAHAAIADgCIADgCIAAgEIAAgEIgDgCIgDgDIgHgDIgKgFIgHgFIgCgHIgBgJQgBgIADgFQACgFAEgDQAEgEAGgBQAGgCAFAAIALABIAIACQADACABACIABADIAAAKIgGgBIgEAAIgFAAIgEAAIgHAAIgDACIgCACIgBADIAAAEIACACIAEADIAHADIAKAFQAEACADADQACADABAEQACAEgBAGQAAAHgBAGQgCAFgEADQgDAEgHABQgFACgHAAIgNgBg");
	this.shape_14.setTransform(102.6,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0096D6").s().p("AgGAtQgEAAAAgFIAAhUIARAAQAEAAAAAEIAABVg");
	this.shape_15.setTransform(97.7,0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0096D6").s().p("AgWAtQgEAAAAgFIAAhUIAvAAQAGAAAAAEIAAAOIgfAAIAAARIAWAAQAEAAAAAEIAAANIgaAAIAAATIAaAAQAGAAAAAEIAAAOg");
	this.shape_16.setTransform(93,0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0096D6").s().p("AgFAtQgFAAAAgFIAAhBIgRAAQgEgBAAgEIAAgOIA7AAQAEAAAAAEIAAAPIgUAAIAABGg");
	this.shape_17.setTransform(86.4,0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0096D6").s().p("AAPA7QgEAAgBgFIgCgRIgRAAIgCALIgBALIgRAAIgCgBQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIABgDIAAgCIAIgpQAEgTAHgTIAXAAIADABIABADQAGARAFAVIAJAvgAgEAFIgDAQIANAAIgCgQIgEgTIgEATgAgGglQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIABgDIAEgJIAFgIIAPAAIADABIABACIAAABIgCACIgNAPg");
	this.shape_18.setTransform(79.7,-1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0096D6").s().p("AgFAtQgFAAAAgFIAAhBIgQAAQgGgBAAgEIAAgOIA8AAQAFAAgBAEIAAAPIgVAAIAABGg");
	this.shape_19.setTransform(72.8,0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0096D6").s().p("AAOAuIgEgBIgCgEIgGgPIgFgNIgGAAIAAAhIgRAAQgFAAgBgFIAAhTIAPgCIAPgBQAOAAAIAHQAIAHAAAQIgBAGIgBAHIgFAFQgCADgDACIAFAIIAFAJIADALIAEAKgAgJgDIAHAAIACAAIADgCIADgEIABgGIgBgHIgCgEIgEgCIgDAAIgBAAIgCAAIgCAAIgBAAg");
	this.shape_20.setTransform(66.2,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0096D6").s().p("AgMAtQgHgCgFgFQgEgEgCgKQgDgJAAgPQAAgOADgKQACgJAEgFQAFgFAHgBQAFgCAHAAQAIAAAGACQAHABAEAFQAEAFADAJQACAKAAAOQAAAPgCAJQgDAKgEAEQgEAFgHACQgGACgIAAQgHAAgFgCgAgEgaQgDABgBACQgBAEgBAFIAAAOIAAAPQABAFABADQABAEADABIAEABIAGgBQACgBABgEIABgIIABgPIgBgOIgBgJQgBgCgCgBQgCgCgEAAQgCAAgCACg");
	this.shape_21.setTransform(58.7,0.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0096D6").s().p("AgYAuQgFAAAAgFIAAhTIAPgCIANgBQAHAAAHACQAGABAEAEQADAEADAFQABAGAAAIQAAAPgGAIQgIAHgNAAIgFgBIgEAAIAAAggAgGgcIAAAbIACAAIACAAIAFAAQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBIACgEIAAgHIAAgGQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgDgCIgEAAIgCAAIgDAAg");
	this.shape_22.setTransform(51.7,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.HPlogoblue();
	this.instance.parent = this;
	this.instance.setTransform(0.7,-2.1,0.14,0.14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hp_logo2, new cjs.Rectangle(0.7,-10.3,171.8,51.3), null);


(lib.hp_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.HPlogoblue();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,0,0.14,0.14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hp_logo, new cjs.Rectangle(-0.2,0,35,35), null);


(lib.copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUAxQgEAAAAgFIAAhbIALAAIAEABIACAEIAAAIQAFgFAGgEQAHgFAIAAQAEAAABACQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAANIgCAAIgDAAQgIAAgGACQgGADgFAFIAABFg");
	this.shape.setTransform(173.5,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAqQgHgIAAgOQAAgJADgGQADgFAFgEQAFgDAGgCIAPgBIATAAIAAgGQAAgKgFgEQgFgDgMAAIgPAAIgIABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgIIAPgEQAIgBAIAAQALAAAHACQAHADAFAEQAEAEACAHQACAGAAAIIAABAIgMAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgBgDIgBgGQgFAFgHAEQgHADgJAAQgOAAgIgIgAgKAEIgGADIgDAFIgBAHQAAAJAEAEQAFAEAIAAQAHAAAFgDIAKgHIAAgXIgTAAIgKABg");
	this.shape_1.setTransform(165.5,35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJBCIgIgBIgHgCIgGgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAIgBgEIAAgIIAOACIAMAAQANABAGgEQAFgFAAgJIAAgMQgFAEgGACQgFACgHAAQgKAAgGgEQgHgDgEgGQgDgGgCgIQgBgIAAgKQAAgOACgKQADgJAGgGQAGgGAIgCQAJgCALAAIAPAAIAOACIAGACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAJIgHAAIABAYIAAAWIAAAiQAAARgJAIQgJAJgTAAIgHAAgAgHgwQgFAAgDAEQgDAEgCAHQgBAGAAAKIABAPIADAJQADAEAEACQADACAFAAQAGAAAEgCQAEgCAEgDIAAg5IgGgBIgGAAQgGAAgFACg");
	this.shape_2.setTransform(156.6,36.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAvQgHgCgCgFQgEgEgCgGQgCgGAAgIIAAhAIAQAAIACABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAA7QAAAKAEAEQAFAEAHAAQAHAAAGgDIAIgGIAAhIIAPAAQAFAAAAAEIAABbIgMAAIgEgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgBgGQgMAMgSAAQgHAAgFgCg");
	this.shape_3.setTransform(147.1,35.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGBDQgDgCgCgDQgCgEgCgFIgBgNIAAhsIAQAAIABABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAABsQAAAFACACQABABAEABIAFABQAAAAABAAQAAAAAAABQAAAAAAABQABABAAAAIAAAJIgHABIgHABQgEAAgFgCg");
	this.shape_4.setTransform(140.5,33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAxQgEAAAAgFIAAhbIALAAIAEABIACAEIAAAIQAFgFAGgEQAHgFAIAAQAEAAABACQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAANIgCAAIgDAAQgIAAgGACQgGADgFAFIAABFg");
	this.shape_5.setTransform(131.8,35.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOAwQgIgCgFgHQgFgGgCgJQgDgKAAgOQAAgMADgKQACgJAFgHQAFgGAHgCQAIgDAJgBQALABAHADQAHADAEAFQAEAGABAGQACAIAAAIIgBAKIgBAIIg3AAIACAMQABAGAEADQADADAFACQAEABAJAAIANAAIAIgBQAFgBAAAFIAAAIQgFACgIABQgHACgLAAQgKAAgIgDgAgHghQgEACgDAEQgCAEgBAFQgCAGAAAHIAnAAIABgDIAAgCQAAgMgEgHQgEgGgLAAQgFAAgEACg");
	this.shape_6.setTransform(124,35.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWAvQgFgCgEgFQgDgEgCgGQgCgGAAgIIAAhAIAQAAIACABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAA7QAAAKAEAEQAFAEAHAAQAHAAAGgDIAIgGIAAhIIAPAAQAEAAABAEIAABbIgMAAIgEgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgBgGQgMAMgSAAQgHAAgGgCg");
	this.shape_7.setTransform(114.8,35.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAVBBQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgjIgKAGQgGACgIAAQgRAAgIgMQgIgLAAgYQAAgPADgKQADgKAGgGQAFgGAJgCQAJgCALAAIAQAAIAOACIAFACQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIAAAJIgHAAIAAAWIABAXIAABDgAgHgwQgFABgDAEQgEAEgBAHQgCAHAAALQAAAKACAFQABAHACAEQACADAEACQAEACAFAAQAFAAAFgCIAIgFIAAg9IgGAAIgGAAQgGAAgFABg");
	this.shape_8.setTransform(105.5,36.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGBDQgDgCgCgDQgCgEgCgFIgBgNIAAhsIAPAAIACABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAABsQAAAFACACQABABAEABIAFABQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAJIgGABIgGABQgFAAgFgCg");
	this.shape_9.setTransform(98.7,33.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAqQgHgIAAgOQAAgJADgGQADgFAFgEQAFgDAGgCIAPgBIATAAIAAgGQAAgKgFgEQgFgDgMAAIgPAAIgIABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgIIAPgEQAIgBAIAAQALAAAHACQAHADAFAEQAEAEACAHQACAGAAAIIAABAIgMAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgBgDIgBgGQgFAFgHAEQgHADgJAAQgOAAgIgIgAgKAEIgGADIgDAFIgBAHQAAAJAEAEQAFAEAIAAQAHAAAFgDIAKgHIAAgXIgTAAIgKABg");
	this.shape_10.setTransform(91.5,35.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWAvQgFgCgEgFQgDgEgBgGQgDgGAAgIIAAhAIAPAAIADABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAA7QAAAKAEAEQAFAEAHAAQAHAAAGgDIAIgGIAAhIIAPAAQAEAAABAEIAABbIgMAAIgEgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBgBAAIAAgGQgMAMgRAAQgIAAgGgCg");
	this.shape_11.setTransform(82.5,35.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAVBBQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgjIgKAGQgGACgIAAQgRAAgIgMQgIgLAAgYQAAgPADgKQADgKAGgGQAFgGAJgCQAJgCALAAIAQAAIAOACIAFACQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIAAAJIgHAAIAAAWIABAXIAABDgAgHgwQgFABgDAEQgEAEgBAHQgCAHAAALQAAAKACAFQABAHACAEQACADAEACQAEACAFAAQAFAAAFgCIAIgFIAAg9IgGAAIgGAAQgGAAgFABg");
	this.shape_12.setTransform(73.2,36.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgOAwQgIgCgFgHQgFgGgCgJQgDgKAAgOQAAgMADgKQACgJAFgHQAFgGAHgCQAIgEAJAAQALAAAHAEQAHADAEAFQAEAGABAHQACAHAAAIIgBAKIgBAIIg3AAIACAMQABAFAEAEQADADAFACQAEABAJAAIANAAIAIgBQAFgBAAAFIAAAIQgFACgIABQgHACgLAAQgKAAgIgDgAgHghQgEACgDAEQgCAEgBAGQgCAFAAAHIAnAAIABgDIAAgCQAAgMgEgHQgEgGgLAAQgFAAgEACg");
	this.shape_13.setTransform(174.7,16.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgfA4QgHgMAAgYQAAgaAJgMQAJgMAUAAQAGAAAGACIAHADIAAgrIAQAAIACABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAACCIgLAAIgEgBQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIgBgGQgEAFgHADQgGAEgKAAQgRAAgIgNgAgHgOQgEADgDAEQgDAEAAAFQgCAIAAAJQAAASAEAIQAEAJALAAQAHAAAEgEIAIgFIAAg5IgHgDIgJgBQgFAAgFACg");
	this.shape_14.setTransform(165.5,14.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIAzIgIgCIgIgBIgEgBQgBAAgBgBQAAAAgBAAQAAAAAAgBQAAAAgBAAIgBgEIAAgIIAOABIAOABQAMAAAEgEQAFgCAAgIIgBgFIgDgEIgHgDIgJgCIgLgEQgGgCgEgCQgEgDgDgFQgBgEgBgIQAAgPAJgHQAJgGAQgBIAHABIAHAAIAGACIAGACIADABIAAAEIAAAIIgPgCIgLAAQgKABgEACQgEADAAAGIABAGIAEADIAGAEIAIACIANADQAFACAEACQAEADACAFQADAFAAAHQAAAIgDAHQgCAFgFAEQgFAEgHABQgHACgGAAIgIAAg");
	this.shape_15.setTransform(156.9,16.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOAwQgIgCgFgHQgFgGgCgJQgDgKAAgOQAAgMADgKQACgJAFgHQAFgGAHgCQAIgEAJAAQALAAAHAEQAHADAEAFQAEAGABAHQACAHAAAIIgBAKIgBAIIg3AAIACAMQABAFAEAEQADADAFACQAEABAJAAIANAAIAIgBQAFgBAAAFIAAAIQgFACgIABQgHACgLAAQgKAAgIgDgAgHghQgEACgDAEQgCAEgBAGQgCAFAAAHIAnAAIABgDIAAgCQAAgMgEgHQgEgGgLAAQgFAAgEACg");
	this.shape_16.setTransform(148.5,16.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgfA4QgHgMAAgYQAAgaAJgMQAKgMATAAQAGAAAGACIAIADIAAgrIAPAAIADABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAACCIgLAAIgEgBQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIgBgGQgEAFgHADQgGAEgKAAQgRAAgIgNgAgHgOQgEADgDAEQgDAEAAAFQgCAIAAAJQAAASAEAIQAEAJALAAQAHAAAEgEIAJgFIAAg5IgIgDIgJgBQgFAAgFACg");
	this.shape_17.setTransform(139.3,14.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIAXQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAIAAgDIAIgSQgFgBgCgCQgCgDAAgEQAAgHADgCQADgDAGAAQAHAAADADQADACAAAHIgCAHIgEAKIgHAQg");
	this.shape_18.setTransform(129.2,21);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeA9QgHgIAAgOQAAgJADgGQADgGAFgEQAFgDAGgCIAPgBIATAAIAAgGQAAgJgFgEQgFgDgMAAIgPAAIgIABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgIIAPgEQAIgBAIAAQALAAAHACQAHADAFAEQAEAEACAHQACAGAAAHIAABBIgMAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBIgBgDIgBgGQgFAFgHAEQgHADgJAAQgOAAgIgIgAgKAXIgGADIgDAFIgBAHQAAAJAEAEQAFAEAIAAQAHAAAFgDIAKgHIAAgXIgTAAIgKABgAgEgoIgDgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAGgMIAFgLIAPAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAIgBADIgCADIgQAUg");
	this.shape_19.setTransform(122.4,14.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFBDQgEgCgDgDQgCgEAAgFIgBgNIAAhsIAOAAIADABQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABIAABsQAAAFABACQACABAFABIAEABQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAJIgFABIgIABQgEAAgEgCg");
	this.shape_20.setTransform(116.2,14.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAqQgHgIAAgOQAAgJADgGQADgFAFgEQAFgDAGgCIAPgBIATAAIAAgGQAAgKgFgEQgFgDgMAAIgPAAIgIABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgIIAPgEQAIgBAIAAQALAAAHACQAHADAFAEQAEAEACAHQACAGAAAIIAABAIgMAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBIgBgDIgBgGQgFAFgHAEQgHADgJAAQgOAAgIgIgAgKAEIgGADIgDAFIgBAHQAAAJAEAEQAFAEAIAAQAHAAAFgDIAKgHIAAgXIgTAAIgKABg");
	this.shape_21.setTransform(105.7,16.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgKBSIgGgBIgCgBIgBgDIAAgJIAFAAIAEAAQAFAAACgCQACgDAAgFIAAhoIAOAAQAEAAAAAFIAABlQAAALgGAGQgFAGgLAAIgFgBgAgBhAQgCgBAAgHQAAgFACgDQADgCAFAAQAGAAADACQADADAAAFQAAAHgDABQgDADgGAAQgFAAgDgDg");
	this.shape_22.setTransform(98.7,16);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgOAwQgIgCgFgHQgFgGgCgJQgDgKAAgOQAAgMADgKQACgJAFgHQAFgGAHgCQAIgEAJAAQALAAAHAEQAHADAEAFQAEAGABAHQACAHAAAIIgBAKIgBAIIg3AAIACAMQABAFAEAEQADADAFACQAEABAJAAIANAAIAIgBQAFgBAAAFIAAAIQgFACgIABQgHACgLAAQgKAAgIgDgAgHghQgEACgDAEQgCAEgBAGQgCAFAAAHIAnAAIABgDIAAgCQAAgMgEgHQgEgGgLAAQgFAAgEACg");
	this.shape_23.setTransform(93.1,16.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgIA4QgHgGAAgNIAAg5IgGAAQgFAAAAgFIAAgKIAMAAIABgaIANAAQAEAAAAAFIAAAVIASAAIAEABIABADIAAALIgXAAIAAA4QAAAFABADQACADAFAAIAGAAIAEgBQAFAAAAAFIAAAJIgJABIgIABQgMAAgGgGg");
	this.shape_24.setTransform(85.5,15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgIAzIgIgCIgHgBIgGgBQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgBgEIAAgIIANABIAPABQALAAAFgEQAEgCAAgIIgBgFIgDgEIgGgDIgJgCIgNgEQgFgCgEgCQgEgDgCgFQgCgEgBgIQABgPAIgHQAJgGAQgBIAGABIAIAAIAHACIAFACIADABIABAEIAAAIIgPgCIgMAAQgJABgFACQgEADAAAGIABAGIAEADIAGAEIAJACIALADQAGACAEACQAEADACAFQADAFgBAHQABAIgDAHQgDAFgEAEQgFAEgHABQgGACgIAAIgHAAg");
	this.shape_25.setTransform(78.6,16.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AghBCQgEAAAAgFIAAh+IBEAAQAFAAAAAEIAAAMIg2AAIAAApIAtAAQAEAAAAAEIAAALIgxAAIAAAqIA0AAQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAAMg");
	this.shape_26.setTransform(70.3,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy5, new cjs.Rectangle(0,0,244.1,48), null);


(lib.copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAtIgHgBIgHgBIgFgBIgCgCIgBgEIAAgHIAMABIANABQALAAADgDQAEgDAAgGIAAgFIgDgDIgGgDIgIgDIgLgDQgFgBgDgCQgEgDgCgEQgCgEAAgHQAAgNAIgGQAIgGAOAAIAGAAIAHABIAFABIAFABIADACIAAADIAAAHIgNgBIgKAAQgIAAgFACQgDADAAAGIABAEIADAEIAGACIAHADIALADQAFABADACQAEADACAEQACAEAAAHQAAAIgCAFQgDAFgEADQgEADgGACQgGABgGAAIgHAAg");
	this.shape.setTransform(189.8,58.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAmQgHgIAAgMQAAgJADgFQACgEAFgDQAEgEAGAAQAGgCAHAAIARAAIAAgFQAAgKgFgCQgEgEgKAAIgOABIgHAAIgEgBIgBgCIAAgIIAOgCQAHgCAHAAQAKAAAGADQAHACAEADQAEAEABAGQACAGAAAGIAAA5IgLAAIgDgBIgBgDIgBgFQgEAFgGADQgHADgIAAQgNAAgGgHgAgIAEQgEAAgCACIgDAFIAAAGQAAAIADAEQAEADAIAAQAGAAAFgCIAIgHIAAgVIgRAAQgFAAgDACg");
	this.shape_1.setTransform(182.2,58.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbAyQgHgLAAgVQAAgYAJgKQAIgLARAAIALABIAHADIAAgmIANAAIADABIABADIAAB1IgKAAIgEgBIgBgDIgBgFQgEAEgGADQgGAEgIAAQgPAAgHgMgAgGgMQgEACgCADQgDAEgBAFIgBAPQAAAQAEAHQAEAIAJAAQAGAAAFgDIAHgFIAAgzIgHgCIgIgBQgFAAgEACg");
	this.shape_2.setTransform(174.1,56.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAmQgHgIAAgMQAAgJADgFQACgEAFgDQAEgEAGAAQAGgCAHAAIARAAIAAgFQAAgKgFgCQgEgEgKAAIgOABIgHAAIgEgBIgBgCIAAgIIAOgCQAHgCAHAAQAKAAAGADQAHACAEADQAEAEABAGQACAGAAAGIAAA5IgLAAIgDgBIgBgDIgBgFQgEAFgGADQgHADgIAAQgNAAgGgHgAgIAEQgEAAgCACIgDAFIAAAGQAAAIADAEQAEADAIAAQAGAAAFgCIAIgHIAAgVIgRAAQgFAAgDACg");
	this.shape_3.setTransform(165.9,58.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgCA9IgDgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAgEIAGAAIAHgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAIgFgCIAAAAIgDgBIgBgCIABgCIABgFIACgEQgPgCgHgMQgGgLAAgTQAAgYAJgKQAIgLAQAAIAMABIAIACIADACIAAADIAAAIIgKgCIgJAAQgFAAgEABQgDACgDADQgCAEgBAGQgCAGAAAIQAAAKACAGQABAFADAEQACADADACIAJABIAJgBIAHAAQAEAAAAAEIAAAHIgJADIgMABIgDAIIACAAQAGABADADQADADAAAFIgBAFIgDAEIgGACIgIABIgDAAg");
	this.shape_4.setTransform(158.8,59.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAVAsIgDgBIgBgDIAAg0QAAgJgEgEQgDgEgIAAQgFAAgFADQgFADgDADIAABAIgNAAQgEAAAAgEIAAhRIAKAAIADABIACADIAAAFQALgLAPAAQAOAAAGAIQAGAIAAANIAAA6g");
	this.shape_5.setTransform(151.2,58.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaAmQgHgIAAgMQAAgJADgFQACgEAFgDQAEgEAGAAQAGgCAHAAIARAAIAAgFQAAgKgFgCQgEgEgKAAIgOABIgHAAIgEgBIgBgCIAAgIIAOgCQAHgCAHAAQAKAAAGADQAHACAEADQAEAEABAGQACAGAAAGIAAA5IgLAAIgDgBIgBgDIgBgFQgEAFgGADQgHADgIAAQgNAAgGgHgAgIAEQgEAAgCACIgDAFIAAAGQAAAIADAEQAEADAIAAQAGAAAFgCIAIgHIAAgVIgRAAQgFAAgDACg");
	this.shape_6.setTransform(142.8,58.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEArIgEgBIgCgCQgJgVgGgTQgHgVgDgVIAOAAQAEAAAAAEIADARIAEARIAFARIAFAPQAEgHACgJIAGgRIAEgTIADgSIANAAQAEAAAAADIgBAFIgBAFQgDASgHARQgGATgJASg");
	this.shape_7.setTransform(135.2,58.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAmQgHgIAAgMQAAgJADgFQACgEAFgDQAEgEAGAAQAGgCAHAAIARAAIAAgFQAAgKgFgCQgEgEgKAAIgOABIgHAAIgEgBIgBgCIAAgIIAOgCQAHgCAHAAQAKAAAGADQAHACAEADQAEAEABAGQACAGAAAGIAAA5IgLAAIgDgBIgBgDIgBgFQgEAFgGADQgHADgIAAQgNAAgGgHgAgIAEQgEAAgCACIgDAFIAAAGQAAAIADAEQAEADAIAAQAGAAAFgCIAIgHIAAgVIgRAAQgFAAgDACg");
	this.shape_8.setTransform(127.3,58.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgaAmQgHgIAAgMQAAgJADgFQACgEAFgDQAEgEAGAAQAGgCAHAAIARAAIAAgFQAAgKgFgCQgEgEgKAAIgOABIgHAAIgEgBIgBgCIAAgIIAOgCQAHgCAHAAQAKAAAGADQAHACAEADQAEAEABAGQACAGAAAGIAAA5IgLAAIgDgBIgBgDIgBgFQgEAFgGADQgHADgIAAQgNAAgGgHgAgIAEQgEAAgCACIgDAFIAAAGQAAAIADAEQAEADAIAAQAGAAAFgCIAIgHIAAgVIgRAAQgFAAgDACg");
	this.shape_9.setTransform(116.4,58.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgCA9IgDgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAgEIAGAAIAHgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAIgFgCIAAAAIgDgBIgBgCIABgCIABgFIACgEQgPgCgHgMQgGgLAAgTQAAgYAJgKQAIgLAQAAIAMABIAIACIADACIAAADIAAAIIgKgCIgJAAQgFAAgEABQgDACgDADQgCAEgBAGQgCAGAAAIQAAAKACAGQABAFADAEQACADADACIAJABIAJgBIAHAAQAEAAAAAEIAAAHIgJADIgMABIgDAIIACAAQAGABADADQADADAAAFIgBAFIgDAEIgGACIgIABIgDAAg");
	this.shape_10.setTransform(109.3,59.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAVAsIgDgBIgBgDIAAg0QAAgJgEgEQgDgEgIAAQgFAAgFADQgFADgDADIAABAIgNAAQgEAAAAgEIAAhRIAKAAIADABIACADIAAAFQALgLAPAAQAOAAAGAIQAGAIAAANIAAA6g");
	this.shape_11.setTransform(101.7,58.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaAmQgHgIAAgMQAAgJADgFQACgEAFgDQAEgEAGAAQAGgCAHAAIARAAIAAgFQAAgKgFgCQgEgEgKAAIgOABIgHAAIgEgBIgBgCIAAgIIAOgCQAHgCAHAAQAKAAAGADQAHACAEADQAEAEABAGQACAGAAAGIAAA5IgLAAIgDgBIgBgDIgBgFQgEAFgGADQgHADgIAAQgNAAgGgHgAgIAEQgEAAgCACIgDAFIAAAGQAAAIADAEQAEADAIAAQAGAAAFgCIAIgHIAAgVIgRAAQgFAAgDACg");
	this.shape_12.setTransform(93.3,58.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSArQgDAAAAgEIAAhRIAKAAIADABIABADIABAHQAEgEAFgEQAHgEAGABQABAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQABAAAAAAIAAAMIgDAAIgCAAQgHAAgGACQgFACgEAGIAAA8g");
	this.shape_13.setTransform(87.1,58.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTAqQgFgCgDgEQgDgEgCgFQgBgGAAgGIAAg6IANAAIADABIABADIAAA0QAAAJAEAEQADAEAIAAQAGAAAEgDQAFgDADgDIAAhAIANAAQAEAAAAAEIAABRIgKAAIgDgBIgCgDIAAgFQgLALgPAAQgHAAgFgCg");
	this.shape_14.setTransform(79.8,58.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIA7IgHgBIgHgBIgEgCQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIAAgDIAAgHIAMABIAMABQAKAAAGgDQAEgEAAgIIAAgLIgKAFQgEACgGAAQgKAAgFgDQgGgDgDgFQgEgHgBgHIgBgPQAAgNADgJQACgIAFgFQAFgFAHgCQAJgCAJAAIAOABIAMABIAGABQAAABAAAAQAAAAABABQAAAAAAABQAAABAAABIAAAHIgHAAIABAVIAAAUIAAAeQAAAPgIAIQgJAIgQAAIgGAAgAgGgsQgFABgDAEQgCAEgBAFQgCAGAAAJIABANQABAFACADQADAEACABQAEACAEAAQAFAAAEgCIAHgEIAAg0IgFAAIgGAAQgEAAgFABg");
	this.shape_15.setTransform(71.7,59.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMArQgHgDgFgFQgEgFgDgJQgCgJAAgMQAAgLACgJQADgIAEgGQAEgFAHgDQAHgCAIAAQAJAAAHADQAGACAEAFQADAFACAGIABAOIgBAJIgBAGIgxAAIACAMQABAFADADQADADAFABQADABAIAAIAMAAIAHgBQAEAAAAAEIAAAHQgEACgHABQgHABgJAAQgJAAgHgCgAgGgeQgEACgCAEQgDADgBAFIgBALIAjAAIAAgCIAAgCQAAgLgDgGQgDgFgKAAQgFAAgDABg");
	this.shape_16.setTransform(63.4,58.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHAtIgHgBIgHgBIgEgBIgDgCIgBgEIAAgHIANABIAMABQAKAAAEgDQAEgDAAgGIgBgFIgCgDIgGgDIgIgDIgLgDQgFgBgEgCQgDgDgCgEQgCgEAAgHQAAgNAIgGQAIgGAOAAIAGAAIAGABIAHABIAEABIADACIABADIAAAHIgOgBIgKAAQgIAAgFACQgEADABAGIAAAEIAEAEIAFACIAIADIALADQAFABADACQAEADACAEQACAEAAAHQAAAIgCAFQgCAFgFADQgEADgGACQgGABgGAAIgHAAg");
	this.shape_17.setTransform(55.9,58.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgMArQgHgDgFgFQgEgFgDgJQgCgJAAgMQAAgLACgJQADgIAEgGQAEgFAHgDQAHgCAIAAQAJAAAHADQAGACAEAFQADAFACAGIABAOIgBAJIgBAGIgxAAIACAMQABAFADADQADADAFABQADABAIAAIAMAAIAHgBQAEAAAAAEIAAAHQgEACgHABQgHABgJAAQgJAAgHgCgAgGgeQgEACgCAEQgDADgBAFIgBALIAjAAIAAgCIAAgCQAAgLgDgGQgDgFgKAAQgFAAgDABg");
	this.shape_18.setTransform(196.8,37.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgbAyQgHgLAAgVQAAgYAJgKQAIgLARAAIALABIAHADIAAgmIANAAIADABIABADIAAB1IgKAAIgEgBIgBgDIgBgFQgEAEgGADQgGAEgIAAQgPAAgHgMgAgGgMQgEACgCADQgDAEgBAFIgBAPQAAAQAEAHQAEAIAJAAQAGAAAFgDIAHgFIAAgzIgHgCIgIgBQgFAAgEACg");
	this.shape_19.setTransform(188.5,36.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHAtIgHgBIgGgBIgGgBIgCgCIgBgEIAAgHIAMABIANABQALAAADgDQAEgDAAgGIAAgFIgEgDIgFgDIgIgDIgLgDQgFgBgDgCQgEgDgCgEQgCgEAAgHQAAgNAIgGQAIgGAOAAIAGAAIAHABIAFABIAFABIADACIAAADIAAAHIgNgBIgKAAQgJAAgEACQgDADAAAGIABAEIADAEIAGACIAHADIALADQAFABAEACQADADACAEQACAEAAAHQAAAIgDAFQgBAFgFADQgEADgGACQgGABgGAAIgHAAg");
	this.shape_20.setTransform(178,37.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgMArQgHgDgFgFQgEgFgDgJQgCgJAAgMQAAgLACgJQADgIAEgGQAEgFAHgDQAHgCAIAAQAJAAAHADQAGACAEAFQADAFACAGIABAOIgBAJIgBAGIgxAAIACAMQABAFADADQADADAFABQADABAIAAIAMAAIAHgBQAEAAAAAEIAAAHQgEACgHABQgHABgJAAQgJAAgHgCgAgGgeQgEACgCAEQgDADgBAFIgBALIAjAAIAAgCIAAgCQAAgLgDgGQgDgFgKAAQgFAAgDABg");
	this.shape_21.setTransform(170.5,37.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgbAyQgHgLAAgVQAAgYAJgKQAIgLARAAIALABIAHADIAAgmIANAAIADABIABADIAAB1IgKAAIgEgBIgBgDIgBgFQgEAEgGADQgGAEgIAAQgPAAgHgMgAgGgMQgEACgCADQgDAEgBAFIgBAPQAAAQAEAHQAEAIAJAAQAGAAAFgDIAHgFIAAgzIgHgCIgIgBQgFAAgEACg");
	this.shape_22.setTransform(162.3,36.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaAmQgHgIAAgNQAAgHADgGQACgEAFgDQAEgEAGAAQAGgCAHAAIARAAIAAgFQAAgJgFgEQgEgDgKAAIgOABIgHAAIgEgBIgBgCIAAgHIAOgDQAHgCAHAAQAKAAAGADQAHACAEADQAEAEABAGQACAFAAAHIAAA5IgLAAIgDgBIgBgCIgBgGQgEAEgGAEQgHADgIAAQgNAAgGgHgAgIAEQgEAAgCACIgDAFIAAAGQAAAIADAEQAEADAIAAQAGAAAFgCIAIgHIAAgVIgRAAQgFAAgDACg");
	this.shape_23.setTransform(154.1,37.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbAyQgHgLAAgVQAAgYAJgKQAIgLARAAIALABIAHADIAAgmIANAAIADABIABADIAAB1IgKAAIgEgBIgBgDIgBgFQgEAEgGADQgGAEgIAAQgPAAgHgMgAgGgMQgEACgCADQgDAEgBAFIgBAPQAAAQAEAHQAEAIAJAAQAGAAAFgDIAHgFIAAgzIgHgCIgIgBQgFAAgEACg");
	this.shape_24.setTransform(146,36.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgEA7QgEAAAAgDIAAhSIAMAAQAFAAAAAEIAABRgAgHgqQgCgCAAgFQAAgFACgCQADgCAEgBQAGABACACQACACABAFQgBAFgCACQgCADgGgBQgEABgDgDg");
	this.shape_25.setTransform(140.3,36.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgFA8QgDgCgCgDQgCgDgBgFIgBgLIAAhgIANAAIACABIABACIAABhQAAAFACACIAFABIAEABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIAAAIIgGABIgGAAQgFAAgDgBg");
	this.shape_26.setTransform(136.9,36.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgaAmQgHgIAAgNQAAgHADgGQACgEAFgDQAEgEAGAAQAGgCAHAAIARAAIAAgFQAAgJgFgEQgEgDgKAAIgOABIgHAAIgEgBIgBgCIAAgHIAOgDQAHgCAHAAQAKAAAGADQAHACAEADQAEAEABAGQACAFAAAHIAAA5IgLAAIgDgBIgBgCIgBgGQgEAEgGAEQgHADgIAAQgNAAgGgHgAgIAEQgEAAgCACIgDAFIAAAGQAAAIADAEQAEADAIAAQAGAAAFgCIAIgHIAAgVIgRAAQgFAAgDACg");
	this.shape_27.setTransform(130.5,37.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAVAsIgDgBIgBgDIAAg0QAAgJgEgEQgDgEgIAAQgFAAgFADQgFADgDADIAABAIgNAAQgEAAAAgEIAAhRIAKAAIADABIACADIAAAFQALgLAPAAQAOAAAGAIQAGAIAAANIAAA6g");
	this.shape_28.setTransform(122.5,37.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgbAiQgIgLAAgXQAAgXAIgKQAJgLASAAQATAAAJALQAIAKAAAXQAAAXgIALQgJALgTAAQgSAAgJgLgAgIgdQgDABgDAEQgCAEgBAGQgBAGAAAIQAAAJABAGQABAHACADQADAEADABQAEACAEAAQAFAAAEgCQADgBADgEQACgDABgHQABgGAAgJQAAgIgBgGQgBgGgCgEQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_29.setTransform(114,37.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDA7QgFAAAAgDIAAhSIANAAQADAAAAAEIAABRgAgHgqQgCgCgBgFQABgFACgCQACgCAFgBQAFABADACQACACAAAFQAAAFgCACQgDADgFgBQgFABgCgDg");
	this.shape_30.setTransform(108.2,36.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgJAqQgHgDgEgGQgEgFgCgJQgCgIAAgLQAAgXAJgKQAIgLAQAAIAMABIAIACIADACIAAADIAAAIIgKgCIgJAAQgFAAgEABQgDACgDADQgCAEgBAGQgCAGAAAIQAAAJACAGQABAGADAEQACADADACIAJABIAJgBIAHAAQAEAAAAAEIAAAHQgEACgGABQgGABgHAAQgJAAgGgDg");
	this.shape_31.setTransform(103.2,37.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAVAsIgDgBIgBgDIAAg0QAAgJgEgEQgDgEgIAAQgFAAgFADQgFADgDADIAABAIgNAAQgEAAAAgEIAAhRIAKAAIADABIACADIAAAFQALgLAPAAQAOAAAGAIQAGAIAAANIAAA6g");
	this.shape_32.setTransform(95.6,37.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgTAqQgFgCgDgEQgDgEgCgFQgBgGAAgGIAAg6IANAAIADABIABADIAAA0QAAAJAEAEQADAEAIAAQAGAAAEgDQAFgDADgDIAAhAIANAAQAEAAAAAEIAABRIgKAAIgDgBIgCgDIAAgFQgLALgPAAQgHAAgFgCg");
	this.shape_33.setTransform(87.1,37.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgKA+QgEAAAAgEIAAhEIgGAAQgEAAAAgEIAAgKIAKAAIAAgMQAAgMAFgGQAGgHAMAAIAGAAIAHACIACACIABADIAAAIIgGgBIgGAAIgGABIgDACQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAIgBAFIAAAMIARAAIADABIABAEIAAAJIgVAAIAABIg");
	this.shape_34.setTransform(80.4,36);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAtAsQgEAAAAgEIAAg0QAAgJgEgEQgDgEgHAAQgHAAgEADIgIAGIAAAJIAAA3IgMAAIgDgBIgBgDIAAg0QAAgJgDgEQgEgEgHAAQgGAAgFADIgHAGIAABAIgNAAQgEAAAAgEIAAhRIAKAAIADABIACADIAAAFQAFgFAGgDQAHgDAIAAQAHAAAGADQAFACADAHQAEgEAHgEQAHgEAKAAQAMAAAHAHQAGAHAAAPIAAA6g");
	this.shape_35.setTransform(68.1,37.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgbAiQgIgLAAgXQAAgXAIgKQAJgLASAAQATAAAJALQAIAKAAAXQAAAXgIALQgJALgTAAQgSAAgJgLgAgIgdQgDABgDAEQgCAEgBAGQgBAGAAAIQAAAJABAGQABAHACADQADAEADABQAEACAEAAQAFAAAEgCQADgBADgEQACgDABgHQABgGAAgJQAAgIgBgGQgBgGgCgEQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_36.setTransform(57.3,37.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgLA5QgIgDgFgIQgFgHgCgLQgDgMAAgQQAAgPADgMQACgMAFgHQAFgHAJgDQAHgEALAAIAMABIALADIADACIAAADIAAAIIgLgBIgNAAQgHAAgEACQgFACgEAFQgDAFgCAJQgBAIAAANQAAANACAJQABAJAEAFQAEAFAEACQAEACAHAAIANgBIAIgBQAEAAAAAFIAAAIIgMADQgGACgJAAQgLAAgIgEg");
	this.shape_37.setTransform(49.2,36.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgRAsQgHgDgFgFQgFgHgCgIQgCgJAAgMQAAgLACgJQACgJAFgFQAFgGAHgCQAIgDAJAAQAKAAAIADQAHACAFAGQAFAFACAJQACAJAAALQAAAMgCAJQgCAIgFAHQgFAFgHADQgIACgKAAQgJAAgIgCgAgEgXQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAABQgBACgBAFIAAAMIAAANIACAIQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAIAEABIAFgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAABgBIACgIIAAgNIAAgMQgBgFgBgCQgBgBAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgBIgEABg");
	this.shape_38.setTransform(203.4,17.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdA2QgGgHAAgNQAAgJACgGQADgFAFgDQAFgDAGAAIAOgBIAJAAIAAgGQAAgEgEgCIgLgBIgMAAIgHABQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgDIAAgNIANgDQAIgCAKAAQATAAAJAIQAJAJgBAOIAAA6IgQAAIgDAAIgCgBIgCgDIgBgDIgBgCIgJAGQgFAEgHAAQgMAAgHgIgAgJAaQgCACAAAFQAAAEACACQADACAFABQAFAAAFgEIAAgPIgKAAQgGAAgCADgAAFgkQgDgBgCgDIgFgEIgDgBQgBAAAAAAQgBAAgBAAQAAABAAAAQgBABAAAAIgBAHIgKAAIgDgBIgBgEIABgIIADgGQACgDAEgCQADgBAFAAIAHABIAEADIAGAEIADABQABAAAAAAQABAAABAAQAAAAAAgBQABAAAAgBIABgHIAKAAIADABIABAEIgBAIQgBAEgCACQgCADgEACQgDABgFAAIgHAAg");
	this.shape_39.setTransform(194.8,15.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgCA/IgEAAIgDgCIAAgDIAAgFIADAAIAGgBIADgBIABgCIAAgBIgBgDIgEgBIgBgBIgDgBIgBgCIABgDIABgEIACgEQgPgDgGgLQgHgLAAgUQAAgYAJgLQAIgLASAAIAMABIAJACQADACABACIABAFIAAALIgLAAIgHgBIgIABQgDACgBADQgBACAAAFIgBALIABALQAAAFABACQABACADABIAGABIADAAIADAAIAEAAIACAAIAGABQACACAAADIAAALIgJAEQgFACgIAAIgCAHIACAAQAHACADACQADADAAAFIgBAGQgBACgCACIgGAEIgJABIgFAAg");
	this.shape_40.setTransform(187.3,19.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgdAmQgHgHAAgOQABgIADgGQACgFAFgCQAFgEAHAAIAMgBIAKAAIAAgFQAAgGgEgBIgKgBIgNAAIgHABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAIgBgEIAAgMIANgEQAIgBAKgBQATABAJAHQAIAJABAQIAAA4IgRAAIgDAAIgCgBIgCgCIgBgEIgBgCIgJAHQgEAEgJgBQgMABgGgIgAgJAJQgCACgBAFQABAFACACQADACAEAAQAGAAAEgDIAAgQIgJAAQgGABgCACg");
	this.shape_41.setTransform(179.6,17.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAmAtQgHAAAAgGIAAgzQAAgEgBgCQgCgCgEAAIgFAAIgFADIAAA+IgVAAQgGAAAAgGIAAgzQAAgEgCgCQgBgCgFAAIgFAAIgEADIAAA+IgWAAQgHAAAAgGIAAhRIARAAIAFABQACABABAFIABACQAGgGAFgCQAGgDAIAAQAHAAAEADQAFADADAFQAFgFAGgDQAGgDAIAAQAYAAAAAdIAAA8g");
	this.shape_42.setTransform(168.9,17.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgTAsQgGAAAAgGIAAhRIAQAAIAGABQABACABAEIABAEQADgFAGgDQAFgDAGAAQAGAAAAAFIAAAUIgCAAIgCAAIgLABQgFABgEACIAAA6g");
	this.shape_43.setTransform(159.6,17.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgRAsQgHgDgFgFQgFgHgCgIQgCgJAAgMQAAgLACgJQACgJAFgFQAFgGAHgCQAIgDAJAAQAKAAAIADQAHACAFAGQAFAFACAJQACAJAAALQAAAMgCAJQgCAIgFAHQgFAFgHADQgIACgKAAQgJAAgIgCgAgEgXQAAAAgBABQAAAAAAAAQgBABAAAAQAAABgBABQgBACgBAFIAAAMIAAANIACAIQABABAAAAQAAABABAAQAAAAAAABQABAAAAAAIAEABIAFgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBIACgIIAAgNIAAgMQgBgFgBgCQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgFgBIgEABg");
	this.shape_44.setTransform(152,17.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgMA+QgGAAAAgGIAAg8IgEAAQgGABAAgGIAAgQIAKAAIAAgFQAAgJABgGQACgGAEgDQADgEAGgCQAEgBAHAAIAIAAIAHACQAFADAAAFIAAAMIgDAAIgDAAIgCAAIgEAAIgEAAIgDADIgBADIAAAEIAAAEIANAAQAGAAAAAGIAAAPIgTAAIAABCg");
	this.shape_45.setTransform(144.7,15.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAPAtQgGAAAAgGIAAgzQAAgEgCgCQgBgCgFAAIgFABIgEACIAAA+IgWAAQgHAAAAgGIAAhRIARAAIAGABQABABABAFIABACQAGgGAFgCQAGgDAHAAQAYAAABAdIAAA8g");
	this.shape_46.setTransform(137.4,17.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgHA9QgGAAAAgFIAAhSIAVAAQAGAAAAAGIAABRgAgLgmQgEgCAAgHQAAgIAEgCQADgDAIAAQAJAAAEADQADACAAAIQAAAHgDACQgEADgJAAQgIAAgDgDg");
	this.shape_47.setTransform(131,15.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgdAmQgGgHAAgOQAAgIACgGQADgFAFgCQAFgEAGAAIAOgBIAJAAIAAgFQAAgGgEgBIgLgBIgMAAIgHABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAIgCgEIAAgMIANgEQAIgBAKgBQATABAJAHQAJAJAAAQIAAA4IgRAAIgDAAIgCgBIgCgCIgBgEIgBgCIgJAHQgFAEgHgBQgMABgHgIgAgJAJQgCACAAAFQAAAFACACQADACAFAAQAFAAAFgDIAAgQIgKAAQgGABgCACg");
	this.shape_48.setTransform(121.9,17.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AglAPIAAg7IAXAAQAGAAAAAGIAAAyQAAAEACADQABACAFAAIAEgBIAFgCIAAg+IAWAAQAGAAABAGIAABRIgRAAIgGgBQgBgBgBgFIgBgDQgGAGgGAEQgFACgHAAQgZAAAAgeg");
	this.shape_49.setTransform(113.5,17.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgPAtIgLgDQgBAAAAAAQgBgBgBAAQAAAAAAgBQgBAAAAgBIgBgFIAAgLIAOABIALAAIAJgBQADgBABgEIgBgDIgCgCIgDgCIgGgBIgMgEQgFgCgDgDQgEgBgCgFQgBgEAAgHQAAgJACgGQADgFAEgEQAFgDAFgBQAGgBAHAAQAKAAAGABIAJADIADADQACABAAAEIAAALIgRAAIgIgBIgIABQgDABAAAEQAAADADABIAIADIANAEQAFACADADQADACACAEQACAFAAAHQAAAIgDAGQgCAGgEADQgEAEgHABIgNABIgPgBg");
	this.shape_50.setTransform(105.6,17.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgdAmQgGgHgBgOQAAgIADgGQADgFAFgCQAFgEAGAAIAOgBIAJAAIAAgFQAAgGgEgBIgLgBIgMAAIgHABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAIgCgEIAAgMIANgEQAIgBAKgBQATABAIAHQAKAJgBAQIAAA4IgQAAIgDAAIgCgBIgBgCIgCgEIgBgCIgJAHQgFAEgHgBQgMABgHgIgAgJAJQgCACAAAFQAAAFACACQADACAFAAQAFAAAEgDIAAgQIgJAAQgGABgCACg");
	this.shape_51.setTransform(95,17.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgdAmQgGgHgBgOQAAgIAEgGQACgFAFgCQAFgEAHAAIAMgBIAKAAIAAgFQAAgGgEgBIgKgBIgNAAIgHABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAIgCgEIAAgMIANgEQAIgBAKgBQATABAIAHQAJAJAAAQIAAA4IgQAAIgDAAIgCgBIgBgCIgCgEIgBgCIgJAHQgEAEgJgBQgLABgHgIgAgJAJQgDACABAFQgBAFADACQADACAEAAQAGAAAEgDIAAgQIgJAAQgGABgCACg");
	this.shape_52.setTransform(84,17.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgSBKIgCgCIgBgEIAAgNIAEAAIAEAAQAEAAABgCQABgDAAgEIAAhWIAWAAQAGAAAAAFIAABXQAAAGgCAFQgCAFgDADQgEADgFABIgJABQgIAAgGgCgAgEg0QgFgDAAgHQAAgHAFgDQADgDAHAAQAKAAADADQADADABAHQgBAHgDADQgDADgKAAQgHAAgDgDg");
	this.shape_53.setTransform(77.2,17.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgNAsQgHgDgGgFQgEgGgCgJQgDgJAAgMQAAgXAJgLQAKgLASAAQAKAAAHADQAGADAFAFQADAFABAGQACAHAAAJIgBADIAAAFIgBAEIgBAEIgqAAQAAAIAFAEQADAEAIAAIAOgBIAHAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABIAAAKIgMAFQgHABgMAAQgJAAgHgCgAgGgVQgCAEgBAKIAVAAQgBgKgCgEQgCgEgFAAQgGAAgCAEg");
	this.shape_54.setTransform(71.8,17.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgBA2QgFgBgEgEQgEgDgCgGQgCgGAAgJIAAglIgDAAQgHAAAAgFIAAgQIALAAIACgWIASAAQAHAAAAAGIAAAQIAMAAQAHAAAAAFIAAAQIgTAAIAAAlQAAAJAIAAIAEAAQAHAAAAAGIAAANIgJACIgKABQgGAAgFgCg");
	this.shape_55.setTransform(64.6,16.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgRAsQgHgDgFgFQgFgHgCgIQgCgJAAgMQAAgLACgJQACgJAFgFQAFgGAHgCQAIgDAJAAQAKAAAIADQAHACAFAGQAFAFACAJQACAJAAALQAAAMgCAJQgCAIgFAHQgFAFgHADQgIACgKAAQgJAAgIgCgAgEgXQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAABQgBACgBAFIAAAMIAAANIACAIQAAABABAAQAAABABAAQAAAAAAABQABAAAAAAIAEABIAFgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAgBIACgIIAAgNIAAgMQgBgFgBgCQAAgBgBgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgBIgEABg");
	this.shape_56.setTransform(57.3,17.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgTAsQgGAAAAgGIAAhRIAQAAIAGABQABACABAEIABAEQADgFAGgDQAFgDAGAAQAGAAAAAFIAAAUIgCAAIgCAAIgLABQgFABgEACIAAA6g");
	this.shape_57.setTransform(50.2,17.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AggA8QgGAAAAgGIAAhtIATgDIARgBQAKAAAIACQAIACAFAFQAFAFADAHQACAHAAALQAAAUgJAKQgJAJgRAAIgHAAIgGgBIAAAqgAgJglIAAAjIADAAIAEABIAFgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQACgCABgEIABgJIgBgIIgCgGQgBAAAAgBQAAAAgBAAQAAgBgBAAQgBAAAAAAIgFgBIgEAAIgEAAg");
	this.shape_58.setTransform(42.7,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy4, new cjs.Rectangle(0,2.8,245.3,67.1), null);


(lib.copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMArQgHgDgFgFQgEgFgDgJQgCgJAAgMQAAgLACgJQADgIAEgGQAEgFAHgDQAHgCAIAAQAJAAAHADQAGACAEAFQADAFACAGIABAOIgBAJIgBAGIgxAAIACAMQABAFADADQADADAFABQADABAIAAIAMAAIAHgBQAEAAAAAEIAAAHQgEACgHABQgHABgJAAQgJAAgHgCgAgGgeQgEACgCAEQgDADgBAFIgBALIAjAAIAAgCIAAgCQAAgLgDgGQgDgFgKAAQgFAAgDABg");
	this.shape.setTransform(196.7,55.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAqQgHgDgEgGQgEgFgCgJQgCgIAAgLQAAgXAJgKQAIgLAQAAIAMABIAIACIADACIAAADIAAAIIgKgCIgJAAQgFAAgEABQgDACgDADQgCAEgBAGQgCAGAAAIQAAAJACAGQABAGADAEQACADADACIAJABIAJgBIAHAAQAEAAAAAEIAAAHQgEACgGABQgGABgHAAQgJAAgGgDg");
	this.shape_1.setTransform(189.4,55.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVAsIgDgBIgBgDIAAg0QAAgJgEgEQgDgEgIAAQgFAAgFADQgFADgDADIAABAIgNAAQgEAAAAgEIAAhRIAKAAIADABIACADIAAAFQALgLAPAAQAOAAAGAIQAGAIAAANIAAA6g");
	this.shape_2.setTransform(181.6,55.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAmQgHgIAAgNQAAgHADgGQACgEAFgDQAEgEAGAAQAGgCAHAAIARAAIAAgFQAAgJgFgEQgEgDgKAAIgOABIgHAAIgEgBIgBgCIAAgIIAOgCQAHgCAHAAQAKAAAGADQAHACAEADQAEAEABAGQACAFAAAHIAAA5IgLAAIgDgBIgBgCIgBgGQgEAEgGAEQgHADgIAAQgNAAgGgHgAgIAEQgEABgCABIgDAFIAAAGQAAAIADAEQAEADAIAAQAGAAAFgCIAIgHIAAgVIgRAAQgFAAgDACg");
	this.shape_3.setTransform(173.2,55.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAqQgHgDgEgGQgEgFgCgJQgCgIAAgLQAAgXAJgKQAIgLAQAAIAMABIAIACIADACIAAADIAAAIIgKgCIgJAAQgFAAgEABQgDACgDADQgCAEgBAGQgCAGAAAIQAAAJACAGQABAGADAEQACADADACIAJABIAJgBIAHAAQAEAAAAAEIAAAHQgEACgGABQgGABgHAAQgJAAgGgDg");
	this.shape_4.setTransform(166,55.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFA8QgDgCgCgDQgCgDgBgFIgBgLIAAhgIANAAIACABIABACIAABhQAAAFACACIAFABIAEABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIAAAIIgGABIgGAAQgFAAgDgBg");
	this.shape_5.setTransform(160.8,53.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaAmQgHgIAAgNQAAgHADgGQACgEAFgDQAEgEAGAAQAGgCAHAAIARAAIAAgFQAAgJgFgEQgEgDgKAAIgOABIgHAAIgEgBIgBgCIAAgIIAOgCQAHgCAHAAQAKAAAGADQAHACAEADQAEAEABAGQACAFAAAHIAAA5IgLAAIgDgBIgBgCIgBgGQgEAEgGAEQgHADgIAAQgNAAgGgHgAgIAEQgEABgCABIgDAFIAAAGQAAAIADAEQAEADAIAAQAGAAAFgCIAIgHIAAgVIgRAAQgFAAgDACg");
	this.shape_6.setTransform(154.3,55.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbAiQgIgLAAgXQAAgXAIgKQAJgLASAAQATAAAJALQAIAKAAAXQAAAXgIALQgJALgTAAQgSAAgJgLgAgIgdQgDABgDAEQgCAEgBAGQgBAGAAAIQAAAJABAGQABAHACADQADAEADABQAEACAEAAQAFAAAEgCQADgBADgEQACgDABgHQABgGAAgJQAAgIgBgGQgBgGgCgEQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_7.setTransform(143.1,55.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIA7IgHgBIgHgBIgEgCQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIAAgDIAAgHIAMABIAMABQAKAAAGgDQAEgEAAgJIAAgKIgKAFQgEACgGAAQgKAAgFgDQgGgDgDgFQgDgHgCgHIgBgQQAAgMADgJQACgIAFgFQAFgFAHgCQAJgCAJAAIAOABIAMABIAGABQAAABAAAAQAAAAABABQAAAAAAABQAAABAAAAIAAAIIgHAAIABAVIAAAVIAAAdQAAAPgIAIQgJAIgQAAIgGAAgAgGgsQgFABgDAEQgCADgBAGQgCAGAAAJIABAOQABAEACAEQADADADABQADACAEAAQAFAAAEgCIAHgEIAAg0IgFAAIgGAAQgEAAgFABg");
	this.shape_8.setTransform(134.8,56.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAVAsIgDgBIgBgDIAAg0QAAgJgEgEQgDgEgIAAQgFAAgFADQgFADgDADIAABAIgNAAQgEAAAAgEIAAhRIAKAAIADABIACADIAAAFQALgLAPAAQAOAAAGAIQAGAIAAANIAAA6g");
	this.shape_9.setTransform(126.2,55.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbAiQgIgLAAgXQAAgXAIgKQAJgLASAAQATAAAJALQAIAKAAAXQAAAXgIALQgJALgTAAQgSAAgJgLgAgIgdQgDABgDAEQgCAEgBAGQgBAGAAAIQAAAJABAGQABAHACADQADAEADABQAEACAEAAQAFAAAEgCQADgBADgEQACgDABgHQABgGAAgJQAAgIgBgGQgBgGgCgEQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_10.setTransform(117.6,55.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFA8QgDgCgCgDQgCgDgBgFIgBgLIAAhgIANAAIACABIABACIAABhQAAAFACACIAFABIAEABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIAAAIIgGABIgGAAQgFAAgDgBg");
	this.shape_11.setTransform(111.6,53.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMArQgHgDgFgFQgEgFgDgJQgCgJAAgMQAAgLACgJQADgIAEgGQAEgFAHgDQAHgCAIAAQAJAAAHADQAGACAEAFQADAFACAGIABAOIgBAJIgBAGIgxAAIACAMQABAFADADQADADAFABQADABAIAAIAMAAIAHgBQAEAAAAAEIAAAHQgEACgHABQgHABgJAAQgJAAgHgCgAgGgeQgEACgCAEQgDADgBAFIgBALIAjAAIAAgCIAAgCQAAgLgDgGQgDgFgKAAQgFAAgDABg");
	this.shape_12.setTransform(102.2,55.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbAyQgHgLAAgVQAAgYAJgKQAIgLARAAIALABIAHADIAAgmIANAAIADABIABADIAAB1IgKAAIgEgBIgBgDIgBgFQgEAEgGADQgGAEgIAAQgPAAgHgMgAgGgMQgEACgCADQgDAEgBAFIgBAPQAAAQAEAHQAEAIAJAAQAGAAAFgDIAHgFIAAgzIgHgCIgIgBQgFAAgEACg");
	this.shape_13.setTransform(93.9,53.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMArQgHgDgFgFQgEgFgDgJQgCgJAAgMQAAgLACgJQADgIAEgGQAEgFAHgDQAHgCAIAAQAJAAAHADQAGACAEAFQADAFACAGIABAOIgBAJIgBAGIgxAAIACAMQABAFADADQADADAFABQADABAIAAIAMAAIAHgBQAEAAAAAEIAAAHQgEACgHABQgHABgJAAQgJAAgHgCgAgGgeQgEACgCAEQgDADgBAFIgBALIAjAAIAAgCIAAgCQAAgLgDgGQgDgFgKAAQgFAAgDABg");
	this.shape_14.setTransform(82.7,55.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAVAsIgDgBIgBgDIAAg0QAAgJgEgEQgDgEgIAAQgFAAgFADQgFADgDADIAABAIgNAAQgEAAAAgEIAAhRIAKAAIADABIACADIAAAFQALgLAPAAQAOAAAGAIQAGAIAAANIAAA6g");
	this.shape_15.setTransform(74.4,55.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgbAiQgIgLAAgXQAAgXAIgKQAJgLASAAQATAAAJALQAIAKAAAXQAAAXgIALQgJALgTAAQgSAAgJgLgAgIgdQgDABgDAEQgCAEgBAGQgBAGAAAIQAAAJABAGQABAHACADQADAEADABQAEACAEAAQAFAAAEgCQADgBADgEQACgDABgHQABgGAAgJQAAgIgBgGQgBgGgCgEQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_16.setTransform(65.9,55.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgKA+QgEAAAAgEIAAhEIgGAAQgEAAAAgEIAAgKIAKAAIAAgMQAAgMAFgGQAGgHAMAAIAGAAIAHACIACACIABADIAAAIIgGgBIgGAAIgGABIgDACQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAIgBAFIAAAMIARAAIADABIABAEIAAAJIgVAAIAABIg");
	this.shape_17.setTransform(59,53.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbAiQgIgLAAgXQAAgXAIgKQAJgLASAAQATAAAJALQAIAKAAAXQAAAXgIALQgJALgTAAQgSAAgJgLgAgIgdQgDABgDAEQgCAEgBAGQgBAGAAAIQAAAJABAGQABAHACADQADAEADABQAEACAEAAQAFAAAEgCQADgBADgEQACgDABgHQABgGAAgJQAAgIgBgGQgBgGgCgEQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_18.setTransform(51.9,55.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRArQgFAAAAgDIAAhSIALAAIADABIACADIAAAIQAEgFAFgEQAGgEAIABQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAAAIAAAMIgCAAIgCAAQgHAAgGACQgFACgFAFIAAA9g");
	this.shape_19.setTransform(45.2,55.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJAqQgHgDgEgGQgEgFgCgJQgCgIAAgLQAAgXAJgKQAIgLAQAAIAMABIAIACIADACIAAADIAAAIIgKgCIgJAAQgFAAgEABQgDACgDADQgCAEgBAGQgCAGAAAIQAAAJACAGQABAGADAEQACADADACIAJABIAJgBIAHAAQAEAAAAAEIAAAHQgEACgGABQgGABgHAAQgJAAgGgDg");
	this.shape_20.setTransform(38.8,55.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgEA7QgEAAAAgDIAAhSIAMAAQAFAAAAAEIAABRgAgHgqQgCgCAAgFQAAgFACgCQADgCAEgBQAGABACACQACACAAAFQAAAFgCACQgCADgGgBQgEABgDgDg");
	this.shape_21.setTransform(33.6,53.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAtAsQgEAAAAgEIAAg0QAAgJgEgEQgDgEgHAAQgHAAgEADIgIAGIAAAJIAAA3IgMAAIgDgBIgBgDIAAg0QAAgJgDgEQgEgEgHAAQgGAAgFADIgHAGIAABAIgNAAQgEAAAAgEIAAhRIAKAAIADABIACADIAAAFQAFgFAGgDQAHgDAIAAQAHAAAGADQAFACADAHQAEgEAHgEQAHgEAKAAQAMAAAHAHQAGAHAAAPIAAA6g");
	this.shape_22.setTransform(25.2,55.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgMArQgHgDgFgFQgEgFgDgJQgCgJAAgMQAAgLACgJQADgIAEgGQAEgFAHgDQAHgCAIAAQAJAAAHADQAGACAEAFQADAFACAGIABAOIgBAJIgBAGIgxAAIACAMQABAFADADQADADAFABQADABAIAAIAMAAIAHgBQAEAAAAAEIAAAHQgEACgHABQgHABgJAAQgJAAgHgCgAgGgeQgEACgCAEQgDADgBAFIgBALIAjAAIAAgCIAAgCQAAgLgDgGQgDgFgKAAQgFAAgDABg");
	this.shape_23.setTransform(11.5,55.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AggA7QgEAAAAgDIAAhwIARgCIARgBQAUAAAJAJQAKAJAAAVQAAALgDAGQgCAHgFAFQgFAEgGACQgIADgIAAIgIgBIgLgCIAAAsgAgTgrIAAAtIAJABIAJAAIAJAAQAEgBADgCQACgDABgFQACgFAAgHQAAgIgCgFQgBgEgDgDQgDgDgEAAIgIgBIgKAAIgIABg");
	this.shape_24.setTransform(0.2,53.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAlA7QgEAAAAgEIgBgWIAAgXIgBgXIAAgWIgYBAIgLAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgBgDIgWg8IgBAXIgBAYIAAAYIAAAXIgNAAQgEAAAAgEIABg3IADg6IASAAQADAAACAEIAWBBIAZhFIARAAIADABIABADIADA3IABA6g");
	this.shape_25.setTransform(-10.4,53.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKA6IgHgBIgHgBIgFgBIgDgCIgBgDIAAgJIAMACIAOABQAMgBAGgFQAFgFAAgLQAAgGgBgEQgBgEgEgCQgDgDgEgBIgKgBIgUAAIgCgBIgBgCIACg3IA2AAQAEAAABADIAAALIgrAAIgDAfIANAAQAJAAAHACQAHADAEAEQAFADACAHQACAGAAAJQAAAKgCAGQgEAHgEAFQgGAEgHACQgHACgIABIgGgBg");
	this.shape_26.setTransform(-20.5,54.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgMArQgHgDgFgFQgEgFgDgJQgCgJAAgMQAAgLACgJQADgIAEgGQAEgFAHgDQAHgCAIAAQAJAAAHADQAGACAEAFQADAFACAGIABAOIgBAJIgBAGIgxAAIACAMQABAFADADQADADAFABQADABAIAAIAMAAIAHgBQAEAAAAAEIAAAHQgEACgHABQgHABgJAAQgJAAgHgCgAgGgeQgEACgCAEQgDADgBAFIgBALIAjAAIAAgCIAAgCQAAgLgDgGQgDgFgKAAQgFAAgDABg");
	this.shape_27.setTransform(-32.1,55.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgbAyQgHgLAAgVQAAgYAJgKQAIgLARAAIALABIAHADIAAgmIANAAIADABIABADIAAB1IgKAAIgEgBIgBgDIgBgFQgEAEgGADQgGAEgIAAQgPAAgHgMgAgGgMQgEACgCADQgDAEgBAFIgBAPQAAAQAEAHQAEAIAJAAQAGAAAFgDIAHgFIAAgzIgHgCIgIgBQgFAAgEACg");
	this.shape_28.setTransform(-40.4,53.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAtAsQgEAAAAgEIAAg0QAAgJgEgEQgDgEgHAAQgHAAgEADIgIAGIAAAJIAAA3IgMAAIgDgBIgBgDIAAg0QAAgJgDgEQgEgEgHAAQgGAAgFADIgHAGIAABAIgNAAQgEAAAAgEIAAhRIAKAAIADABIACADIAAAFQAFgFAGgDQAHgDAIAAQAHAAAGADQAFACADAHQAEgEAHgEQAHgEAKAAQAMAAAHAHQAGAHAAAPIAAA6g");
	this.shape_29.setTransform(193.6,34.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgaAmQgHgIAAgNQAAgHADgGQACgEAFgDQAEgDAGgCQAGgBAHAAIARAAIAAgFQAAgJgFgEQgEgDgKAAIgOABIgHAAIgEAAIgBgDIAAgHIAOgDQAHgCAHAAQAKAAAGADQAHACAEADQAEAEABAGQACAFAAAHIAAA5IgLAAIgDgBIgBgCIgBgGQgEAEgGAEQgHADgIAAQgNAAgGgHgAgIAEQgEABgCABIgDAFIAAAGQAAAIADAEQAEADAIAAQAGAAAFgCIAIgHIAAgVIgRAAQgFAAgDACg");
	this.shape_30.setTransform(182.8,35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgJAqQgHgDgEgGQgEgFgCgJQgCgIAAgLQAAgXAJgKQAIgLAQAAIAMABIAIACIADACIAAADIAAAIIgKgCIgJAAQgFAAgEABQgDACgDADQgCAEgBAGQgCAGAAAIQAAAJACAGQABAGADAEQACADADACIAJABIAJgBIAHAAQAEAAAAAEIAAAHQgEACgGABQgGABgHAAQgJAAgGgDg");
	this.shape_31.setTransform(175.6,35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgTA8IgLgDIgEgCIAAgEIAAhwIAMAAQAFAAAAAFIAAAkIAJgGQAGgBAGAAQAIgBAFADQAGACADAGQAEAGADAJQACAHAAAMQAAAMgCAIQgCAJgFAGQgFAFgHADQgHACgJAAQgKAAgHgCgAgKgMIgHAEIAAA2IAHACIAIAAIAIgBQAEgBADgDQACgEABgGQACgGgBgKIgBgPIgDgJQgCgEgEgBQgDgCgEAAQgGAAgEACg");
	this.shape_32.setTransform(168,33.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgMArQgHgDgFgFQgEgFgDgJQgCgJAAgMQAAgLACgJQADgIAEgGQAEgFAHgDQAHgCAIAAQAJAAAHADQAGACAEAFQADAFACAGIABAOIgBAJIgBAGIgxAAIACAMQABAFADADQADADAFABQADABAIAAIAMAAIAHgBQAEAAAAAEIAAAHQgEACgHABQgHABgJAAQgJAAgHgCgAgGgeQgEACgCAEQgDADgBAFIgBALIAjAAIAAgCIAAgCQAAgLgDgGQgDgFgKAAQgFAAgDABg");
	this.shape_33.setTransform(159.6,35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAUArIgDgBIgBgCIgQg3IgPA6IgNAAIgDgBIgCgCIgHgVIgFgUIgFgVIgDgUIAOAAQADAAABAEIACAPIACARIAEAPIAEAQIARg8IAJAAIAEABIACADIAQA4IAEgQIAEgRIACgSIACgQIANAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAABQAAAAgBABIAAAEIgBAFQgCARgFASQgFATgHASg");
	this.shape_34.setTransform(149.8,35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgHAVQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIABgDIAGgQQgEgBgCgCQgBgCAAgEQAAgGACgCQADgDAFAAQAGAAADADQACACAAAGIgBAHIgEAIIgGAPg");
	this.shape_35.setTransform(139.1,39.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAcA7QgEAAgBgEIgCgOIgDgPIglAAIgDARIgCAQIgNAAQgEAAAAgEIACgLIAHgfIAHgbIAIgYIAIgUIAQAAIADABIABADIAIAUIAJAbIAIAfIAGAjgAgIgRIgIAeIAgAAIgIgeIgIgaIgIAag");
	this.shape_36.setTransform(132.7,33.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgEA7QgEAAAAgEIAAhxIANAAQAEAAAAAEIAABxg");
	this.shape_37.setTransform(126.3,33.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgSArQgDAAAAgDIAAhSIAKAAIADABIABADIABAIQAEgFAFgEQAGgDAHAAQABAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQABAAAAAAIAAAMIgDAAIgCAAQgHAAgGACQgFACgEAFIAAA9g");
	this.shape_38.setTransform(119,35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgbAiQgIgLAAgXQAAgXAIgKQAJgLASAAQATAAAJALQAIAKAAAXQAAAXgIALQgJALgTAAQgSAAgJgLgAgIgdQgDABgDAEQgCAEgBAGQgBAGAAAIQAAAJABAGQABAHACADQADAEADABQAEACAEAAQAFAAAEgCQADgBADgEQACgDABgHQABgGAAgJQAAgIgBgGQgBgGgCgEQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_39.setTransform(111.6,35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgbA6QgEAAAAgEIAAg4IAAgUIABgUIgDAAQgEAAAAgEIAAgIIAHgBIAIgBIAJgBIAKAAQAJAAAJACQAIACAEAFQAGAFACAIQADAJAAANQgBAWgHAKQgJALgQAAQgGAAgFgBIgIgEIAAAhgAgOANIAHADIAHABQAGAAADgCQAEgBACgEIAEgJIABgOIgBgPQgBgFgDgEQgDgEgFgBQgEgCgGAAIgGAAIgFAAg");
	this.shape_40.setTransform(103,36.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgbAiQgIgLAAgXQAAgXAIgKQAJgLASAAQATAAAJALQAIAKAAAXQAAAXgIALQgJALgTAAQgSAAgJgLgAgIgdQgDABgDAEQgCAEgBAGQgBAGAAAIQAAAJABAGQABAHACADQADAEADABQAEACAEAAQAFAAAEgCQADgBADgEQACgDABgHQABgGAAgJQAAgIgBgGQgBgGgCgEQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_41.setTransform(91.5,35);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgbAyQgHgLAAgVQAAgYAJgKQAIgLARAAIALABIAHADIAAgmIANAAIADABIABADIAAB1IgKAAIgEgBIgBgDIgBgFQgEAEgGADQgGAEgIAAQgPAAgHgMgAgGgMQgEACgCADQgDAEgBAFIgBAPQAAAQAEAHQAEAIAJAAQAGAAAFgDIAHgFIAAgzIgHgCIgIgBQgFAAgEACg");
	this.shape_42.setTransform(82.9,33.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgaAmQgHgIAAgNQAAgHADgGQACgEAFgDQAEgDAGgCQAGgBAHAAIARAAIAAgFQAAgJgFgEQgEgDgKAAIgOABIgHAAIgEAAIgBgDIAAgHIAOgDQAHgCAHAAQAKAAAGADQAHACAEADQAEAEABAGQACAFAAAHIAAA5IgLAAIgDgBIgBgCIgBgGQgEAEgGAEQgHADgIAAQgNAAgGgHgAgIAEQgEABgCABIgDAFIAAAGQAAAIADAEQAEADAIAAQAGAAAFgCIAIgHIAAgVIgRAAQgFAAgDACg");
	this.shape_43.setTransform(74.6,35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgbArQgEAAAAgEIAAgIIAJgOIAMgQIALgPIAMgPIgoAAQgDAAAAgEIAAgJIA4AAQAGAAgBAFIAAAHIgMAQIgMAPIgKAPIgJAOIAoAAIADABIABADIAAAJg");
	this.shape_44.setTransform(67.1,35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgDA7QgFAAAAgDIAAhSIAMAAQAEAAAAAEIAABRgAgHgqQgDgCAAgFQAAgFADgCQADgCAEgBQAFABADACQADACAAAFQAAAFgDACQgDADgFgBQgEABgDgDg");
	this.shape_45.setTransform(61.7,33.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAtAsQgEAAAAgEIAAg0QAAgJgEgEQgDgEgHAAQgHAAgEADIgIAGIAAAJIAAA3IgMAAIgDgBIgBgDIAAg0QAAgJgDgEQgEgEgHAAQgGAAgFADIgHAGIAABAIgNAAQgEAAAAgEIAAhRIAKAAIADABIACADIAAAFQAFgFAGgDQAHgDAIAAQAHAAAGADQAFACADAHQAEgEAHgEQAHgEAKAAQAMAAAHAHQAGAHAAAPIAAA6g");
	this.shape_46.setTransform(53.3,34.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgDA7QgFAAAAgDIAAhSIANAAQADAAAAAEIAABRgAgHgqQgCgCgBgFQABgFACgCQACgCAFgBQAFABADACQADACAAAFQAAAFgDACQgDADgFgBQgFABgCgDg");
	this.shape_47.setTransform(44.9,33.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgHAyQgGgGABgLIAAgzIgHAAQgEAAAAgEIAAgKIALAAIABgWIALAAQAEAAAAAEIAAASIAQAAIADABIABADIAAAKIgUAAIAAAyQAAAEABADQACADAEAAIAFgBIADAAQAFAAAAAEIAAAIIgHACIgIAAQgLAAgFgFg");
	this.shape_48.setTransform(40.3,34);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgbAiQgIgLAAgXQAAgXAIgKQAJgLASAAQATAAAJALQAIAKAAAXQAAAXgIALQgJALgTAAQgSAAgJgLgAgIgdQgDABgDAEQgCAEgBAGQgBAGAAAIQAAAJABAGQABAHACADQADAEADABQAEACAEAAQAFAAAEgCQADgBADgEQACgDABgHQABgGAAgJQAAgIgBgGQgBgGgCgEQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_49.setTransform(33.3,35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgbAiQgIgLAAgXQAAgXAIgKQAJgLASAAQATAAAJALQAIAKAAAXQAAAXgIALQgJALgTAAQgSAAgJgLgAgIgdQgDABgDAEQgCAEgBAGQgBAGAAAIQAAAJABAGQABAHACADQADAEADABQAEACAEAAQAFAAAEgCQADgBADgEQACgDABgHQABgGAAgJQAAgIgBgGQgBgGgCgEQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_50.setTransform(21.7,35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgDA7QgFAAAAgDIAAhSIAMAAQAEAAAAAEIAABRgAgHgqQgDgCAAgFQAAgFADgCQADgCAEgBQAFABADACQADACAAAFQAAAFgDACQgDADgFgBQgEABgDgDg");
	this.shape_51.setTransform(15.8,33.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgbAyQgHgLAAgVQAAgYAJgKQAIgLARAAIALABIAHADIAAgmIANAAIADABIABADIAAB1IgKAAIgEgBIgBgDIgBgFQgEAEgGADQgGAEgIAAQgPAAgHgMgAgGgMQgEACgCADQgDAEgBAFIgBAPQAAAQAEAHQAEAIAJAAQAGAAAFgDIAHgFIAAgzIgHgCIgIgBQgFAAgEACg");
	this.shape_52.setTransform(9.7,33.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgTAqQgFgCgDgEQgDgEgCgFQgBgGAAgGIAAg6IANAAIADABIABADIAAA0QAAAJAEAEQADAEAIAAQAGAAAEgDQAFgDADgDIAAhAIANAAQAEAAAAAEIAABRIgKAAIgDgBIgCgDIAAgFQgLALgPAAQgHAAgFgCg");
	this.shape_53.setTransform(1.3,35.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgaA3QgHgIAAgNQAAgHADgGQACgFAFgDQAEgDAGgCQAGgBAHAAIARAAIAAgFQAAgIgFgEQgEgDgKAAIgOABIgHAAIgEAAIgBgDIAAgHIAOgDQAHgCAHAAQAKAAAGADQAHACAEADQAEAEABAGQACAFAAAGIAAA6IgLAAIgDgBIgBgCIgBgGQgEAEgGAEQgHADgIAAQgNAAgGgHgAgIAVQgEABgCABIgDAFIAAAGQAAAIADAEQAEADAIAAQAGAAAFgCIAIgHIAAgVIgRAAQgFAAgDACgAgEgkIgCgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAFgLIAFgKIAOAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIAAACIgCADIgOASg");
	this.shape_54.setTransform(-7.1,33.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAtAsQgEAAAAgEIAAg0QAAgJgEgEQgDgEgHAAQgHAAgEADIgIAGIAAAJIAAA3IgMAAIgDgBIgBgDIAAg0QAAgJgDgEQgEgEgHAAQgGAAgFADIgHAGIAABAIgNAAQgEAAAAgEIAAhRIAKAAIADABIACADIAAAFQAFgFAGgDQAHgDAIAAQAHAAAGADQAFACADAHQAEgEAHgEQAHgEAKAAQAMAAAHAHQAGAHAAAPIAAA6g");
	this.shape_55.setTransform(-20.7,34.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgbAiQgIgLAAgXQAAgXAIgKQAJgLASAAQATAAAJALQAIAKAAAXQAAAXgIALQgJALgTAAQgSAAgJgLgAgIgdQgDABgDAEQgCAEgBAGQgBAGAAAIQAAAJABAGQABAHACADQADAEADABQAEACAEAAQAFAAAEgCQADgBADgEQACgDABgHQABgGAAgJQAAgIgBgGQgBgGgCgEQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_56.setTransform(-31.6,35);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgLA5QgIgDgFgIQgFgHgCgLQgDgMAAgQQAAgPADgMQACgMAFgHQAFgHAIgDQAJgEAKAAIANABIAKADIACACIABADIAAAIIgLgBIgNAAQgHAAgFACQgEACgEAFQgDAFgBAJQgCAIAAANQAAANACAJQABAJAEAFQAEAFAEACQAEACAHAAIANgBIAIgBQAEAAAAAFIAAAIIgMADQgGACgKAAQgKAAgIgEg");
	this.shape_57.setTransform(-39.8,33.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgRAsQgHgDgFgFQgFgHgCgIQgCgJAAgMQAAgLACgJQACgJAFgFQAFgGAHgCQAIgDAJAAQAKAAAIADQAHACAFAGQAFAFACAJQACAJAAALQAAAMgCAJQgCAIgFAHQgFAFgHADQgIACgKAAQgJAAgIgCgAgEgXQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQgBADgBAFIAAAMIAAANIACAIQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAIAEABIAFgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAABgBIACgIIAAgNIAAgMQgBgFgBgDQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgBIgEABg");
	this.shape_58.setTransform(180.4,14.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgdA3QgGgIAAgNQAAgJACgGQADgFAFgDQAFgDAGAAIAOgBIAJAAIAAgFQAAgFgEgCIgLgBIgMAAIgHABQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBIgBgDIAAgNIANgDQAIgCAKAAQATAAAJAIQAJAJAAAOIAAA6IgRAAIgDAAIgCgBIgCgDIgBgDIgBgCIgJAGQgFAEgHAAQgNAAgGgHgAgJAaQgDACAAAEQAAAGADABQACACAGAAQAFAAAFgDIAAgPIgKAAQgGAAgCADgAAFgkQgDgBgCgDIgFgEIgDgBQgBAAAAAAQgBAAgBAAQAAABAAAAQgBAAAAABIgBAHIgKAAIgDgBIgBgEIABgIIADgGQACgDAEgCQADgBAFAAIAGABIAFADIAGAEIADACQABgBAAAAQABAAABAAQAAAAAAgBQABAAAAgBIABgHIAKAAIADABIABADIgBAJQgBAEgCACQgCADgEACQgDABgFAAIgHAAg");
	this.shape_59.setTransform(171.8,12.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgCA/IgEAAIgDgCIAAgDIAAgGIADAAIAGAAIADgBIABgCIAAgBIgBgDIgEgCIgBAAIgDgBIgBgCIABgDIABgEIACgEQgPgDgGgLQgHgLAAgUQAAgYAJgLQAIgLASAAIAMABIAJACQADACABACIABAFIAAALIgLAAIgHgBIgIABQgDACgBADQgBACAAAEIgBAMIABALQAAAFABACQABACADABIAGABIADAAIADAAIAEAAIACAAIAGABQACACAAADIAAALIgJAEQgFACgIAAIgCAHIACAAQAHACADACQADAEAAAEIgBAGQgBACgCACIgGAEIgJABIgFAAg");
	this.shape_60.setTransform(164.2,16.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgdAmQgGgHgBgOQAAgJADgGQADgDAFgDQAFgEAHAAIAMgBIAKAAIAAgFQAAgFgEgCIgLgBIgMAAIgHABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAIgCgEIAAgMIANgEQAIgBAKgBQATAAAIAJQAKAIgBAQIAAA4IgQAAIgDAAIgCgBIgBgCIgCgEIgBgCIgJAHQgFAEgHgBQgMAAgHgHgAgJAJQgDADABAEQgBAFADACQADACAFAAQAFAAAEgDIAAgPIgJAAQgGgBgCADg");
	this.shape_61.setTransform(156.3,14.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgkAPIAAg7IAWAAQAGAAAAAFIAAAzQAAAEACADQACACAEAAIAEgBIAFgCIAAg+IAWAAQAGAAABAFIAABSIgRAAIgGgBQgBgBgBgFIgBgDQgGAGgGAEQgFACgHAAQgYAAAAgeg");
	this.shape_62.setTransform(147.8,14.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgBA2QgFgBgEgEQgEgDgCgGQgCgGAAgJIAAglIgDAAQgHAAAAgFIAAgQIALAAIACgWIASAAQAHAAAAAGIAAAQIAMAAQAHAAAAAFIAAAQIgTAAIAAAlQAAAJAIAAIAEAAQAHAAAAAGIAAANIgJACIgKABQgGAAgFgCg");
	this.shape_63.setTransform(140.2,13.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgHA9QgGABAAgHIAAhRIAVAAQAGAAAAAGIAABRgAgLgmQgEgDAAgGQAAgIAEgCQADgDAIgBQAJABADADQAEACAAAIQAAAGgEADQgDADgJAAQgIAAgDgDg");
	this.shape_64.setTransform(135.1,12.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgPAtIgLgDQgDgBgBgCIgBgFIAAgLIAOABIAMAAIAJgBQACgBABgEIgBgDIgCgCIgEgCIgEgBIgNgEQgFgCgEgDQgDgBgBgFQgCgEAAgHQAAgJADgGQACgFAEgEQAEgDAHgBQAGgBAGAAQAKAAAFABIAJADIAEADQACABAAAEIAAALIgQAAIgJgBIgHABQgDABAAAEQAAADADABIAHADIAMAEQAGACADADQAEACACAEQABAFAAAHQAAAIgCAGQgDAGgEADQgEAEgHABIgNABIgPgBg");
	this.shape_65.setTransform(129.4,14.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgTAsQgGAAAAgGIAAhRIAQAAIAGABQABACABAEIABAEQADgFAGgDQAFgDAGAAQAGAAAAAFIAAAUIgCAAIgCAAIgLABQgFABgEACIAAA6g");
	this.shape_66.setTransform(120.1,14.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgNAsQgHgDgGgFQgEgGgCgJQgDgJAAgMQAAgXAJgLQAKgLASAAQAKAAAHADQAGACAFAGQADAFABAGQACAIAAAIIgBADIAAAFIgBAEIgBAEIgqAAQAAAIAFAEQADADAIAAIAOAAIAHAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABIAAAKIgMAFQgHABgMAAQgJAAgHgCgAgGgVQgCAEgBALIAVAAQgBgLgCgEQgCgEgFAAQgGAAgCAEg");
	this.shape_67.setTransform(112.8,14.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgkAPIAAg7IAWAAQAGAAAAAFIAAAzQAAAEACADQACACAEAAIAEgBIAFgCIAAg+IAWAAQAGAAABAFIAABSIgRAAIgFgBQgCgBgBgFIgBgDQgGAGgGAEQgFACgHAAQgYAAAAgeg");
	this.shape_68.setTransform(104.3,14.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AANA7QgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgcIgHAFQgEABgGAAQgOAAgIgKQgGgLAAgWQAAgNACgJQACgJAFgFQAFgGAIgCQAJgCALAAIAOABIAMABIAFABIADABIADADIABAEIAAAMIgIAAIACASIAAARIAAA7gAgEgjQgEABgBACQgBADAAAEIgBALIABANQAAAEABACQABADACABIAGABQADAAADgCIAAgsIgCAAIgDgBQgDAAgCACg");
	this.shape_69.setTransform(95.6,16);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgFA9QgEgCgDgDQgDgDgBgFQgCgGAAgIIAAhfIAVAAQAGAAAAAGIAABYIABAFQABABAAAAQAAAAABAAQAAABABAAQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIAAAFIAAAMIgHACIgIABIgJgBg");
	this.shape_70.setTransform(88.9,13);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgdAmQgHgHABgOQAAgJADgGQACgDAFgDQAFgEAGAAIANgBIAKAAIAAgFQAAgFgEgCIgKgBIgNAAIgHABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAIgBgEIAAgMIANgEQAIgBAKgBQATAAAJAJQAIAIABAQIAAA4IgRAAIgDAAIgCgBIgCgCIgBgEIgBgCIgJAHQgEAEgJgBQgMAAgGgHgAgJAJQgCADgBAEQABAFACACQACACAFAAQAGAAAFgDIAAgPIgKAAQgGgBgCADg");
	this.shape_71.setTransform(82,14.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AglAPIAAg7IAXAAQAGAAAAAFIAAAzQAAAEACADQABACAFAAIAFgBIAEgCIAAg+IAWAAQAHAAgBAFIAABSIgQAAIgFgBQgCgBgBgFIgBgDQgGAGgGAEQgFACgHAAQgZAAAAgeg");
	this.shape_72.setTransform(73.5,14.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AANA7QgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgcIgHAFQgEABgGAAQgPAAgGgKQgIgLABgWQAAgNACgJQACgJAFgFQAFgGAJgCQAIgCALAAIAOABIANABIAEABIAEABIACADIAAAEIAAAMIgHAAIABASIAAARIAAA7gAgEgjQgDABgCACQgBADgBAEIAAALIAAANQABAEABACQACADACABIAFABQADAAADgCIAAgsIgCAAIgCgBQgEAAgCACg");
	this.shape_73.setTransform(64.8,16);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAmAtQgHAAAAgGIAAgzQAAgEgBgCQgCgCgEAAIgFAAIgFADIAAA+IgVAAQgGAAAAgGIAAgzQAAgEgCgCQgBgCgFAAIgFAAIgEADIAAA+IgWAAQgHAAAAgGIAAhRIARAAIAFABIADAGIABADQAGgHAFgCQAGgDAIAAQAHAAAEADQAFACADAHQAFgGAGgDQAGgDAIAAQAYAAAAAeIAAA7g");
	this.shape_74.setTransform(50.8,14.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgOAsQgHgDgFgFQgFgGgCgJQgCgJAAgMQAAgXAJgLQAJgLATAAQALAAAGADQAGACAEAGQAEAFACAGQABAIAAAIIgBADIAAAFIgBAEIgBAEIgqAAQAAAIAEAEQAFADAIAAIAMAAIAIAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABIAAAKIgMAFQgIABgLAAQgJAAgIgCgAgGgVQgCAEgBALIAUAAQAAgLgCgEQgCgEgFAAQgGAAgCAEg");
	this.shape_75.setTransform(40.1,14.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgOAsQgGgDgFgFQgFgGgDgJQgCgJAAgMQAAgXAKgLQAJgLASAAQAKAAAHADQAHACADAGQAEAFACAGQABAIAAAIIAAADIgBAFIgBAEIgBAEIgpAAQAAAIADAEQAFADAIAAIAMAAIAIAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABIAAAKIgMAFQgHABgMAAQgJAAgIgCgAgGgVQgDAEABALIATAAQAAgLgBgEQgCgEgGAAQgGAAgCAEg");
	this.shape_76.setTransform(29.1,14.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgTAsQgGAAAAgGIAAhRIAQAAIAGABIACAGIABAEQADgFAGgDQAFgDAGAAQAGAAAAAFIAAAUIgCAAIgCAAIgLABQgFABgEACIAAA6g");
	this.shape_77.setTransform(22.2,14.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgRAsQgHgDgFgFQgFgHgCgIQgCgJAAgMQAAgLACgJQACgJAFgFQAFgGAHgCQAIgDAJAAQAKAAAIADQAHACAFAGQAFAFACAJQACAJAAALQAAAMgCAJQgCAIgFAHQgFAFgHADQgIACgKAAQgJAAgIgCgAgEgXQAAAAgBABQAAAAAAAAQgBABAAAAQAAABgBAAQgBADgBAFIAAAMIAAANIACAIQABABAAAAQAAABABAAQAAAAAAABQABAAAAAAIAEABIAFgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBIACgIIAAgNIAAgMQgBgFgBgDQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgFgBIgEABg");
	this.shape_78.setTransform(14.5,14.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgVA8QgHgCgEgCQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQgBgBAAgFIAAhtIAXAAQAFAAAAAGIAAAfIAIgDQAEgCAGAAQAFAAAGACQAFADAEAFQAFAGABAIQADAIAAAOQAAAMgDAIQgBAJgFAGQgFAGgIACQgHACgKAAQgLAAgJgCgAgJgHIAAAvIAHABIAFgBIADgDIACgHIABgNIgBgNIgCgHQgBgDgCgBIgFgBIgHABg");
	this.shape_79.setTransform(5.9,13);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgdAmQgGgHgBgOQAAgJAEgGQACgDAFgDQAFgEAHAAIAMgBIAKAAIAAgFQAAgFgEgCIgKgBIgNAAIgHABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAIgCgEIAAgMIANgEQAIgBAKgBQATAAAIAJQAJAIAAAQIAAA4IgQAAIgDAAIgCgBIgBgCIgCgEIgBgCIgJAHQgEAEgJgBQgLAAgHgHgAgJAJQgDADABAEQgBAFADACQADACAEAAQAGAAAEgDIAAgPIgJAAQgGgBgCADg");
	this.shape_80.setTransform(-2.9,14.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgFA9QgEgCgDgDQgDgDgBgFQgCgGAAgIIAAhfIAVAAQAGAAAAAGIAABYIABAFQAAABABAAQAAAAABAAQAAABABAAQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIAAAFIAAAMIgHACIgIABIgJgBg");
	this.shape_81.setTransform(-9.1,13);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgRAsQgHgDgFgFQgFgHgCgIQgCgJAAgMQAAgLACgJQACgJAFgFQAFgGAHgCQAIgDAJAAQAKAAAIADQAHACAFAGQAFAFACAJQACAJAAALQAAAMgCAJQgCAIgFAHQgFAFgHADQgIACgKAAQgJAAgIgCgAgEgXQAAAAgBABQAAAAAAAAQgBABAAAAQAAABgBAAQgBADgBAFIAAAMIAAANIACAIQABABAAAAQAAABABAAQAAAAAAABQABAAAAAAIAEABIAFgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBIACgIIAAgNIAAgMQgBgFgBgDQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgFgBIgEABg");
	this.shape_82.setTransform(-16.1,14.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgKA7QgIgEgFgHQgGgGgDgMQgDgMAAgSQAAgQADgMQACgMAGgGQAFgIAJgDQAIgDALAAIALABIAKADIAEADIABAGIAAAMIgLgBIgKAAQgGABgEABQgEABgBAFQgCADgBAIIAAARIABARQAAAHACAFQABAEAEACQADACAFgBIAKAAIAIAAQAGAAAAAGIAAAOQgGADgHABQgHABgKAAQgJAAgHgCg");
	this.shape_83.setTransform(-24.4,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy3, new cjs.Rectangle(-53.5,0,262.9,67.1), null);


(lib.copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFA8QgDgCgCgDQgCgDgBgFIgBgLIAAhgIANAAIACABIABACIAABhQAAAFACACIAFABIAEABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIAAAIIgGABIgGAAQgFAAgDgBg");
	this.shape.setTransform(162.9,53.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAmQgHgIAAgNQAAgHADgGQACgEAFgDQAEgEAGAAQAGgCAHAAIARAAIAAgFQAAgJgFgEQgEgDgKAAIgOABIgHAAIgEgBIgBgCIAAgIIAOgCQAHgCAHAAQAKAAAGADQAHACAEADQAEAEABAGQACAFAAAHIAAA5IgLAAIgDgBIgBgCIgBgGQgEAEgGAEQgHADgIAAQgNAAgGgHgAgIAEQgEABgCABIgDAFIAAAGQAAAIADAEQAEADAIAAQAGAAAFgCIAIgHIAAgVIgRAAQgFAAgDACg");
	this.shape_1.setTransform(156.3,55.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVAsIgDgBIgBgDIAAg0QAAgJgEgEQgDgEgIAAQgFAAgFADQgFADgDADIAABAIgNAAQgEAAAAgEIAAhRIAKAAIADABIACADIAAAFQALgLAPAAQAOAAAGAIQAGAIAAANIAAA6g");
	this.shape_2.setTransform(148.1,55.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbAiQgIgLAAgXQAAgXAIgKQAJgLASAAQATAAAJALQAIAKAAAXQAAAXgIALQgJALgTAAQgSAAgJgLgAgIgdQgDABgDAEQgCAEgBAGQgBAGAAAIQAAAJABAGQABAHACADQADAEADABQAEACAEAAQAFAAAEgCQADgBADgEQACgDABgHQABgGAAgJQAAgIgBgGQgBgGgCgEQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_3.setTransform(139.5,55.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEA7QgEAAAAgDIAAhSIAMAAQAFAAAAAEIAABRgAgHgqQgCgCAAgFQAAgFACgCQADgCAEgBQAGABACACQACACABAFQgBAFgCACQgCADgGgBQgEABgDgDg");
	this.shape_4.setTransform(133.4,53.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAqQgHgDgEgGQgEgFgCgJQgCgIAAgLQAAgXAJgKQAIgLAQAAIAMABIAIACIADACIAAADIAAAIIgKgCIgJAAQgFAAgEABQgDACgDADQgCAEgBAGQgCAGAAAIQAAAJACAGQABAGADAEQACADADACIAJABIAJgBIAHAAQAEAAAAAEIAAAHQgEACgGABQgGABgHAAQgJAAgGgDg");
	this.shape_5.setTransform(128.3,55.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbA6QgEAAAAgEIAAg4IAAgUIABgUIgEAAQgDAAAAgEIAAgIIAHgBIAIgBIAJgBIAKAAQAJAAAJACQAHACAFAFQAFAFADAIQACAJAAANQAAAWgIAKQgHALgQAAQgHAAgFgBIgIgEIAAAhgAgOANIAHADIAHABQAGAAADgCQAEgBADgEIADgJIABgOIgBgPQgBgFgDgEQgDgEgFgBQgEgCgGAAIgGAAIgFAAg");
	this.shape_6.setTransform(120.3,56.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbAiQgIgLAAgXQAAgXAIgKQAJgLASAAQATAAAJALQAIAKAAAXQAAAXgIALQgJALgTAAQgSAAgJgLgAgIgdQgDABgDAEQgCAEgBAGQgBAGAAAIQAAAJABAGQABAHACADQADAEADABQAEACAEAAQAFAAAEgCQADgBADgEQACgDABgHQABgGAAgJQAAgIgBgGQgBgGgCgEQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_7.setTransform(111.8,55.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNA5QgJgDgFgIQgGgHgDgLQgCgMAAgQQAAgQACgMQADgLAGgHQAFgHAJgEQAJgDALAAQAIAAAIACIAJACIACACIABAEIAAAHIgMgBIgNAAQgJAAgEABQgHACgDAFQgDAFgCAJQgCAIAAAOQAAAOACAJQACAJAEAFQAEAFAFACQAFACAHAAIAIgBIAGAAIAAgiIgPAAIgCgBIgBgDIAAgKIAeAAQAEAAAAADIAAA4IgOADQgHACgKAAQgMAAgJgEg");
	this.shape_8.setTransform(99.6,53.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAPA5QgEAAAAgDIAAgZIgsAAQgFAAAAgEIAAgKQADgJAFgKQAFgKAFgKIAOgSQAGgIAHgGIAQAAQAFAAAAADIAABEIAGAAQAEAAABAEIAAAKIgLAAIAAAcgAAAgdQgFAHgFAHIgIAPIgFAPIAiAAIAAg5IgLANg");
	this.shape_9.setTransform(90.5,54);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAtAsQgEAAAAgEIAAg0QAAgJgEgEQgDgEgHAAQgHAAgEADIgIAGIAAAJIAAA3IgMAAIgDgBIgBgDIAAg0QAAgJgDgEQgEgEgHAAQgGAAgFADIgHAGIAABAIgNAAQgEAAAAgEIAAhRIAKAAIADABIACADIAAAFQAFgFAGgDQAHgDAIAAQAHAAAGADQAFACADAHQAEgEAHgEQAHgEAKAAQAMAAAHAHQAGAHAAAPIAAA6g");
	this.shape_10.setTransform(76.3,55.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbAiQgIgLAAgXQAAgXAIgKQAJgLASAAQATAAAJALQAIAKAAAXQAAAXgIALQgJALgTAAQgSAAgJgLgAgIgdQgDABgDAEQgCAEgBAGQgBAGAAAIQAAAJABAGQABAHACADQADAEADABQAEACAEAAQAFAAAEgCQADgBADgEQACgDABgHQABgGAAgJQAAgIgBgGQgBgGgCgEQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_11.setTransform(65.2,55.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLA5QgIgDgFgIQgFgHgCgLQgDgMAAgQQAAgPADgMQACgMAFgHQAFgHAIgDQAJgEAKAAIANABIAKADIACACIABADIAAAIIgLgBIgNAAQgHAAgEACQgFACgEAFQgDAFgBAJQgCAIAAANQAAANACAJQABAJAEAFQAEAFAEACQAEACAHAAIANgBIAIgBQAEAAAAAFIAAAIIgMADQgGACgKAAQgKAAgIgEg");
	this.shape_12.setTransform(57,53.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgTAsQgGAAAAgGIAAhRIAQAAIAGABQABACABAEIABAEQADgFAGgDQAFgDAGAAQAGAAAAAFIAAAUIgCAAIgCAAIgLABQgFABgEACIAAA6g");
	this.shape_13.setTransform(157.6,34.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdAmQgGgHgBgOQAAgIADgGQADgFAFgCQAFgEAGAAIAOgBIAJAAIAAgFQAAgGgEgBIgLgBIgMAAIgHABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAIgCgEIAAgMIANgEQAIgBAKgBQATABAIAHQAKAJgBAQIAAA4IgQAAIgDAAIgCgBIgBgCIgCgEIgBgCIgJAHQgFAEgHgBQgMABgHgIgAgJAJQgCACAAAFQAAAFACACQADACAFAAQAFAAAEgDIAAgQIgJAAQgGABgCACg");
	this.shape_14.setTransform(149.9,34.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRA7IgLgDQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAgBAAIgBgFIAAgMIAMABIALAAQAIABAEgCQAEgBAAgGIAAgLIgHADQgEACgGAAQgOAAgHgJQgHgKAAgTQAAgMADgJQACgJAFgFQAFgFAIgCQAIgDAKAAIAOABIANACIAFAAIADACIACACIABAEIAAANIgIAAIACASIAAAQIAAAcQAAARgKAIQgJAIgRAAIgPgBgAgEgkQgDABgBACIgCAHIgBAJIABALIACAGQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAIAFABIADgBIADgBIAAgmIgCAAIgDAAQgDAAgCABg");
	this.shape_15.setTransform(141.5,36.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkAPIAAg7IAWAAQAGAAAAAGIAAAyQAAAEACADQACACAEAAIAEgBIAFgCIAAg+IAWAAQAGAAABAGIAABRIgRAAIgGgBQgBgBgBgFIgBgDQgGAGgGAEQgFACgHAAQgYAAAAgeg");
	this.shape_16.setTransform(132.5,35.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFA9QgEgCgDgDQgDgDgBgFQgCgGAAgIIAAhfIAVAAQAGAAAAAGIAABYIABAFQAAABABAAQAAAAABAAQAAABABAAQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIAAAFIAAAMIgHACIgIABIgJgBg");
	this.shape_17.setTransform(125.9,33.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAsQgGAAAAgGIAAhRIAQAAIAGABQABACABAEIABAEQADgFAGgDQAFgDAGAAQAGAAAAAFIAAAUIgCAAIgCAAIgLABQgFABgEACIAAA6g");
	this.shape_18.setTransform(117.4,34.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgOAsQgGgDgFgFQgGgGgBgJQgDgJAAgMQAAgXAKgLQAIgLATAAQALAAAGADQAHADADAFQAEAFACAGQABAHAAAJIAAADIgBAFIgBAEIgBAEIgpAAQAAAIADAEQAEAEAJAAIAMgBIAIAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABIAAAKIgMAFQgIABgLAAQgJAAgIgCgAgGgVQgCAEAAALIAUAAQgBgLgBgEQgCgEgGAAQgGAAgCAEg");
	this.shape_19.setTransform(110,35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgkAPIAAg7IAWAAQAGAAAAAGIAAAyQAAAEACADQABACAFAAIAFgBIAEgCIAAg+IAWAAQAHAAgBAGIAABRIgQAAIgFgBQgCgBgBgFIgBgDQgGAGgGAEQgFACgHAAQgZAAABgeg");
	this.shape_20.setTransform(101.4,35.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AANA7QgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgcIgHAFQgEABgGAAQgPAAgGgKQgIgLABgWQgBgNADgJQACgJAFgFQAFgGAIgCQAJgCALAAIAOABIANABIAEABIAEABIACADIABAEIAAAMIgIAAIABASIAAARIAAA7gAgEgjQgDABgCACQgBADgBAEIAAALIAAANQABAEABACQACADACABIAFABQADAAADgCIAAgsIgCAAIgCgBQgEAAgCACg");
	this.shape_21.setTransform(92.6,36.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFA9QgEgCgDgDQgDgDgBgFQgCgGAAgIIAAhfIAVAAQAGAAAAAGIAABYIABAFQAAABABAAQAAAAABAAQAAABABAAQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIAAAFIAAAMIgHACIgIABIgJgBg");
	this.shape_22.setTransform(85.8,33.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAmQgHgHABgOQAAgIADgGQACgFAFgCQAFgEAHAAIAMgBIAKAAIAAgFQAAgGgEgBIgKgBIgNAAIgHABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAIgBgEIAAgMIANgEQAIgBAKgBQATABAJAHQAIAJABAQIAAA4IgRAAIgDAAIgCgBIgCgCIgBgEIgBgCIgJAHQgEAEgJgBQgMABgGgIgAgJAJQgCACgBAFQABAFACACQACACAFAAQAGAAAFgDIAAgQIgKAAQgGABgCACg");
	this.shape_23.setTransform(78.9,34.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgkAPIAAg7IAWAAQAGAAAAAGIAAAyQAAAEACADQACACAEAAIAFgBIAEgCIAAg+IAWAAQAGAAAAAGIAABRIgQAAIgFgBQgCgBgBgFIgBgDQgGAGgGAEQgEACgIAAQgZAAABgeg");
	this.shape_24.setTransform(70.3,35.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AANA7QgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgcIgHAFQgEABgGAAQgPAAgGgKQgIgLABgWQgBgNADgJQACgJAFgFQAFgGAIgCQAJgCALAAIAOABIANABIAEABIADABIADADIABAEIAAAMIgIAAIABASIAAARIAAA7gAgEgjQgEABgBACQgBADgBAEIAAALIAAANQABAEABACQABADADABIAFABQADAAADgCIAAgsIgCAAIgDgBQgDAAgCACg");
	this.shape_25.setTransform(61.5,36.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgOAsQgGgDgFgFQgGgGgCgJQgCgJAAgMQAAgXAKgLQAIgLATAAQALAAAGADQAHACADAGQAEAFACAGQABAIAAAIIAAADIgBAFIgBAEIgBAEIgpAAQAAAIADAEQAEADAJAAIAMAAIAIAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABIAAAKIgMAFQgIABgLAAQgJAAgIgCgAgGgVQgCAEAAALIATAAQAAgLgBgEQgCgEgGAAQgGAAgCAEg");
	this.shape_26.setTransform(195.1,14.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgBA2QgFgBgEgEQgEgDgCgGQgCgGAAgJIAAglIgDAAQgHAAAAgFIAAgQIALAAIACgWIASAAQAHAAAAAGIAAAQIAMAAQAHAAAAAFIAAAQIgTAAIAAAlQAAAJAIAAIAEAAQAHAAAAAGIAAANIgJACIgKABQgGAAgFgCg");
	this.shape_27.setTransform(187.7,13.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAtQgGAAAAgGIAAgzQAAgEgCgCQgCgCgEAAIgEABIgFACIAAA+IgWAAQgGAAgBgGIAAhRIARAAIAFABQACACABAEIABADQAGgHAFgCQAGgDAHAAQAYAAAAAeIAAA7g");
	this.shape_28.setTransform(180.2,14.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgNAsQgHgDgGgFQgEgGgDgJQgCgJAAgMQAAgXAJgLQAJgLATAAQAKAAAHADQAGACAEAGQAEAFACAGQABAIAAAIIgBADIAAAFIgBAEIgBAEIgqAAQAAAIAFAEQADADAIAAIANAAIAIAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABIAAAKIgMAFQgHABgMAAQgJAAgHgCgAgGgVQgCAEgBALIAUAAQAAgLgCgEQgCgEgFAAQgGAAgCAEg");
	this.shape_29.setTransform(171.6,14.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAmAtQgHAAAAgGIAAgzQAAgEgBgCQgCgCgEAAIgFAAIgFADIAAA+IgVAAQgGAAAAgGIAAgzQAAgEgCgCQgBgCgFAAIgFAAIgEADIAAA+IgWAAQgHAAAAgGIAAhRIARAAIAFABQACACABAEIABADQAGgHAFgCQAGgDAIAAQAHAAAEADQAFACADAHQAFgGAGgDQAGgDAIAAQAYAAAAAeIAAA7g");
	this.shape_30.setTransform(160.8,14.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgdAmQgHgHAAgOQAAgJAEgGQACgDAFgDQAFgEAHAAIAMgBIAKAAIAAgFQAAgFgEgCIgKgBIgNAAIgHABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAIgBgEIAAgMIANgEQAIgBAKgBQATAAAIAJQAJAIAAAQIAAA4IgQAAIgDAAIgCgBIgBgCIgCgEIgBgCIgJAHQgEAEgJgBQgMAAgGgHgAgJAJQgCADgBAEQABAFACACQADACAEAAQAGAAAEgDIAAgPIgJAAQgGgBgCADg");
	this.shape_31.setTransform(149.8,14.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgVAkQgJgMAAgYQAAgXAJgLQAIgLASAAIAMABIAJACQADACABACIABAFIAAALIgLAAIgHgBIgIABQgDACgBADQgBACAAAEIgBALIABALQAAAFABADQABACADABIAGABIADAAIADAAIAEAAIACAAIAGABQACACAAADIAAALIgKAFQgGABgJAAQgSAAgJgKg");
	this.shape_32.setTransform(142.1,14.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHA9QgGABAAgHIAAhRIAVAAQAHAAAAAGIAABRgAgLgmQgEgDAAgGQAAgIAEgCQADgDAIgBQAJABADADQAEACAAAIQAAAGgEADQgDADgJAAQgIAAgDgDg");
	this.shape_33.setTransform(136.3,12.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgBA2QgFgBgEgEQgEgDgCgGQgCgGAAgJIAAglIgDAAQgHAAAAgFIAAgQIALAAIACgWIASAAQAHAAAAAGIAAAQIAMAAQAHAAAAAFIAAAQIgTAAIAAAlQAAAJAIAAIAEAAQAHAAAAAGIAAANIgJACIgKABQgGAAgFgCg");
	this.shape_34.setTransform(130.9,13.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgdAmQgHgHABgOQAAgJADgGQACgDAFgDQAFgEAGAAIAOgBIAJAAIAAgFQAAgFgEgCIgLgBIgMAAIgHABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBgBAAIgBgEIAAgMIANgEQAIgBAKgBQATAAAJAJQAIAIABAQIAAA4IgRAAIgDAAIgCgBIgCgCIgBgEIgBgCIgJAHQgEAEgJgBQgLAAgHgHgAgJAJQgDADAAAEQAAAFADACQACACAFAAQAGAAAFgDIAAgPIgKAAQgGgBgCADg");
	this.shape_35.setTransform(123.5,14.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgTAsQgGAAAAgGIAAhRIAQAAIAGABQABACABAEIABAEQADgFAGgDQAFgDAGAAQAGAAAAAFIAAAUIgCAAIgCAAIgLABQgFABgEACIAAA6g");
	this.shape_36.setTransform(116.5,14.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgbA7QgHAAAAgGIAAg1IABgRIABgSIgDAAQgFAAAAgFIAAgOIAGgBIAJgCIALgBIAMAAQALAAAIACQAJACAFAFQAFAFACAJQADAIAAANQAAANgDAIQgCAJgEAFQgEAGgFACQgFACgHAAQgFAAgEgBIgHgFIAAAigAgFAIIAGACIAFgBQABgBAAAAQABAAAAgBQABAAAAgBQAAAAABgBQABgDAAgEIABgNIAAgKIgCgHQgCgCgCgBQgDgCgDAAIgDABIgCAAg");
	this.shape_37.setTransform(108.6,16);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgNAsQgIgDgEgFQgGgGgBgJQgDgJAAgMQAAgXAKgLQAIgLATAAQALAAAGADQAGACAFAGQADAFABAGQACAIAAAIIgBADIAAAFIgBAEIgBAEIgqAAQABAIAEAEQAEADAHAAIAOAAIAHAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABIAAAKIgMAFQgHABgMAAQgJAAgHgCgAgGgVQgDAEAAALIAVAAQAAgLgCgEQgDgEgFAAQgGAAgCAEg");
	this.shape_38.setTransform(97.2,14.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgUA7QgGgCgDgFQgEgGgCgIQgCgJAAgMQAAgYAIgKQAIgLARAAIAIABIAFABIAAgjIAXAAQAGAAAAAGIAABzIgQAAIgGgBIgDgGIgBgCQgEAEgFADQgFAEgHAAQgGAAgFgDgAgDgHIgDAFIgCAGIAAAKIAAAMIACAIIADAEIADABIAGgBIADgCIAAgrIgDgBIgDAAIgGABg");
	this.shape_39.setTransform(88.5,13);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgOAsQgGgDgFgFQgGgGgCgJQgCgJAAgMQAAgXAKgLQAIgLATAAQALAAAGADQAHACADAGQAEAFACAGQABAIAAAIIAAADIgBAFIgBAEIgBAEIgpAAQAAAIADAEQAEADAJAAIAMAAIAIAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABIAAAKIgMAFQgIABgLAAQgJAAgIgCgAgGgVQgCAEAAALIATAAQAAgLgBgEQgCgEgGAAQgGAAgCAEg");
	this.shape_40.setTransform(77.2,14.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAPA9QgGAAAAgGIAAg0QAAgDgCgCQgCgCgEAAIgEABIgFACIAAA+IgWAAQgGAAgBgGIAAhzIAXAAQAGAAAAAGIAAAkQAIgKANAAQAYAAAAAdIAAA8g");
	this.shape_41.setTransform(68.6,12.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgFA9QgEgCgDgDQgDgDgBgFQgCgGAAgIIAAhfIAVAAQAGAAAAAGIAABYIABAFQAAABABAAQAAAAABAAQAAABABAAQABAAABAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABIAAAFIAAAMIgHACIgIABIgJgBg");
	this.shape_42.setTransform(61.9,13);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgdAmQgGgHgBgOQAAgJADgGQADgDAFgDQAFgEAGAAIAOgBIAJAAIAAgFQAAgFgEgCIgLgBIgMAAIgHABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAIgCgEIAAgMIANgEQAIgBAKgBQATAAAIAJQAKAIgBAQIAAA4IgQAAIgDAAIgCgBIgBgCIgCgEIgBgCIgJAHQgFAEgHgBQgMAAgHgHgAgJAJQgCADAAAEQAAAFACACQADACAFAAQAFAAAEgDIAAgPIgJAAQgGgBgCADg");
	this.shape_43.setTransform(55,14.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgVA8QgHgCgEgCQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQgCgBAAgFIAAhtIAXAAQAFAAABAGIAAAfIAHgDQAEgCAGAAQAGAAAFACQAFADAEAFQAEAGADAIQACAIAAAOQAAAMgCAIQgDAJgEAGQgFAGgIACQgHACgKAAQgLAAgJgCgAgIgHIAAAvIAGABIAFgBIADgDIADgHIAAgNIAAgNIgDgHQgBgDgCgBIgFgBIgGABg");
	this.shape_44.setTransform(46.5,13);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgdAmQgGgHgBgOQAAgJAEgGQACgDAFgDQAFgEAHAAIAMgBIAKAAIAAgFQAAgFgEgCIgKgBIgNAAIgHABQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAIgCgEIAAgMIANgEQAIgBAKgBQATAAAIAJQAJAIAAAQIAAA4IgQAAIgDAAIgCgBIgBgCIgCgEIgBgCIgJAHQgEAEgIgBQgMAAgHgHgAgJAJQgDADABAEQgBAFADACQADACAEAAQAGAAAEgDIAAgPIgJAAQgGgBgCADg");
	this.shape_45.setTransform(37.6,14.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgTAsQgGAAAAgGIAAhRIAQAAIAGABIACAGIABAEQADgFAGgDQAFgDAGAAQAGAAAAAFIAAAUIgCAAIgCAAIgLABQgFABgEACIAAA6g");
	this.shape_46.setTransform(30.6,14.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgHA7QgGAAgBgGIAAhXIgVAAQgGAAgBgFIAAgTIBPAAQAFAAAAAGIAAASIgbAAIAABdg");
	this.shape_47.setTransform(22.7,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy2, new cjs.Rectangle(0,0,217.1,67.1), null);


(lib.copy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHA7QgGAAAAgGIAAgmQgLgSgHgSQgHgSgFgTIAbAAQAEAAABACIACAGIAEASQACAKAFAOQAFgPADgNIAFgWIAXAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIgBADIAAACQgEAOgGAPQgHAQgKARIAAAsg");
	this.shape.setTransform(159,41.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaA7QgHAAAAgGIAAhvIAYAAQAGAAAAAGIAABWIAfAAQAGABAAAFIAAATg");
	this.shape_1.setTransform(151,41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbA7QgGAAgBgGIAAhvIA+AAQAHAAAAAGIAAASIgnAAIAAAXIAcAAQAGAAAAAGIAAARIgiAAIAAAvg");
	this.shape_2.setTransform(143.1,41.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATA7QgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgCgEIgIgSIgGgRIgHgQIgGgOIAABHIgVAAQgGAAAAgGIAAhvIAWAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAIADAFIAHAMIAGARIAIAQIAGAPIAAhDIAVAAQAHAAgBAGIAABvg");
	this.shape_3.setTransform(133.8,41.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRA7QgIgCgGgHQgGgGgDgMQgEgMAAgUQAAgTAEgMQADgMAGgGQAGgHAIgCQAIgCAJAAQAKAAAIACQAJACAFAHQAGAGADAMQAEAMgBATQABAUgEAMQgDAMgGAGQgFAHgJACQgIACgKAAQgJAAgIgCgAgGgjQgDABgCAEQgBAEAAAIIgBASIABATQAAAIABAEQACAEADABQADACADAAQAEAAADgCQADgBACgEQABgEABgIIAAgTIAAgSQgBgIgBgEQgCgEgDgBQgDgCgEAAQgDAAgDACg");
	this.shape_4.setTransform(123.7,41.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNA7QgJgEgGgGQgGgIgDgLQgDgMAAgSQAAgRADgMQADgMAGgHQAGgGAJgEQAJgCAKAAQAMAAAGACIAHACIAEAEIABAFIAAANIgGgBIgHgBIgGAAIgFAAIgLACQgDAAgDAEQgDAEgBAGIgBAUIABAUQABAHACAEQACAEAEACQADABAFAAIADAAIADAAIAAgXIgFAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAgPIAfAAQAHAAAAAFIAAA5IgPADQgIACgLAAQgLAAgJgCg");
	this.shape_5.setTransform(113.9,41.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAUA7QgGAAgBgGIgCgXIgXAAIgCAQIgBANIgXAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQgBgCAAgEIAAgDIAAgDQAFgcAGgYQAFgbAJgZIAeAAQABAAABAAQAAAAABAAQAAABABAAQAAABABAAIACAEQAIAWAGAdQAGAcAFAggAgGgLIgEAUIASAAIgEgUIgEgZIgGAZg");
	this.shape_6.setTransform(104.6,41.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASA8IgFgBIgDgFIgHgUIgIgRIgHAAIAAArIgXAAQgHAAAAgGIAAhtIATgDIAUgBQATAAAKAJQAKAJAAAVIgBAIIgCAJQgCADgDAEQgDADgFADIAHAKIAHANIAEANIAFAOgAgMgEIAJAAIADAAIAFgDIACgFIABgJIAAgIIgDgFIgFgDIgFAAIgBAAIgDAAIgBAAIgCAAg");
	this.shape_7.setTransform(95.5,41.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjA8QgHAAAAgGIAAhtIATgDIASgBQALAAAJADQAJACAGAGQAGAHAEAMQADAMAAARQAAATgDAMQgDALgGAHQgHAGgJACQgJADgKAAgAgMgkIAABJIAGAAIAJgBQADgBADgEQACgEABgHIABgUIgBgTQgBgHgCgEQgCgEgDgBIgIgBIgFAAIgDAAg");
	this.shape_8.setTransform(85.5,41.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcA7QgHAAAAgGIAAhvIA/AAQAGAAAAAGIAAASIgoAAIAAAWIAdAAQAGAAAAAGIAAARIgjAAIAAAYIAkAAQAGABAAAFIAAASg");
	this.shape_9.setTransform(73.6,41.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHA7QgGAAAAgGIAAhWIgWAAQgHgBABgGIAAgSIBNAAQAHAAgBAGIAAATIgbAAIAABcg");
	this.shape_10.setTransform(64.7,41.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIA7QgGAAAAgGIAAhvIAWAAQAHAAAAAGIAABvg");
	this.shape_11.setTransform(58,41.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaA7QgHAAAAgGIAAhvIAYAAQAGAAAAAGIAABWIAfAAQAGABAAAFIAAATg");
	this.shape_12.setTransform(52,41.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdA7QgGAAAAgGIAAhvIA/AAQAGAAAAAGIAAASIgoAAIAAAWIAdAAQAGAAAAAGIAAARIgjAAIAAAYIAjAAQAHABAAAFIAAASg");
	this.shape_13.setTransform(43.9,41.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggA8QgGAAAAgGIAAhtIATgDIARgBQAKAAAIACQAIACAFAFQAFAFADAHQACAHAAALQAAAUgJAKQgJAJgRAAIgHAAIgGgBIAAAqgAgJglIAAAjIADAAIAEABIAFgBQABAAAAgBQABAAABAAQAAAAAAgBQABAAAAgBQACgCABgEIABgJIgBgIIgCgGQgBAAAAgBQAAAAgBAAQgBgBAAAAQgBAAAAAAIgFgBIgEAAIgEAAg");
	this.shape_14.setTransform(32.2,41.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AATA7QgGAAAAgGIAAgqIgYAAIAAAwIgYAAQgGAAAAgGIAAhvIAXAAQAHAAAAAGIAAAnIAYAAIAAgtIAXAAQAGAAAAAGIAABvg");
	this.shape_15.setTransform(22.5,41.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHAtIgHgBIgHgBIgEgBIgDgCIgBgEIAAgHIANABIAMABQALAAADgDQAEgDAAgGIAAgFIgDgDIgGgDIgIgDIgLgDQgFgBgDgCQgEgDgCgEQgCgEAAgHQAAgNAIgGQAIgGAOAAIAGAAIAHABIAGABIAEABIADACIAAADIAAAHIgNgBIgKAAQgIAAgFACQgDADAAAGIAAAEIAEAEIAGACIAHADIALADQAFABADACQAEADACAEQACAEAAAHQAAAIgCAFQgCAFgFADQgEADgGACQgGABgGAAIgHAAg");
	this.shape_16.setTransform(149,21.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgDA8QgFAAAAgFIAAhRIANAAQADAAAAAEIAABSgAgHgqQgCgCgBgFQABgFACgCQACgDAFAAQAFAAADADQACACAAAFQAAAFgCACQgDADgFAAQgFAAgCgDg");
	this.shape_17.setTransform(143.7,19.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgMArQgHgDgFgFQgEgFgDgJQgCgJAAgMQAAgLACgJQADgIAEgGQAEgFAHgDQAHgCAIAAQAJAAAHADQAGACAEAFQADAFACAGIABAOIgBAJIgBAGIgxAAIACAMQABAFADADQADADAFABQADABAIAAIAMAAIAHgBQAEAAAAAEIAAAHQgEACgHABQgHABgJAAQgJAAgHgCgAgGgeQgEACgCAEQgDADgBAFIgBALIAjAAIAAgCIAAgCQAAgLgDgGQgDgFgKAAQgFAAgDABg");
	this.shape_18.setTransform(137.9,21.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHAyQgFgGgBgLIAAgzIgGAAQgEAAAAgEIAAgKIAKAAIABgWIAMAAQADAAAAAEIAAASIARAAIADABIABADIAAAKIgVAAIAAAyQABAEABADQACADAEAAIAFgBIAEAAQAEAAAAAEIAAAIIgHACIgHAAQgLAAgGgFg");
	this.shape_19.setTransform(131.1,20.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgaA2QgHgHAAgMQAAgJADgFQACgFAFgDQAEgDAGgBQAGgCAHAAIARAAIAAgGQAAgIgFgCQgEgEgKAAIgOABIgHABIgEgCIgBgDIAAgHIAOgCQAHgCAHAAQAKAAAGACQAHACAEAEQAEAEABAGQACAGAAAFIAAA7IgLAAIgDgBIgBgEIgBgFQgEAEgGAEQgHADgIAAQgNAAgGgIgAgIAUQgEABgCADIgDAEIAAAGQAAAIADADQAEAEAIAAQAGAAAFgDIAIgGIAAgVIgRAAQgFAAgDABgAgEgkIgCgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAFgLIAFgKIAOAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADIgCACIgOASg");
	this.shape_20.setTransform(124.2,19.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAyQgFgGgBgLIAAgzIgGAAQgEAAAAgEIAAgKIAKAAIABgWIAMAAQAEAAAAAEIAAASIAQAAIADABIABADIAAAKIgUAAIAAAyQgBAEACADQACADAEAAIAFgBIAEAAQAEAAAAAEIAAAIIgHACIgHAAQgLAAgGgFg");
	this.shape_21.setTransform(117.5,20.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSAsQgDAAAAgFIAAhRIAKAAIADABIABADIABAHQAEgEAFgEQAHgDAGAAQABAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAAAIAAAMIgDAAIgCAAQgHAAgGACQgFACgEAGIAAA9g");
	this.shape_22.setTransform(112.3,21.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgbAiQgIgLAAgXQAAgXAIgKQAJgLASAAQATAAAJALQAIAKAAAXQAAAXgIALQgJALgTAAQgSAAgJgLgAgIgdQgDABgDAEQgCAEgBAGQgBAGAAAIQAAAJABAGQABAHACADQADAEADABQAEACAEAAQAFAAAEgCQADgBADgEQACgDABgHQABgGAAgJQAAgIgBgGQgBgGgCgEQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_23.setTransform(104.9,21.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbA6QgEAAAAgEIAAg4IAAgUIABgUIgDAAQgEAAAAgEIAAgIIAHgBIAIgBIAJgBIAKAAQAKAAAHACQAIACAGAFQAFAFACAIQADAJAAANQgBAWgHAKQgJALgQAAQgGAAgFgBIgIgEIAAAhgAgOANIAHADIAIABQAEAAAFgCQADgBACgEIAEgJIABgOIgBgPQgBgFgDgEQgDgEgFgBQgEgCgGAAIgGAAIgFAAg");
	this.shape_24.setTransform(96.3,22.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHAtIgHgBIgGgBIgGgBIgCgCIgBgEIAAgHIAMABIANABQAKAAAEgDQAEgDAAgGIAAgFIgEgDIgFgDIgIgDIgLgDQgFgBgEgCQgDgDgCgEQgCgEAAgHQAAgNAIgGQAIgGAOAAIAGAAIAGABIAGABIAFABIADACIAAADIAAAHIgNgBIgKAAQgJAAgDACQgEADgBAGIACAEIADAEIAGACIAHADIALADQAFABAEACQADADACAEQACAEAAAHQAAAIgDAFQgCAFgEADQgEADgGACQgGABgGAAIgHAAg");
	this.shape_25.setTransform(85.6,21.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgbAiQgIgLAAgXQAAgXAIgKQAJgLASAAQATAAAJALQAIAKAAAXQAAAXgIALQgJALgTAAQgSAAgJgLgAgIgdQgDABgDAEQgCAEgBAGQgBAGAAAIQAAAJABAGQABAHACADQADAEADABQAEACAEAAQAFAAAEgCQADgBADgEQACgDABgHQABgGAAgJQAAgIgBgGQgBgGgCgEQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_26.setTransform(77.7,21.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgEArIgEgBIgCgCQgJgVgGgTQgHgVgDgVIAOAAQAEAAAAAEIADARIAEARIAFARIAFAPQAEgHACgJIAGgRIAEgTIADgSIANAAQAEAAAAADIgBAFIgBAFQgDASgHARQgGATgJASg");
	this.shape_27.setTransform(69.6,21.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgbAiQgIgLAAgXQAAgXAIgKQAJgLASAAQATAAAJALQAIAKAAAXQAAAXgIALQgJALgTAAQgSAAgJgLgAgIgdQgDABgDAEQgCAEgBAGQgBAGAAAIQAAAJABAGQABAHACADQADAEADABQAEACAEAAQAFAAAEgCQADgBADgEQACgDABgHQABgGAAgJQAAgIgBgGQgBgGgCgEQgDgEgDgBQgEgCgFAAQgEAAgEACg");
	this.shape_28.setTransform(61.5,21.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAVAsIgDgBIgBgDIAAg0QAAgJgEgEQgDgEgIAAQgFAAgFADQgFADgDADIAABAIgNAAQgEAAAAgEIAAhRIAKAAIADABIACADIAAAFQALgLAPAAQAOAAAGAIQAGAIAAANIAAA6g");
	this.shape_29.setTransform(53,21.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHAtIgHgBIgGgBIgGgBIgCgCIgBgEIAAgHIAMABIANABQALAAADgDQAEgDAAgGIAAgFIgEgDIgFgDIgIgDIgLgDQgFgBgDgCQgEgDgCgEQgCgEAAgHQAAgNAIgGQAIgGAOAAIAGAAIAHABIAFABIAFABIADACIAAADIAAAHIgNgBIgKAAQgJAAgEACQgDADAAAGIABAEIADAEIAGACIAHADIALADQAFABAEACQADADACAEQACAEAAAHQAAAIgDAFQgBAFgFADQgEADgGACQgGABgGAAIgHAAg");
	this.shape_30.setTransform(42.1,21.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgRA6QgHgCgFgHQgHgGgCgMQgDgMAAgTQAAgSADgMQACgMAHgGQAFgHAHgCQAJgDAIAAQAJAAAIADQAJACAFAHQAFAGAEAMQADAMgBASQABATgDAMQgEAMgFAGQgFAHgJACQgIADgJAAQgIAAgJgDgAgLgrQgFADgDAFQgCAFgBAJQgBAJAAAMQAAANABAJQABAJACAFQADAFAFADQAFACAGAAQAHAAAFgCQAEgDADgFQADgFACgJIABgWIgBgVQgCgJgDgFQgDgFgEgDQgFgCgHAAQgGAAgFACg");
	this.shape_31.setTransform(33.6,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy1, new cjs.Rectangle(-61.6,6.8,304,48.3), null);


(lib.ctaOn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRA5QgGgBgEgBQgDgCgCgCQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgOIAMABIANAAIAIgBIAFgBIACgDIABgEIgBgFIgDgEIgEgCIgJgEQgHgDgFgDQgGgEgCgDIgEgJIgBgKQAAgKACgHQADgGAFgEQAFgEAIgCQAGgCAIAAIAOABIAJADQAEABAAADIACAEIAAAMIgHAAIgGAAIgFAAIgGAAIgIAAIgEACIgDACIgBAFIABADIACADIAFAEIAIADIANAHQAFADADADQADADACAGQABAFAAAHQAAAJgCAHQgCAGgFAFQgFAEgGACQgIACgJAAIgPgBg");
	this.shape.setTransform(82.9,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHA4QgGAAAAgGIAAhpIAVAAQAGAAAAAGIAABpg");
	this.shape_1.setTransform(76.3,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATA4QgGgBAAgFIgDgVIgVAAIgCAOIgBANIgWAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgEIAAgDQAEgaAGgXQAFgZAJgYIAbAAQABAAABABQABAAAAAAQABAAAAAAQABABAAAAIACAEQAHAVAGAbIALA5gAgGgKIgDASIARAAIgEgSIgEgYIgGAYg");
	this.shape_2.setTransform(69.3,14.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeA4QgGAAAAgGIAAgSIAAgUIAAgTIAAgTIgOA2IgPAAQgDAAgCgCIgBgEIgMgwIgBAUIAAAVIAAAWIAAATIgUAAQgGAAAAgGIABgzIAEg2IAcAAIAEABIADAFIAKAxIAOg3IAbAAQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAIADAxQACAZAAAfg");
	this.shape_3.setTransform(58.8,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA4QgGgBAAgFIgDgVIgVAAIgCAOIgBANIgWAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgEIAAgDQAEgaAGgXQAFgZAJgYIAbAAQABAAABABQABAAAAAAQABAAAAAAQABABAAAAIACAEQAHAVAGAbIALA5gAgGgKIgDASIARAAIgEgSIgEgYIgGAYg");
	this.shape_4.setTransform(45.2,14.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfA4QgGAAAAgFIAAhnIASgCIAQgBQAIAAAHABQAHACAFADQAFAEADAGQADAGAAAIQAAAJgEAGQgDAGgIAEQAFABAEADIAFAHQACADABAEIABAIQAAAJgDAGQgDAFgFAEQgFAEgHABQgHABgHAAgAgKAlIAJAAQAGAAADgEQADgDAAgHQAAgIgDgDQgDgDgHAAIgIAAgAgKgJIAIAAQAFAAADgDQADgCAAgIQAAgIgDgCQgCgDgGAAIgEAAIgEAAg");
	this.shape_5.setTransform(36.3,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHA4QgGAAAAgGIAAhpIAVAAQAGAAAAAGIAABpg");
	this.shape_6.setTransform(29.2,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATA4QgGgBAAgFIgDgVIgVAAIgCAOIgBANIgWAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgEIAAgDQAEgaAGgXQAFgZAJgYIAbAAQABAAABABQABAAAAAAQABAAAAAAQABABAAAAIACAEQAHAVAGAbIALA5gAgGgKIgDASIARAAIgEgSIgEgYIgGAYg");
	this.shape_7.setTransform(22.3,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQA5QgIgBgDgBQgDgCgBgCQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgOIAMABIAMAAIAJgBIAEgBIADgDIAAgEIAAgFIgDgEIgFgCIgIgEQgIgDgFgDQgEgEgDgDIgEgJIgBgKQAAgKADgHQADgGAEgEQAFgEAHgCQAIgCAHAAIAOABIAIADQAFABABADIAAAEIAAAMIgHAAIgFAAIgGAAIgGAAIgHAAIgEACIgCACIgBAFIABADIACADIAEAEIAIADIANAHQAFADADADQADADABAGQACAFAAAHQAAAJgDAHQgCAGgEAFQgEAEgIACQgHACgKAAIgNgBg");
	this.shape_8.setTransform(13.5,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4E7EC2").s().p("AoCC7QhOgBg2g2Qg2g2gBhOIAAAAQABhNA2g2QASgSAVgMQApgZA0AAIQFAAQAqAAAjAQQAeANAaAaIABACQA1A1AABMIAAAAQAABOg2A2Qg3A2hOABg");
	this.shape_9.setTransform(48.1,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctaOn, new cjs.Rectangle(-22,-4.2,140.3,37.3), null);


(lib.ctaOff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQA4QgIAAgDgCQgDgBgCgCQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgMIAMAAIANABIAIgBIAEgCIADgDIABgEIgBgFIgDgDIgEgDIgJgEQgHgDgGgEQgEgDgDgCIgEgJIgBgMQAAgJACgGQADgHAFgEQAFgEAHgBQAIgCAHAAIAOABIAJACQAEACAAACIABAFIAAALIgHAAIgFgBIgGAAIgFAAIgIABIgEABIgCAEIgBADIABAFIABACIAFADIAJAFIAMAGQAFADADADQADAEABAEQACAGAAAHQAAAJgDAGQgCAHgEAFQgEADgIACQgHACgKAAIgNgBg");
	this.shape.setTransform(91.1,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHA3QgGABAAgGIAAhoIAVAAQAGAAAAAFIAABog");
	this.shape_1.setTransform(84.5,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATA3QgGAAAAgFIgDgWIgVAAIgCAPIgBAMIgWAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgEIAAgDQAEgaAGgXQAFgYAJgYIAbAAQABAAABAAQABAAAAAAQABAAAAAAQAAABABAAIACADQAHAWAGAbIALA4gAgGgKIgDASIARAAIgEgSIgEgYIgGAYg");
	this.shape_2.setTransform(77.6,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeA3QgGABAAgGIAAgRIAAgVIAAgUIAAgSIgOA2IgPAAQgDAAgCgBIgBgEIgMgxIgBATIAAAWIAAAVIAAATIgUAAQgGABAAgGIABgyIAEg2IAcAAIAEABIADAFIAKAwIAOg2IAbAAQAAAAABAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIADAwQACAaAAAdg");
	this.shape_3.setTransform(67,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA3QgGAAAAgFIgDgWIgVAAIgCAPIgBAMIgWAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgEIAAgDQAEgaAGgXQAFgYAJgYIAbAAQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAIACADQAHAWAGAbIALA4gAgGgKIgDASIARAAIgEgSIgEgYIgGAYg");
	this.shape_4.setTransform(53.5,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfA4QgGAAAAgFIAAhnIASgCIAQgBQAIAAAHABQAHACAFADQAFAEADAGQADAGAAAIQAAAJgEAGQgDAGgIAEQAFABAEADIAFAHQACADABAEIABAIQAAAJgDAGQgDAFgFAEQgFAEgHABQgHABgHAAgAgKAlIAJAAQAGAAADgEQADgDAAgHQAAgIgDgDQgDgDgHAAIgIAAgAgKgJIAIAAQAFAAADgDQADgCAAgIQAAgIgDgCQgCgDgGAAIgEAAIgEAAg");
	this.shape_5.setTransform(44.5,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHA3QgGABAAgGIAAhoIAVAAQAGAAAAAFIAABog");
	this.shape_6.setTransform(37.5,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATA3QgGAAAAgFIgDgWIgVAAIgCAPIgBAMIgWAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgEIAAgDQAEgaAGgXQAFgYAJgYIAbAAQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAIACADQAHAWAGAbIALA4gAgGgKIgDASIARAAIgEgSIgEgYIgGAYg");
	this.shape_7.setTransform(30.5,13.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRA4QgGAAgEgCQgEgBAAgCQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgMIAMAAIAMABIAJgBIAFgCIACgDIABgEIgBgFIgDgDIgEgDIgJgEQgIgDgEgEQgFgDgDgCIgEgJIgBgMQAAgJADgGQADgHAEgEQAFgEAIgBQAGgCAIAAIAOABIAIACQAFACABACIABAFIAAALIgHAAIgGgBIgFAAIgGAAIgIABIgEABIgDAEIgBADIABAFIADACIAEADIAIAFIANAGQAFADADADQADAEACAEQABAGAAAHQAAAJgCAGQgCAHgFAFQgFADgGACQgIACgJAAIgPgBg");
	this.shape_8.setTransform(21.8,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0150B5").s().p("AoCC6QhOAAg2g2Qg2g2AAhNIAAgBQAAhNA2g2QASgSAVgMQAqgZAzABIQGAAQApgBAjARQAeANAaAZQA2A2AABNIAAABQAABNg2A2Qg3A2hNAAg");
	this.shape_9.setTransform(56.4,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctaOff, new cjs.Rectangle(-13.8,-5.5,140.3,37.3), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// on
	this.ctaOn = new lib.ctaOn();
	this.ctaOn.name = "ctaOn";
	this.ctaOn.parent = this;
	this.ctaOn.setTransform(52.1,13.4,1,1,0,0,0,48,14);

	this.timeline.addTween(cjs.Tween.get(this.ctaOn).wait(1));

	// Off
	this.ctaOff = new lib.ctaOff();
	this.ctaOff.name = "ctaOff";
	this.ctaOff.parent = this;
	this.ctaOff.setTransform(43.9,14.7,1,1,0,0,0,48,14);

	this.timeline.addTween(cjs.Tween.get(this.ctaOff).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-17.9,-4.8,140.3,37.3), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var img1 = this.img1;
		var img2 = this.img2;
		var img3 = this.img3;
		var img4 = this.img4;
		
		var copy1 = this.copy1;
		var copy2 = this.copy2;
		var copy3 = this.copy3;
		var copy4 = this.copy4;
		var copy5 = this.copy5;
		var messaging = this.messaging;
		
		var product = this.product;
		var cta = this.cta;
		var ctaOn = cta.ctaOn;
		var ctaOff = cta.ctaOff;
		var hp_logo = this.hp_logo;
		var hp_logo2 = this.hp_logo2;
		var windows_logo = this.windows_logo;
		
		canvas.addEventListener("mouseover", ctaLight);
		canvas.addEventListener("mouseout", ctaDark);
		
		function autoShot(tf) {
			if (window.takeAutoShot != undefined) {
				window.takeAutoShot(tf);
			}
		}
		
		function ctaLight() {
				
			TweenMax.to(ctaOn, .25, {alpha:1});	
		
		}
		
		function ctaDark() {
			
			TweenMax.to(ctaOn, .25, {alpha:0});	
		}
		
		
		function getTime(){
			
			console.log(Tl.duration());
		}
		
		var Tl = new TimelineMax({onStart:getTime});
		
		init();
		
		function init(){
			Tl.add("start")
			.set(ctaOn,{alpha:0})
			  .add("frame1")
			  .from([img1,copy1],.1,{alpha:0, ease:Power4.easeOut})
			  .from(hp_logo,.8,{alpha:0, y:"+=100", ease:Power4.easeOut})
			  .add(autoShot)
			  //.to([img1],.1,{alpha:0},"frame1+=3")
			  
			  .add("frame2",3)
			  .to([copy1],.1,{alpha:0},"frame2-=.1")
			 // .from([hp_logo2],1,{alpha:0, /*x:"-=400"*/ ease:Power1.easeOut},"frame2-=.1")
			  .from(img2,.5,{alpha:0, ease:Power4.easeOut},"frame2-=.1")
			  .from(copy2, 1,{alpha:0, x:"+=50", ease:Power4.easeOut}, "frame2-=.1")
			  .add(autoShot)
			 .to([copy2],.01,{alpha:0},"frame2+=3")
			  
			  .add("frame3",6)
			  .from(img3,.5,{alpha:0, ease:Power4.easeOut},"frame3-=.1")
			  .from(copy3,1,{alpha:0, x:"+=50", ease:Power4.easeOut},"frame3-=.1") 
			  .add(autoShot)
			  .to([copy3],.01,{alpha:0},"frame3+=3")
			  	  
			  .add("frame4",9)
			  .from(img4,.5,{alpha:0, ease:Power4.easeOut},"frame4-=.1")
			  .from(copy4,1,{alpha:0, x:"+=50", ease:Power4.easeOut},"frame4-=.1") 
			  .add(autoShot)
			  .to([img1, img2, img3, img4, copy3, hp_logo, copy4, hp_logo],.5,{alpha:0},"frame4+=3")
			  
			  .add("frame5",12)
			  .from(product,1,{alpha:0,x:"+=20", ease:Power1.easeOut},"frame5+=.1")
			  .from(copy5,1,{alpha:0, /*x:"-=400"*/ ease:Power1.easeOut},"frame5+=.3")
			  .from(cta,1,{alpha:0, ease:Power1.easeOut},"frame5+=.3")
			  .from([windows_logo, messaging, hp_logo2],1,{alpha:0, x:"-=20", ease:Power1.easeOut},"frame5+=.1")
			//.from([hp_logo2],1,{alpha:0, /*x:"-=400"*/ ease:Power1.easeOut},"frame5+=.3")
			  .addCallback(autoShot, "frame5+=2.5", [true])
			  ;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.parent = this;
	this.cta.setTransform(499,59.5,0.65,0.65,0,0,0,47.1,16.3);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// copy5
	this.copy5 = new lib.copy5();
	this.copy5.name = "copy5";
	this.copy5.parent = this;
	this.copy5.setTransform(374.9,33.1,1.25,1.25,0,0,0,133.1,14.5);

	this.timeline.addTween(cjs.Tween.get(this.copy5).wait(1));

	// copy4
	this.copy4 = new lib.copy4();
	this.copy4.name = "copy4";
	this.copy4.parent = this;
	this.copy4.setTransform(266.7,31.6,1.275,1.275,0,0,0,82.4,25.7);

	this.timeline.addTween(cjs.Tween.get(this.copy4).wait(1));

	// copy3
	this.copy3 = new lib.copy3();
	this.copy3.name = "copy3";
	this.copy3.parent = this;
	this.copy3.setTransform(324.2,35.4,1.264,1.264,0,0,0,93.4,26);

	this.timeline.addTween(cjs.Tween.get(this.copy3).wait(1));

	// copy2
	this.copy2 = new lib.copy2();
	this.copy2.name = "copy2";
	this.copy2.parent = this;
	this.copy2.setTransform(336.5,26.2,1.264,1.264,0,0,0,133.7,18.8);

	this.timeline.addTween(cjs.Tween.get(this.copy2).wait(1));

	// copy1
	this.copy1 = new lib.copy1();
	this.copy1.name = "copy1";
	this.copy1.parent = this;
	this.copy1.setTransform(347.3,29.4,1.264,1.264,0,0,0,124.1,18.7);

	this.timeline.addTween(cjs.Tween.get(this.copy1).wait(1));

	// product
	this.product = new lib.product();
	this.product.name = "product";
	this.product.parent = this;
	this.product.setTransform(222.2,44.1,0.431,0.43,0,0,0,101.5,47.9);

	this.timeline.addTween(cjs.Tween.get(this.product).wait(1));

	// messaging
	this.messaging = new lib.messaging();
	this.messaging.name = "messaging";
	this.messaging.parent = this;
	this.messaging.setTransform(515.3,19.7,0.999,0.988,0,0,0,106.5,8.8);

	this.timeline.addTween(cjs.Tween.get(this.messaging).wait(1));

	// windows_logo
	this.windows_logo = new lib.windows_logo();
	this.windows_logo.name = "windows_logo";
	this.windows_logo.parent = this;
	this.windows_logo.setTransform(648.6,58.2,1,1,0,0,0,49.1,10.2);

	this.timeline.addTween(cjs.Tween.get(this.windows_logo).wait(1));

	// hp_logo2
	this.hp_logo2 = new lib.hp_logo2();
	this.hp_logo2.name = "hp_logo2";
	this.hp_logo2.parent = this;
	this.hp_logo2.setTransform(36.8,47.2,0.999,1,0,0,0,18.4,17.5);

	this.timeline.addTween(cjs.Tween.get(this.hp_logo2).wait(1));

	// hp_logo
	this.hp_logo = new lib.hp_logo();
	this.hp_logo.name = "hp_logo";
	this.hp_logo.parent = this;
	this.hp_logo.setTransform(37.1,45.3,1,1,0,0,0,17.8,17.8);

	this.timeline.addTween(cjs.Tween.get(this.hp_logo).wait(1));

	// img4
	this.img4 = new lib.img4_1();
	this.img4.name = "img4";
	this.img4.parent = this;
	this.img4.setTransform(646.5,45.2,0.543,0.543,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.img4).wait(1));

	// img3
	this.img3 = new lib.img3_1();
	this.img3.name = "img3";
	this.img3.parent = this;
	this.img3.setTransform(646.5,23.9,0.543,0.543,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.img3).wait(1));

	// img2
	this.img2 = new lib.img2_1();
	this.img2.name = "img2";
	this.img2.parent = this;
	this.img2.setTransform(646.6,38.7,0.543,0.543,0,0,0,150.1,125);

	this.timeline.addTween(cjs.Tween.get(this.img2).wait(1));

	// img1
	this.img1 = new lib.img1_1();
	this.img1.name = "img1";
	this.img1.parent = this;
	this.img1.setTransform(277,73.2,0.543,0.543,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.img1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(347.1,21,746.3,159.6);
// library properties:
lib.properties = {
	id: '04A3780CD62AD244B9CEEA1DAF02B570',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./hero.png?1612796583597", id:"hero"},
		{src:"./HPlogoblue.png?1612796583597", id:"HPlogoblue"},
		{src:"./img1.jpg?1612796583597", id:"img1"},
		{src:"./img2.jpg?1612796583597", id:"img2"},
		{src:"./img3.jpg?1612796583597", id:"img3"},
		{src:"./img4.jpg?1612796583597", id:"img4"},
		{src:"./win10.png?1612796583597", id:"win10"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['04A3780CD62AD244B9CEEA1DAF02B570'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;