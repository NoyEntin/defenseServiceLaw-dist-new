(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCC16D").s().p("AgIBTIgLgBQgQgEgKgNIgEgFQgKgQAFgUIAShGQAFgTARgKIAGgDQANgGAQAEQATAEAKARQAKARgFATIgSBGQgEAQgNAKQgMAKgQAAg");
	this.shape.setTransform(-0.0027,-0.005);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-5.6,-8.3,11.3,16.6), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCC16D").s().p("Ag6A7QgPgNAAgVQAAgTAPgNIA0gzQAMgOAUAAQATAAAOAOQAPANAAAVQAAATgPANIgzAzQgNAOgUAAQgTAAgOgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-7.3,-7.3,14.7,14.6), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCC16D").s().p("AhEAqQgOgOAAgTQAAgQAKgNQAKgNAQgEIBGgRQATgFARAKQARALAFATQAEATgKAQQgKARgTAEIhHASQgEABgHAAQgUAAgNgOg");
	this.shape.setTransform(0.0175,0.0052);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-8.3,-5.6,16.700000000000003,11.3), null);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EghJAfkMAAAg/HMBCTAAAMAAAA/Hg");
	this.shape.setTransform(0.025,-17.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-212.2,-219.7,424.5,404), null);


// stage content:
(lib.lawBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Default:0,startHover:3,stop:10,endHover:11,"stop":18,startClick:19,"stop":44,endClick:45};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,10,18,44,62];
	// timeline functions:
	this.frame_0 = function() {
		function onClick() {
			window.parent.postMessage("clicked", '*');
			if (clicked) {
				lawBtn.gotoAndPlay('endClick');
			} else {
				lawBtn.gotoAndPlay('startClick');
			};
			clicked = !clicked;
		}
		
		function onEnter() {
		if (!clicked) {
			lawBtn.gotoAndPlay('startHover');		
			}
		}
		
		function onLeave() {
			if (!clicked) {
			lawBtn.gotoAndPlay('endHover');		
			}
		}
		this.stop();
		var clicked = false;
		var lawBtn = this;
		stage.enableMouseOver(20);
		
		exportRoot.bg_mc.addEventListener('click', onClick);
		exportRoot.bg_mc.addEventListener('mouseover',onEnter);
		exportRoot.bg_mc.addEventListener('mouseout',onLeave);
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_62 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(8).call(this.frame_18).wait(26).call(this.frame_44).wait(18).call(this.frame_62).wait(1));

	// flash0_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgQDoICni5QAiglgKgoQgMgqg8gwQhahGhVg1IAagrQBhA9BWBFQBdBJAUBKQAUBEg2A1IivCvQgZgZgggegAj/AzIBIhyQAQgbAPgLQAOgMAUgJIA7AoQgPALgLANQgOAOgOAWIhPByQghgXgegSg");
	this.shape.setTransform(636.6402,203.7436,1.4319,1.4319,29.9991);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AkMCBIAPgxQCBAmB1A3Qg9jeh8jUQAvAMA1ASQAzBlAkBkQBTgyBggsQAoATA3AeQiEAxh3BBQAiBiAWBhIgPAcQiZhTiugyg");
	this.shape_1.setTransform(604.9103,141.4034,1.4319,1.4319,29.9991);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AAwDJQgDg0gGg/IgDAAQgJAcgbAXQgaAWgkAMQgkALgngDIgTgCIAEg6IAXADQA8ADAogWQApgXASgpIAei7QhDgLg7gFIAFgyQBuAKBsAXIgpDHQgGAgACAdQAEBbAAAtQgkgJgggFg");
	this.shape_2.setTransform(554.7085,94.6878,1.4319,1.4319,29.9991);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AjviaQBngiBugXQBvgYA/AgQA7AeAIBNIAZDzIhJAJIgkj1QgHgzgjgSQgkgThDAPQgxAKhKAUIBdFNQgzAPgUAHg");
	this.shape_3.setTransform(469.4001,50.9308,1.4319,1.4319,29.9991);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AhDhxIg9AfIgXgsQBEglBPgiICcFrIhFAgg");
	this.shape_4.setTransform(411.4797,35.269,1.4319,1.4319,29.9991);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AhLCBQgVgVgIgSQgIgSgDgVIA2gxQAGAQAKAOQAKAPATAVIDDDaIg0AxgAB0BaQAhgcASgfQARgdABgfQAAgfgTgcIhoiYQiZBpiDCEIgkgjQCqiqDJh+IB7DGQAZAqgDAuQgDAugdArQgbArgzAsg");
	this.shape_5.setTransform(343.2959,41.8688,1.4319,1.4319,29.9991);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(63));

	// Layer_5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6C3328").s().p("AnkKfIiNg6QghgNgOghQgOghANghQAGgQANgMIRnxnQAZgZAkAAQAjAAAaAZQANANAFAQIA6CMQAOAkgHAmQgIAngbAbIvbPcQgbAbgnAIQgNACgNAAQgYAAgYgJg");
	this.shape_6.setTransform(402.7169,338.0369,0.8855,0.8855,1.9473);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#873F30").s().p("Ao2KhQghgOgNghIg5iNQgPgkAIgmQAIgmAbgcIPbvbQAcgbAmgIQAmgHAkAOICNA6IAAAAQAQAHAMAMQAZAZAAAkQAAAjgZAaIxmRmQgNANgPAGQgRAGgQAAQgRAAgRgHg");
	this.shape_7.setTransform(350.5888,282.2682,0.8855,0.8855,1.9473);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCA62F").s().p("AruHNIS7y8IEjEiIy8S8g");
	this.shape_8.setTransform(388.7623,323.14,0.8855,0.8855,1.9473);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCC16D").s().p("At8E/IS7y8II+I/Iy7S8g");
	this.shape_9.setTransform(376.6684,310.103,0.8855,0.8855,1.9473);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6C3328").s().p("AooI6IgRgSQgzgyAAhIQAAhHAzgzINtttQAzgzBHAAQBIAAAyAzIASARQAzAzAABHQAABIgzAyItuNuQgyAzhIAAQhHAAgzgzg");
	this.shape_10.setTransform(445.8088,384.1105,0.8855,0.8855,1.9473);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#873F30").s().p("AooI6IgSgRQgxgzAAhIQAAhHAxgyINvtvQAygyBIABQBHgBAyAyIASASQAyAzABBIQgBBHgyAyItuNuQgyAyhHAAQhIAAgzgyg");
	this.shape_11.setTransform(307.5479,236.1626,0.8855,0.8855,1.9473);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A34F41").s().p("AqQCSIMisiIH/H/IsiMig");
	this.shape_12.setTransform(424.5622,361.437,0.8855,0.8855,1.9473);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BA5D4F").s().p("AqQCSIMisiIH/H/IsiMig");
	this.shape_13.setTransform(328.7931,258.8804,0.8855,0.8855,1.9473);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A34F41").s().p("Ag6C2IisitQAxAvBEAAQBHAAAxgyQAygxAAhGQAAhEgvgxICrCrQAyAxAABGQABBGgyAyIgBABQgxAyhHAAIgBAAQhEAAgygxg");
	this.shape_14.setTransform(271.9844,417.3072,0.8855,0.8855,1.9473);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BA5D4F").s().p("AgEDsIjmjmQgygxAAhGQAAhHAygyQAygyBHAAQBGAAAxAyIDmDmQAxAygBBHQgBBGgyAxQgyAxhFAAQhFAAgxgxg");
	this.shape_15.setTransform(267.2732,412.2404,0.8855,0.8855,1.9473);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6C3328").s().p("AmhFBIFkljQAfgfAAgsQAAgsgfgfIg5g4IC7jgIFdFdIqzJEg");
	this.shape_16.setTransform(304.7607,381.3305,0.8855,0.8855,1.9473);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#873F30").s().p("AnQDkIJEq0IFdFdIq0JEg");
	this.shape_17.setTransform(300.6234,381.1898,0.8855,0.8855,1.9473);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6C3328").s().p("Au6OOQgvgugTg+QBIAYBKgSQBLgSA3g2IY368ICuCuI43a8IAAAAQhQBPhwAAQhwAAhQhPg");
	this.shape_18.setTransform(194.8857,483.8725,0.8855,0.8855,1.9473);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#873F30").s().p("Ar/QEQhxgEhMhTQhMhTAFhwQAFhxBShMIa04wID8D8I4wa0IgQAQQhOBHhpAAIgMAAg");
	this.shape_19.setTransform(194.3934,480.4335,0.8855,0.8855,1.9473);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19,p:{rotation:1.9473,x:194.3934,y:480.4335,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_18,p:{rotation:1.9473,x:194.8857,y:483.8725,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_17,p:{rotation:1.9473,x:300.6234,y:381.1898,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_16,p:{rotation:1.9473,x:304.7607,y:381.3305,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_15,p:{rotation:1.9473,x:267.2732,y:412.2404,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_14,p:{rotation:1.9473,x:271.9844,y:417.3072,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_13,p:{rotation:1.9473,x:328.7931,y:258.8804,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_12,p:{rotation:1.9473,x:424.5622,y:361.437,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_11,p:{rotation:1.9473,x:307.5479,y:236.1626,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_10,p:{rotation:1.9473,x:445.8088,y:384.1105,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_9,p:{rotation:1.9473,x:376.6684,y:310.103,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_8,p:{rotation:1.9473,x:388.7623,y:323.14,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_7,p:{rotation:1.9473,x:350.5888,y:282.2682,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_6,p:{rotation:1.9473,x:402.7169,y:338.0369,scaleX:0.8855,scaleY:0.8855}}]},27).to({state:[{t:this.shape_19,p:{rotation:6.5931,x:183.7013,y:477.1551,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_18,p:{rotation:6.5931,x:183.9134,y:480.6225,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_17,p:{rotation:6.5931,x:297.6172,y:386.8443,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_16,p:{rotation:6.5931,x:301.7295,y:387.3196,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_15,p:{rotation:6.5931,x:261.8627,y:415.0909,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_14,p:{rotation:6.5931,x:266.1479,y:420.5224,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_13,p:{rotation:6.5931,x:335.5997,y:267.2219,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_12,p:{rotation:6.5931,x:422.745,y:377.1952,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_11,p:{rotation:6.5931,x:316.265,y:242.8588,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_10,p:{rotation:6.5931,x:442.0848,y:401.5144,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_9,p:{rotation:6.5931,x:379.1677,y:322.1523,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_8,p:{rotation:6.5931,x:390.1656,y:336.1256,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_7,p:{rotation:6.5931,x:355.429,y:292.2975,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_6,p:{rotation:6.5931,x:402.8674,y:352.1033,scaleX:0.8855,scaleY:0.8855}}]},1).to({state:[{t:this.shape_19,p:{rotation:13.4141,x:169.7723,y:468.6514,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_18,p:{rotation:13.4141,x:169.5711,y:472.1193,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_17,p:{rotation:13.4141,x:293.6043,y:392.5114,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_16,p:{rotation:13.4141,x:297.6308,y:393.4717,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_15,p:{rotation:13.4141,x:254.7492,y:416.3109,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_14,p:{rotation:13.4141,x:258.3589,y:422.2128,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_13,p:{rotation:13.4141,x:345.5236,y:278.2501,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_12,p:{rotation:13.4141,x:418.9887,y:397.7915,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_11,p:{rotation:13.4141,x:329.2198,y:251.7639,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_10,p:{rotation:13.4141,x:435.3028,y:424.2347,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_9,p:{rotation:13.4141,x:382.2582,y:337.9644,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_8,p:{rotation:13.4141,x:391.5185,y:353.1445,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_7,p:{rotation:13.4141,x:362.2339,y:305.5024,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_6,p:{rotation:13.4141,x:402.2324,y:370.5172,scaleX:0.8855,scaleY:0.8855}}]},1).to({state:[{t:this.shape_19,p:{rotation:21.4118,x:157.9081,y:433.6988,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_18,p:{rotation:21.4118,x:157.2264,y:437.1048,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_17,p:{rotation:21.4118,x:291.1194,y:375.5328,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_16,p:{rotation:21.4118,x:294.9729,y:377.0439,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_15,p:{rotation:21.4118,x:249.334,y:393.6935,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_14,p:{rotation:21.4118,x:252.0873,y:400.0397,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_13,p:{rotation:21.4118,x:358.4263,y:269.6143,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_12,p:{rotation:21.4118,x:414.5406,y:398.205,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_11,p:{rotation:21.4118,x:345.9671,y:241.1194,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_10,p:{rotation:21.4118,x:427.016,y:426.6587,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_9,p:{rotation:21.4118,x:386.4934,y:333.8541,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_8,p:{rotation:21.4118,x:393.5509,y:350.1738,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_7,p:{rotation:21.4118,x:371.1814,y:298.9244,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_6,p:{rotation:21.4118,x:401.743,y:368.8668,scaleX:0.8854,scaleY:0.8854}}]},1).to({state:[{t:this.shape_19,p:{rotation:26.6035,x:158.9884,y:412.7637,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_18,p:{rotation:26.6035,x:158.0013,y:416.094,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_17,p:{rotation:26.6035,x:296.915,y:366.8909,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_16,p:{rotation:26.6035,x:300.6159,y:368.7445,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_15,p:{rotation:26.6035,x:253.6582,y:381.1958,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_14,p:{rotation:26.6035,x:255.8259,y:387.7651,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_13,p:{rotation:26.6035,x:373.5293,y:267.4986,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_12,p:{rotation:26.6035,x:417.777,y:400.6379,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_11,p:{rotation:26.6035,x:363.6998,y:237.9934,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_10,p:{rotation:26.6035,x:427.6264,y:430.1035,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_9,p:{rotation:26.6035,x:395.668,y:334.0138,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_8,p:{rotation:26.6035,x:401.2199,y:350.905,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_7,p:{rotation:26.6035,x:383.5798,y:297.8422,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_6,p:{rotation:26.6035,x:407.6867,y:370.2624,scaleX:0.8854,scaleY:0.8854}}]},1).to({state:[{t:this.shape_19,p:{rotation:29.448,x:163.5596,y:387.5541,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_18,p:{rotation:29.448,x:162.4088,y:390.8304,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_17,p:{rotation:29.448,x:303.5551,y:348.5931,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_16,p:{rotation:29.448,x:307.1586,y:350.6275,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_15,p:{rotation:29.448,x:259.6535,y:360.7304,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_14,p:{rotation:29.448,x:261.492,y:367.3973,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_13,p:{rotation:29.448,x:384.9857,y:253.151,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:29.448,x:422.5615,y:388.2858,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:29.448,x:376.6348,y:223.2024,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:29.448,x:430.9342,y:418.1958,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:29.448,x:403.7912,y:320.6648,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:29.448,x:408.4966,y:337.806,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:29.448,x:393.5156,y:283.9477,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:29.448,x:413.9934,y:357.4552,scaleX:0.8851,scaleY:0.8851}}]},1).to({state:[{t:this.shape_19,p:{rotation:29.1983,x:160.5084,y:378.2375,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_18,p:{rotation:29.1983,x:159.3719,y:381.5186,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_17,p:{rotation:29.1983,x:300.325,y:338.6689,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_16,p:{rotation:29.1983,x:303.9371,y:340.6875,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_15,p:{rotation:29.1983,x:256.4792,y:350.9968,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_14,p:{rotation:29.1983,x:258.3466,y:357.6553,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_13,p:{rotation:29.1983,x:381.3344,y:242.8781,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:29.1983,x:419.4966,y:377.8404,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:29.1983,x:372.8534,y:212.9679,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:29.1983,x:427.9991,y:407.712,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:29.1983,x:400.4328,y:310.3056,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:29.1983,x:405.2127,y:327.4252,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:29.1983,x:389.9979,y:273.6357,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:29.1983,x:410.7947,y:347.0492,scaleX:0.8851,scaleY:0.8851}}]},1).to({state:[{t:this.shape_19,p:{rotation:28.9566,x:157.8164,y:368.149,scaleX:0.885,scaleY:0.885}},{t:this.shape_18,p:{rotation:28.9566,x:156.6939,y:371.4346,scaleX:0.885,scaleY:0.885}},{t:this.shape_17,p:{rotation:28.9566,x:297.4542,y:327.9941,scaleX:0.885,scaleY:0.885}},{t:this.shape_16,p:{rotation:28.9566,x:301.0744,y:329.9973,scaleX:0.885,scaleY:0.885}},{t:this.shape_15,p:{rotation:28.9566,x:253.6641,y:340.5059,scaleX:0.885,scaleY:0.885}},{t:this.shape_14,p:{rotation:28.9566,x:255.5595,y:347.1559,scaleX:0.885,scaleY:0.885}},{t:this.shape_13,p:{rotation:28.9566,x:378.0526,y:231.8699,scaleX:0.885,scaleY:0.885}},{t:this.shape_12,p:{rotation:28.9566,x:416.7807,y:366.6596,scaleX:0.885,scaleY:0.885}},{t:this.shape_11,p:{rotation:28.9566,x:369.4462,y:201.998,scaleX:0.885,scaleY:0.885}},{t:this.shape_10,p:{rotation:28.9566,x:425.4085,y:396.4927,scaleX:0.885,scaleY:0.885}},{t:this.shape_9,p:{rotation:28.9566,x:397.4337,y:299.211,scaleX:0.885,scaleY:0.885}},{t:this.shape_8,p:{rotation:28.9566,x:402.2854,y:316.309,scaleX:0.885,scaleY:0.885}},{t:this.shape_7,p:{rotation:28.9566,x:386.8451,y:262.5883,scaleX:0.885,scaleY:0.885}},{t:this.shape_6,p:{rotation:28.9566,x:407.9497,y:335.9077,scaleX:0.885,scaleY:0.885}}]},1).to({state:[{t:this.shape_19,p:{rotation:38.6465,x:152.901,y:368.2454,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_18,p:{rotation:38.6465,x:151.2413,y:371.2955,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_17,p:{rotation:38.6465,x:297.3196,y:352.165,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_16,p:{rotation:38.6465,x:300.5514,y:354.7492,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_15,p:{rotation:38.6465,x:252.0438,y:357.1282,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_14,p:{rotation:38.6465,x:252.7929,y:364.003,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_13,p:{rotation:38.6465,x:392.9568,y:270.97,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:38.6465,x:408.4468,y:410.3692,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:38.6465,x:389.5008,y:240.0727,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:38.6465,x:411.9305,y:441.232,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:38.6465,x:400.7277,y:340.6195,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:38.6465,x:402.6325,y:358.2919,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:38.6465,x:396.4539,y:302.7333,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:38.6465,x:404.9174,y:378.5665,scaleX:0.8851,scaleY:0.8851}}]},1).to({state:[{t:this.shape_19,p:{rotation:45.6377,x:151.6271,y:364.3399,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_18,p:{rotation:45.6377,x:149.6085,y:367.1653,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_17,p:{rotation:45.6377,x:296.926,y:365.9572,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_16,p:{rotation:45.6377,x:299.8192,y:368.9154,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_15,p:{rotation:45.6377,x:251.3838,y:365.3727,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_14,p:{rotation:45.6377,x:251.2905,y:372.2874,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_13,p:{rotation:45.6377,x:401.7327,y:297.008,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:45.6377,x:400.1404,y:437.2531,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:45.6377,x:402.0631,y:265.9204,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:45.6377,x:399.8417,y:468.3097,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:45.6377,x:400.9684,y:367.0839,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:45.6377,x:400.708,y:384.8564,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:45.6377,x:401.3377,y:328.96,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:45.6377,x:400.5082,y:405.2579,scaleX:0.8851,scaleY:0.8851}}]},1).to({state:[{t:this.shape_19,p:{rotation:45.0803,x:152.0324,y:365.7038,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_18,p:{rotation:45.0803,x:150.0415,y:368.5485,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_17,p:{rotation:45.0803,x:297.3349,y:365.9075,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_16,p:{rotation:45.0803,x:300.2566,y:368.8374,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_15,p:{rotation:45.0803,x:251.7908,y:365.7661,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_14,p:{rotation:45.0803,x:251.7648,y:372.6812,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_13,p:{rotation:45.0803,x:401.4621,y:295.9446,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:45.0803,x:401.2342,y:436.1934,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:45.0803,x:401.49,y:264.8564,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:45.0803,x:401.2376,y:467.2503,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:45.0803,x:401.3795,y:366.0221,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:45.0803,x:401.292,y:383.7956,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:45.0803,x:401.3779,y:327.8978,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:45.0803,x:401.2907,y:404.1973,scaleX:0.8851,scaleY:0.8851}}]},1).to({state:[{t:this.shape_19,p:{rotation:45.0803,x:152.0324,y:365.7038,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_18,p:{rotation:45.0803,x:150.0415,y:368.5485,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_17,p:{rotation:45.0803,x:297.3349,y:365.9075,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_16,p:{rotation:45.0803,x:300.2566,y:368.8374,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_15,p:{rotation:45.0803,x:251.7908,y:365.7661,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_14,p:{rotation:45.0803,x:251.7648,y:372.6812,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_13,p:{rotation:45.0803,x:401.4621,y:295.9446,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:45.0803,x:401.2342,y:436.1934,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:45.0803,x:401.49,y:264.8564,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:45.0803,x:401.2376,y:467.2503,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:45.0803,x:401.3795,y:366.0221,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:45.0803,x:401.292,y:383.7956,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:45.0803,x:401.3779,y:327.8978,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:45.0803,x:401.2907,y:404.1973,scaleX:0.8851,scaleY:0.8851}}]},8).to({state:[{t:this.shape_19,p:{rotation:38.6469,x:147.8067,y:382.2766,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_18,p:{rotation:38.6469,x:146.1471,y:385.3265,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_17,p:{rotation:38.6469,x:292.2165,y:366.198,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_16,p:{rotation:38.6469,x:295.448,y:368.782,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_15,p:{rotation:38.6469,x:246.9435,y:371.1606,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_14,p:{rotation:38.6469,x:247.6925,y:378.0351,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_13,p:{rotation:38.6469,x:387.8482,y:285.0086,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:38.6469,x:403.3365,y:424.3992,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:38.6469,x:384.3926,y:254.1131,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:38.6469,x:406.8198,y:455.2601,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:38.6469,x:395.6183,y:354.6538,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:38.6469,x:397.5228,y:372.3251,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:38.6469,x:391.3449,y:316.7699,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:38.6469,x:399.8075,y:392.5984,scaleX:0.8851,scaleY:0.8851}}]},1).to({state:[{t:this.shape_19,p:{rotation:30.0822,x:143.0033,y:411.5505,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_18,p:{rotation:30.0822,x:141.8164,y:414.8137,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_17,p:{rotation:30.0822,x:283.4152,y:374.143,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_16,p:{rotation:30.0822,x:286.9957,y:376.2171,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_15,p:{rotation:30.0822,x:239.3839,y:385.7932,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_14,p:{rotation:30.0822,x:241.1484,y:392.4797,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_13,p:{rotation:30.0822,x:365.8934,y:279.6122,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:30.0822,x:401.9696,y:415.1485,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:30.0822,x:357.8747,y:249.5745,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:30.0822,x:410.0104,y:445.148,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:30.0822,x:383.9496,y:347.327,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:30.0822,x:388.4649,y:364.5185,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:30.0822,x:374.0815,y:310.5001,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:30.0822,x:393.7436,y:384.2264,scaleX:0.8851,scaleY:0.8851}}]},1).to({state:[{t:this.shape_19,p:{rotation:26.3367,x:142.8108,y:421.7905,scaleX:0.885,scaleY:0.885}},{t:this.shape_18,p:{rotation:26.3367,x:141.8397,y:425.124,scaleX:0.885,scaleY:0.885}},{t:this.shape_17,p:{rotation:26.3367,x:280.4682,y:375.2941,scaleX:0.885,scaleY:0.885}},{t:this.shape_16,p:{rotation:26.3367,x:284.1763,y:377.1297,scaleX:0.885,scaleY:0.885}},{t:this.shape_15,p:{rotation:26.3367,x:237.2954,y:389.7946,scaleX:0.885,scaleY:0.885}},{t:this.shape_14,p:{rotation:26.3367,x:239.4928,y:396.3511,scaleX:0.885,scaleY:0.885}},{t:this.shape_13,p:{rotation:26.3367,x:356.589,y:275.5853,scaleX:0.885,scaleY:0.885}},{t:this.shape_12,p:{rotation:26.3367,x:401.4385,y:408.4649,scaleX:0.885,scaleY:0.885}},{t:this.shape_11,p:{rotation:26.3367,x:346.626,y:246.1378,scaleX:0.885,scaleY:0.885}},{t:this.shape_10,p:{rotation:26.3367,x:411.421,y:437.8727,scaleX:0.885,scaleY:0.885}},{t:this.shape_9,p:{rotation:26.3367,x:379.0283,y:341.9706,scaleX:0.885,scaleY:0.885}},{t:this.shape_8,p:{rotation:26.3367,x:384.6565,y:358.8291,scaleX:0.885,scaleY:0.885}},{t:this.shape_7,p:{rotation:26.3367,x:366.7766,y:305.8699,scaleX:0.885,scaleY:0.885}},{t:this.shape_6,p:{rotation:26.3367,x:391.2109,y:378.1486,scaleX:0.885,scaleY:0.885}}]},1).to({state:[{t:this.shape_19,p:{rotation:20.0558,x:151.8826,y:438.8495,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_18,p:{rotation:20.0558,x:151.282,y:442.2693,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_17,p:{rotation:20.0558,x:283.629,y:377.5713,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_16,p:{rotation:20.0558,x:287.5157,y:378.9902,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_15,p:{rotation:20.0558,x:242.3011,y:396.7082,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_14,p:{rotation:20.0558,x:245.2027,y:402.9851,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_13,p:{rotation:20.0558,x:348.3855,y:270.1314,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_12,p:{rotation:20.0558,x:407.5041,y:397.3087,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_11,p:{rotation:20.0558,x:335.2605,y:241.9502,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_10,p:{rotation:20.0558,x:420.6442,y:425.4483,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_9,p:{rotation:20.0558,x:377.9533,y:333.6643,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_8,p:{rotation:20.0558,x:385.3922,y:349.8061,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_7,p:{rotation:20.0558,x:361.8253,y:299.1201,scaleX:0.8851,scaleY:0.8851}},{t:this.shape_6,p:{rotation:20.0558,x:394.021,y:368.2929,scaleX:0.8851,scaleY:0.8851}}]},1).to({state:[{t:this.shape_19,p:{rotation:13.8676,x:162.414,y:455.5196,scaleX:0.885,scaleY:0.885}},{t:this.shape_18,p:{rotation:13.8676,x:162.1855,y:458.984,scaleX:0.885,scaleY:0.885}},{t:this.shape_17,p:{rotation:13.8676,x:286.7791,y:380.4017,scaleX:0.885,scaleY:0.885}},{t:this.shape_16,p:{rotation:13.8676,x:290.7958,y:381.3934,scaleX:0.885,scaleY:0.885}},{t:this.shape_15,p:{rotation:13.8676,x:247.7574,y:403.8806,scaleX:0.885,scaleY:0.885}},{t:this.shape_14,p:{rotation:13.8676,x:251.3185,y:409.8077,scaleX:0.885,scaleY:0.885}},{t:this.shape_13,p:{rotation:13.8676,x:339.5733,y:266.6149,scaleX:0.885,scaleY:0.885}},{t:this.shape_12,p:{rotation:13.8676,x:412.0518,y:386.6707,scaleX:0.885,scaleY:0.885}},{t:this.shape_11,p:{rotation:13.8676,x:323.4881,y:240.0145,scaleX:0.885,scaleY:0.885}},{t:this.shape_10,p:{rotation:13.8676,x:428.1476,y:413.2282,scaleX:0.885,scaleY:0.885}},{t:this.shape_9,p:{rotation:13.8676,x:375.8151,y:326.5865,scaleX:0.885,scaleY:0.885}},{t:this.shape_8,p:{rotation:13.8676,x:384.95,y:341.8314,scaleX:0.885,scaleY:0.885}},{t:this.shape_7,p:{rotation:13.8676,x:356.0587,y:293.9842,scaleX:0.885,scaleY:0.885}},{t:this.shape_6,p:{rotation:13.8676,x:395.5206,y:359.2791,scaleX:0.885,scaleY:0.885}}]},1).to({state:[{t:this.shape_19,p:{rotation:7.8932,x:170.1466,y:466.3744,scaleX:0.885,scaleY:0.885}},{t:this.shape_18,p:{rotation:7.8932,x:170.2799,y:469.8439,scaleX:0.885,scaleY:0.885}},{t:this.shape_17,p:{rotation:7.8932,x:286.0216,y:378.7171,scaleX:0.885,scaleY:0.885}},{t:this.shape_16,p:{rotation:7.8932,x:290.1199,y:379.2853,scaleX:0.885,scaleY:0.885}},{t:this.shape_15,p:{rotation:7.8932,x:249.6544,y:406.1309,scaleX:0.885,scaleY:0.885}},{t:this.shape_14,p:{rotation:7.8932,x:253.8132,y:411.6554,scaleX:0.885,scaleY:0.885}},{t:this.shape_13,p:{rotation:7.8932,x:326.6871,y:260.0492,scaleX:0.885,scaleY:0.885}},{t:this.shape_12,p:{rotation:7.8932,x:411.2707,y:371.9129,scaleX:0.885,scaleY:0.885}},{t:this.shape_11,p:{rotation:7.8932,x:307.9199,y:235.2666,scaleX:0.885,scaleY:0.885}},{t:this.shape_10,p:{rotation:7.8932,x:430.044,y:396.6517,scaleX:0.885,scaleY:0.885}},{t:this.shape_9,p:{rotation:7.8932,x:368.9755,y:315.9248,scaleX:0.885,scaleY:0.885}},{t:this.shape_8,p:{rotation:7.8932,x:379.648,y:330.1365,scaleX:0.885,scaleY:0.885}},{t:this.shape_7,p:{rotation:7.8932,x:345.9323,y:285.5549,scaleX:0.885,scaleY:0.885}},{t:this.shape_6,p:{rotation:7.8932,x:391.9776,y:346.3899,scaleX:0.885,scaleY:0.885}}]},1).to({state:[{t:this.shape_19,p:{rotation:5.6539,x:176.7155,y:472.4318,scaleX:0.885,scaleY:0.885}},{t:this.shape_18,p:{rotation:5.6539,x:176.9843,y:475.8933,scaleX:0.885,scaleY:0.885}},{t:this.shape_17,p:{rotation:5.6539,x:289.0744,y:380.3159,scaleX:0.885,scaleY:0.885}},{t:this.shape_16,p:{rotation:5.6539,x:293.1916,y:380.7235,scaleX:0.885,scaleY:0.885}},{t:this.shape_15,p:{rotation:5.6539,x:253.8069,y:409.1291,scaleX:0.885,scaleY:0.885}},{t:this.shape_14,p:{rotation:5.6539,x:258.1782,y:414.4867,scaleX:0.885,scaleY:0.885}},{t:this.shape_13,p:{rotation:5.6539,x:325.0712,y:260.1525,scaleX:0.885,scaleY:0.885}},{t:this.shape_12,p:{rotation:5.6539,x:413.959,y:368.6234,scaleX:0.885,scaleY:0.885}},{t:this.shape_11,p:{rotation:5.6539,x:305.3505,y:236.1227,scaleX:0.885,scaleY:0.885}},{t:this.shape_10,p:{rotation:5.6539,x:433.6841,y:392.6091,scaleX:0.885,scaleY:0.885}},{t:this.shape_9,p:{rotation:5.6539,x:369.5096,y:314.3318,scaleX:0.885,scaleY:0.885}},{t:this.shape_8,p:{rotation:5.6539,x:380.7289,y:328.1154,scaleX:0.885,scaleY:0.885}},{t:this.shape_7,p:{rotation:5.6539,x:345.2978,y:284.8862,scaleX:0.885,scaleY:0.885}},{t:this.shape_6,p:{rotation:5.6539,x:393.6839,y:343.8742,scaleX:0.885,scaleY:0.885}}]},1).to({state:[{t:this.shape_19,p:{rotation:3.6537,x:183.458,y:477.6721,scaleX:0.885,scaleY:0.885}},{t:this.shape_18,p:{rotation:3.6537,x:183.8474,y:481.1222,scaleX:0.885,scaleY:0.885}},{t:this.shape_17,p:{rotation:3.6537,x:292.5327,y:381.6912,scaleX:0.885,scaleY:0.885}},{t:this.shape_16,p:{rotation:3.6537,x:296.6617,y:381.9548,scaleX:0.885,scaleY:0.885}},{t:this.shape_15,p:{rotation:3.6537,x:258.2926,y:411.7176,scaleX:0.885,scaleY:0.885}},{t:this.shape_14,p:{rotation:3.6537,x:262.8482,y:416.9194,scaleX:0.885,scaleY:0.885}},{t:this.shape_13,p:{rotation:3.6537,x:324.3135,y:260.3452,scaleX:0.885,scaleY:0.885}},{t:this.shape_12,p:{rotation:3.6537,x:416.9326,y:365.647,scaleX:0.885,scaleY:0.885}},{t:this.shape_11,p:{rotation:3.6537,x:303.7661,y:237.0184,scaleX:0.885,scaleY:0.885}},{t:this.shape_10,p:{rotation:3.6537,x:437.4828,y:388.9295,scaleX:0.885,scaleY:0.885}},{t:this.shape_9,p:{rotation:3.6537,x:370.6155,y:312.9402,scaleX:0.885,scaleY:0.885}},{t:this.shape_8,p:{rotation:3.6537,x:382.3091,y:326.3237,scaleX:0.885,scaleY:0.885}},{t:this.shape_7,p:{rotation:3.6537,x:345.3909,y:284.3577,scaleX:0.885,scaleY:0.885}},{t:this.shape_6,p:{rotation:3.6537,x:395.8061,y:341.6207,scaleX:0.885,scaleY:0.885}}]},1).to({state:[{t:this.shape_19,p:{rotation:1.9474,x:194.3903,y:480.4231,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_18,p:{rotation:1.9474,x:194.8825,y:483.8619,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_17,p:{rotation:1.9474,x:300.6167,y:381.1829,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_16,p:{rotation:1.9474,x:304.7539,y:381.3236,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_15,p:{rotation:1.9474,x:267.2676,y:412.2324,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_14,p:{rotation:1.9474,x:271.9787,y:417.299,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_13,p:{rotation:1.9474,x:328.7855,y:258.8777,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_12,p:{rotation:1.9474,x:424.5513,y:361.4309,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_11,p:{rotation:1.9474,x:307.5412,y:236.1607,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_10,p:{rotation:1.9474,x:445.7971,y:384.1037,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_9,p:{rotation:1.9474,x:376.6592,y:310.0986,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_8,p:{rotation:1.9474,x:388.7527,y:323.1352,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_7,p:{rotation:1.9474,x:350.5805,y:282.2647,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_6,p:{rotation:1.9474,x:402.7068,y:338.0316,scaleX:0.8855,scaleY:0.8855}}]},1).to({state:[]},1).wait(8));

	// spark3
	this.instance = new lib.Symbol3();
	this.instance.setTransform(502.7,439.85,1.417,1.417,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({regX:0,regY:0,x:515.1,y:384.9},7,cjs.Ease.quadOut).to({_off:true},1).wait(5).to({_off:false,x:514.1,y:397.6},0).to({regX:0.1,regY:0.1,x:502.7,y:439.85},5,cjs.Ease.sineInOut).wait(10));

	// spark2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(526.35,456.4,1.417,1.417,0,0,0,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({regX:0,regY:0,x:579.8,y:397.35},8,cjs.Ease.quadOut).to({_off:true},1).wait(3).to({_off:false,x:570.9,y:407},0).to({regX:0.1,regY:0.1,x:526.35,y:456.4},6,cjs.Ease.sineInOut).wait(10));

	// spark1
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(542.65,480,1.417,1.417);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({x:598.8,y:468.05},7,cjs.Ease.quadOut).to({_off:true},1).wait(5).to({_off:false,regX:0.1,regY:0.1,x:581.3,y:470.4},0).to({regX:0,regY:0,x:542.65,y:480},5,cjs.Ease.sineInOut).wait(10));

	// Layer_1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FCC16D").s().p("AhuBEQgWgWAAggQAAgZARgVQAQgUAZgHIBxgcQAfgHAaAQQAbARAIAeQAHAfgQAaQgQAbgfAHIhxAcQgIACgKAAQggAAgWgWg");
	this.shape_20.setTransform(542.4242,479.7767,0.8857,0.8857);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FCC16D").s().p("AggCDQgegIgRgbQgQgaAIgfIAchxQAIgfAbgQQAagQAfAIQAeAHAQAbQARAbgIAfIgdBxQgGAZgVAQQgUAQgZAAQgLAAgIgCg");
	this.shape_21.setTransform(502.3649,439.5334,0.8857,0.8857);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FCC16D").s().p("AheBeQgWgVAAghQAAggAWgUIBThSQAVgWAgAAQAfAAAWAWQAWAXAAAfQAAAggWAVIhSBSQgWAWgfAAQggAAgWgXg");
	this.shape_22.setTransform(526.0246,456.0561,0.8857,0.8857);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6C3328").s().p("AA6FoQArgBAfgfQAhgggBguQAAgYgJgVIhrjpQhFiXiMhaQiIhXihgDIEdAAQCmAACLBaQCMBaBGCYIBqDoQATApgQArQgQArgpASQgVAKgZAAg");
	this.shape_23.setTransform(505.6793,537.5152,0.8857,0.8857);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#873F30").s().p("A3kFoQguAAggggQggggAAguQAAgXAKgWIBrjpQBFiXCMhaQCMhZCngBIezAAQCnAACMBaQCMBaBFCYIBrDoQATApgQArQgQAqgpATQgVAKgZAAg");
	this.shape_24.setTransform(402.9088,537.5152,0.8857,0.8857);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A34F41").s().p("Ag8DKIAAklQAAgughgfQgfgggsgBIDjAAQAtAAAgAhQAhAfAAAuIAAElg");
	this.shape_25.setTransform(480.7339,500.3837,0.8857,0.8857);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BA5D4F").s().p("AwWDKIAAklQgBguAhggQAgggAuAAIdRAAQAvAAAgAgQAfAgAAAuIAAElg");
	this.shape_26.setTransform(402.8949,500.4279,0.8857,0.8857);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6C3328").s().p("AnkKfIiNg6QghgNgOghQgOghANghQAGgQANgMIRnxnQAZgZAkAAQAjAAAaAZQANANAFAQIA6CMQAOAkgHAmQgIAngbAbIvbPcQgbAbgnAIQgNACgNAAQgYAAgYgJg");
	this.shape_27.setTransform(395.2833,328.8359,0.8856,0.8856);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#873F30").s().p("Ao2KhQghgOgNghIg5iNQgPgkAIgmQAIgmAbgcIPbvbQAcgbAmgIQAmgHAkAOICNA6IAAAAQAQAHAMAMQAZAZAAAkQAAAjgZAaIxmRmQgNANgPAGQgRAGgQAAQgRAAgRgHg");
	this.shape_28.setTransform(341.2851,274.8657,0.8856,0.8856);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FCA62F").s().p("AruHNIS7y8IEjEiIy8S8g");
	this.shape_29.setTransform(380.8292,314.4204,0.8856,0.8856);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FCC16D").s().p("At8E/IS7y8II+I/Iy7S8g");
	this.shape_30.setTransform(368.2981,301.8008,0.8856,0.8856);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6C3328").s().p("AooI6IgRgSQgzgyAAhIQAAhHAzgzINtttQAzgzBHAAQBIAAAyAzIASARQAzAzAABHQAABIgzAyItuNuQgyAzhIAAQhHAAgzgzg");
	this.shape_31.setTransform(439.9201,373.4228,0.8856,0.8856);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#873F30").s().p("AooI6IgSgRQgxgzAAhIQAAhHAxgyINvtvQAygyBIABQBHgBAyAyIASASQAyAzABBIQgBBHgyAyItuNuQgyAyhHAAQhIAAgzgyg");
	this.shape_32.setTransform(296.6981,230.2451,0.8856,0.8856);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A34F41").s().p("AqQCSIMisiIH/H/IsiMig");
	this.shape_33.setTransform(417.9132,351.4823,0.8856,0.8856);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BA5D4F").s().p("AqQCSIMisiIH/H/IsiMig");
	this.shape_34.setTransform(318.705,252.2299,0.8856,0.8856);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A34F41").s().p("Ag6C2IisitQAxAvBEAAQBHAAAxgyQAygxAAhGQAAhEgvgxICrCrQAyAxAABGQABBGgyAyIgBABQgxAyhHAAIgBAAQhEAAgygxg");
	this.shape_35.setTransform(267.3079,412.5107,0.8856,0.8856);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BA5D4F").s().p("AgEDsIjmjmQgygxAAhGQAAhHAygyQAygyBHAAQBGAAAxAyIDmDmQAxAygBBHQgBBGgyAxQgyAxhFAAQhFAAgxgxg");
	this.shape_36.setTransform(262.4267,407.6066,0.8856,0.8856);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6C3328").s().p("AmhFBIFkljQAfgfAAgsQAAgsgfgfIg5g4IC7jgIFdFdIqzJEg");
	this.shape_37.setTransform(298.8457,375.4375,0.8856,0.8856);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#873F30").s().p("AnQDkIJEq0IFdFdIq0JEg");
	this.shape_38.setTransform(294.7056,375.4375,0.8856,0.8856);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6C3328").s().p("Au6OOQgvgugTg+QBIAYBKgSQBLgSA3g2IY368ICuCuI43a8IAAAAQhQBPhwAAQhwAAhQhPg");
	this.shape_39.setTransform(192.5085,481.664,0.8856,0.8856);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#873F30").s().p("Ar/QEQhxgEhMhTQhMhTAFhwQAFhxBShMIa04wID8D8I4wa0IgQAQQhOBHhpAAIgMAAg");
	this.shape_40.setTransform(191.8996,478.2435,0.8856,0.8856);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FCC16D").s().p("AgTBSQgTgFgLgRQgKgQAFgUIAShGQAFgTARgKQAQgKATAFQATAEAKARQAKARgFATIgSBGQgEAQgNAKQgMAKgQAAIgLgBg");
	this.shape_41.setTransform(502.7106,439.8804,1.417,1.417);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FCC16D").s().p("Ag7A7QgNgOAAgTQAAgVANgMIA0g0QANgNAUAAQAUAAANAOQAOANAAAVQAAATgOANIgzAzQgNAOgUAAQgUAAgOgOg");
	this.shape_42.setTransform(526.3776,456.3998,1.417,1.417);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40,p:{x:191.8996,y:478.2435,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_39,p:{x:192.5085,y:481.664,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_38,p:{x:294.7056,y:375.4375,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_37,p:{x:298.8457,y:375.4375,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_36,p:{x:262.4267,y:407.6066,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_35,p:{x:267.3079,y:412.5107,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_34,p:{x:318.705,y:252.2299,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_33,p:{x:417.9132,y:351.4823,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_32,p:{x:296.6981,y:230.2451,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_31,p:{x:439.9201,y:373.4228,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_30,p:{x:368.2981,y:301.8008,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_29,p:{x:380.8292,y:314.4204,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_28,p:{x:341.2851,y:274.8657,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_27,p:{x:395.2833,y:328.8359,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]}).to({state:[{t:this.shape_40,p:{x:191.898,y:478.1383,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_39,p:{x:192.5069,y:481.5587,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_38,p:{x:294.7022,y:375.3341,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_37,p:{x:298.8423,y:375.3341,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_36,p:{x:262.4239,y:407.5026,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_35,p:{x:267.305,y:412.4067,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_34,p:{x:318.7013,y:252.1285,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_33,p:{x:417.9078,y:351.3793,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_32,p:{x:296.6948,y:230.1442,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_31,p:{x:439.9143,y:373.3194,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_30,p:{x:368.2935,y:301.6986,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_29,p:{x:380.8243,y:314.318,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_28,p:{x:341.2809,y:274.7639,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_27,p:{x:395.2782,y:328.7332,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},3).to({state:[{t:this.shape_40,p:{x:187.4672,y:474.3544,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_39,p:{x:188.2825,y:477.7316,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_38,p:{x:283.8431,y:365.501,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_37,p:{x:287.9755,y:365.2498,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_36,p:{x:253.5765,y:399.569,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_35,p:{x:258.7461,y:404.1678,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_34,p:{x:300.3211,y:241.0662,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_33,p:{x:405.3678,y:334.1136,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_32,p:{x:277.021,y:220.4579,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_31,p:{x:428.6652,y:354.6778,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_30,p:{x:352.83,y:287.5353,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_29,p:{x:366.1036,y:299.3711,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_28,p:{x:324.2328,y:262.2896,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_27,p:{x:381.4057,y:312.8826,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:182.0618,y:470.228,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_39,p:{x:183.1017,y:473.5426,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_38,p:{x:270.913,y:355.1714,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_37,p:{x:275.0189,y:354.6437,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_36,p:{x:243.0017,y:391.1878,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_35,p:{x:248.4674,y:395.4292,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_34,p:{x:279.0107,y:229.9261,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:390.0465,y:315.7118,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:254.3842,y:210.9283,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:414.6673,y:334.6656,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:334.5106,y:272.7654,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:348.5462,y:283.6834,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:304.2885,y:249.4964,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:364.7178,y:296.1372,rotation:-7.3233,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:174.8746,y:465.6404,rotation:-12.2995,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_39,p:{x:176.198,y:468.852,rotation:-12.2995,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_38,p:{x:253.4059,y:343.3176,rotation:-12.2995,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_37,p:{x:257.4502,y:342.4358,rotation:-12.2995,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_36,p:{x:228.7254,y:381.617,rotation:-12.2995,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_35,p:{x:234.5381,y:385.3681,rotation:-12.2995,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_34,p:{x:250.6091,y:217.8495,rotation:-12.2995,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:368.6605,y:293.6758,rotation:-12.2995,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:224.4291,y:201.0606,rotation:-12.2995,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:394.8311,y:310.4215,rotation:-12.2995,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:309.6122,y:255.711,rotation:-12.2995,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:324.5411,y:265.3697,rotation:-12.2995,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:277.4876,y:235.1524,rotation:-12.2995,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:341.731,y:276.3732,rotation:-12.2995,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:166.0775,y:461.0308,rotation:-18.2392,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_39,p:{x:167.7261,y:464.0884,rotation:-18.2392,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_38,p:{x:231.5309,y:331.2347,rotation:-18.2392,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_37,p:{x:235.4624,y:329.9391,rotation:-18.2392,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_36,p:{x:210.9456,y:371.8836,rotation:-18.2392,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_35,p:{x:217.1154,y:375.0131,rotation:-18.2392,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_34,p:{x:215.7651,y:206.7262,rotation:-18.2392,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:341.0328,y:269.9311,rotation:-18.2392,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:187.9876,y:192.7361,rotation:-18.2392,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:368.7965,y:283.8791,rotation:-18.2392,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:278.3711,y:238.2795,rotation:-18.2392,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:294.2198,y:246.3418,rotation:-18.2392,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:244.2906,y:221.1552,rotation:-18.2392,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:312.4565,y:255.5076,rotation:-18.2392,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:159.1017,y:458.1281,rotation:-22.6909,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_39,p:{x:160.9827,y:461.0485,rotation:-22.6909,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_38,p:{x:214.283,y:323.6432,rotation:-22.6909,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_37,p:{x:218.1021,y:322.0464,rotation:-22.6909,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_36,p:{x:196.9149,y:365.7673,rotation:-22.6909,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_35,p:{x:203.309,y:368.4085,rotation:-22.6909,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_34,p:{x:188.9006,y:200.7342,rotation:-22.6909,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:318.6962,y:254.0252,rotation:-22.6909,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:160.121,y:188.9423,rotation:-22.6909,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:347.4587,y:265.7761,rotation:-22.6909,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:253.7668,y:227.3329,rotation:-22.6909,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:270.1934,y:234.1407,rotation:-22.6909,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:218.46,y:212.9055,rotation:-22.6909,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:289.0866,y:241.8633,rotation:-22.6909,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:151.5425,y:455.6907,rotation:-27.4486,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_39,p:{x:153.6593,y:458.4452,rotation:-27.4486,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_38,p:{x:195.3817,y:317.0839,rotation:-27.4486,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_37,p:{x:199.0554,y:315.1757,rotation:-27.4486,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_36,p:{x:181.5665,y:360.506,rotation:-27.4486,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_35,p:{x:188.1581,y:362.6079,rotation:-27.4486,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_34,p:{x:159.8902,y:196.6963,rotation:-27.4486,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:293.6668,y:239.0407,rotation:-27.4486,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:130.2299,y:187.3316,rotation:-27.4486,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:323.3067,y:248.3661,rotation:-27.4486,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:226.7432,y:217.8245,rotation:-27.4486,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:243.6789,y:223.2466,rotation:-27.4486,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:190.3592,y:206.3745,rotation:-27.4486,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:263.1487,y:229.376,rotation:-27.4486,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:151.4409,y:455.6855,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_39,p:{x:153.5577,y:458.4399,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_38,p:{x:195.2784,y:317.0805,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_37,p:{x:198.952,y:315.1722,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_36,p:{x:181.4638,y:360.502,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_35,p:{x:188.0552,y:362.6038,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_34,p:{x:159.7865,y:196.695,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:293.5614,y:239.0376,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:130.1266,y:187.3306,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:323.2009,y:248.3627,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:226.6386,y:217.8223,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:243.5741,y:223.2442,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:190.255,y:206.3728,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:263.0436,y:229.3733,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},2).to({state:[{t:this.shape_40,p:{x:159.0418,y:458.114,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_39,p:{x:160.9227,y:461.0342,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_38,p:{x:214.2195,y:323.6362,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_37,p:{x:218.0384,y:322.0395,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_36,p:{x:196.8526,y:365.7581,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_35,p:{x:203.2463,y:368.3991,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_34,p:{x:188.838,y:200.7339,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:318.6267,y:254.0215,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:160.0599,y:188.9429,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:347.3878,y:265.7717,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:253.7008,y:227.3309,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:270.1266,y:234.1383,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:218.3959,y:212.9045,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:289.0187,y:241.8604,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:165.8171,y:461.0339,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_39,p:{x:167.4656,y:464.0915,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_38,p:{x:231.274,y:331.2414,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_37,p:{x:235.2055,y:329.9459,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_36,p:{x:210.6876,y:371.8892,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_35,p:{x:216.8572,y:375.0189,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_34,p:{x:215.5125,y:206.7337,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:340.7767,y:269.942,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:187.7357,y:192.7429,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:368.5396,y:283.8908,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:278.1167,y:238.2888,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:293.965,y:246.3515,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:244.0372,y:221.1635,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:312.2012,y:255.5178,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:174.7731,y:465.6351,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_39,p:{x:176.0964,y:468.8468,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_38,p:{x:253.3026,y:343.3142,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_37,p:{x:257.3468,y:342.4324,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_36,p:{x:228.6226,y:381.613,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_35,p:{x:234.4352,y:385.3641,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_34,p:{x:250.5054,y:217.8482,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:368.5551,y:293.6728,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:224.3258,y:201.0596,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:394.7253,y:310.4181,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:309.5076,y:255.7088,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:324.4363,y:265.3673,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:277.3835,y:235.1507,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:341.6259,y:276.3705,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:181.9587,y:470.1676,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_39,p:{x:182.9985,y:473.482,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_38,p:{x:270.8064,y:355.1145,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_37,p:{x:274.912,y:354.5868,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_36,p:{x:242.8961,y:391.1298,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_35,p:{x:248.3617,y:395.371,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_34,p:{x:278.9032,y:229.8734,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:389.9356,y:315.6557,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:254.2774,y:210.8764,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:414.5557,y:334.6088,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:334.4013,y:272.7111,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:348.4365,y:283.6286,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:304.1802,y:249.443,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:364.6076,y:296.0819,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:187.4656,y:474.3491,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_39,p:{x:188.2809,y:477.7263,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_38,p:{x:283.8397,y:365.4976,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_37,p:{x:287.9721,y:365.2463,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_36,p:{x:253.5737,y:399.565,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_35,p:{x:258.7433,y:404.1638,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_34,p:{x:300.3174,y:241.0649,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_33,p:{x:405.3623,y:334.1106,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_32,p:{x:277.0177,y:220.4569,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_31,p:{x:428.6593,y:354.6744,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_30,p:{x:352.8254,y:287.5332,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_29,p:{x:366.0988,y:299.3687,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_28,p:{x:324.2286,y:262.2879,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_27,p:{x:381.4006,y:312.8799,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:191.898,y:478.1383,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_39,p:{x:192.5069,y:481.5587,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_38,p:{x:294.7022,y:375.3341,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_37,p:{x:298.8423,y:375.3341,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_36,p:{x:262.4239,y:407.5026,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_35,p:{x:267.305,y:412.4067,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_34,p:{x:318.7013,y:252.1285,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_33,p:{x:417.9078,y:351.3793,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_32,p:{x:296.6948,y:230.1442,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_31,p:{x:439.9143,y:373.3194,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_30,p:{x:368.2935,y:301.6986,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_29,p:{x:380.8243,y:314.318,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_28,p:{x:341.2809,y:274.7639,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_27,p:{x:395.2782,y:328.7332,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:151.381,y:455.6714,rotation:-27.4496,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_39,p:{x:153.4977,y:458.4257,rotation:-27.4496,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_38,p:{x:195.2149,y:317.0734,rotation:-27.4496,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_37,p:{x:198.8883,y:315.1653,rotation:-27.4496,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_36,p:{x:181.4014,y:360.4928,rotation:-27.4496,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_35,p:{x:187.9925,y:362.5944,rotation:-27.4496,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_34,p:{x:159.7239,y:196.6947,rotation:-27.4496,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:293.4919,y:239.034,rotation:-27.4496,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:130.0655,y:187.3312,rotation:-27.4496,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:323.13,y:248.3583,rotation:-27.4496,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:226.5726,y:217.8203,rotation:-27.4496,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:243.5072,y:223.2419,rotation:-27.4496,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:190.1909,y:206.3718,rotation:-27.4496,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:262.9758,y:229.3705,rotation:-27.4496,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},2).to({state:[{t:this.shape_40,p:{x:158.9834,y:457.9051,rotation:-22.691,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_39,p:{x:160.8642,y:460.8253,rotation:-22.691,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_38,p:{x:214.1594,y:323.4327,rotation:-22.691,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_37,p:{x:217.9781,y:321.836,rotation:-22.691,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_36,p:{x:196.793,y:365.5528,rotation:-22.691,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_35,p:{x:203.1865,y:368.1938,rotation:-22.691,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_34,p:{x:188.7792,y:200.535,rotation:-22.691,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:318.5628,y:253.8209,rotation:-22.691,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:160.0022,y:188.7443,rotation:-22.691,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:347.3227,y:265.5708,rotation:-22.691,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:253.6394,y:227.1312,rotation:-22.691,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:270.0645,y:233.9383,rotation:-22.691,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:218.3359,y:212.7052,rotation:-22.691,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:288.9559,y:241.6602,rotation:-22.691,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:165.7639,y:461.0235,rotation:-18.2379,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_39,p:{x:167.4124,y:464.081,rotation:-18.2379,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_38,p:{x:231.2173,y:331.2345,rotation:-18.2379,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_37,p:{x:235.1486,y:329.939,rotation:-18.2379,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_36,p:{x:210.632,y:371.8812,rotation:-18.2379,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_35,p:{x:216.8015,y:375.0107,rotation:-18.2379,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_34,p:{x:215.455,y:206.7311,rotation:-18.2379,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:340.7158,y:269.9359,rotation:-18.2379,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:187.6789,y:192.741,rotation:-18.2379,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:368.4779,y:283.884,rotation:-18.2379,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:278.0575,y:238.2844,rotation:-18.2379,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:293.9053,y:246.3467,rotation:-18.2379,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:243.9789,y:221.16,rotation:-18.2379,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:312.1411,y:255.5125,rotation:-18.2379,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:174.7663,y:465.6315,rotation:-12.299,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_39,p:{x:176.0895,y:468.8431,rotation:-12.299,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_38,p:{x:253.2958,y:343.314,rotation:-12.299,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_37,p:{x:257.34,y:342.4323,rotation:-12.299,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_36,p:{x:228.6158,y:381.6118,rotation:-12.299,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_35,p:{x:234.4283,y:385.3628,rotation:-12.299,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_34,p:{x:250.5003,y:217.8506,rotation:-12.299,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:368.5466,y:293.6752,rotation:-12.299,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:224.3214,y:201.062,rotation:-12.299,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:394.716,y:310.4206,rotation:-12.299,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:309.5008,y:255.7112,rotation:-12.299,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:324.4291,y:265.3697,rotation:-12.299,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:277.3776,y:235.1531,rotation:-12.299,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:341.6182,y:276.373,rotation:-12.299,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:181.9571,y:470.1123,rotation:-7.3237,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_39,p:{x:182.9969,y:473.4267,rotation:-7.3237,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_38,p:{x:270.803,y:355.061,rotation:-7.3237,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_37,p:{x:274.9086,y:354.5333,rotation:-7.3237,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_36,p:{x:242.8933,y:391.0758,rotation:-7.3237,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_35,p:{x:248.3588,y:395.3169,rotation:-7.3237,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_34,p:{x:278.8994,y:229.8221,rotation:-7.3237,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:389.9301,y:315.6026,rotation:-7.3237,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:254.2741,y:210.8255,rotation:-7.3237,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:414.5498,y:334.5554,rotation:-7.3237,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:334.3967,y:272.6589,rotation:-7.3237,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:348.4317,y:283.5762,rotation:-7.3237,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:304.1761,y:249.3912,rotation:-7.3237,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:364.6026,y:296.0293,rotation:-7.3237,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:187.4656,y:474.3491,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_39,p:{x:188.2809,y:477.7263,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_38,p:{x:283.8397,y:365.4976,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_37,p:{x:287.9721,y:365.2463,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_36,p:{x:253.5737,y:399.565,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_35,p:{x:258.7433,y:404.1638,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_34,p:{x:300.3174,y:241.0649,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_33,p:{x:405.3623,y:334.1106,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_32,p:{x:277.0177,y:220.4569,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_31,p:{x:428.6593,y:354.6744,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_30,p:{x:352.8254,y:287.5332,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_29,p:{x:366.0988,y:299.3687,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_28,p:{x:324.2286,y:262.2879,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_27,p:{x:381.4006,y:312.8799,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:191.8949,y:478.1278,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_39,p:{x:192.5038,y:481.5482,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_38,p:{x:294.6955,y:375.3272,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_37,p:{x:298.8355,y:375.3272,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_36,p:{x:262.4184,y:407.4946,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_35,p:{x:267.2993,y:412.3985,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_34,p:{x:318.6938,y:252.1259,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:417.8968,y:351.3732,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:296.688,y:230.1423,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:439.9026,y:373.3126,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:368.2842,y:301.6942,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:380.8147,y:314.3132,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:341.2726,y:274.7605,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:395.2681,y:328.728,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:191.8933,y:477.9726,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_39,p:{x:192.5022,y:481.3929,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_38,p:{x:294.6922,y:375.1737,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_37,p:{x:298.832,y:375.1737,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_36,p:{x:262.4156,y:407.3406,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_35,p:{x:267.2964,y:412.2444,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_34,p:{x:318.69,y:251.9746,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:417.8914,y:351.2202,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:296.6846,y:229.9913,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:439.8967,y:373.1592,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:368.2796,y:301.542,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:380.8099,y:314.1608,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:341.2685,y:274.6088,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:395.263,y:328.5753,rotation:0,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_26,p:{x:403.1053,y:500.6392}},{t:this.shape_25,p:{x:480.947,y:500.5949}},{t:this.shape_24,p:{x:403.1192,y:537.7277}},{t:this.shape_23,p:{x:505.8932,y:537.7277}},{t:this.shape_22,p:{x:526.2393,y:456.2658}},{t:this.shape_21,p:{x:502.5787,y:439.7426}},{t:this.shape_20,p:{x:542.6394,y:479.9872}}]},1).to({state:[{t:this.shape_26,p:{x:403.1053,y:500.6392}},{t:this.shape_25,p:{x:480.947,y:500.5949}},{t:this.shape_24,p:{x:403.1192,y:537.7277}},{t:this.shape_23,p:{x:505.8932,y:537.7277}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_20,p:{x:542.6394,y:479.9872}}]},8).to({state:[{t:this.shape_26,p:{x:403.1053,y:500.6392}},{t:this.shape_25,p:{x:480.947,y:500.5949}},{t:this.shape_24,p:{x:403.1192,y:537.7277}},{t:this.shape_23,p:{x:505.8932,y:537.7277}}]},1).to({state:[{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},18).to({state:[{t:this.shape_40,p:{x:191.898,y:478.1383,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_39,p:{x:192.5069,y:481.5587,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_38,p:{x:294.7022,y:375.3341,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_37,p:{x:298.8423,y:375.3341,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_36,p:{x:262.4239,y:407.5026,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_35,p:{x:267.305,y:412.4067,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_34,p:{x:318.7013,y:252.1285,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_33,p:{x:417.9078,y:351.3793,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_32,p:{x:296.6948,y:230.1442,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_31,p:{x:439.9143,y:373.3194,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_30,p:{x:368.2935,y:301.6986,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_29,p:{x:380.8243,y:314.318,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_28,p:{x:341.2809,y:274.7639,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_27,p:{x:395.2782,y:328.7332,rotation:0,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:187.4656,y:474.3491,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_39,p:{x:188.2809,y:477.7263,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_38,p:{x:283.8397,y:365.4976,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_37,p:{x:287.9721,y:365.2463,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_36,p:{x:253.5737,y:399.565,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_35,p:{x:258.7433,y:404.1638,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_34,p:{x:300.3174,y:241.0649,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_33,p:{x:405.3623,y:334.1106,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_32,p:{x:277.0177,y:220.4569,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_31,p:{x:428.6593,y:354.6744,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_30,p:{x:352.8254,y:287.5332,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_29,p:{x:366.0988,y:299.3687,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_28,p:{x:324.2286,y:262.2879,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_27,p:{x:381.4006,y:312.8799,rotation:-3.4792,scaleX:0.8856,scaleY:0.8856}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:181.9587,y:470.1676,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_39,p:{x:182.9985,y:473.482,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_38,p:{x:270.8064,y:355.1145,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_37,p:{x:274.912,y:354.5868,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_36,p:{x:242.8961,y:391.1298,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_35,p:{x:248.3617,y:395.371,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_34,p:{x:278.9032,y:229.8734,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:389.9356,y:315.6557,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:254.2774,y:210.8764,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:414.5557,y:334.6088,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:334.4013,y:272.7111,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:348.4365,y:283.6286,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:304.1802,y:249.443,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:364.6076,y:296.0819,rotation:-7.3235,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:174.7731,y:465.6351,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_39,p:{x:176.0964,y:468.8468,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_38,p:{x:253.3026,y:343.3142,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_37,p:{x:257.3468,y:342.4324,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_36,p:{x:228.6226,y:381.613,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_35,p:{x:234.4352,y:385.3641,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_34,p:{x:250.5054,y:217.8482,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:368.5551,y:293.6728,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:224.3258,y:201.0596,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:394.7253,y:310.4181,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:309.5076,y:255.7088,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:324.4363,y:265.3673,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:277.3835,y:235.1507,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:341.6259,y:276.3705,rotation:-12.2997,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:165.8171,y:461.0339,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_39,p:{x:167.4656,y:464.0915,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_38,p:{x:231.274,y:331.2414,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_37,p:{x:235.2055,y:329.9459,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_36,p:{x:210.6876,y:371.8892,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_35,p:{x:216.8572,y:375.0189,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_34,p:{x:215.5125,y:206.7337,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:340.7767,y:269.942,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:187.7357,y:192.7429,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:368.5396,y:283.8908,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:278.1167,y:238.2888,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:293.965,y:246.3515,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:244.0372,y:221.1635,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:312.2012,y:255.5178,rotation:-18.2373,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:159.0418,y:458.114,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_39,p:{x:160.9227,y:461.0342,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_38,p:{x:214.2195,y:323.6362,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_37,p:{x:218.0384,y:322.0395,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_36,p:{x:196.8526,y:365.7581,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_35,p:{x:203.2463,y:368.3991,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_34,p:{x:188.838,y:200.7339,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_33,p:{x:318.6267,y:254.0215,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_32,p:{x:160.0599,y:188.9429,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_31,p:{x:347.3878,y:265.7717,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_30,p:{x:253.7008,y:227.3309,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_29,p:{x:270.1266,y:234.1383,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_28,p:{x:218.3959,y:212.9045,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_27,p:{x:289.0187,y:241.8604,rotation:-22.6911,scaleX:0.8854,scaleY:0.8854}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).to({state:[{t:this.shape_40,p:{x:151.4409,y:455.6855,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_39,p:{x:153.5577,y:458.4399,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_38,p:{x:195.2784,y:317.0805,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_37,p:{x:198.952,y:315.1722,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_36,p:{x:181.4638,y:360.502,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_35,p:{x:188.0552,y:362.6038,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_34,p:{x:159.7865,y:196.695,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_33,p:{x:293.5614,y:239.0376,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_32,p:{x:130.1266,y:187.3306,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_31,p:{x:323.2009,y:248.3627,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_30,p:{x:226.6386,y:217.8223,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_29,p:{x:243.5741,y:223.2442,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_28,p:{x:190.255,y:206.3728,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_27,p:{x:263.0436,y:229.3733,rotation:-27.4491,scaleX:0.8855,scaleY:0.8855}},{t:this.shape_26,p:{x:402.8949,y:500.4279}},{t:this.shape_25,p:{x:480.7339,y:500.3837}},{t:this.shape_24,p:{x:402.9088,y:537.5152}},{t:this.shape_23,p:{x:505.6793,y:537.5152}},{t:this.shape_22,p:{x:526.0246,y:456.0561}},{t:this.shape_21,p:{x:502.3649,y:439.5334}},{t:this.shape_20,p:{x:542.4242,y:479.7767}}]},1).wait(2));

	// Layer_7
	this.bg_mc = new lib.bg();
	this.bg_mc.name = "bg_mc";
	this.bg_mc.setTransform(320.45,331.2,1.417,1.3026,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(63));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(362.1,296,307.19999999999993,274.79999999999995);
// library properties:
lib.properties = {
	id: '65C0BA409DB3F1429919413E66F415C6',
	width: 685,
	height: 575,
	fps: 24,
	color: "#6666FF",
	opacity: 0.00,
	manifest: [],
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
an.compositions['65C0BA409DB3F1429919413E66F415C6'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;