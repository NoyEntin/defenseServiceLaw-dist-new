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


(lib.shine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {hoverStop:0,hoverStart:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var hovering = false;
	}
	this.frame_40 = function() {
		if (this.hovering) {
			// console.log("1");
			this.gotoAndPlay('hoverStart');
		} else {
			this.gotoAndPlay('hoverStop');
			// console.log("2");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEKGqIgJgKIgIgKQgHgJgJgFIgKgTQgFgIgbgiQgbglggg+QgFgdgXgjIgWggIgFgJQgohHg+hKQgwg4hLhKIgOgOIgthAIgwhHQgaglgXgZIgBgVIgGghQBagvBbBMQBgBRBZBYQA6A5AsBFQAwBLAkBSQA4CFAOCRQAGA6gsAcIgHgGg");
	this.shape.setTransform(2.5058,-40.156);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AGNKGQgMgigPgiQgPgkgWguQgohWgegtQgNgxgSg3Qg1ihhAhvQhPiMhqhVQgpghhCgnQgPgSgegYQhBgyiDhjIhSg/IAEhEQAXgDAUgMQAMAAANACQAhAFAyAVQC7BOB6BPQCeBmBeB/QAiAvAmBEQCaEUA1E5QAHAqgBAbQgCAmgRAaQgYAlgzADIgFAAIgFAAg");
	this.shape_1.setTransform(-9.2062,-22.9187);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AGOPMQgugHgWgnQgfg2gBhAQgChhgLhiQgNh0gXhzQgWhxgthrQgzh2g/hxIh7jjQgVgngZgkQg9hahHhTQhNhbhVhTQgogogngpQg1g4AihCQAXguA0gFQBNAJA1A8QAaAfAcAdQBOBTBKBYQBOBdBDBjQBJBrA6BzQA5BwA7BwQA7BtAlB2QAgBpASBsQAWCAALCAIASDSQABATgHASQgbBAhAAAIgMgBg");
	this.shape_2.setTransform(-14.89,5.653);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACcQ7QgkolifoRQhNkeh5kMQh8kQg7khQgNg+BAgWQBQgaAnBKQAnANARAkQDHGaDXGRQBHCGAtCSQCVHphpH9QgMA7gFA/QgGBGhAANQgVAFgSAAQhaAAgIh3g");
	this.shape_3.setTransform(-34.6152,19.9012);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA8VMQgzgbgFg+QhYmXAInCQAOsSjPr4QgJghgFgiQAskoCeD3QApA/AiBIQCaFGBTFYQBUDsgwDyQA+K+jfJrQgFANgNAAQgLAAgRgJg");
	this.shape_4.setTransform(-57.7273,31.6543);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhSXMQgfgQAAghQgBjkAsjnQAhixAJiyQALjigKjiQgJjagXjbQgvmshBmrQARgjATghQAJgQALgOQALgMANgLIBuBQQAlEGApEFQAvEsAPEvQAOEsgBEuQgCEvg6EoQgMBZgQBYQgPBYhCAxQgWARgZAAQgSAAgUgKgAgT3VIAKBEIgJAAQAAgmgBgeg");
	this.shape_5.setTransform(-70.968,26.6368);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhXVPQgfgIgLgfQgMghADgkIALicIAKiGIAJiGIAIiHIAIiXQAEhMADhMIAEiYIADiZIAAiSIABiUIgBiTIgBiUIgCihIgDiiIgEihQgChgAAhfQABhDAjg5QAgg1A7gDQAJgDAJAFQASAJAKASQBABogIB6QgFBIgEBHQgDBHgCBIQgDBHgBBIIgBCOIABCaIAACYIgBCZIgBCXIgBCYIgDCYIgFCZQgEB0gGB0QgGB4gPB3QgPB3gbB1QgKAqgMAqQgDALgGAKQgeARgjAAQgNAAgPgDg");
	this.shape_6.setTransform(-86.0776,37.7767);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCXFQhCgxgPhYQgQhYgMhZQg6kogCkvQgBkuAOksQAPkvAvksQApkFAlkGIBuhQQANALALAMQALAOAJAQQATAhARAjQhBGrgvGsQgXDbgJDaQgKDiALDiQAJCyAhCxQAsDngBDkQAAAhgfAQQgUAKgSAAQgZAAgWgRgAAK2RIAJhEIAABEIgJAAg");
	this.shape_7.setTransform(-101.582,26.6368);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCXFQhCgxgPhYQgQhYgMhZQg6kogCkvQgBkuAOksQAPkvAvksQApkFAlkGIBuhQQANALALAMQALAOAJAQQATAhARAjQhBGrgvGsQgXDbgJDaQgKDiALDiQAJCyAhCxQAsDngBDkQAAAhgfAQQgUAKgSAAQgZAAgWgRgAAK2RIADgVIAGgvIAAAvIAAAVIgJAAg");
	this.shape_8.setTransform(-112.382,26.6368);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARVQQkCpcATrBQg+jvBFjwQA9ldCIlPQAchJAlhCQCQkAA+ElQgDAigHAhQiiMDA+MRQAjHAhAGcQgBA+gyAeQgRALgMAAQgMAAgFgMg");
	this.shape_9.setTransform(-129.7603,40.3495);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPTWQhBAAgShDQgRg9gYg4QjJnfA0n+QAPiWAsiSQCFmzB1m4QAKgnAkgUQAXhRBUAKQBDAKgBA/QgDEnhEEjQhDEegUEnQg3ImBHIiQARCKh9AAIgFAAg");
	this.shape_10.setTransform(-146.9245,39.1929);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AArRCQgZgNgKgaQh2krgxk8QgUh/gGh+QgIi2AUizQALhiAQheQBOkwAzk1QATh/A+AAQAmAAA2AyQAeAbACApQABAOgDAPQgyEmg/EjQg+EdACEpQADE9CFEnQAwBsgVBrQgQBQg1AAQgcAAgkgVg");
	this.shape_11.setTransform(-167.6053,44.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABJNhQg7g+gchNQiIlkg0l3QgxloBYlfQA1jVCRgZQAFAHAIAGQAOAMADAEQADAGAAAIIABAPQAAAIACAIQgOA/gVBsIgVBuQgJAxgFAlIgFBOIgEBCQgBAZAAANIACAOQgODDAuDEQBWFsBbFpQAoCcgvAAQgkAAhWhag");
	this.shape_12.setTransform(-181.7783,60.5672);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ACsKMQhMgggxhJQgagngbglQhNhlgzh0Qgxhzgih4QgehtgQhwQgQh3AHh4QACglAIgiQAEgOAAgOQAChWBOgYQASgFASAGQBBATACBFQAAAigCAkQgKB8AFB8QADBHARBCQAgB4ApB0QAqByBLBjQA9BRA/BPQArA1gkA6QgZAngrAAQgJAAgKgBg");
	this.shape_13.setTransform(-195.6788,79.0775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ACHHCQg2gVguhEQhIhxg/hxQgohGgXhIQgZhOgLhQQgSh5AShzIACgKQALgkAjgKQADADABACIAEAKIAGAKQAEAHAFAGIAFARIARAnQAPAjAPA5QgBAZALAhIAMAgIADAJQAVBHAoBSQAgBAA3BaIALASIAeBMIAiBXQASAvATAhQgCALgBAMIABAlQgNACgMAAQgYAAgXgIg");
	this.shape_14.setTransform(-206.1938,87.5475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},3).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},1).to({state:[]},2).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.1,-122.7,268,300.2);


(lib.background = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgqJAgOMABAhAbMBTTAAAMgBABAbg");
	this.shape.setTransform(350.225,222.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(80.5,16,539.5,412.5), null);


// stage content:
(lib.ideaBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {startClick:1,endClick:17,background:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,16,31];
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
			shine.gotoAndPlay('hoverStart');
			lawBtn.shine_mc.hovering = true;
		}
		
		function onLeave() {
			lawBtn.shine_mc.hovering = false;
		}
		this.stop();
		var clicked = false;
		var lawBtn = this;
		var shine = this.shine_mc;
		stage.enableMouseOver(20);
		//var hovering = false;
		
		this.background_mc.addEventListener("click", onClick);
		this.background_mc.addEventListener('mouseover',onEnter);
		this.background_mc.addEventListener('mouseout',onLeave);
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(15).call(this.frame_31).wait(22));

	// flash0_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgXDjICmi4QAjgngKgmQgKgpg5gsQhLg6hbg5IAagrQBZA3BVBCQBZBFARBHQAQBCg1A1IivCvgAj0A+IBGhzQAQgZAOgNQAQgNARgIIA4AkQgNAKgNAOQgMAOgPAXIhOByIg6glg");
	this.shape.setTransform(616.734,249.1835,1.8255,1.8255,31.7403);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AhJBoIBGicQgngRg1gVIARguQBZAiBVAqIhiDFIhHghg");
	this.shape_1.setTransform(603.1775,178.7618,1.8255,1.8255,31.7403);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AguDOIBQlRQh+gdh9gMIAEgyQDeAVDRBIIgPAvQg3gSgggJIhhFMQgjgLgegGg");
	this.shape_2.setTransform(551.3071,140.9871,1.8255,1.8255,31.7403);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AicDJIAHgxQBMAJAugCQgggbgOgjQg7iJhIiGIBWgOQBCCLAzCNQAFASAHAQQAHANAJALQAtgNAZgdQAZgeAAgtIgEjvQAxgBAmABIgIDtQgBA0gbAnQgaAlgrAUQgqAUg6AGQgZADgeAAQgvAAg2gHg");
	this.shape_3.setTransform(471.0956,86.3059,1.8255,1.8255,31.7403);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AiHDRQANgGAKgGQAegRAGgVQAHgVgPgdIg6htQgPgdgEgfQgFgfAJgaQgoAUgzAdIgZgsQBwhAB9gxQBkgoBCAWQA9AVATBLIA/DsIhBATIhMjsQgQgygjgMQglgOg8AZQgmAPgiAPQgHAWAFAeQADAcANAdIA5B4QAWAxgNAnQgOAmgwAbQgOAIgaALg");
	this.shape_4.setTransform(378.6386,61.1371,1.8255,1.8255,31.7403);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("ACJDhQgKgMACgPQADgQAQgNQARgNAPAAQAQABAJANQAJAMgDAPQgDAOgPANQgQANgPAAQgQgBgJgLgAAqBhQgJgVACgWQABgWALgmIAEgRQAJgfADgOQADgQgBgSQgDgRgKgPQgVgeghAAQgjABgoAgQgYATgPAXQgPAXgBAVQgCAWAPAQQgiAfghAgQgagaABgmQABgoAagsQAcgtAtgkQAzgpAvgOQAtgOAkAMQAkALAVAhQAPAYAAAeQABAdgIAgQgJAjgMAkQgJAaAGAWQAGAWARAVQgeAXggAcQgVgZgHgUg");
	this.shape_5.setTransform(292.5917,39.2625,1.8255,1.8255,31.7403);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(53));

	// shine
	this.shine_mc = new lib.shine();
	this.shine_mc.name = "shine_mc";
	this.shine_mc.setTransform(402.25,324.8);

	this.timeline.addTween(cjs.Tween.get(this.shine_mc).to({_off:true},32).wait(21));

	// Layer_5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#415A6B").s().p("Ao/B1QgwAAgjgiQgigjAAgwQAAgwAigiQAjgiAwAAIR/AAQAwAAAjAiQAiAjAAAvQAAAwgiAjQgjAigwAAg");
	this.shape_6.setTransform(309.9004,590.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#415A6B").s().p("Ao/B1QgwAAgjgjQgigiAAgwQAAgvAigjQAjgiAwAAIR/AAQAwAAAjAjQAiAiAAAvQAAAxgiAiQgiAigxAAg");
	this.shape_7.setTransform(309.9004,552.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#344A5E").s().p("AgnEaQh1AAhShSQhThTAAh1QAAh0BThSQBShTB1AAIBPAAQB1AABSBTQBTBTAABzQAAB1hTBTQhSBSh1AAg");
	this.shape_8.setTransform(309.7,616.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#344A5E").s().p("Al2HxQhVAAg8g9Qg8g8AAhUIAAsUISHAAIAAMTQgBBWg8A8Qg8A8hUAAg");
	this.shape_9.setTransform(310,573.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(7).p("AAzOvIHl8UQABgDgDgCQgDgBgCACQgiAcgmAHQg8ALg4gwQhnhZhdA0QgCABhDAuQgmAagbAAQg+gBg8g1QglgfgGgEQgWgQgUABQghABglAZQgoAggXAPQhUA2h0g5QgCgCgDACQgCABABADIHYcSQAAADADAAIBpAAQAEAAACgBg");
	this.shape_10.setTransform(311.3825,448.3555);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[]},32).wait(21));

	// idea_svg
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D1E4E7").s().p("AhND8QggggAAguIAAlbQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFbQAAAuggAgQghAhgtAAQgtAAggghg");
	this.shape_11.setTransform(310.5,163.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D1E4E7").s().p("AiGDjQgtgDgfgiQgeghACguQACguAigeIECjpQAigeAtACQAuACAeAiQAeAhgCAuQgCAugiAeIkCDpQgfAdgqAAIgGAAg");
	this.shape_12.setTransform(447.6501,219.1717);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D1E4E7").s().p("AitBuQguAAghggQgfggAAguQAAgtAfggQAhggAuAAIFcAAQAtAAAgAgQAhAggBAtQABAtghAhQggAggtAAg");
	this.shape_13.setTransform(504.8,357.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D1E4E7").s().p("AAuDJIj2j2QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID2D2QAgAgAAAtQAAAuggAgQggAggtAAQguAAggggg");
	this.shape_14.setTransform(448.275,494.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D1E4E7").s().p("AAuDJIj2j2QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID2D2QAgAgAAAtQAAAuggAgQggAggtAAQguAAggggg");
	this.shape_15.setTransform(171.775,219.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D1E4E7").s().p("AjIDJQggggAAguQAAgtAgggID2j2QAhggAsAAQAuAAAgAgQAgAfAAAuQAAAtggAhIj2D2QggAggtAAQgtAAghggg");
	this.shape_16.setTransform(172,494.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D1E4E7").s().p("AitBuQgvAAggggQgfgggBguQABgtAfggQAhggAuAAIFbAAQAvAAAfAgQAgAgABAtQgBAuggAgQggAgguAAg");
	this.shape_17.setTransform(116.15,357.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D1E4E7").s().p("Ao6VqQkIhzjLjQQjLjQhvkOQhzkXAAkyQAAkxBzkYQBvkNDLjRQDLjQEIhyQERh2EpAAQEqAAERB2QEHByDMDQQDKDRBwENQBzEYAAExQAAEyhzEXQhwEOjKDQQjMDQkHBzQkRB2kqAAQkpAAkRh2g");
	this.shape_18.setTransform(310.5,358.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D1E4E7").s().p("AndKYQACg0gKhVQgSitg4ioQi0ocnmk2MAmTABaQi6CNiyDhQljHCApGmg");
	this.shape_19.setTransform(307.6,502.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D1E4E7").s().p("AhND8QggggAAguIAAlbQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFbQAAAuggAgQghAhgtAAQgtAAggghg");
	this.shape_20.setTransform(310.5,163.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D1E4E7").s().p("AiGDjQgtgDgfgiQgeghACguQACguAigeIECjpQAigeAtACQAuACAeAiQAeAhgCAuQgCAugiAeIkCDpQgfAdgqAAIgGAAg");
	this.shape_21.setTransform(447.6501,219.1717);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D1E4E7").s().p("AitBuQguAAghggQgfggAAguQAAgtAfggQAhggAuAAIFcAAQAtAAAgAgQAhAggBAtQABAtghAhQggAggtAAg");
	this.shape_22.setTransform(504.8,357.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D1E4E7").s().p("AAuDJIj2j2QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID2D2QAgAgAAAtQAAAuggAgQggAggtAAQguAAggggg");
	this.shape_23.setTransform(448.275,494.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D1E4E7").s().p("AAuDJIj2j2QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID2D2QAgAgAAAtQAAAuggAgQggAggtAAQguAAggggg");
	this.shape_24.setTransform(171.775,219.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D1E4E7").s().p("AjIDJQggggAAguQAAgtAgggID2j2QAhggAsAAQAuAAAgAgQAgAfAAAuQAAAtggAhIj2D2QggAggtAAQgtAAghggg");
	this.shape_25.setTransform(172,494.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D1E4E7").s().p("AitBuQgvAAggggQgfgggBguQABgtAfggQAhggAuAAIFbAAQAvAAAfAgQAgAgABAtQgBAuggAgQggAgguAAg");
	this.shape_26.setTransform(116.15,357.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D1E4E7").s().p("Ao6VqQkIhzjLjQQjLjQhvkOQhzkXAAkyQAAkxBzkYQBvkNDLjRQDLjQEIhyQERh2EpAAQEqAAERB2QEHByDMDQQDKDRBwENQBzEYAAExQAAEyhzEXQhwEOjKDQQjMDQkHBzQkRB2kqAAQkpAAkRh2g");
	this.shape_27.setTransform(310.5,358.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D1E4E7").s().p("AndKYQACg0gKhVQgSitg4ioQi0ocnmk2MAmTABaQi6CNiyDhQljHCApGmg");
	this.shape_28.setTransform(307.6,502.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D4E2DD").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_29.setTransform(310.475,352);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D6E0D7").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_30.setTransform(310.475,352);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D4E2DC").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_31.setTransform(310.475,352);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DFDAB9").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_32.setTransform(310.475,352);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E6D5A2").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_33.setTransform(310.475,352);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E8D39C").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_34.setTransform(310.475,352);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E4D7AB").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_35.setTransform(310.475,352);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DBDDC8").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_36.setTransform(310.475,352);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EAD296").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_37.setTransform(310.475,352);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F5CA74").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_38.setTransform(310.475,352);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F8C869").s().p("AhND8QggggAAguIAAlbQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFbQAAAuggAgQghAhgtAAQgtAAggghg");
	this.shape_39.setTransform(310.5,163.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F8C869").s().p("AiGDjQgtgDgfgiQgeghACguQACguAigeIECjpQAigeAtACQAuACAeAiQAeAhgCAuQgCAugiAeIkCDpQgfAdgqAAIgGAAg");
	this.shape_40.setTransform(447.6501,219.1717);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F8C869").s().p("AitBuQguAAghggQgfggAAguQAAgtAfggQAhggAuAAIFcAAQAtAAAgAgQAhAggBAtQABAtghAhQggAggtAAg");
	this.shape_41.setTransform(504.8,357.35);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F8C869").s().p("AAuDJIj2j2QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID2D2QAgAgAAAtQAAAuggAgQggAggtAAQguAAggggg");
	this.shape_42.setTransform(448.275,494.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F8C869").s().p("AAuDJIj2j2QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID2D2QAgAgAAAtQAAAuggAgQggAggtAAQguAAggggg");
	this.shape_43.setTransform(171.775,219.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F8C869").s().p("AjIDJQggggAAguQAAgtAgggID2j2QAhggAsAAQAuAAAgAgQAgAfAAAuQAAAtggAhIj2D2QggAggtAAQgtAAghggg");
	this.shape_44.setTransform(172,494.875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F8C869").s().p("AitBuQgvAAggggQgfgggBguQABgtAfggQAhggAuAAIFbAAQAvAAAfAgQAgAgABAtQgBAuggAgQggAgguAAg");
	this.shape_45.setTransform(116.15,357.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F8C869").s().p("Ao6VqQkIhzjLjQQjLjQhvkOQhzkXAAkyQAAkxBzkYQBvkNDLjRQDLjQEIhyQERh2EpAAQEqAAERB2QEHByDMDQQDKDRBwENQBzEYAAExQAAEyhzEXQhwEOjKDQQjMDQkHBzQkRB2kqAAQkpAAkRh2g");
	this.shape_46.setTransform(310.5,358.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F8C869").s().p("AndKYQACg0gKhVQgSitg4ioQi0ocnmk2MAmTABaQi6CNiyDhQljHCApGmg");
	this.shape_47.setTransform(307.6,502.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F8C765").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_48.setTransform(310.475,352);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F9C359").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_49.setTransform(310.475,352);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FBBE48").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_50.setTransform(310.475,352);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FDB833").s().p("AhND8QggggAAguIAAlbQAAgvAgggQAggfAtgBQAuABAgAfQAgAgAAAvIAAFbQAAAuggAgQghAhgtAAQgtAAggghg");
	this.shape_51.setTransform(310.5,163.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FDB833").s().p("AiGDjQgtgDgfgiQgeghACguQACguAigeIECjpQAigeAtACQAuACAeAiQAeAhgCAuQgCAugiAeIkCDpQgfAdgqAAIgGAAg");
	this.shape_52.setTransform(447.6501,219.1717);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FDB833").s().p("AitBuQguAAghggQgfggAAguQAAgtAfggQAhggAuAAIFcAAQAtAAAgAgQAhAggBAtQABAtghAhQggAggtAAg");
	this.shape_53.setTransform(504.8,357.35);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FDB833").s().p("AAuDJIj2j2QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID2D2QAgAgAAAtQAAAuggAgQggAggtAAQguAAggggg");
	this.shape_54.setTransform(448.275,494.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FDB833").s().p("AAuDJIj2j2QggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgID2D2QAgAgAAAtQAAAuggAgQggAggtAAQguAAggggg");
	this.shape_55.setTransform(171.775,219.125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FDB833").s().p("AjIDJQggggAAguQAAgtAgggID2j2QAhggAsAAQAuAAAgAgQAgAfAAAuQAAAtggAhIj2D2QggAggtAAQgtAAghggg");
	this.shape_56.setTransform(172,494.875);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FDB833").s().p("AitBuQgvAAggggQgfgggBguQABgtAfggQAhggAuAAIFbAAQAvAAAfAgQAgAgABAtQgBAuggAgQggAgguAAg");
	this.shape_57.setTransform(116.15,357.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FDB833").s().p("Ao6VqQkIhzjLjQQjLjQhvkOQhzkXAAkyQAAkxBzkYQBvkNDLjRQDLjQEIhyQERh2EpAAQEqAAERB2QEHByDMDQQDKDRBwENQBzEYAAExQAAEyhzEXQhwEOjKDQQjMDQkHBzQkRB2kqAAQkpAAkRh2g");
	this.shape_58.setTransform(310.5,358.35);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FDB833").s().p("AndKYQACg0gKhVQgSitg4ioQi0ocnmk2MAmTABaQi6CNiyDhQljHCApGmg");
	this.shape_59.setTransform(307.6,502.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F6CA71").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_60.setTransform(310.475,352);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EFCF88").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_61.setTransform(310.475,352);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E2D8AF").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_62.setTransform(310.475,352);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DDDCC1").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_63.setTransform(310.475,352);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E7D4A0").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_64.setTransform(310.475,352);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E6D5A3").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_65.setTransform(310.475,352);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#DCDCC2").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_66.setTransform(310.475,352);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D8DFD2").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_67.setTransform(310.475,352);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D5E1DA").s().p("EgH6Ah8QACg1gJhVQgTitg4ioQg7ixhbiZQijhhiHiLQjLjQhwkOQhzkXAAkyQAAkxBzkYQBwkODLjQQDLjQEHhyQERh2EpAAQErAAEQB2QEHByDMDQQDLDQBvEOQBzEYAAExQAAEyhzEXQhvEOjLDQQhiBlhwBOQldG+AoGkgA4xZeQggghAAgtQAAgtAgghID3j2QAhggAtgBQAtABAgAgQAgAeAAAvQAAAtggAgIj3D4QggAggtAAQgtAAghgggAWQZcIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAhAAAtQAAAtggAgQggAggtAAQguAAgggggEghFAClQguAAggggQggggAAguQAAgtAgggQAhggAtAAIFdAAQAuAAAgAgQAgAgAAAtQAAAuggAgQggAgguAAgAbpCkQguAAggghQgggfAAguQAAgvAggeQAgghAuAAIFdAAQAuAAAgAhQAgAeAAAvQAAAtggAgQghAggtABgA08xnIj3j3QggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgID3D3QAgAgAAAuQAAAtggAgQggAggtABQgugBgggggATVxNQgugCgegiQgeghACgvQACgtAigeIEDjqQAhgfAuADQAuACAeAiQAeAhgCAuQgCAtgiAfIkDDqQgfAdgrAAIgFgBgAhN5iQggggAAguIAAlcQAAgvAggfQAgggAtgBQAuABAgAgQAgAfAAAvIAAFcQAAAuggAgQggAhguAAQgtAAggghg");
	this.shape_68.setTransform(310.475,352);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[]},1).wait(21));

	// Layer_6
	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(226.15,374.1,1,1,0,0,0,266.6,266.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(7).p("EAnRgppICqAAEAp7ApqMhTSAAAIAAge");
	this.shape_69.setTransform(324.875,395.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.background_mc}]}).to({state:[]},32).wait(21));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(390,351,267.4,314.70000000000005);
// library properties:
lib.properties = {
	id: 'A95BA620329ACC4680FE94E1B8FE4D7B',
	width: 700,
	height: 700,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
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
an.compositions['A95BA620329ACC4680FE94E1B8FE4D7B'] = {
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